import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MessageCircle } from "lucide-react";
import { fadeUp, stagger, replayViewport } from "../../lib/animations";
import { fetchPosts, formatDate } from "../../lib/blog";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import UnifiedCard from "../ui/UnifiedCard";
import ImagePanel from "../ui/ImagePanel";

export default function Insights() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts({ page: 1 })
      .then((data) => setPosts(data.posts.slice(0, 4)))
      .catch(() => {});
  }, []);

  return (
    <section id="insights" className="bg-lilac-50 px-6 py-24 lg:px-8" aria-label="Knowledge Hub">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-[.72fr_.98fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={stagger}
            className="flex h-full flex-col pt-1"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Knowledge Hub</SectionLabel>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionHeading>Operational and organizational knowledge for growing teams.</SectionHeading>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Practical thinking on operations, hiring, HR, performance, leadership systems, and
              execution. DENOISE shares implementation lessons gathered through working directly
              with scaling companies and complex execution environments.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/blog"
                className="mt-7 inline-block text-sm font-bold text-brand transition hover:text-gold"
              >
                View all insights →
              </Link>
            </motion.div>
            <div className="mt-8 grid flex-1 auto-rows-fr gap-4 md:grid-cols-2">
              {posts.map((post, index) => (
                <motion.article key={post.id} variants={fadeUp} className="h-full">
                  <Link to={`/blog/${post.slug}`} className="group flex h-full">
                    <UnifiedCard className="flex h-full w-full flex-col justify-between p-6 transition duration-200 group-hover:border-brand/30">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          {post.category && (
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                              {post.category}
                            </p>
                          )}
                          {!post.category && (
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                              Insight {String(index + 1).padStart(2, "0")}
                            </p>
                          )}
                        </div>
                        <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.03em] text-ink transition group-hover:text-brand">
                          {post.title}
                        </h3>
                      </div>
                      {post.excerpt && (
                        <p className="mt-6 line-clamp-5 text-sm leading-7 text-muted-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-3 text-xs text-muted-3">
                        <span>{formatDate(post.publishDate)}</span>
                        {post.readingTime && (
                          <>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readingTime} min read
                            </span>
                          </>
                        )}
                      </div>
                    </UnifiedCard>
                  </Link>
                </motion.article>
              ))}

              {/* Fallback placeholders while loading or if no posts yet */}
              {posts.length === 0 && [
                "Why Most KPI Systems Fail",
                "Scaling Chaos vs Structured Growth",
                "The Hidden Cost of Operational Ambiguity",
              ].map((title, index) => (
                <motion.article key={title} variants={fadeUp} className="h-full">
                  <UnifiedCard className="flex h-full flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                        Insight {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.03em] text-ink">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-2">
                      A practical breakdown for leaders trying to build cleaner execution, sharper
                      visibility, and stronger operational control.
                    </p>
                  </UnifiedCard>
                </motion.article>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={fadeUp}
            className="h-full"
          >
            <ImagePanel
              title="Operational thinking and analysis"
              src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265015/7._INSIGHTS_SECTION_lo0rab.png"
              alt="White marble executive statue reviewing blank documents for the insights section"
            />
          </motion.div>
        </div>

        {/* HR Community WhatsApp card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={fadeUp}
          className="mt-12"
        >
          <UnifiedCard className="grid items-stretch gap-8 bg-white p-8 md:grid-cols-[.75fr_1fr]">
            <div className="flex flex-col">
              <SectionLabel>HR Community</SectionLabel>
              <h3 className="mt-4 text-2xl font-black leading-snug tracking-[-0.03em] text-ink md:text-3xl">
                Join the HR & People Operations WhatsApp community.
              </h3>
              <p className="mt-4 flex-1 text-base leading-8 text-muted">
                A practical discussion space for HR professionals in MENA — covering hiring,
                compliance, people ops, and workforce strategy.
              </p>
              <a
                href="https://chat.whatsapp.com/FZUcQ48ogjU7vdxilLgkr2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-brand-cta transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp Group
              </a>
            </div>
            <div className="rounded-[2rem] border border-brand/10 bg-lilac-50 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-ink">DENOISE HR MENA</p>
                  <p className="text-xs text-muted-3">Community · HR & People Operations</p>
                </div>
              </div>
              {[
                "How do we structure probation reviews in the UAE?",
                "What should be included in a role scorecard?",
                "How do we screen candidates beyond CVs?",
              ].map((message) => (
                <div
                  key={message}
                  className="mb-3 max-w-xs rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-ink shadow-sm"
                >
                  {message}
                </div>
              ))}
            </div>
          </UnifiedCard>
        </motion.div>
      </div>
    </section>
  );
}
