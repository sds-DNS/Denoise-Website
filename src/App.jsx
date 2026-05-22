import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Workflow,
  BarChart3,
  Users,
  GitBranch,
  FileText,
  Mail,
  ShieldCheck,
  Gauge,
  Network,
  SearchCheck,
  ClipboardCheck,
  Route,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function stripSelectedPackagePrefix(text) {
  const prefix = "Selected package: ";

  if (!text.startsWith(prefix)) {
    return text;
  }

  const firstDoubleNewline = text.indexOf("\n\n");

  if (firstDoubleNewline === -1) {
    return "";
  }

  return text.slice(firstDoubleNewline + 2);
}

function runDenoiseSelfTests() {
  const tests = [
    {
      name: "keeps text without selected package prefix",
      input: "Current operational challenge: We need better visibility.",
      expected: "Current operational challenge: We need better visibility.",
    },
    {
      name: "removes selected package prefix when body exists",
      input: "Selected package: Entry Engagement\n\nCurrent operational challenge: We need better visibility.",
      expected: "Current operational challenge: We need better visibility.",
    },
    {
      name: "removes selected package prefix when body is empty",
      input: "Selected package: Scale Engagement\n\n",
      expected: "",
    },
  ];

  tests.forEach((test) => {
    const actual = stripSelectedPackagePrefix(test.input);
    console.assert(actual === test.expected, `DENOISE self-test failed: ${test.name}`);
  });
}

if (typeof window !== "undefined") {
  runDenoiseSelfTests();
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#5B2EFF]/15 bg-[#5B2EFF]/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#4A22D8]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#5B2EFF]" />
      {children}
    </div>
  );
}

function GoldNote({ children }) {
  return <span className="text-[#9E7A16]">{children}</span>;
}

