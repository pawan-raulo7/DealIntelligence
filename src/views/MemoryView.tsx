import React, { useState } from 'react';
import { 
  Database, 
  Users, 
  ShieldAlert, 
  Swords, 
  Trophy, 
  XCircle, 
  UserCheck
} from 'lucide-react';
import { MOCK_OBJECTION_PATTERNS, MOCK_COMPETITOR_PATTERNS, MOCK_PERSONA_PATTERNS } from '../data/mockData';

export const MemoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'objections' | 'competitors' | 'personas'>('objections');

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
            <Database className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight">
            Company Sales Memory
          </h1>
        </div>
        <p className="text-sm text-slate-400 font-medium">
          Everything your sales team has learned across 42 historical deals, automatically extracted into reusable intelligence.
        </p>
      </div>

      {/* Category Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Customers</span>
            <Users className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-slate-100">42</p>
          <span className="text-[10px] text-slate-500">Tracked history</span>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Objections</span>
            <ShieldAlert className="w-4 h-4 text-rose-400" />
          </div>
          <p className="text-2xl font-black text-slate-100">18</p>
          <span className="text-[10px] text-slate-500">Pattern matched</span>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Competitors</span>
            <Swords className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-slate-100">11</p>
          <span className="text-[10px] text-slate-500">Battlecards synced</span>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Winning Strategies</span>
            <Trophy className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-slate-100">27</p>
          <span className="text-[10px] text-slate-500">Proven playbooks</span>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-1 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase">Lost Deals</span>
            <XCircle className="w-4 h-4 text-slate-500" />
          </div>
          <p className="text-2xl font-black text-slate-100">14</p>
          <span className="text-[10px] text-slate-500">Post-mortem data</span>
        </div>

      </div>

      {/* Memory Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('objections')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'objections'
              ? 'bg-teal-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          Objection Patterns ({MOCK_OBJECTION_PATTERNS.length})
        </button>
        <button
          onClick={() => setActiveTab('competitors')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'competitors'
              ? 'bg-teal-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          Competitor Intelligence ({MOCK_COMPETITOR_PATTERNS.length})
        </button>
        <button
          onClick={() => setActiveTab('personas')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'personas'
              ? 'bg-teal-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          Buyer Persona Playbooks ({MOCK_PERSONA_PATTERNS.length})
        </button>
      </div>

      {/* Memory Content Cards */}
      {activeTab === 'objections' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_OBJECTION_PATTERNS.map((obj) => (
            <div key={obj.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4 hover:border-teal-500/40 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Objection Pattern
                  </span>
                  <h3 className="text-base font-extrabold text-slate-100 mt-2">"{obj.title}"</h3>
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  {obj.appearedInCount} deals
                </span>
              </div>

              <p className="text-xs text-slate-400">{obj.description}</p>

              <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl space-y-1 text-xs">
                <span className="font-bold text-teal-300 block">Successful Response:</span>
                <p className="text-slate-200 font-semibold">{obj.successfulResponse}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-bold text-emerald-400">
                <span>Success Rate</span>
                <span className="text-sm">{obj.successRate}% Win Rate</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'competitors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MOCK_COMPETITOR_PATTERNS.map((comp) => (
            <div key={comp.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4 hover:border-teal-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Swords className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-black text-slate-100">{comp.competitor}</h3>
                </div>
                <span className="text-xs font-bold text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  Appeared in {comp.appearedInCount} deals
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                  <span className="font-bold text-slate-400 block mb-0.5">Common Prospect Concern:</span>
                  <span className="text-slate-200 font-semibold">{comp.commonConcern}</span>
                </div>

                <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                  <span className="font-bold text-teal-300 block mb-0.5">Winning Strategy:</span>
                  <span className="text-slate-100 font-semibold">{comp.successfulResponse}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-extrabold text-emerald-400">
                <span>Win Rate vs {comp.competitor}</span>
                <span className="text-sm">{comp.winRate}%</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'personas' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MOCK_PERSONA_PATTERNS.map((pers) => (
            <div key={pers.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4 hover:border-teal-500/40 transition-all">
              <div className="flex items-center space-x-2.5">
                <UserCheck className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="text-base font-extrabold text-slate-100">{pers.persona}</h3>
                  <span className="text-[11px] text-slate-400 font-medium">{pers.role}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                  <span className="font-bold text-slate-400 block mb-0.5">Primary Concern:</span>
                  <span className="text-slate-200 font-medium">{pers.commonConcern}</span>
                </div>

                <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                  <span className="font-bold text-teal-300 block mb-0.5">Effective Messaging:</span>
                  <span className="text-slate-100 font-semibold">{pers.effectiveMessaging}</span>
                </div>
              </div>

              <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-[11px] text-slate-400">
                <strong className="text-slate-200">Buyer Priority:</strong> {pers.buyerPriority}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
