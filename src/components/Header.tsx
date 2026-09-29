import React from 'react';
import { 
  Brain, 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Database, 
  Lightbulb, 
  Search, 
  Bell, 
  Plus, 
  Sparkles 
} from 'lucide-react';

export type TabType = 'dashboard' | 'deals' | 'customers' | 'memory' | 'insights';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenAddModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAddModal,
  searchQuery,
  setSearchQuery
}) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'deals', label: 'Deals', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'customers', label: 'Customers', icon: <Users className="w-4 h-4" /> },
    { id: 'memory', label: 'Memory', icon: <Database className="w-4 h-4" /> },
    { id: 'insights', label: 'Insights', icon: <Lightbulb className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Product Name */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer select-none shrink-0" 
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 via-teal-600 to-emerald-700 flex items-center justify-center shadow-lg shadow-teal-950/60 ring-1 ring-teal-400/30 shrink-0">
              <Brain className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <div className="flex items-center space-x-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white font-sans whitespace-nowrap">
                  DealMemory <span className="text-teal-400">AI</span>
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full items-center gap-1 shrink-0 whitespace-nowrap">
                  <Sparkles className="w-2.5 h-2.5" /> Demo Mode
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-normal hidden lg:block whitespace-nowrap">
                Your sales team's memory, powered by AI
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions & User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            
            {/* Search Input */}
            <div className="relative hidden xl:block w-40 2xl:w-56 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search deal memory..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/50"
              />
            </div>

            {/* Add Interaction Button */}
            <button
              onClick={onOpenAddModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-md shadow-teal-950/40 transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">+ Add Interaction</span>
            </button>

            {/* Notifications */}
            <button 
              className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900 rounded-xl transition-colors shrink-0"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
            </button>

            {/* User Avatar */}
            <div className="flex items-center space-x-2 pl-2 border-l border-slate-800 shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-teal-500 flex items-center justify-center text-xs font-bold text-slate-950 ring-2 ring-slate-800 shrink-0">
                AR
              </div>
              <div className="hidden 2xl:block text-left shrink-0">
                <p className="text-xs font-semibold text-slate-200 leading-none">Alex Rivera</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Enterprise AE</p>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-1 px-2 text-[11px] font-medium transition-colors ${
                activeTab === item.id ? 'text-teal-400 font-bold' : 'text-slate-400'
              }`}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
