import React from 'react';
import { Users, Building, ShieldCheck, Mail, Phone, ChevronRight, DollarSign } from 'lucide-react';
import { Customer } from '../types';
import { INITIAL_CUSTOMERS } from '../data/mockData';

interface CustomersViewProps {
  onSelectCustomerDeal?: (customerName: string) => void;
}

export const CustomersView: React.FC<CustomersViewProps> = ({ onSelectCustomerDeal }) => {
  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
            <Users className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-black text-slate-100 tracking-tight">
            Customer Accounts & Memory Profiles
          </h1>
        </div>
        <p className="text-sm text-slate-400 font-medium">
          Key accounts with long-term memory logs and executive relationship tracking.
        </p>
      </div>

      {/* Customer List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {INITIAL_CUSTOMERS.map((cust) => (
          <div
            key={cust.id}
            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4 hover:border-teal-500/40 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-100">{cust.name}</h3>
                <span className="text-xs text-slate-400 font-medium">{cust.industry}</span>
              </div>
              <span className="px-2.5 py-1 bg-slate-950 text-teal-300 border border-teal-500/30 text-xs font-bold rounded-lg">
                {cust.tier}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Total ARR</span>
                <span className="text-sm font-bold text-emerald-400 flex items-center">
                  <DollarSign className="w-3.5 h-3.5" />
                  {cust.totalArr.toLocaleString()}
                </span>
              </div>

              <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Account Health</span>
                <span className="text-xs font-bold text-emerald-400">{cust.healthScore}/100</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-1 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Key Contact</span>
              <p className="text-slate-200 font-bold">{cust.primaryContact} ({cust.contactRole})</p>
              <p className="text-[11px] text-teal-400 flex items-center gap-1">
                <Mail className="w-3 h-3" /> {cust.email}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
              <span>Active deals: {cust.activeDealsCount}</span>
              <span>Last active: {cust.lastActivity}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
