export type StageType = 'Discovery' | 'Qualification' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
export type RiskLevel = 'High' | 'Medium' | 'Low';
export type InteractionType = 'call' | 'email' | 'meeting' | 'pricing' | 'objection' | 'stakeholder' | 'competitor' | 'note';

export interface DealInteraction {
  id: string;
  date: string;
  title: string;
  type: InteractionType;
  summary: string;
  details: string;
  author: string;
  keyTakeaway?: string;
  sentiment?: 'positive' | 'neutral' | 'negative' | 'warning';
}

export interface DealMemorySummary {
  mainPainPoint: string;
  mainObjection: string;
  keyStakeholder: string;
  competitor: string;
  timelineShift: string;
  buyingSignal: string;
}

export interface SimilarDeal {
  id: string;
  company: string;
  outcome: 'Won' | 'Lost';
  dealValue: number;
  similarity: string;
  objection: string;
  whatWorked: string;
  outcomeDetail: string;
}

export interface PreCallBrief {
  dealId: string;
  generatedAt: string;
  whatHappened: string;
  whatChanged: string;
  whoMatters: string;
  whatTheyCareAbout: string[];
  whatToAvoid: string;
  recommendedApproach: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  memoryReferences?: string[];
}

export interface Deal {
  id: string;
  name: string;
  company: string;
  logoColor: string;
  value: number;
  stage: StageType;
  riskScore: number; // 0 - 100
  riskLevel: RiskLevel;
  riskReason: string;
  lastInteraction: string;
  productCategory: string;
  owner: string;
  closeDate: string;
  timeline: DealInteraction[];
  memorySummary: DealMemorySummary;
  similarDeals: SimilarDeal[];
  preCallBrief?: PreCallBrief;
  chatHistory: ChatMessage[];
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  industry: string;
  tier: string;
  totalArr: number;
  healthScore: number; // 0 - 100
  primaryContact: string;
  contactRole: string;
  email: string;
  activeDealsCount: number;
  lastActivity: string;
}

export interface ObjectionPattern {
  id: string;
  title: string;
  appearedInCount: number;
  successfulResponse: string;
  successRate: number;
  description: string;
  relatedCompetitor?: string;
}

export interface CompetitorPattern {
  id: string;
  competitor: string;
  appearedInCount: number;
  commonConcern: string;
  successfulResponse: string;
  winRate: number;
}

export interface PersonaPattern {
  id: string;
  persona: string;
  role: string;
  commonConcern: string;
  effectiveMessaging: string;
  buyerPriority: string;
}

export interface SalesInsight {
  id: string;
  number: string; // e.g. "01"
  title: string;
  summary: string;
  impact: 'High' | 'Medium' | 'Low';
  category: 'objection' | 'strategy' | 'competitor' | 'risk';
  actionableAdvice: string;
  affectedDealsCount: number;
  trend: string;
}
