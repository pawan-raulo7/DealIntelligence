import { Deal, Customer, ObjectionPattern, CompetitorPattern, PersonaPattern, SalesInsight } from '../types';

export const INITIAL_DEALS: Deal[] = [
  {
    id: 'globex-systems',
    name: 'Globex Systems',
    company: 'Globex Systems Inc.',
    logoColor: 'from-teal-500 to-emerald-600',
    value: 120000,
    stage: 'Negotiation',
    riskScore: 74,
    riskLevel: 'High',
    riskReason: 'Risk increased because budget confirmation is missing and the implementation timeline has slipped.',
    lastInteraction: '2 days ago',
    productCategory: 'Enterprise AI Platform',
    owner: 'Alex Rivera',
    closeDate: 'Oct 31, 2026',
    memorySummary: {
      mainPainPoint: 'Manual data processing is consuming significant employee time across 4 regional offices.',
      mainObjection: 'Pricing is considered higher than initially budgeted for Q4.',
      keyStakeholder: 'CFO (Marcus Vance) is focused strictly on verifiable ROI.',
      competitor: 'Competitor X is currently being evaluated by procurement.',
      timelineShift: 'Implementation timeline has moved from Q4 to Q1 due to resource allocation.',
      buyingSignal: 'Customer specifically requested a detailed phased implementation plan and security whitepaper.'
    },
    timeline: [
      {
        id: 'int-1',
        date: 'Sept 12, 2026',
        title: 'Discovery Call',
        type: 'call',
        summary: 'Customer explained that their main problem is manual data processing consuming 40+ hours per week.',
        details: 'Initial kickoff meeting with Head of Operations. Highlighted bottleneck in invoice processing and sales forecasting data entry.',
        author: 'Alex Rivera',
        keyTakeaway: 'High pain point in operational efficiency. 300+ staff affected.',
        sentiment: 'positive'
      },
      {
        id: 'int-2',
        date: 'Sept 18, 2026',
        title: 'Technical Deep-Dive',
        type: 'meeting',
        summary: 'CTO asked detailed questions about API integration latency, SOC2 compliance, and data residency.',
        details: 'Technical review with engineering leadership. Validated our REST API endpoints and enterprise SSO setup.',
        author: 'Sarah Chen (Solutions Architect)',
        keyTakeaway: 'Passed technical review; requested SOC2 audit summary.',
        sentiment: 'positive'
      },
      {
        id: 'int-3',
        date: 'Sept 23, 2026',
        title: 'Pricing & Commercials Discussion',
        type: 'pricing',
        summary: 'Customer expressed concern: "The current pricing is higher than what we expected for year 1."',
        details: 'Presented Tier 2 Enterprise Plan at $120k/yr. Procurement flagged that baseline allocation was capped at $95k.',
        author: 'Alex Rivera',
        keyTakeaway: 'Pricing barrier identified. Needs executive alignment or restructured scope.',
        sentiment: 'negative'
      },
      {
        id: 'int-4',
        date: 'Sept 25, 2026',
        title: 'Stakeholder Alignment Meeting',
        type: 'stakeholder',
        summary: 'CFO Marcus Vance joined the call and requested a clear 12-month ROI calculation and payback timeline.',
        details: 'CFO stressed that all non-essential SaaS spend above $100k requires board audit approval demonstrating 3x return.',
        author: 'Alex Rivera',
        keyTakeaway: 'CFO is now the primary gatekeeper. Needs financial ROI model.',
        sentiment: 'warning'
      },
      {
        id: 'int-5',
        date: 'Sept 28, 2026',
        title: 'Follow-up Check-in Call',
        type: 'competitor',
        summary: 'Customer mentioned they are also actively evaluating Competitor X for lower upfront license fees.',
        details: 'VP Ops revealed Competitor X submitted a discounted pilot proposal. However, Globex fears Competitor X lacks enterprise security.',
        author: 'Alex Rivera',
        keyTakeaway: 'Competitor X threat active, but customer prefers our product feature set if ROI holds.',
        sentiment: 'warning'
      }
    ],
    preCallBrief: {
      dealId: 'globex-systems',
      generatedAt: 'Just now',
      whatHappened: 'Globex likes the product functionality and technical architecture, but has strong concerns about upfront pricing and financial ROI.',
      whatChanged: 'The implementation timeline moved by one quarter (Q4 -> Q1) and Competitor X has entered as a secondary evaluation.',
      whoMatters: 'The CFO (Marcus Vance) is currently the key decision-maker holding approval rights and wants formal financial justification.',
      whatTheyCareAbout: [
        'Demonstrable ROI & payback timeline (<6 months)',
        'Realistic phased implementation schedule',
        'Seamless API integration with legacy CRM',
        'Total Cost of Ownership vs Competitor X'
      ],
      whatToAvoid: 'Do not lead with an immediate price discount. The customer has previously responded better to value-based payback discussions.',
      recommendedApproach: 'Lead with the expected $340k annual cost savings (ROI model) and present a 2-phase deployment plan that fits their Q1 rollout.'
    },
    similarDeals: [
      {
        id: 'sim-1',
        company: 'Acme Corp',
        outcome: 'Won',
        dealValue: 115000,
        similarity: '94% Match',
        objection: 'Identical $100k+ budget objection & CFO scrutiny',
        whatWorked: 'Phased implementation plan (50% upfront, 50% post-pilot) + 3-page customized ROI financial spreadsheet.',
        outcomeDetail: 'Deal closed in 18 days with 3-year term.'
      },
      {
        id: 'sim-2',
        company: 'TechNova Solutions',
        outcome: 'Won',
        dealValue: 95000,
        similarity: '89% Match',
        objection: 'Evaluation of Competitor X & CFO payback concern',
        whatWorked: 'Business case focused on labor hours saved ($180k/yr saved) and total cost of ownership comparison.',
        outcomeDetail: '$95,000 deal closed successfully.'
      }
    ],
    chatHistory: [
      {
        id: 'msg-1',
        sender: 'ai',
        text: "Hello Alex. I've analyzed Globex Systems' 5 interactions and 42 historical company deal memories. How can I help prepare your next action?",
        timestamp: '9:00 AM'
      }
    ]
  },
  {
    id: 'acme-tech',
    name: 'Acme Technologies',
    company: 'Acme Technologies Corp',
    logoColor: 'from-blue-500 to-cyan-600',
    value: 85000,
    stage: 'Proposal',
    riskScore: 48,
    riskLevel: 'Medium',
    riskReason: 'VP of Engineering requested extended security compliance documentation before sign-off.',
    lastInteraction: '1 day ago',
    productCategory: 'Automation Platform',
    owner: 'Jordan Lee',
    closeDate: 'Nov 15, 2026',
    memorySummary: {
      mainPainPoint: 'Manual workflow delays causing SLA breaches in client onboarding.',
      mainObjection: 'Engineering team wants proof of SOC2 Type II compliance.',
      keyStakeholder: 'VP Engineering (David Wright).',
      competitor: 'In-house custom script build option.',
      timelineShift: 'Proposal review extended by 1 week for security audit.',
      buyingSignal: 'Requested sandbox API keys for developer trial.'
    },
    timeline: [
      {
        id: 'acme-1',
        date: 'Sept 20, 2026',
        title: 'Initial Demo',
        type: 'call',
        summary: 'Demoed workflow automation to Director of Operations.',
        details: 'Great reception on UI speed. Invited VP Engineering to next call.',
        author: 'Jordan Lee'
      },
      {
        id: 'acme-2',
        date: 'Sept 27, 2026',
        title: 'Security Questionnaire Review',
        type: 'objection',
        summary: 'Engineering lead requested detailed SOC2 documentation.',
        details: 'Sent security whitepaper. Waiting on legal compliance sign-off.',
        author: 'Jordan Lee'
      }
    ],
    preCallBrief: {
      dealId: 'acme-tech',
      generatedAt: 'Yesterday',
      whatHappened: 'Proposal submitted for $85k. Product demo passed with praise.',
      whatChanged: 'Security questionnaire submitted to VP of Engineering.',
      whoMatters: 'VP of Engineering (David Wright).',
      whatTheyCareAbout: ['SOC2 Type II compliance', 'Data encryption at rest', 'Developer onboarding'],
      whatToAvoid: 'Avoid pushy closing tactics until security review completes.',
      recommendedApproach: 'Offer a direct 15-minute call with our Chief Information Security Officer.'
    },
    similarDeals: [
      {
        id: 'sim-3',
        company: 'Vortex Software',
        outcome: 'Won',
        dealValue: 150000,
        similarity: '91% Match',
        objection: 'Security compliance review delay',
        whatWorked: 'Fast-tracked CISO-to-CISO briefing call.',
        outcomeDetail: 'Closed within 10 days of security approval.'
      }
    ],
    chatHistory: []
  },
  {
    id: 'nova-health',
    name: 'NovaHealth',
    company: 'NovaHealth Inc.',
    logoColor: 'from-emerald-500 to-teal-700',
    value: 210000,
    stage: 'Discovery',
    riskScore: 22,
    riskLevel: 'Low',
    riskReason: 'High executive alignment with Chief Medical Officer and IT Leadership.',
    lastInteraction: '4 hours ago',
    productCategory: 'AI Analytics Platform',
    owner: 'Taylor Swift',
    closeDate: 'Dec 15, 2026',
    memorySummary: {
      mainPainPoint: 'Patient data processing backlog and report generation delays.',
      mainObjection: 'HIPAA compliance verification required.',
      keyStakeholder: 'Chief Medical Officer & CIO.',
      competitor: 'Legacy HealthSuite System.',
      timelineShift: 'On track for Q4 procurement.',
      buyingSignal: 'Budget already approved for $200k+ initiative.'
    },
    timeline: [
      {
        id: 'nova-1',
        date: 'Sept 29, 2026',
        title: 'Executive Vision Call',
        type: 'meeting',
        summary: 'CMO confirmed urgent need to modernize patient analytics workflow.',
        details: 'Budget is fully secured. Interested in enterprise multi-clinic deployment.',
        author: 'Taylor Swift'
      }
    ],
    similarDeals: [],
    chatHistory: []
  },
  {
    id: 'apex-financial',
    name: 'Apex Financial Services',
    company: 'Apex Financial Ltd.',
    logoColor: 'from-purple-500 to-indigo-600',
    value: 340000,
    stage: 'Qualification',
    riskScore: 52,
    riskLevel: 'Medium',
    riskReason: 'Multiple decision makers with conflicting priorities on cloud migration.',
    lastInteraction: '3 days ago',
    productCategory: 'Enterprise AI Platform',
    owner: 'Alex Rivera',
    closeDate: 'Nov 30, 2026',
    memorySummary: {
      mainPainPoint: 'Legacy database query performance stalling wealth management team.',
      mainObjection: 'On-premise vs Cloud hosting debate.',
      keyStakeholder: 'Head of Infrastructure & Chief Risk Officer.',
      competitor: 'Internal IT Custom Build.',
      timelineShift: 'Extended qualification phase.',
      buyingSignal: 'Requested financial benchmark study.'
    },
    timeline: [
      {
        id: 'apex-1',
        date: 'Sept 26, 2026',
        title: 'Infrastructure Architecture Call',
        type: 'meeting',
        summary: 'Risk team questioned cloud deployment model.',
        details: 'Clarified hybrid deployment architecture and dedicated VPC isolation.',
        author: 'Alex Rivera'
      }
    ],
    similarDeals: [],
    chatHistory: []
  },
  {
    id: 'omnicorp-logistics',
    name: 'OmniCorp Logistics',
    company: 'OmniCorp Global',
    logoColor: 'from-rose-500 to-amber-600',
    value: 280000,
    stage: 'Negotiation',
    riskScore: 81,
    riskLevel: 'High',
    riskReason: 'Key champion (Director of Logistics) left company; replacement reconsidering scope.',
    lastInteraction: '5 days ago',
    productCategory: 'Supply Chain AI',
    owner: 'Jordan Lee',
    closeDate: 'Oct 25, 2026',
    memorySummary: {
      mainPainPoint: 'Fleet routing inefficiency and fuel cost variance.',
      mainObjection: 'New interim leader reassessing vendor selection.',
      keyStakeholder: 'Interim VP Operations.',
      competitor: 'Competitor Y.',
      timelineShift: 'Delayed due to internal reorg.',
      buyingSignal: 'Previous pilot results showed 14% cost reduction.'
    },
    timeline: [
      {
        id: 'omni-1',
        date: 'Sept 24, 2026',
        title: 'Reorg Alignment Meeting',
        type: 'stakeholder',
        summary: 'Met new VP Ops who requested full recap of pilot ROI.',
        details: 'Sent executive summary deck of pilot achievements.',
        author: 'Jordan Lee'
      }
    ],
    similarDeals: [],
    chatHistory: []
  }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-1',
    name: 'Globex Systems',
    company: 'Globex Systems Inc.',
    industry: 'Enterprise Software',
    tier: 'Enterprise Tier',
    totalArr: 120000,
    healthScore: 68,
    primaryContact: 'Marcus Vance',
    contactRole: 'Chief Financial Officer',
    email: 'm.vance@globexsystems.com',
    activeDealsCount: 1,
    lastActivity: '2 days ago'
  },
  {
    id: 'cust-2',
    name: 'Acme Technologies',
    company: 'Acme Technologies Corp',
    industry: 'Industrial Automation',
    tier: 'Mid-Market',
    totalArr: 85000,
    healthScore: 82,
    primaryContact: 'David Wright',
    contactRole: 'VP Engineering',
    email: 'd.wright@acmetech.io',
    activeDealsCount: 1,
    lastActivity: '1 day ago'
  },
  {
    id: 'cust-3',
    name: 'NovaHealth',
    company: 'NovaHealth Inc.',
    industry: 'Healthcare & Life Sciences',
    tier: 'Strategic Enterprise',
    totalArr: 210000,
    healthScore: 94,
    primaryContact: 'Dr. Ellen Vance',
    contactRole: 'Chief Medical Officer',
    email: 'e.vance@novahealth.org',
    activeDealsCount: 1,
    lastActivity: '4 hours ago'
  },
  {
    id: 'cust-4',
    name: 'Vortex Software',
    company: 'Vortex Global',
    industry: 'Financial Technology',
    tier: 'Strategic Enterprise',
    totalArr: 150000,
    healthScore: 98,
    primaryContact: 'Michael Chang',
    contactRole: 'VP Product',
    email: 'mchang@vortexsoft.com',
    activeDealsCount: 0,
    lastActivity: '1 week ago'
  },
  {
    id: 'cust-5',
    name: 'Starlight Bio',
    company: 'Starlight Therapeutics',
    industry: 'Biotech & Pharma',
    tier: 'Mid-Market',
    totalArr: 175000,
    healthScore: 75,
    primaryContact: 'Rachel Adams',
    contactRole: 'Head of Operations',
    email: 'r.adams@starlightbio.com',
    activeDealsCount: 1,
    lastActivity: '3 days ago'
  }
];

