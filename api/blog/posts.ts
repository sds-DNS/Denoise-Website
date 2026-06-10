import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const CACHE_TTL = 60; // seconds — Vercel CDN cache

function getEnv() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  if (!token || !databaseId) throw new Error("Missing NOTION_TOKEN or NOTION_BLOG_DATABASE_ID");
  return { token, databaseId };
}

function extractText(richText: any[]): string {
  return (richText ?? []).map((t: any) => t.plain_text).join("");
}

function mapPage(page: any) {
  const p = page.properties;
  const slug = extractText(p["Slug"]?.rich_text);
  const title = extractText(p["Title"]?.title);
  const publishDate = p["Publish Date"]?.date?.start ?? null;
  const status = p["Status"]?.select?.name ?? "Draft";
  const now = new Date().toISOString();

  // Scheduled posts become visible once their publish date is in the past
  const visible =
    status === "Published" ||
    (status === "Scheduled" && publishDate && publishDate <= now);

  return {
    id: page.id,
    slug,
    title,
    excerpt: extractText(p["Excerpt"]?.rich_text),
    category: p["Category"]?.select?.name ?? null,
    tags: (p["Tags"]?.multi_select ?? []).map((t: any) => t.name),
    publishDate,
    readingTime: p["Reading Time"]?.number ?? null,
    coverImageUrl: p["Cover Image URL"]?.url ?? null,
    author: extractText(p["Author"]?.rich_text) || "DENOISE",
    featured: p["Featured"]?.checkbox ?? false,
    metaTitle: extractText(p["Meta Title"]?.rich_text) || title,
    metaDescription: extractText(p["Meta Description"]?.rich_text) || extractText(p["Excerpt"]?.rich_text),
    ogImageUrl: extractText(p["OG Image URL"]?.rich_text) || p["Cover Image URL"]?.url || null,
    visible,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let env: ReturnType<typeof getEnv>;
  try {
    env = getEnv();
  } catch {
    return res.status(500).json({ error: "Server is not configured." });
  }

  const notion = new Client({ auth: env.token });
  const { category, tag, search, page: pageParam = "1" } = req.query;
  const pageSize = 12;
  const pageNum = Math.max(1, parseInt(String(pageParam), 10));

  try {
    const filter: any = {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Slug", rich_text: { is_not_empty: true } },
      ],
    };

    // Pull all and filter scheduled ones in JS (Notion can't do "date <= now" natively)
    const scheduledFilter: any = {
      and: [
        { property: "Status", select: { equals: "Scheduled" } },
        { property: "Slug", rich_text: { is_not_empty: true } },
        { property: "Publish Date", date: { on_or_before: new Date().toISOString() } },
      ],
    };

    const [publishedRes, scheduledRes] = await Promise.all([
      (notion as any).dataSources.query({
        data_source_id: env.databaseId,
        filter,
        sorts: [{ property: "Publish Date", direction: "descending" }],
      }),
      (notion as any).dataSources.query({
        data_source_id: env.databaseId,
        filter: scheduledFilter,
        sorts: [{ property: "Publish Date", direction: "descending" }],
      }),
    ]);

    let posts = [...publishedRes.results, ...scheduledRes.results].map(mapPage);

    // Category filter
    if (category && typeof category === "string") {
      posts = posts.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
    }

    // Tag filter
    if (tag && typeof tag === "string") {
      posts = posts.filter((p) => p.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase()));
    }

    // Search (title + excerpt)
    if (search && typeof search === "string") {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.tags.some((t: string) => t.toLowerCase().includes(q))
      );
    }

    // Sort: featured first, then by date
    posts.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.publishDate ?? "").localeCompare(a.publishDate ?? "");
    });

    const total = posts.length;
    const totalPages = Math.ceil(total / pageSize);
    const paginated = posts.slice((pageNum - 1) * pageSize, pageNum * pageSize);

    // Collect unique categories from the full unfiltered result for the filter bar
    const allCategories = Array.from(
      new Set(posts.map((p) => p.category).filter(Boolean))
    ).sort();

    res.setHeader("Cache-Control", `s-maxage=${CACHE_TTL}, stale-while-revalidate`);
    return res.status(200).json({
      posts: paginated,
      pagination: { page: pageNum, pageSize, total, totalPages },
      categories: allCategories,
    });
  } catch (error) {
    console.error("Notion query failed:", error);
    return res.status(502).json({ error: "Could not fetch posts." });
  }
}
