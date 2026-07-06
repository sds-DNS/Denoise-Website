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
  {
    title: "Teams are busy, but execution is slow",
    detail: "High activity exists, but work does not move cleanly from decision to completion.",
  },
  {
    title: "Decisions wait too long for approvals",
    detail: "Execution stalls because ownership, authority, or escalation paths are unclear.",
  },
  {
    title: "Leadership lacks visibility into operational reality",
    detail: "Leaders cannot quickly see what is moving, delayed, blocked, or at risk.",
  },
  {
    title: "Accountability is inconsistent",
    detail: "Responsibility shifts between people, teams, or conversations without clear closure.",
  },
  {
    title: "KPIs exist, but nobody acts on them",
    detail: "Performance data is available, but it does not drive correction or execution rhythm.",
  },
  {
    title: "Founders become the bottleneck for execution",
    detail: "Too many approvals, decisions, and corrections depend on leadership intervention.",
  },
  {
    title: "Work gets delayed without clear ownership",
    detail: "Tasks slow down because no single person is visibly accountable for completion.",
  },
  {
    title: "Teams scale faster than systems",
    detail: "Headcount increases, but processes, reporting, and control mechanisms do not mature.",
  },
];

export const deliverables = [
  {
    icon: Workflow,
    title: "Operational Diagnosis",
    text: "A direct breakdown of where execution is failing, what causes it, and what needs to change.",
  },
  {
    icon: Users,
    title: "Team Structure Optimization",
    text: "Clear ownership, reporting lines, role boundaries, and responsibility structures.",
  },
  {
    icon: BarChart3,
    title: "KPI + Accountability Systems",
    text: "Performance visibility that leadership can actually use to manage execution.",
  },
  {
    icon: GitBranch,
    title: "Workflow Standardization",
    text: "Repeatable workflows that reduce inconsistency, delays, and execution drift.",
  },
  {
    icon: Layers3,
    title: "Execution Visibility Systems",
    text: "Operational dashboards that show what is moving, what is delayed, and who owns it.",
  },
  {
    icon: FileText,
    title: "Leadership Reporting",
    text: "Decision-ready reporting structures built around reality, not vanity metrics.",
  },
];

export const systems = [
  [
    "Execution Systems",
    "Structured task visibility, accountability tracking, and operational rhythm.",
  ],
  [
    "KPI Architecture",
    "Company-wide visibility into performance, ownership, and execution quality.",
  ],
  [
    "Team Structure Design",
    "Clarified responsibilities, reporting lines, and operational alignment.",
  ],
  ["Decision Visibility", "Systems that reduce approval bottlenecks and leadership dependency."],
  [
    "Process Standardization",
    "Repeatable operational workflows that reduce inconsistency and execution drift.",
  ],
];

export const pricingPlans = [
  {
    name: "Team Diagnosis",
    price: "$5K",
    range: "starting at",
    term: "Package 01",
    description:
      "For organizations experiencing challenges within a specific team or function.",
    features: [
      "One team",
      "One team lead / manager",
      "3–5 team member interviews",
      "Team workflow analysis",
      "Team communication review",
      "Team-level Failure Point Registry",
    ],
  },
  {
    name: "Department Diagnosis",
    price: "$7K",
    range: "starting at",
    term: "Package 02",
    description:
      "For organizations experiencing challenges across multiple teams within a department.",
    features: [
      "Multiple teams within one department",
      "6–10 stakeholder interviews",
      "Cross-team workflow analysis",
      "Department communication review",
      "Ownership and accountability mapping",
      "Department-level Failure Point Registry",
    ],
  },
  {
    name: "Organizational Diagnosis",
    price: "$10K",
    range: "starting at",
    term: "Package 03",
    description:
      "For organizations experiencing operational complexity across the business.",
    features: [
      "Company-wide assessment",
      "Leadership interviews",
      "Cross-functional workflow analysis",
      "Organizational structure review",
      "KPI and performance visibility review",
      "Strategic Improvement Roadmap",
    ],
  },
  {
    name: "Enterprise Diagnosis",
    price: "$25K+",
    range: "starting at",
    term: "Package 04",
    description:
      "For large and complex organizations requiring a customized scope of analysis.",
    features: [
      "Customized enterprise diagnostic scope",
      "Multiple departments or business units",
      "Executive Findings Report",
      "Cross-business unit analysis",
      "Organizational Risk Assessment",
      "Enterprise Transformation Roadmap",
    ],
  },
];