export const MOCK_OBJECTION_PATTERNS: ObjectionPattern[] = [
  {
    id: 'obj-1',
    title: 'Pricing is too high / Above budget allocation',
    appearedInCount: 17,
    successfulResponse: 'ROI calculation spreadsheet + phased implementation rollout (50/50 split)',
    successRate: 68,
    description: 'Occurs primarily when procurement or CFO steps in during late-stage negotiations for enterprise deals over $100k.'
  },
  {
    id: 'obj-2',
    title: 'Implementation resource constraints & bandwidth',
    appearedInCount: 11,
    successfulResponse: 'Dedicated onboarding squad + 30-day turnkey sandbox pilot',
    successRate: 73,
    description: 'Engineering or Ops teams fear internal distraction during deployment.'
  },
  {
    id: 'obj-3',
    title: 'Security compliance & data residency concerns',
    appearedInCount: 14,
    successfulResponse: 'SOC2 Type II audit summary + Executive CISO briefing call',
    successRate: 85,
    description: 'Standard enterprise gatekeeping check from IT & Risk management.'
  }
];

export const MOCK_COMPETITOR_PATTERNS: CompetitorPattern[] = [
  {
    id: 'comp-1',
    competitor: 'Competitor X',
    appearedInCount: 12,
    commonConcern: 'Offers lower upfront seat pricing (30% cheaper initial quote)',
    successfulResponse: 'Compare 3-year Total Cost of Ownership (TCO) & feature completeness matrix',
    winRate: 62
  },
  {
    id: 'comp-2',
    competitor: 'Legacy Tool Y',
    appearedInCount: 8,
    commonConcern: 'Team inertia and switching friction from existing legacy system',
    successfulResponse: 'Highlight 5x faster workflow automation and automated CRM sync',
    winRate: 75
  }
];

