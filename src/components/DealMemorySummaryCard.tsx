import React from 'react';
import { 
  Brain, 
  Flame, 
  ShieldAlert, 
  UserCheck, 
  Swords, 
  Calendar, 
  Zap 
} from 'lucide-react';
import { DealMemorySummary } from '../types';

interface DealMemorySummaryCardProps {
  summary: DealMemorySummary;
}

export const DealMemorySummaryCard: React.FC<DealMemorySummaryCardProps> = ({ summary }) => {
  const items = [
    {
      label: 'Main Pain Point',
      value: summary.mainPainPoint,
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      border: 'border-amber-500/30 bg-amber-500/5'
    },
    {
      label: 'Main Objection',
      value: summary.mainObjection,
      icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
      border: 'border-rose-500/30 bg-rose-500/5'
    },
    {
      label: 'Key Stakeholder',
      value: summary.keyStakeholder,
      icon: <UserCheck className="w-4 h-4 text-purple-400" />,
      border: 'border-purple-500/30 bg-purple-500/5'
    },
    {
      label: 'Competitor',
      value: summary.competitor,
      icon: <Swords className="w-4 h-4 text-red-400" />,
      border: 'border-red-500/30 bg-red-500/5'
    },
    {
      label: 'Timeline Shift',
      value: summary.timelineShift,
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      border: 'border-cyan-500/30 bg-cyan-500/5'
    },
    {
      label: 'Buying Signal',
      value: summary.buyingSignal,
      icon: <Zap className="w-4 h-4 text-emerald-400" />,
      border: 'border-emerald-500/30 bg-emerald-500/5'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-6 shadow-2xl space-y-5 relative overflow-hidden">
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 relative z-10">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 shadow-md font-bold">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-slate-100 tracking-tight">What AI Remembers</h2>
            <p className="text-xs text-teal-300/80 font-medium">Persisted long-term deal context synthesized from 5 interactions</p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 px-2.5 py-1 bg-teal-500/10 border border-teal-500/30 rounded-md">
          Auto-Synced
        </span>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 relative z-10">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className={`p-3.5 rounded-xl border ${item.border} backdrop-blur-sm transition-all hover:scale-[1.01]`}
          >
            <div className="flex items-center space-x-2 mb-1">
              {item.icon}
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-100 pl-6">
              {item.value}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
