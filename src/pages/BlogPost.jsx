import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { fetchPost, fetchPosts, formatDate } from "../lib/blog";
import NotionRenderer from "../components/blog/NotionRenderer";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RelatedCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 rounded-2xl border border-ink/8 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-brand-card"
    >
      {post.coverImageUrl && (
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-lilac-100">
          <img src={post.coverImageUrl} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="flex flex-col justify-center">
        {post.category && (
          <span className="mb-1 text-xs font-bold uppercase tracking-wider text-brand">{post.category}</span>
        )}
        <p className="text-sm font-bold leading-snug text-ink transition group-hover:text-brand line-clamp-2">
          {post.title}
        </p>
        <span className="mt-1.5 text-xs text-muted">{formatDate(post.publishDate)}</span>
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    window.scrollTo({ top: 0 });

    fetchPost(slug)
      .then((data) => {
        if (!data) {
          navigate("/blog", { replace: true });
          return;
        }
        setPost(data);
        document.title = `${data.metaTitle} — DENOISE`;

        // Update meta tags
        const setMeta = (name, content, prop = false) => {
          const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
          let el = document.querySelector(sel);
          if (!el) {
            el = document.createElement("meta");
            if (prop) el.setAttribute("property", name);
            else el.setAttribute("name", name);
            document.head.appendChild(el);
          }
          el.setAttribute("content", content);
        };
        setMeta("description", data.metaDescription);
        setMeta("og:title", data.metaTitle, true);
        setMeta("og:description", data.metaDescription, true);
        if (data.ogImageUrl) setMeta("og:image", data.ogImageUrl, true);
        setMeta("og:type", "article", true);

        // Fetch related by same category
        if (data.category) {
          fetchPosts({ category: data.category, page: 1 })
            .then((res) => {
              setRelated(res.posts.filter((p) => p.slug !== slug).slice(0, 3));
            })
            .catch(() => {});
        }
      })
      .catch(() => setError("Could not load this article."))
      .finally(() => setLoading(false));

    return () => {
      document.title = "DENOISE";
    };
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl animate-pulse space-y-6">
            <div className="h-4 w-24 rounded-full bg-lilac-200" />
            <div className="h-10 w-3/4 rounded-xl bg-lilac-200" />
            <div className="h-5 w-1/2 rounded bg-lilac-100" />
            <div className="aspect-[16/9] rounded-2xl bg-lilac-100" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 rounded bg-lilac-100" style={{ width: `${70 + Math.random() * 30}%` }} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="px-6 pt-32 pb-24 text-center lg:px-8">
          <p className="text-lg text-muted">{error || "Article not found."}</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-dark">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {post.category && (
              <Link
                to={`/blog?category=${encodeURIComponent(post.category)}`}
                className="rounded-full bg-brand/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand/15"
              >
                {post.category}
              </Link>
            )}
            {post.tags?.map((tag) => (
              <span key={tag} className="rounded-full bg-lilac-200 px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">{post.title}</h1>

          {/* Byline */}
          <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-ink/8 pb-8 text-sm text-muted">
            <span className="font-semibold text-ink">{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.publishDate)}</span>
            {post.readingTime && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min read
                </span>
              </>
            )}
          </div>

          {/* Body */}
          <article className="mt-10">
            <NotionRenderer blocks={post.blocks} />
          </article>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-brand px-8 py-10 text-center text-white shadow-brand">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">Ready to fix what's broken?</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">
              Talk to DENOISE about your operational challenges.
            </h2>
            <Link
              to="/#consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-cream"
            >
              Request a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-3xl">
            <h3 className="mb-6 text-xl font-black tracking-[-0.03em] text-ink">Related articles</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RelatedCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