function UnifiedCard({ children, className = "", accent = "top" }) {
  const accentClass =
    accent === "left"
      ? "absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]"
      : "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]";

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)] ${className}`}>
      <div className={accentClass} />
      {children}
    </div>
  );
}

function ImagePanel({ title, prompt, src, alt }) {
  if (src) {
    return (
      <motion.div variants={fadeUp} className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,24,40,0.10)]">
        <img src={src} alt={alt || title} className="h-full w-full scale-[1.015] rounded-[2rem] object-cover object-center" />
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,24,40,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(91,46,255,0.22),transparent_35%),radial-gradient(circle_at_78%_76%,rgba(201,162,39,0.18),transparent_32%),linear-gradient(135deg,#FFFFFF,#F6F2FF_52%,#FFF8E3)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(91,46,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(91,46,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-8 right-8 top-8 rounded-2xl border border-white/70 bg-white/65 p-5 shadow-sm backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#17131F]">AI Image Placeholder</p>
          <div className="h-2 w-2 rounded-full bg-[#5B2EFF] shadow-[0_0_18px_rgba(91,46,255,0.55)]" />
        </div>
        <p className="text-xl font-semibold leading-snug text-[#17131F]">{title}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#5B2EFF]/10 bg-white/80 p-6 backdrop-blur-md">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9E7A16]">Prompt</p>
        <p className="line-clamp-4 text-sm leading-relaxed text-[#4A4654]">{prompt}</p>
      </div>
    </motion.div>
  );
}

function CTAButton({ children = "Request Consultation" }) {
  return (
    <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B2EFF] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(91,46,255,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4822D8] hover:shadow-[0_18px_42px_rgba(91,46,255,0.34)]">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#17131F]/8 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png" alt="DENOISE logo" className="block h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#17131F]/60 md:flex">
          <a href="#problem" className="hover:text-[#5B2EFF]">Problem</a>
          <a href="#work" className="hover:text-[#5B2EFF]">How We Work</a>
          <a href="#systems" className="hover:text-[#5B2EFF]">Systems</a>
          <a href="#pricing" className="hover:text-[#5B2EFF]">Pricing</a>
          <a href="#insights" className="hover:text-[#5B2EFF]">Insights</a>
        </nav>
        <div className="hidden sm:block">
          <CTAButton>Consultation</CTAButton>
        </div>
      </div>
    </header>
  );
}

const failureIndicators = [
  { title: "Teams are busy, but execution is slow", detail: "High activity exists, but work does not move cleanly from decision to completion." },
  { title: "Decisions wait too long for approvals", detail: "Execution stalls because ownership, authority, or escalation paths are unclear." },
  { title: "Leadership lacks visibility into operational reality", detail: "Leaders cannot quickly see what is moving, delayed, blocked, or at risk." },
  { title: "Accountability is inconsistent", detail: "Responsibility shifts between people, teams, or conversations without clear closure." },
  { title: "KPIs exist, but nobody acts on them", detail: "Performance data is available, but it does not drive correction or execution rhythm." },
  { title: "Founders become the bottleneck for execution", detail: "Too many approvals, decisions, and corrections depend on leadership intervention." },
  { title: "Work gets delayed without clear ownership", detail: "Tasks slow down because no single person is visibly accountable for completion." },
  { title: "Teams scale faster than systems", detail: "Headcount increases, but processes, reporting, and control mechanisms do not mature." },
];

const deliverables = [
  { icon: Workflow, title: "Operational Diagnosis", text: "A direct breakdown of where execution is failing, what causes it, and what needs to change." },
  { icon: Users, title: "Team Structure Optimization", text: "Clear ownership, reporting lines, role boundaries, and responsibility structures." },
  { icon: BarChart3, title: "KPI + Accountability Systems", text: "Performance visibility that leadership can actually use to manage execution." },
  { icon: GitBranch, title: "Workflow Standardization", text: "Repeatable workflows that reduce inconsistency, delays, and execution drift." },
  { icon: Layers3, title: "Execution Visibility Systems", text: "Operational dashboards that show what is moving, what is delayed, and who owns it." },
  { icon: FileText, title: "Leadership Reporting", text: "Decision-ready reporting structures built around reality, not vanity metrics." },
];

const systems = [
  ["Execution Systems", "Structured task visibility, accountability tracking, and operational rhythm."],
  ["KPI Architecture", "Company-wide visibility into performance, ownership, and execution quality."],
  ["Team Structure Design", "Clarified responsibilities, reporting lines, and operational alignment."],
  ["Decision Visibility", "Systems that reduce approval bottlenecks and leadership dependency."],
  ["Process Standardization", "Repeatable operational workflows that reduce inconsistency and execution drift."],
];

const pricingPlans = [
  {
    name: "Entry Engagement",
    price: "$15K",
    range: "per month",
    term: "6 month minimum",
    description: "For scaling companies that need the core operational foundation installed properly from the beginning.",
    features: ["Core systems setup", "Execution system", "KPI and performance system", "HR operating structure", "Full implementation", "Initial team structuring"],
  },
  {
    name: "Scale Engagement",
    price: "$20K to $30K",
    range: "per month",
    term: "6 month minimum",
    description: "For companies that need deeper operational involvement, continuous optimization, and active support beyond setup.",
    features: ["Everything in Entry Engagement", "Ongoing operational management", "Hiring support", "Optimization cycles", "Accountability enforcement", "Performance correction rhythm"],
  },
];

const pricingRules = ["No small isolated projects", "No single-module builds", "No phased cheap rollouts", "Engagements only negotiate upward, not downward"];
const insights = ["Why Most KPI Systems Fail", "Scaling Chaos vs Structured Growth", "The Hidden Cost of Operational Ambiguity"];

const proofItems = [
  { icon: Network, text: "Operational systems across multiple business functions" },
  { icon: Gauge, text: "KPI governance and execution visibility structures" },
  { icon: Route, text: "Cross-functional workflow optimization" },
  { icon: SearchCheck, text: "Operational diagnostics and restructuring" },
  { icon: ShieldCheck, text: "Process and accountability architecture" },
  { icon: ClipboardCheck, text: "Structured execution environments for scaling teams" },
];

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [challengeText, setChallengeText] = useState("");

  const handlePackageSelect = (packageName) => {
    const cleanExistingText = stripSelectedPackagePrefix(challengeText);
    const defaultChallengeText = "Current operational challenge: ";
    const nextChallengeText = cleanExistingText || defaultChallengeText;

    setChallengeText(`Selected package: ${packageName}\n\n${nextChallengeText}`);
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FFFEFB] text-[#17131F] selection:bg-[#5B2EFF] selection:text-white">
      <Header />
      <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(91,46,255,0.15),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(201,162,39,0.16),transparent_30%),radial-gradient(circle_at_70%_82%,rgba(91,46,255,0.09),transparent_38%),linear-gradient(180deg,#FFFFFF,#FBF8FF_56%,#FFFFFF)]" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#5B2EFF]/8 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex h-full flex-col justify-between">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>No-bullshit operations collective</SectionLabel></motion.div>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#17131F] md:text-7xl">Operational chaos becomes expensive long before companies notice it.</motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[#4A4654] md:text-xl">DENOISE helps scaling companies identify operational failure points, restructure execution, and build systems that make growth predictable, measurable, and scalable.</motion.p>
            </div>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
              <CTAButton />
              <p className="max-w-[240px] pb-1 text-sm leading-6 text-[#615B6F]">Built for companies where growth has outpaced operational clarity.</p>
            </motion.div>
          </motion.div>
          <div className="self-stretch pt-1"><ImagePanel title="Operational clarity emerging from chaos" src="https://res.cloudinary.com/dzhfxged2/image/upload/f_auto,q_auto/1._HERO_xmjspr" alt="White marble executive statue writing on a clipboard for the DENOISE hero section" /></div>
        </div>
      </section>

      <section id="problem" className="border-y border-[#17131F]/8 bg-[#F7F3FF] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Problem Recognition</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Most operational problems stay invisible until growth starts breaking.</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-[#4A4654]">Companies rarely fail because of bad ideas. They fail because execution becomes inconsistent, ownership becomes unclear, and leadership loses visibility into how work actually moves through the organization.</motion.p>
            <motion.p variants={fadeUp} className="mt-6 text-lg font-semibold text-[#4A22D8]">DENOISE exists to identify these patterns before they become structural damage.</motion.p>
            <div className="mt-8"><ImagePanel title="Identifying operational complexity" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264975/2._PROBLEM_RECOGNITION_flc0ub.png" alt="White marble executive statue untangling purple and gold strands for the problem recognition section" /></div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid self-stretch gap-3 sm:grid-cols-2">
            {failureIndicators.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} className="relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]" />
                <div className="flex items-center justify-between"><CheckCircle2 className="h-5 w-5 text-[#5B2EFF]" /><span className="text-xs font-black tracking-[0.16em] text-[#9E7A16]">{String(index + 1).padStart(2, "0")}</span></div>
                <div className="mt-4 max-w-[94%]"><p className="text-[15px] font-black leading-5 tracking-[-0.01em] text-[#4A22D8]">{item.title}</p><p className="mt-2 text-[12px] font-medium leading-5 text-[#5B5568]">{item.detail}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="what" className="relative overflow-hidden px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(91,46,255,0.09),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(201,162,39,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-[.9fr_.8fr]">
            <div className="flex h-full max-w-3xl flex-col">
              <div className="self-start"><SectionLabel>What We Do</SectionLabel></div>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">We turn operational ambiguity into structured execution.</h2>
              <p className="mt-6 text-lg leading-8 text-[#4A4654]">DENOISE analyzes how a company actually functions beneath the surface and converts that understanding into clear operational decisions, systems, and execution structures.</p>
              <div className="mt-6 grid flex-1 auto-rows-fr gap-3 md:grid-cols-2">
                {deliverables.map(({ icon: Icon, title, text }) => (
                  <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <UnifiedCard accent="left" className="flex h-full flex-col p-4 pl-6"><Icon className="mb-3 h-5 w-5 text-[#5B2EFF]" /><h3 className="text-base font-bold leading-6 text-[#17131F]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#5B5568]">{text}</p></UnifiedCard>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pt-1"><ImagePanel title="Transforming ambiguity into structure" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264987/3._WHAT_WE_DO_Alt_blyygc.png" alt="White marble executive statue arranging white blocks for the what we do section" /></div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold leading-8 text-[#17131F]"><span>We do not deliver generic consulting reports.</span><GoldNote>We deliver operational clarity with implementation direction.</GoldNote></div>
        </div>
      </section>

      <section id="work" className="relative overflow-hidden bg-[#F9F6FF] px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(91,46,255,0.14),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(201,162,39,0.13),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-stretch gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div className="h-full"><ImagePanel title="Structured methodology in motion" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779264995/4._HOW_WE_WORK_ftt0xm.png" alt="White marble executive statue drawing a precise line for the how we work section" /></div>
            <div className="flex h-full flex-col">
              <div><SectionLabel>How We Work</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Structured diagnosis. Clear decisions. Controlled execution.</h2><p className="mt-6 text-lg leading-8 text-[#4A4654]">Every engagement is built around evidence, not assumptions.</p><div className="mt-8"><CTAButton>Start the Process</CTAButton></div></div>
              <div className="mt-8 flex flex-1 flex-col justify-between">
                {[
                  ["01", "Alignment", "We establish business context, define operational scope, and align on what success actually means.", "Confirms scope, success criteria, access, and operating rules before diagnosis begins."],
                  ["02", "Diagnosis", "We analyze workflows, communication patterns, execution bottlenecks, and operational failure points using interviews, observation, and system data.", "Validates what people believe is happening against what the systems and execution patterns actually show."],
                  ["03", "Operational Output", "We convert identified issues into structured operational decisions, implementation direction, and execution tracking systems.", "Turns findings into course-correction actions with clear ownership, implementation direction, and tracking."],
                ].map(([num, title, text, detail], index) => (
                  <div key={title}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 overflow-hidden rounded-2xl border border-[#5B2EFF]/10 bg-white/90 p-4 pl-6 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#5B2EFF]/30 hover:shadow-[0_16px_42px_rgba(91,46,255,0.10)]"><div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B2EFF] via-[#8B6BFF] to-[#C9A227]" /><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5B2EFF] text-base font-black text-white shadow-[0_12px_28px_rgba(91,46,255,0.24)]">{num}</div><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9E7A16]">Stage {num}</p><h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#17131F]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#5B5568]">{text}</p><p className="mt-2 text-[12px] font-medium leading-5 text-[#615B6F]">{detail}</p></div></div></motion.div>
                    {index < 2 && <div className="mx-auto flex w-[88%] items-center justify-center py-3"><div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5B2EFF]/35 to-[#5B2EFF]/35" /><div className="flex items-center gap-2 rounded-full border border-[#5B2EFF]/15 bg-[#F7F3FF] px-4 py-2 shadow-sm"><span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9E7A16]">Flows To</span><ArrowRight className="h-4 w-4 text-[#5B2EFF]" /></div><div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#5B2EFF]/35 to-[#5B2EFF]/35" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="relative overflow-hidden px-6 py-24 lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(91,46,255,0.10),transparent_30%),linear-gradient(180deg,#FFFFFF,#FFFEFB)]" /><div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.95fr]"><div><SectionLabel>Operational Systems</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Operational systems designed for scale.</h2><div className="mt-10 space-y-4">{systems.map(([title, text]) => (<motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><UnifiedCard accent="left" className="p-6 pl-7"><h3 className="text-xl font-bold text-[#4A22D8]">{title}</h3><p className="mt-2 leading-7 text-[#5B5568]">{text}</p></UnifiedCard></motion.div>))}</div><p className="mt-8 text-lg font-semibold text-[#17131F]">Every system is designed around operational clarity, not unnecessary complexity.</p></div><ImagePanel title="Operational infrastructure for scale" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265001/5._OPERATIONAL_SYSTEMS_Alt_t6eb2n.png" alt="White marble executive statue holding purple and gold strands for the operational systems section" /></div></section>

      <section id="pricing" className="relative overflow-hidden border-y border-[#17131F]/8 bg-[#F9F6FF] px-6 py-24 lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(91,46,255,0.14),transparent_32%),radial-gradient(circle_at_84%_82%,rgba(201,162,39,0.13),transparent_30%)]" /><div className="relative mx-auto max-w-7xl"><div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><SectionLabel>Pricing</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">High-value operational transformation, not fragmented project work.</h2><div className="mt-6 space-y-5 text-lg leading-8 text-[#4A4654]"><p>DENOISE is built for scaling companies that need complete operational structure, not a small one-off system build.</p><p>Every engagement is designed around full transformation: systems, implementation, and execution discipline working together.</p><p className="font-semibold text-[#4A22D8]">We do not reduce the engagement into disconnected modules. We only scope upward when the operational requirement is larger.</p></div></div><div className="grid gap-5 md:grid-cols-2">{pricingPlans.map((plan) => (<UnifiedCard key={plan.name} className="flex h-full flex-col p-7"><div className="flex h-full flex-col"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#9E7A16]">{plan.term}</p><h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-[#17131F]">{plan.name}</h3><div className="mt-6"><span className="block whitespace-nowrap text-[42px] font-black leading-none tracking-[-0.05em] text-[#5B2EFF] lg:text-[46px]">{plan.price}</span><span className="mt-2 block text-sm font-semibold leading-5 text-[#615B6F]">{plan.range}</span></div><p className="mt-6 text-sm leading-7 text-[#5B5568]">{plan.description}</p><div className="mt-6 flex-1 space-y-3">{plan.features.map((feature) => (<div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-[#2F293A]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5B2EFF]" /><span>{feature}</span></div>))}</div><button type="button" onClick={() => handlePackageSelect(plan.name)} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5B2EFF] px-6 py-4 text-sm font-black text-white shadow-[0_14px_32px_rgba(91,46,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#4822D8]">Select {plan.name}<ArrowRight className="h-4 w-4" /></button></div></UnifiedCard>))}</div></div><div className="mt-8 grid gap-4 md:grid-cols-4">{pricingRules.map((rule, index) => (<UnifiedCard key={rule} className="flex min-h-[116px] flex-col justify-between p-5"><span className="text-xs font-black tracking-[0.16em] text-[#9E7A16]">{String(index + 1).padStart(2, "0")}</span><p className="mt-5 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-[#2F293A]">{rule}</p></UnifiedCard>))}</div></div></section>

      <section id="why" className="border-y border-[#17131F]/8 bg-[#F7F3FF] px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid items-stretch gap-14 lg:grid-cols-[.9fr_1.1fr]"><div className="h-full self-stretch"><ImagePanel title="Removing operational noise" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265009/6._WHY_DENOISE_EXISTS_Alt_vai0by.png" alt="White marble executive statue brushing away purple and gold particles for the why DENOISE exists section" /></div><div className="flex h-full flex-col self-stretch"><div><SectionLabel>Why DENOISE Exists</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Growth without operational structure creates hidden instability.</h2><div className="mt-7 space-y-5 text-lg leading-8 text-[#4A4654]"><p>Most companies focus on outcomes while remaining blind to how execution actually functions internally. Revenue may grow. Teams may expand. But without operational clarity, complexity compounds faster than leadership can manage it.</p><p>DENOISE was created to solve that gap. We believe operational structure should create visibility, accountability, and predictable execution, not additional bureaucracy.</p></div></div><div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold leading-8 text-[#17131F]"><span>The goal is not to add process.</span><span className="text-[#9E7A16]">The goal is to remove operational noise.</span></div></div></div></div></section>

      <section id="proof" className="px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionLabel>Proof of Thinking</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Built around operational reality, not theory.</h2><p className="mt-6 text-lg leading-8 text-[#4A4654]">DENOISE is designed for companies that need visible execution, clean accountability, and leadership systems grounded in operational reality.</p></div><div className="grid gap-4 sm:grid-cols-2">{proofItems.map(({ icon: Icon, text }) => (<UnifiedCard key={text} className="flex h-[112px] items-start gap-4 p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#5B2EFF]/10 text-[#5B2EFF]"><Icon className="h-5 w-5" /></div><p className="pt-1 text-[14px] font-semibold leading-5 tracking-[-0.01em] text-[#2F293A]">{text}</p></UnifiedCard>))}</div></div></div></section>

      <section id="insights" className="bg-[#F9F6FF] px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid items-stretch gap-12 lg:grid-cols-[.72fr_.98fr]"><div className="flex h-full flex-col pt-1"><SectionLabel>Insights</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Operational insights.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#4A4654]">We believe operational knowledge should compound across the industry. DENOISE shares practical insights, operational thinking, and implementation lessons gathered through working directly with scaling companies and complex execution environments.</p><a href="#" className="mt-7 inline-block text-sm font-bold text-[#5B2EFF] transition hover:text-[#9E7A16]">View all insights</a><div className="mt-8 grid flex-1 auto-rows-fr gap-4 md:grid-cols-2">{insights.concat(["Execution Visibility in Scaling Teams"]).map((title, index) => (<article key={title} className="h-full"><UnifiedCard className="flex h-full flex-col justify-between p-6"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9E7A16]">Insight {String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-xl font-black leading-tight tracking-[-0.03em] text-[#17131F]">{title}</h3></div><p className="mt-6 text-sm leading-7 text-[#5B5568]">A practical breakdown for leaders trying to build cleaner execution, sharper visibility, and stronger operational control.</p></UnifiedCard></article>))}</div></div><div className="h-full"><ImagePanel title="Operational thinking and analysis" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265015/7._INSIGHTS_SECTION_lo0rab.png" alt="White marble executive statue reviewing blank documents for the insights section" /></div></div></div></section>

      <section id="consultation" className="relative overflow-hidden px-6 py-24 lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(91,46,255,0.14),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(201,162,39,0.14),transparent_30%),linear-gradient(180deg,#FFFFFF,#F8F5FF)]" /><div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[.9fr_1.1fr]"><div className="h-full"><ImagePanel title="Offering structured direction" src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779265019/8._CONSULTATION_SECTION_enjjw6.png" alt="White marble executive statue extending a document forward for the consultation section" /></div><div className="flex h-full flex-col"><div><SectionLabel>Initial Consultation</SectionLabel><h2 className="text-4xl font-black tracking-[-0.04em] text-[#17131F] md:text-5xl">Request an Initial Consultation</h2><p className="mt-6 text-lg leading-8 text-[#4A4654]">Tell us where operational clarity is breaking inside your organization.</p><p className="mt-4 text-lg font-semibold leading-8 text-[#17131F]">Every engagement begins with understanding operational reality before recommending change.</p></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-7 rounded-[2rem] border border-[#5B2EFF]/12 bg-white/86 p-7 shadow-[0_24px_80px_rgba(24,24,40,0.10)] backdrop-blur-md md:p-8"><div className="grid gap-5 md:grid-cols-2"><input required placeholder="Name" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" /><input required type="email" placeholder="Email" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" /><input required placeholder="Position" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" /><input required placeholder="Company" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" /><input placeholder="Company Size" className="rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)] md:col-span-2" /></div><textarea required placeholder="Current Operational Challenge" rows={7} value={challengeText} onChange={(event) => setChallengeText(event.target.value)} className="mt-5 w-full resize-none rounded-2xl border border-[#17131F]/12 bg-white px-5 py-4 text-[#17131F] outline-none transition focus:border-[#5B2EFF] focus:shadow-[0_0_0_4px_rgba(91,46,255,0.10)]" /><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5B2EFF] px-6 py-4 text-sm font-black text-white shadow-[0_14px_32px_rgba(91,46,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#4822D8]">Submit Request <ArrowRight className="h-4 w-4" /></button>{submitted && <p className="mt-4 text-center text-sm font-semibold text-[#4A22D8]">Request captured. Connect this form to your CRM or email backend before launch.</p>}</form></div></div></section>

      <footer className="border-t border-[#17131F]/8 bg-white px-6 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><img src="https://res.cloudinary.com/dzhfxged2/image/upload/v1779270124/Asset_1_ngs0jf.png" alt="DENOISE footer logo" className="block h-9 w-auto object-contain" /><p className="mt-3 text-sm text-[#615B6F]">Structured execution creates scalable businesses.</p></div><div className="flex items-center gap-5 text-[#615B6F]"><a href="mailto:hello@denoise.com" className="flex items-center gap-2 hover:text-[#5B2EFF]"><Mail className="h-4 w-4" /> Email</a><a href="#" className="flex items-center gap-2 hover:text-[#5B2EFF]">LinkedIn</a></div></div></footer>
    </main>
  );
}

export default App;
