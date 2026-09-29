import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Briefcase, 
  DollarSign, 
  User, 
  Calendar, 
  Sparkles, 
  Brain, 
  Plus, 
  ShieldAlert,
  Share2
} from 'lucide-react';
import { Deal } from '../types';
import { DealRiskGauge } from '../components/DealRiskGauge';
import { DealTimeline } from '../components/DealTimeline';
import { DealMemorySummaryCard } from '../components/DealMemorySummaryCard';
import { PreCallBriefCard } from '../components/PreCallBriefCard';
import { SimilarDealsCard } from '../components/SimilarDealsCard';
import { AskDealMemoryChat } from '../components/AskDealMemoryChat';

interface DealDetailViewProps {
  deal: Deal;
  onBack: () => void;
  onOpenAddModal: () => void;
}

export const DealDetailView: React.FC<DealDetailViewProps> = ({
  deal,
  onBack,
  onOpenAddModal
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'brief' | 'memory' | 'similar' | 'chat'>('brief');

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Back Button & Action Row */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 text-xs font-semibold transition-all hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Deals</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenAddModal}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold rounded-xl transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Interaction</span>
          </button>
        </div>
      </div>

      {/* Main Deal Title & Metadata Banner */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-black text-slate-100 tracking-tight">
                {deal.name}
              </h1>
              <span className="px-3 py-1 bg-teal-500/15 text-teal-300 border border-teal-500/30 text-xs font-extrabold rounded-full">
                {deal.stage}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              {deal.productCategory} • Account Owner: <strong className="text-slate-200">{deal.owner}</strong>
            </p>
          </div>

          {/* Right Deal Stats */}
          <div className="flex items-center space-x-4 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Deal Value</span>
              <span className="text-xl font-black text-emerald-400 flex items-center">
                <DollarSign className="w-4 h-4" />
                {deal.value.toLocaleString()}
              </span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Target Close</span>
              <span className="text-xs font-bold text-slate-200 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                {deal.closeDate}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* REQUIREMENT #6: AI Deal Risk Gauge Component */}
      <DealRiskGauge
        score={deal.riskScore}
        level={deal.riskLevel}
        reason={deal.riskReason}
      />

      {/* Section Jump Nav Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('brief')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
            activeSubTab === 'brief'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-950'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Pre-Call Brief</span>
        </button>

        <button
          onClick={() => setActiveSubTab('memory')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
            activeSubTab === 'memory'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-950'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Deal Memory & Timeline</span>
        </button>

        <button
          onClick={() => setActiveSubTab('similar')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
            activeSubTab === 'similar'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-950'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Similar Deals ({deal.similarDeals.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('chat')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 ${
            activeSubTab === 'chat'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-950'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Ask DealMemory Q&A</span>
        </button>
      </div>

      {/* Main Intelligence Grid */}
      <div className="space-y-8">
        
        {/* REQUIREMENT #9: Pre-Call Brief (Show prominently) */}
        {deal.preCallBrief && (
          <div id="pre-call-brief">
            <PreCallBriefCard
              dealName={deal.name}
              brief={deal.preCallBrief}
            />
          </div>
        )}

        {/* REQUIREMENT #8: What AI Remembers */}
        <DealMemorySummaryCard summary={deal.memorySummary} />

        {/* Two-Column Grid: Timeline & Similar Deals / Ask AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* REQUIREMENT #7: Deal Memory Timeline */}
          <DealTimeline timeline={deal.timeline} />

          {/* Right Side: Similar Deals & Ask AI Chat */}
          <div className="space-y-8">
            
            {/* REQUIREMENT #10: "Similar Deals" Feature */}
            <SimilarDealsCard
              similarDeals={deal.similarDeals}
              dealName={deal.name}
            />

            {/* REQUIREMENT #11: Ask Your Deal Memory AI Chat */}
            <AskDealMemoryChat deal={deal} />

          </div>

        </div>

      </div>

    </div>
  );
};
