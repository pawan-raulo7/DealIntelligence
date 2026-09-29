import React from 'react';
import { Database, CheckCircle, Lightbulb, Sparkles, ArrowRight, DollarSign } from 'lucide-react';
import { SimilarDeal } from '../types';

interface SimilarDealsCardProps {
  similarDeals: SimilarDeal[];
  dealName: string;
}

export const SimilarDealsCard: React.FC<SimilarDealsCardProps> = ({ similarDeals, dealName }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">What Worked in Similar Deals</h2>
            <p className="text-xs text-slate-400">Historical pattern matching from company deal memory</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> 42 Historical Deals Analyzed
        </span>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {similarDeals.map((deal) => (
          <div 
            key={deal.id}
            className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 hover:border-teal-500/40 transition-all"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-extrabold text-slate-100">{deal.company}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded">
                  {deal.outcome}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 flex items-center">
                <DollarSign className="w-3 h-3 text-emerald-400" />
                {deal.dealValue.toLocaleString()}
              </span>
            </div>

            {/* Objection matched */}
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">Matching Pattern:</strong> {deal.objection}
            </p>

            {/* What worked */}
            <div className="p-2.5 bg-teal-500/5 border border-teal-500/20 rounded-lg text-xs">
              <span className="font-bold text-teal-300 block mb-0.5">What worked:</span>
              <span className="text-slate-200 font-medium">{deal.whatWorked}</span>
            </div>

            {/* Outcome */}
            <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Outcome: {deal.outcomeDetail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation Banner */}
      <div className="p-4 bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/60 border border-teal-500/40 rounded-xl flex items-start space-x-3 shadow-inner">
        <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400 shrink-0">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">
            AI Sales Memory Recommendation
          </h4>
          <p className="text-xs text-slate-200 font-semibold mt-0.5 leading-relaxed">
            "Similar enterprise customers with CFO scrutiny responded positively to ROI-focused proposals with a phased Q1 implementation. Consider using the same approach with {dealName}."
          </p>
        </div>
      </div>

    </div>
  );
};
