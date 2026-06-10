import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search, Clock, Tag } from "lucide-react";
import { fetchPosts, formatDate } from "../lib/blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Branded placeholder shown when an article has no cover image
function CoverPlaceholder({ title, className }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-brand/10 via-lilac-200 to-lilac-100 ${className}`}>
      <span className="px-6 text-center text-xs font-bold uppercase tracking-widest text-brand/40 line-clamp-3">
        {title}
      </span>
    </div>
  );
}

function PostCard({ post, featured }) {
  const cover = post.coverImageUrl;

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-brand-card lg:flex-row"
      >
        {/* Cover — always shown for featured */}
        <div className="aspect-[16/9] shrink-0 overflow-hidden lg:aspect-auto lg:w-[45%]">
          {cover
            ? <img src={cover} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
            : <CoverPlaceholder title={post.title} className="h-full w-full" />
          }
        </div>
        <div className="flex flex-col justify-center p-7 lg:p-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {post.category && (
              <span className="rounded-full bg-brand/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                {post.category}
              </span>
            )}
            {post.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-lilac-200 px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-ink transition group-hover:text-brand lg:text-3xl">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{post.excerpt}</p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-3">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.publishDate)}</span>
            {post.readingTime && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min read</span>
              </>
            )}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition group-hover:gap-3">
            Read article <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-brand-card"
    >
      <div className="aspect-[16/9] overflow-hidden">
        {cover
          ? <img src={cover} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
          : <CoverPlaceholder title={post.title} className="h-full w-full" />
        }
      </div>
      <div className="flex flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {post.category && (
            <span className="rounded-full bg-brand/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              {post.category}
            </span>
          )}
          {post.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-lilac-200 px-3 py-1 text-xs font-medium text-muted">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-black tracking-[-0.03em] text-ink transition group-hover:text-brand">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{post.excerpt}</p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-3">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.publishDate)}</span>
          {post.readingTime && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min read</span>
            </>
          )}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition group-hover:gap-3">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function FeaturedSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-ink/8 bg-white lg:flex">
      <div className="aspect-[16/9] bg-lilac-100 lg:aspect-auto lg:w-[45%] lg:shrink-0" />
      <div className="flex flex-col justify-center p-7 lg:p-10 space-y-4">
        <div className="h-4 w-28 rounded-full bg-lilac-200" />
        <div className="h-8 w-4/5 rounded-lg bg-lilac-200" />
        <div className="h-4 w-full rounded bg-lilac-100" />
        <div className="h-4 w-3/4 rounded bg-lilac-100" />
        <div className="h-4 w-1/2 rounded bg-lilac-100" />
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-ink/8 bg-white">
      <div className="aspect-[16/9] bg-lilac-100" />
      <div className="p-6 space-y-3">
        <div className="h-4 w-24 rounded-full bg-lilac-200" />
        <div className="h-6 w-3/4 rounded-lg bg-lilac-200" />
        <div className="h-4 w-full rounded bg-lilac-100" />
        <div className="h-4 w-2/3 rounded bg-lilac-100" />
        <div className="h-4 w-20 rounded bg-lilac-200" />
      </div>
    </div>
  );
}

export default function BlogIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({ posts: [], pagination: null, categories: [], loading: true, error: null });
  const searchInputRef = useRef(null);

  const activeCategory = searchParams.get("category") || "All";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    const params = { page };
    if (activeCategory !== "All") params.category = activeCategory;
    if (search) params.search = search;
    fetchPosts(params)
      .then((data) => {
        if (!cancelled) setState({
          posts: data.posts,
          pagination: data.pagination,
          categories: data.categories ?? [],
          loading: false,
          error: null,
        });
      })
      .catch(() => {
        if (!cancelled) setState((s) => ({ ...s, loading: false, error: "Could not load articles. Please try again." }));
      });
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => { cancelled = true; };
  }, [activeCategory, search, page]);

  function setCategory(cat) {
    const next = new URLSearchParams(searchParams);
    if (cat === "All") next.delete("category");
    else next.set("category", cat);
    next.delete("page");
    setSearchParams(next);
  }

  function handleSearch(e) {
    e.preventDefault();
    const q = e.target.elements.search.value.trim();
    const next = new URLSearchParams(searchParams);
    if (q) next.set("search", q);
    else next.delete("search");
    next.delete("page");
    setSearchParams(next);
  }

  function setPage(p) {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    setSearchParams(next);
  }

  const featured = state.posts.find((p) => p.featured);
  const rest = state.posts.filter((p) => !featured || p.id !== featured.id);
  const categories = ["All", ...state.categories];

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero banner */}
      <section className="border-b border-ink/8 bg-lilac-50 px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-brand/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
            DENOISE Insights
          </span>
          <h1 className="mt-5 max-w-2xl text-5xl font-black tracking-[-0.04em] text-ink md:text-6xl">
            The operations publication.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Practical thinking on operations, execution, and organizational design for companies that are serious about scaling well.
          </p>
        </div>
      </section>

      {/* Filters + search */}
      <section className="sticky top-[65px] z-30 border-b border-ink/8 bg-white/90 px-6 py-4 backdrop-blur-xl lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-brand text-white shadow-brand-sm"
                    : "bg-lilac-100 text-muted hover:bg-lilac-200 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                ref={searchInputRef}
                name="search"
                defaultValue={search}
                placeholder="Search articles…"
                className="rounded-full border border-ink/12 bg-lilac-50 pl-9 pr-4 py-2 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button type="submit" className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-dark">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Content */}
      <main className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {state.error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-5 text-center text-red-700">
              {state.error}
            </div>
          )}

          {state.loading && (
            <div className="space-y-8">
              <FeaturedSkeleton />
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)}
              </div>
            </div>
          )}

          {!state.loading && !state.error && state.posts.length === 0 && (
            <div className="py-24 text-center">
              <Tag className="mx-auto mb-4 h-10 w-10 text-muted" />
              <p className="text-lg font-semibold text-ink">No articles found</p>
              <p className="mt-2 text-muted">Try a different category or search term.</p>
            </div>
          )}

          {!state.loading && !state.error && state.posts.length > 0 && (
            <>
              {featured && page === 1 && (
                <div className="mb-12">
                  <PostCard post={featured} featured />
                </div>
              )}

              {rest.length > 0 && (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              {state.pagination && state.pagination.totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="rounded-full border border-ink/12 px-5 py-2 text-sm font-semibold text-muted transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ← Previous
                  </button>
                  <span className="px-4 text-sm text-muted">
                    Page {page} of {state.pagination.totalPages}
                  </span>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= state.pagination.totalPages}
                    className="rounded-full border border-ink/12 px-5 py-2 text-sm font-semibold text-muted transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
