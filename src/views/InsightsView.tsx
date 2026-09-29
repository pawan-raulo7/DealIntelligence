import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MOCK_SALES_INSIGHTS } from '../data/mockData';

export const InsightsView: React.FC = () => {
  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight">
            Sales Intelligence & Meta Insights
          </h1>
        </div>
        <p className="text-sm text-slate-400 font-medium">
          Macro sales insights synthesized across overall deal memory to improve team win rates.
        </p>
      </div>

      {/* Insights Cards List */}
      <div className="space-y-6">
        {MOCK_SALES_INSIGHTS.map((insight) => (
          <div
            key={insight.id}
            className="p-6 bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-3xl shadow-xl space-y-4 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-sm">
                  {insight.number}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400">
                    Insight {insight.number}
                  </span>
                  <h3 className="text-xl font-black text-slate-100">{insight.title}</h3>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> {insight.trend}
                </span>
                <span className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-400 text-xs font-medium rounded-full">
                  {insight.affectedDealsCount} Deals Affected
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              "{insight.summary}"
            </p>

            {/* Actionable Advice Card */}
            <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-2xl flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-300">
                  Recommended Action for Sales Reps
                </h4>
                <p className="text-xs text-slate-100 font-semibold mt-0.5">
                  {insight.actionableAdvice}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
