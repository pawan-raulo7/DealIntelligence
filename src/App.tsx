import React, { useState } from 'react';
import { Deal, InteractionType } from './types';
import { INITIAL_DEALS } from './data/mockData';
import { Header, TabType } from './components/Header';
import { AddInteractionModal } from './components/AddInteractionModal';
import { Toast, ToastProps } from './components/Toast';

import { DashboardView } from './views/DashboardView';
import { DealsListView } from './views/DealsListView';
import { DealDetailView } from './views/DealDetailView';
import { CustomersView } from './views/CustomersView';
import { MemoryView } from './views/MemoryView';
import { InsightsView } from './views/InsightsView';

export function App() {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [activeTab, setActiveTab] = useState<TabType | 'deal-detail'>('dashboard');
  const [selectedDealId, setSelectedDealId] = useState<string>('globex-systems');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<{ message: string; type?: 'success' | 'info' | 'warning' } | null>(null);

  const selectedDeal = deals.find((d) => d.id === selectedDealId) || deals[0];

  const handleSelectDeal = (deal: Deal) => {
    setSelectedDealId(deal.id);
    setActiveTab('deal-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveInteraction = (
    dealId: string,
    newInteraction: {
      type: InteractionType;
      date: string;
      title: string;
      notes: string;
      author: string;
    }
  ) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) => {
        if (deal.id === dealId) {
          const updatedTimeline = [
            ...deal.timeline,
            {
              id: `int-${Date.now()}`,
              date: newInteraction.date,
              title: newInteraction.title,
              type: newInteraction.type,
              summary: newInteraction.notes,
              details: newInteraction.notes,
              author: newInteraction.author,
              keyTakeaway: 'Extracted new timeline shift & customer requirement',
              sentiment: 'warning' as const
            }
          ];

          // Dynamic memory update based on user input
          const updatedMemory = {
            ...deal.memorySummary,
            timelineShift: 'Timeline shifted to smaller pilot phase in Q1 based on recent note',
            buyingSignal: 'Requested pilot proposal structure'
          };

          return {
            ...deal,
            timeline: updatedTimeline,
            memorySummary: updatedMemory,
            lastInteraction: 'Just now',
            riskReason: `Updated based on new note: ${newInteraction.notes.slice(0, 80)}...`
          };
        }
        return deal;
      })
    );

    setToast({
      message: 'Memory updated successfully. AI Risk & Pre-Call Brief re-indexed!',
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans flex flex-col">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab === 'deal-detail' ? 'deals' : activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {activeTab === 'dashboard' && (
          <DashboardView
            deals={deals}
            onSelectDeal={handleSelectDeal}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'deals' && (
          <DealsListView
            deals={deals}
            onSelectDeal={handleSelectDeal}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'deal-detail' && selectedDeal && (
          <DealDetailView
            deal={selectedDeal}
            onBack={() => setActiveTab('deals')}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />
        )}

        {activeTab === 'customers' && <CustomersView />}

        {activeTab === 'memory' && <MemoryView />}

        {activeTab === 'insights' && <InsightsView />}

      </main>

      {/* Add Interaction Modal */}
      <AddInteractionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        deals={deals}
        onSaveInteraction={handleSaveInteraction}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 DealMemory AI — Your sales team's memory, powered by AI.</p>
          <div className="flex items-center space-x-4">
            <span className="text-teal-400/80 font-medium">Demo Mode (Local Data)</span>
            <span>•</span>
            <button 
              onClick={() => handleSelectDeal(deals[0])}
              className="text-slate-400 hover:text-teal-300 underline transition-colors"
            >
              Open Globex Systems Demo
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
