import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertOctagon, 
  Target, 
  Lightbulb, 
  Users, 
  RefreshCw, 
  Copy, 
  Check 
} from 'lucide-react';
import { PreCallBrief } from '../types';

interface PreCallBriefCardProps {
  dealName: string;
  brief: PreCallBrief;
  onRefreshBrief?: () => void;
}

export const PreCallBriefCard: React.FC<PreCallBriefCardProps> = ({
  dealName,
  brief,
  onRefreshBrief
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      if (onRefreshBrief) onRefreshBrief();
    }, 600);
  };

  const handleCopy = () => {
    const content = `PRE-CALL BRIEF: ${dealName}
What happened: ${brief.whatHappened}
What changed: ${brief.whatChanged}
Who matters: ${brief.whoMatters}
What they care about: ${brief.whatTheyCareAbout.join(', ')}
What to avoid: ${brief.whatToAvoid}
Recommended approach: ${brief.recommendedApproach}`;

    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-teal-500/40 rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-teal-900/50">
            <Sparkles className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
              AI Pre-Call Brief
            </h2>
            <p className="text-xs text-slate-400">
              Generated in 3 seconds from full memory history before your next call
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {hasGenerated && (
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors flex items-center space-x-1.5 border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Brief'}</span>
            </button>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-teal-950 transition-all flex items-center space-x-2 active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Synthesizing Memory...' : 'Generate Pre-Call Brief'}</span>
          </button>
        </div>
      </div>

      {/* Brief Content */}
      {isGenerating ? (
        <div className="py-12 flex flex-col items-center justify-center space-y-3">
          <RefreshCw className="w-8 h-8 text-teal-400 animate-spin" />
          <p className="text-sm font-semibold text-teal-300">Scanning 42 past deal logs & Globex interaction stream...</p>
        </div>
      ) : (
        <div className="space-y-5">
          
          {/* Subheader */}
          <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-between text-xs text-teal-300 font-semibold">
            <span>Before you speak with {dealName}</span>
            <span className="text-[11px] text-slate-400 font-normal">Last updated: {brief.generatedAt}</span>
          </div>

          {/* Core Brief Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* What Happened */}
            <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1.5">
              <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>What Happened</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {brief.whatHappened}
              </p>
            </div>

            {/* What Changed */}
            <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1.5">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <RefreshCw className="w-4 h-4" />
                <span>What Changed</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {brief.whatChanged}
              </p>
            </div>

            {/* Who Matters */}
            <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1.5">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Who Matters</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {brief.whoMatters}
              </p>
            </div>

          </div>

          {/* Key Checklist & Concerns */}
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-4 h-4 text-cyan-400" /> What They Care About Most
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {brief.whatTheyCareAbout.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* What to Avoid & Recommended Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* What to Avoid */}
            <div className="p-4 bg-rose-950/20 border border-rose-500/30 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4" />
                <span>What to Avoid</span>
              </div>
              <p className="text-xs text-rose-200/90 font-semibold leading-relaxed">
                {brief.whatToAvoid}
              </p>
            </div>

            {/* Recommended Approach */}
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Recommended Approach</span>
              </div>
              <p className="text-xs text-emerald-200/90 font-semibold leading-relaxed">
                {brief.recommendedApproach}
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
