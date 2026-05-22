import {
  Layers3,
  Workflow,
  BarChart3,
  Users,
  GitBranch,
  FileText,
  ShieldCheck,
  Gauge,
  Network,
  SearchCheck,
  ClipboardCheck,
  Route,
} from "lucide-react";

export const failureIndicators = [
  { title: "Teams are busy, but execution is slow", detail: "High activity exists, but work does not move cleanly from decision to completion." },
  { title: "Decisions wait too long for approvals", detail: "Execution stalls because ownership, authority, or escalation paths are unclear." },
  { title: "Leadership lacks visibility into operational reality", detail: "Leaders cannot quickly see what is moving, delayed, blocked, or at risk." },
  { title: "Accountability is inconsistent", detail: "Responsibility shifts between people, teams, or conversations without clear closure." },
  { title: "KPIs exist, but nobody acts on them", detail: "Performance data is available, but it does not drive correction or execution rhythm." },
  { title: "Founders become the bottleneck for execution", detail: "Too many approvals, decisions, and corrections depend on leadership intervention." },
  { title: "Work gets delayed without clear ownership", detail: "Tasks slow down because no single person is visibly accountable for completion." },
  { title: "Teams scale faster than systems", detail: "Headcount increases, but processes, reporting, and control mechanisms do not mature." },
];

export const deliverables = [
  { icon: Workflow, title: "Operational Diagnosis", text: "A direct breakdown of where execution is failing, what causes it, and what needs to change." },
  { icon: Users, title: "Team Structure Optimization", text: "Clear ownership, reporting lines, role boundaries, and responsibility structures." },
  { icon: BarChart3, title: "KPI + Accountability Systems", text: "Performance visibility that leadership can actually use to manage execution." },
  { icon: GitBranch, title: "Workflow Standardization", text: "Repeatable workflows that reduce inconsistency, delays, and execution drift." },
  { icon: Layers3, title: "Execution Visibility Systems", text: "Operational dashboards that show what is moving, what is delayed, and who owns it." },
  { icon: FileText, title: "Leadership Reporting", text: "Decision-ready reporting structures built around reality, not vanity metrics." },
];

export const systems = [
  ["Execution Systems", "Structured task visibility, accountability tracking, and operational rhythm."],
  ["KPI Architecture", "Company-wide visibility into performance, ownership, and execution quality."],
  ["Team Structure Design", "Clarified responsibilities, reporting lines, and operational alignment."],
  ["Decision Visibility", "Systems that reduce approval bottlenecks and leadership dependency."],
  ["Process Standardization", "Repeatable operational workflows that reduce inconsistency and execution drift."],
];

export const pricingPlans = [
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

export const pricingRules = ["No small isolated projects", "No single-module builds", "No phased cheap rollouts", "Engagements only negotiate upward, not downward"];

export const insights = ["Why Most KPI Systems Fail", "Scaling Chaos vs Structured Growth", "The Hidden Cost of Operational Ambiguity"];

export const proofItems = [
  { icon: Network, text: "Operational systems across multiple business functions" },
  { icon: Gauge, text: "KPI governance and execution visibility structures" },
  { icon: Route, text: "Cross-functional workflow optimization" },
  { icon: SearchCheck, text: "Operational diagnostics and restructuring" },
  { icon: ShieldCheck, text: "Process and accountability architecture" },
  { icon: ClipboardCheck, text: "Structured execution environments for scaling teams" },
];

export const workStages = [
  ["01", "Alignment", "We establish business context, define operational scope, and align on what success actually means.", "Confirms scope, success criteria, access, and operating rules before diagnosis begins."],
  ["02", "Diagnosis", "We analyze workflows, communication patterns, execution bottlenecks, and operational failure points using interviews, observation, and system data.", "Validates what people believe is happening against what the systems and execution patterns actually show."],
  ["03", "Operational Output", "We convert identified issues into structured operational decisions, implementation direction, and execution tracking systems.", "Turns findings into course-correction actions with clear ownership, implementation direction, and tracking."],
];
