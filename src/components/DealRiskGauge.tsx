import React from 'react';
import { AlertTriangle, ShieldAlert, ShieldCheck, ShieldAlert as ShieldWarning, TrendingUp } from 'lucide-react';
import { RiskLevel } from '../types';

interface DealRiskGaugeProps {
  score: number;
  level: RiskLevel;
  reason: string;
}

export const DealRiskGauge: React.FC<DealRiskGaugeProps> = ({ score, level, reason }) => {
  const getBadgeColors = () => {
    if (score >= 70 || level === 'High') {
      return {
        bg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
        gaugeBg: 'bg-rose-500',
        text: 'text-rose-400',
        border: 'border-rose-500/40',
        icon: <ShieldAlert className="w-5 h-5 text-rose-400" />
      };
    }
    if (score >= 40 || level === 'Medium') {
      return {
        bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
        gaugeBg: 'bg-amber-500',
        text: 'text-amber-400',
        border: 'border-amber-500/40',
        icon: <ShieldWarning className="w-5 h-5 text-amber-400" />
      };
    }
    return {
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      gaugeBg: 'bg-emerald-500',
      text: 'text-emerald-400',
      border: 'border-emerald-500/40',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    };
  };

  const style = getBadgeColors();

  return (
    <div className={`p-5 rounded-2xl bg-slate-900/90 border ${style.border} shadow-xl backdrop-blur-md relative overflow-hidden`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Score & Level */}
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center shrink-0">
            <span className={`text-2xl font-extrabold ${style.text}`}>{score}</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">/ 100</span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Deal Risk</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${style.bg} flex items-center space-x-1`}>
                {style.icon}
                <span>{level} Risk</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-200 mt-1 max-w-xl">
              "{reason}"
            </p>
          </div>
        </div>

        {/* Right: Visual Gauge Meter */}
        <div className="w-full md:w-64 space-y-1.5 shrink-0">
          <div className="flex justify-between text-xs font-semibold text-slate-400">
            <span>Low Risk</span>
            <span>Med</span>
            <span>High Risk</span>
          </div>
          <div className="w-full h-3 bg-slate-950 rounded-full p-0.5 border border-slate-800 flex items-center">
            <div 
              className={`h-full rounded-full transition-all duration-700 ${style.gaugeBg}`} 
              style={{ width: `${score}%` }} 
            />
          </div>
          <div className="flex items-center justify-end text-[11px] text-slate-400 space-x-1">
            <TrendingUp className="w-3 h-3 text-rose-400" />
            <span>Updated from last interaction</span>
          </div>
        </div>

      </div>
    </div>
  );
};