export const pricingDeliverables = [
  {
    term: "01",
    title: "Failure Point Registry",
    text: "A structured view of operational issues affecting performance, prioritized by impact, frequency, and severity.",
  },
  {
    term: "02",
    title: "Root Cause Analysis",
    text: "Evidence-backed identification of why those issues exist.",
  },
  {
    term: "03",
    title: "Course Correction Framework",
    text: "A clear set of actions required to eliminate identified failure points.",
  },
  {
    term: "04",
    title: "Execution Tracking Structure",
    text: "A practical system that allows leadership to monitor progress and ensure corrective actions are implemented successfully.",
  },
];

export const insights = [
  "Why Most KPI Systems Fail",
  "Scaling Chaos vs Structured Growth",
  "The Hidden Cost of Operational Ambiguity",
];

export const recruitmentStages = [
  ["01", "Role Discovery & Alignment", "We understand the business, role, team structure, required experience, compensation range, and hiring timeline."],
  ["02", "Candidate Sourcing", "We identify suitable candidates through LinkedIn, professional networks, referrals, talent databases, and relevant job platforms."],
  ["03", "Candidate Assessment", "We assess experience, communication, career progression, salary expectations, availability, motivation, and role suitability."],
  ["04", "Candidate Presentation", "We provide a candidate profile, recruiter assessment, strengths, potential concerns, and a hiring recommendation."],
  ["05", "Interview Coordination", "We manage candidate communication, interview scheduling, feedback collection, and follow-up discussions."],
  ["06", "Offer & Placement Support", "We assist with offer coordination, candidate communication, acceptance management, and joining confirmation."],
];

export const founders = [
  {
    name: "Shanike De Silva",
    initials: "SD",
    role: "Co-Founder, Operations & Execution Systems",
    email: "shanike@denoisesystems.com",
    linkedin: "https://www.linkedin.com/in/shanikede/",
    credentials: [
      "11 years across operations, delivery, project management, retail, SaaS, Web3, and consulting",
      "Head of Delivery and Execution at Haqq Network, leading KPI systems, PMO structure, dashboards, approvals, risk tracking, HR information management, and execution governance",
      "Led HelloResume delivery with a seven-engineer team and supported launch under a four-million-dollar budget",
      "Implemented IS Quant across 130+ Keells retail locations with an 85 percent post-implementation acceptance rate",
      "Built advisory and venture experience through Nodabank, Ceydigital, Innovation Quotient, Sapien Medica, Particle Execution, BLAID Tech, and Orion Ganymede",
      "BSc Information Technology, HND Networking, and HND Computer Science",
    ],
    text: "Shanike focuses on operational clarity, KPI architecture, execution visibility, systems design, and turning scattered business activity into predictable performance.",
  },
  {
    name: "Janelle Siy",
    initials: "JS",
    role: "Co-Founder, HR & People Operations",
    email: "jane@denoisesystems.com",
    linkedin: "https://www.linkedin.com/in/jane-siy/",
    credentials: [
      "Certified Human Resources Manager with 16+ years across the Middle East, Africa, Asia, and Europe",
      "HR Director at Haqq Network, building HR infrastructure, people planning, engagement platforms, HR shared services, and global people practices",
      "Former Head of People MENA at Bybit, leading HR strategy, talent management, culture, compliance, HR analytics, and employer branding",
      "Scaled organizations from 30 to 250 employees in 10 months while maintaining more than 90 percent retention",
      "Reduced time-to-hire by 40 percent and improved hiring quality by 35 percent through AI-enabled recruitment systems",
      "Experience across SAP, Workday, Oracle HCM Fusion, SuccessFactors, Zoho People and Recruit, HiBob, Bamboo, Notion, and HR analytics tools",
    ],
    text: "Janelle focuses on talent acquisition, HR strategy, workforce planning, people operations, organizational development, and building HR systems that support growth.",
  },
];

export const proofItems = [
  { icon: Network, text: "Operational systems across multiple business functions" },
  { icon: Gauge, text: "KPI governance and execution visibility structures" },
  { icon: Route, text: "Cross-functional workflow optimization" },
  { icon: SearchCheck, text: "Operational diagnostics and restructuring" },
  { icon: ShieldCheck, text: "Process and accountability architecture" },
  { icon: ClipboardCheck, text: "Structured execution environments for scaling teams" },
];

export const workStages = [
  [
    "01",
    "Alignment",
    "We establish business context, define operational scope, and align on what success actually means.",
    "Confirms scope, success criteria, access, and operating rules before diagnosis begins.",
  ],
  [
    "02",
    "Diagnosis",
    "We analyze workflows, communication patterns, execution bottlenecks, and operational failure points using interviews, observation, and system data.",
    "Validates what people believe is happening against what the systems and execution patterns actually show.",
  ],
  [
    "03",
    "Operational Output",
    "We convert identified issues into structured operational decisions, implementation direction, and execution tracking systems.",
    "Turns findings into course-correction actions with clear ownership, implementation direction, and tracking.",
  ],
];
