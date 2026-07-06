import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const CACHE_TTL = 60;

function getEnv() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  if (!token || !databaseId) throw new Error("Missing NOTION_TOKEN or NOTION_BLOG_DATABASE_ID");
  return { token, databaseId };
}

function extractText(richText: any[]): string {
  return (richText ?? []).map((t: any) => t.plain_text).join("");
}

function mapRichText(richText: any[]): any[] {
  return (richText ?? []).map((t: any) => ({
    text: t.plain_text,
    href: t.href ?? null,
    annotations: t.annotations ?? {},
  }));
}

function mapBlock(block: any): any {
  const type = block.type;
  const content = block[type];

  switch (type) {
    case "paragraph":
      return { type, richText: mapRichText(content.rich_text), color: content.color };
    case "heading_1":
    case "heading_2":
    case "heading_3":
      return { type, richText: mapRichText(content.rich_text), color: content.color };
    case "bulleted_list_item":
    case "numbered_list_item":
      return { type, richText: mapRichText(content.rich_text), color: content.color };
    case "quote":
      return { type, richText: mapRichText(content.rich_text), color: content.color };
    case "callout":
      return {
        type,
        richText: mapRichText(content.rich_text),
        icon: content.icon ?? null,
        color: content.color,
      };
    case "divider":
      return { type };
    case "image": {
      const url =
        content.type === "external" ? content.external.url : content.file?.url ?? null;
      return { type, url, caption: mapRichText(content.caption) };
    }
    case "code":
      return {
        type,
        richText: mapRichText(content.rich_text),
        language: content.language,
      };
    case "toggle":
      return { type, richText: mapRichText(content.rich_text) };
    case "table_of_contents":
      return { type };
    case "table":
      return {
        type,
        tableWidth: content.table_width,
        hasColumnHeader: content.has_column_header,
        hasRowHeader: content.has_row_header,
        // rows are fetched separately and injected after this call
        rows: [],
      };
    case "table_row":
      return {
        type,
        cells: (content.cells ?? []).map((cell: any[]) => mapRichText(cell)),
      };
    default:
      return { type: "unsupported", originalType: type };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "slug is required" });
  }

  let env: ReturnType<typeof getEnv>;
  try {
    env = getEnv();
  } catch {
    return res.status(500).json({ error: "Server is not configured." });
  }

  const notion = new Client({ auth: env.token });

  try {
    // Find the page by slug
    const queryRes = await (notion as any).dataSources.query({
      data_source_id: env.databaseId,
      filter: { property: "Slug", rich_text: { equals: slug } },
      page_size: 1,
    });

    const page = queryRes.results[0] as any;
    if (!page) return res.status(404).json({ error: "Post not found" });

    const p = page.properties;
    const title = extractText(p["Title"]?.title);
    const status = p["Status"]?.select?.name ?? "Draft";
    const publishDate = p["Publish Date"]?.date?.start ?? null;
    const now = new Date().toISOString();

    const visible =
      status === "Published" ||
      (status === "Scheduled" && publishDate && publishDate <= now);

    if (!visible) return res.status(404).json({ error: "Post not found" });

    // Fetch all blocks (handles pagination)
    const rawBlocks: any[] = [];
    let cursor: string | undefined;
    do {
      const blockRes: any = await notion.blocks.children.list({
        block_id: page.id,
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      });
      rawBlocks.push(...blockRes.results);
      cursor = blockRes.has_more ? blockRes.next_cursor : undefined;
    } while (cursor);

    // Map blocks, fetching table rows for table blocks
    const blocks: any[] = [];
    for (const raw of rawBlocks) {
      const mapped = mapBlock(raw);
      if (mapped.type === "table") {
        // Fetch all table_row children
        const rows: any[] = [];
        let rowCursor: string | undefined;
        do {
          const rowRes: any = await notion.blocks.children.list({
            block_id: raw.id,
            page_size: 100,
            ...(rowCursor ? { start_cursor: rowCursor } : {}),
          });
          rows.push(...rowRes.results.map(mapBlock));
          rowCursor = rowRes.has_more ? rowRes.next_cursor : undefined;
        } while (rowCursor);
        mapped.rows = rows;
      }
      blocks.push(mapped);
    }

    const post = {
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
      metaTitle: extractText(p["Meta Title"]?.rich_text) || title,
      metaDescription:
        extractText(p["Meta Description"]?.rich_text) ||
        extractText(p["Excerpt"]?.rich_text),
      ogImageUrl: extractText(p["OG Image URL"]?.rich_text) || p["Cover Image URL"]?.url || null,
      blocks,
    };

    res.setHeader("Cache-Control", `s-maxage=${CACHE_TTL}, stale-while-revalidate`);
    return res.status(200).json({ post });
  } catch (error) {
    console.error("Notion fetch failed:", error);
    return res.status(502).json({ error: "Could not fetch post." });
  }
}
