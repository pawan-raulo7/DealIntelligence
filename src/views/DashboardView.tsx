import React from 'react';
import { 
  Briefcase, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  ArrowUpRight, 
  Brain, 
  Sparkles, 
  ShieldAlert, 
  TrendingUp, 
  ChevronRight,
  Database,
  Users
} from 'lucide-react';
import { Deal } from '../types';

interface DashboardViewProps {
  deals: Deal[];
  onSelectDeal: (deal: Deal) => void;
  onNavigateTab: (tab: 'deals' | 'memory' | 'insights' | 'customers') => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  deals,
  onSelectDeal,
  onNavigateTab
}) => {
  const atRiskDeals = deals.filter(d => d.riskLevel === 'High' || d.riskScore >= 70);
  const globexDeal = deals.find(d => d.id === 'globex-systems') || deals[0];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
        
        <div className="space-y-1 z-10">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> AI Daily Intelligence Briefing
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight">
            Good morning, Alex
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Here's what needs your attention today based on synthesized deal memory.
          </p>
        </div>

        <div className="flex items-center space-x-3 z-10">
          <button
            onClick={() => onSelectDeal(globexDeal)}
            className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-teal-950 transition-all flex items-center space-x-2"
          >
            <Brain className="w-4 h-4" />
            <span>Open Globex Pre-Call Brief</span>
          </button>
        </div>

        {/* Ambient Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Active Deals */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-2 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Deals</span>
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-100">24</span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" /> +3 this week
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Across enterprise & mid-market pipeline</p>
        </div>

        {/* Card 2: At Risk */}
        <div 
          onClick={() => onNavigateTab('deals')}
          className="p-5 bg-slate-900 border border-rose-500/30 rounded-2xl shadow-xl space-y-2 cursor-pointer hover:border-rose-500/60 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">At Risk</span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-rose-400">5</span>
            <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
              High Priority
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Requires immediate manager brief & ROI review</p>
        </div>

        {/* Card 3: Follow-ups Due */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-2 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Follow-ups Due</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-100">8</span>
            <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              Today
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Pre-call briefs generated for 6 deals</p>
        </div>

        {/* Card 4: Pipeline Value */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-2 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pipeline Value</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-100">$1.24M</span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> 18% Q/Q
            </span>
          </div>
          <p className="text-[11px] text-slate-400">Weighted forecast: $840k</p>
        </div>

      </div>

      {/* Featured High-Risk Deal Spotlight Banner */}
      {globexDeal && (
        <div className="p-6 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/40 rounded-3xl shadow-2xl space-y-4 relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rose-500/20 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-bold">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Deal Memory Alert</span>
                  <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 text-[10px] font-extrabold rounded">
                    Score: 74/100 High Risk
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-100 mt-0.5">
                  {globexDeal.name} — ${globexDeal.value.toLocaleString()} ({globexDeal.stage})
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectDeal(globexDeal)}
              className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all flex items-center space-x-1.5 self-start sm:self-auto"
            >
              <span>Inspect Deal Intelligence</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            <strong className="text-rose-300">Why AI Flagged Risk:</strong> "{globexDeal.riskReason}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Main Objection</span>
              <span className="text-xs font-semibold text-slate-200">{globexDeal.memorySummary.mainObjection}</span>
            </div>
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Key Stakeholder</span>
              <span className="text-xs font-semibold text-slate-200">{globexDeal.memorySummary.keyStakeholder}</span>
            </div>
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Competitor Threat</span>
              <span className="text-xs font-semibold text-rose-300">{globexDeal.memorySummary.competitor}</span>
            </div>
          </div>

        </div>
      )}

      {/* Main Deals & Memory Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Top Active Deals */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-400" /> Active Deals Requiring Review
            </h2>
            <button
              onClick={() => onNavigateTab('deals')}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
            >
              <span>View All Deals</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {deals.map((deal) => (
              <div
                key={deal.id}
                onClick={() => onSelectDeal(deal)}
                className="p-4 bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-2xl shadow-lg transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-extrabold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {deal.name}
                    </span>
                    <span className="text-xs font-medium text-slate-400">({deal.productCategory})</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">${deal.value.toLocaleString()}</span>
                    <span>• Stage: {deal.stage}</span>
                    <span>• Last interaction: {deal.lastInteraction}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${
                    deal.riskLevel === 'High'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                      : deal.riskLevel === 'Medium'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}>
                    Risk {deal.riskScore}/100 ({deal.riskLevel})
                  </span>

                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: AI Sales Memory Insights */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Database className="w-5 h-5 text-teal-400" /> Memory Highlights
            </h2>
            <button
              onClick={() => onNavigateTab('memory')}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
            >
              Full Memory Base
            </button>
          </div>

          <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
            <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-teal-300 tracking-wider">
                Top Objection Pattern
              </span>
              <p className="text-xs font-bold text-slate-100">"Pricing is too high / Above budget"</p>
              <p className="text-[11px] text-slate-400">
                17 deals matched. Winning strategy: <strong className="text-teal-300">ROI + phased implementation (68% win rate)</strong>.
              </p>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Competitor Intelligence
              </span>
              <p className="text-xs font-bold text-slate-100">Competitor X (12 active deals)</p>
              <p className="text-[11px] text-slate-400">
                Win strategy: Compare Total Cost of Ownership rather than seat price.
              </p>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Persona Playbook: CFO
              </span>
              <p className="text-xs font-bold text-slate-100">Primary Care: Payback &lt; 6 months</p>
              <p className="text-[11px] text-slate-400">
                Lead with financial model spreadsheet before commercial closing call.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
