import React from 'react';
import { 
  Phone, 
  Mail, 
  Users, 
  DollarSign, 
  AlertCircle, 
  Target, 
  Swords, 
  Calendar, 
  Clock, 
  FileText, 
  MessageSquareQuote 
} from 'lucide-react';
import { DealInteraction, InteractionType } from '../types';

interface DealTimelineProps {
  timeline: DealInteraction[];
}

export const DealTimeline: React.FC<DealTimelineProps> = ({ timeline }) => {
  const getInteractionIcon = (type: InteractionType) => {
    switch (type) {
      case 'call':
        return { icon: <Phone className="w-4 h-4 text-emerald-400" />, bg: 'bg-emerald-500/20 border-emerald-500/30' };
      case 'email':
        return { icon: <Mail className="w-4 h-4 text-cyan-400" />, bg: 'bg-cyan-500/20 border-cyan-500/30' };
      case 'meeting':
        return { icon: <Users className="w-4 h-4 text-blue-400" />, bg: 'bg-blue-500/20 border-blue-500/30' };
      case 'pricing':
        return { icon: <DollarSign className="w-4 h-4 text-amber-400" />, bg: 'bg-amber-500/20 border-amber-500/30' };
      case 'objection':
        return { icon: <AlertCircle className="w-4 h-4 text-rose-400" />, bg: 'bg-rose-500/20 border-rose-500/30' };
      case 'stakeholder':
        return { icon: <Target className="w-4 h-4 text-purple-400" />, bg: 'bg-purple-500/20 border-purple-500/30' };
      case 'competitor':
        return { icon: <Swords className="w-4 h-4 text-rose-400" />, bg: 'bg-rose-500/20 border-rose-500/30' };
      default:
        return { icon: <FileText className="w-4 h-4 text-slate-400" />, bg: 'bg-slate-800 border-slate-700' };
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">Deal Memory Timeline</h2>
            <p className="text-xs text-slate-400">Chronological history extracted across calls, emails, and meetings</p>
          </div>
        </div>
        <span className="px-2.5 py-1 text-xs font-semibold bg-slate-800 text-slate-300 rounded-full border border-slate-700">
          {timeline.length} Recorded Events
        </span>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {timeline.map((item) => {
          const style = getInteractionIcon(item.type);
          return (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-6 top-0.5 w-6 h-6 rounded-full border ${style.bg} flex items-center justify-center ring-4 ring-slate-900 z-10 transition-transform group-hover:scale-110`}>
                {style.icon}
              </div>

              {/* Event Content Card */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all space-y-2">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-teal-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="text-xs font-bold text-slate-200">• {item.title}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Logged by {item.author}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm font-medium text-slate-200">
                  {item.summary}
                </p>

                {/* Details / Exact Quote */}
                {item.details && (
                  <p className="text-xs text-slate-400 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80 italic">
                    "{item.details}"
                  </p>
                )}

                {/* Key Takeaway Badge */}
                {item.keyTakeaway && (
                  <div className="pt-1 flex items-center space-x-2">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded">
                      AI Takeaway
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {item.keyTakeaway}
                    </span>
                  </div>
                )}

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