export const MOCK_PERSONA_PATTERNS: PersonaPattern[] = [
  {
    id: 'pers-1',
    persona: 'CFO / Finance Director',
    role: 'Financial Gatekeeper',
    commonConcern: 'Unclear payback period and budget overrun risk',
    effectiveMessaging: 'Hard cost savings, labor efficiency metrics, and board-ready ROI model',
    buyerPriority: 'Quantifiable Return on Investment & Payback < 6 months'
  },
  {
    id: 'pers-2',
    persona: 'CTO / VP Engineering',
    role: 'Technical Gatekeeper',
    commonConcern: 'API reliability, security standards, and system architecture overhead',
    effectiveMessaging: 'REST API documentation, SOC2 Type II compliance, sandbox environment',
    buyerPriority: 'Zero security risk, minimal maintenance, high uptime guarantee'
  },
  {
    id: 'pers-3',
    persona: 'VP of Sales / Revenue Operations',
    role: 'Primary End-User Champion',
    commonConcern: 'Rep adoption friction, complex UI, and extra manual data entry',
    effectiveMessaging: 'Zero manual entry, pre-call AI brief in 10 seconds, deal risk alerts',
    buyerPriority: 'Time saved per rep and improved win rate'
  }
];

export const MOCK_SALES_INSIGHTS: SalesInsight[] = [
  {
    id: 'ins-1',
    number: '01',
    title: 'Pricing objections are increasing',
    summary: '7 recent deals mentioned pricing concerns during late-stage negotiation, up 35% from last quarter.',
    impact: 'High',
    category: 'objection',
    actionableAdvice: 'Equip sales reps with the standardized ROI Financial Payback Calculator before sending initial pricing proposals.',
    affectedDealsCount: 7,
    trend: '+35% this month'
  },
  {
    id: 'ins-2',
    number: '02',
    title: 'ROI messaging is performing well',
    summary: 'Deals using ROI-focused proposals showed 2.4x stronger stage progression and 18-day faster closing cycles.',
    impact: 'High',
    category: 'strategy',
    actionableAdvice: 'Mandate ROI business case presentation for all deals valued above $80,000.',
    affectedDealsCount: 14,
    trend: '68% win rate'
  },
  {
    id: 'ins-3',
    number: '03',
    title: 'Competitor X appears frequently in enterprise deals',
    summary: '12 active opportunities mentioned Competitor X as a secondary evaluation option.',
    impact: 'Medium',
    category: 'competitor',
    actionableAdvice: 'Use the "Total Cost of Ownership vs Competitor X" battlecard during discovery calls.',
    affectedDealsCount: 12,
    trend: '62% win rate against Competitor X'
  }
];
