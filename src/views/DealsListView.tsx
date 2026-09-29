import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Filter, 
  ShieldAlert, 
  ShieldCheck, 
  ShieldAlert as ShieldWarning, 
  ChevronRight, 
  DollarSign, 
  Calendar, 
  Brain,
  Sparkles
} from 'lucide-react';
import { Deal, RiskLevel } from '../types';

interface DealsListViewProps {
  deals: Deal[];
  onSelectDeal: (deal: Deal) => void;
  searchQuery: string;
}

export const DealsListView: React.FC<DealsListViewProps> = ({
  deals,
  onSelectDeal,
  searchQuery
}) => {
  const [localSearch, setLocalSearch] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [riskFilter, setRiskFilter] = useState<string>('all');

  const query = (localSearch || searchQuery).toLowerCase();

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch = 
      deal.name.toLowerCase().includes(query) ||
      deal.company.toLowerCase().includes(query) ||
      deal.productCategory.toLowerCase().includes(query) ||
      deal.memorySummary.mainObjection.toLowerCase().includes(query);

    const matchesStage = stageFilter === 'all' || deal.stage === stageFilter;
    const matchesRisk = riskFilter === 'all' || deal.riskLevel === riskFilter;

    return matchesSearch && matchesStage && matchesRisk;
  });

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-100 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-teal-400" /> Active Deals Pipeline
          </h1>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Click any deal to inspect its AI Deal Memory, Pre-Call Brief, and Risk Score.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
          <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            {filteredDeals.length} Deals Displayed
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search deals, objections, products..."
            className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="flex items-center space-x-1 text-xs text-slate-400 font-semibold">
            <Filter className="w-3.5 h-3.5 text-teal-400" />
            <span>Filter:</span>
          </div>

          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="all">All Stages</option>
            <option value="Discovery">Discovery</option>
            <option value="Qualification">Qualification</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
          </select>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="all">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
          </select>
        </div>

      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDeals.map((deal) => {
          const isHigh = deal.riskLevel === 'High';
          const isMedium = deal.riskLevel === 'Medium';

          return (
            <div
              key={deal.id}
              onClick={() => onSelectDeal(deal)}
              className={`p-6 bg-slate-900 border ${
                isHigh
                  ? 'border-rose-500/30 hover:border-rose-500/70'
                  : isMedium
                  ? 'border-amber-500/30 hover:border-amber-500/70'
                  : 'border-slate-800 hover:border-teal-500/50'
              } rounded-2xl shadow-xl space-y-4 hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden`}
            >
              
              {/* Header Row */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-100 group-hover:text-teal-300 transition-colors">
                    {deal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {deal.productCategory}
                  </p>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center space-x-1 ${
                  isHigh
                    ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                    : isMedium
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                }`}>
                  {isHigh ? (
                    <ShieldAlert className="w-3.5 h-3.5" />
                  ) : isMedium ? (
                    <ShieldWarning className="w-3.5 h-3.5" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5" />
                  )}
                  <span>{deal.riskLevel} Risk</span>
                </div>
              </div>

              {/* Metric Pill Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Value</span>
                  <span className="text-sm font-extrabold text-slate-100 flex items-center">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    {deal.value.toLocaleString()}
                  </span>
                </div>

                <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Stage</span>
                  <span className="text-xs font-bold text-teal-300">{deal.stage}</span>
                </div>
              </div>

              {/* Memory Summary Snippet */}
              <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-1 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Brain className="w-3 h-3 text-teal-400" /> Key AI Memory Snippet
                </span>
                <p className="text-slate-300 font-medium line-clamp-2">
                  Objection: "{deal.memorySummary.mainObjection}"
                </p>
              </div>

              {/* Footer Row */}
              <div className="flex items-center justify-between pt-2 text-xs border-t border-slate-800/80 text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Last interaction: {deal.lastInteraction}
                </span>

                <span className="text-teal-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Open Intelligence <ChevronRight className="w-4 h-4" />
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
