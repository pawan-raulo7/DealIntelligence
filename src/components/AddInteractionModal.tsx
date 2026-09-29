import React, { useState } from 'react';
import { X, Sparkles, Calendar, User, MessageSquare, AlertCircle } from 'lucide-react';
import { Deal, InteractionType } from '../types';

interface AddInteractionModalProps {
  isOpen: boolean;
  onClose: () => void;
  deals: Deal[];
  onSaveInteraction: (dealId: string, interaction: {
    type: InteractionType;
    date: string;
    title: string;
    notes: string;
    author: string;
  }) => void;
}

export const AddInteractionModal: React.FC<AddInteractionModalProps> = ({
  isOpen,
  onClose,
  deals,
  onSaveInteraction
}) => {
  const [selectedDealId, setSelectedDealId] = useState<string>(deals[0]?.id || 'globex-systems');
  const [type, setType] = useState<InteractionType>('meeting');
  const [date, setDate] = useState<string>('Sept 29, 2026');
  const [title, setTitle] = useState<string>('Executive Follow-up Call');
  const [notes, setNotes] = useState<string>(
    'Customer said implementation timeline is their biggest concern and asked whether we can start with a smaller pilot.'
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDealId || !notes.trim()) return;

    onSaveInteraction(selectedDealId, {
      type,
      date,
      title: title || `${type.toUpperCase()} Interaction`,
      notes,
      author: 'Alex Rivera'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">Simulate New Deal Memory</h3>
              <p className="text-xs text-slate-400">Add an interaction to update AI deal risk & memory summary</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Customer / Deal Select */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-teal-400" /> Select Customer / Deal
            </label>
            <select
              value={selectedDealId}
              onChange={(e) => setSelectedDealId(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500"
            >
              {deals.map((deal) => (
                <option key={deal.id} value={deal.id}>
                  {deal.name} ({deal.stage} - ${deal.value.toLocaleString()})
                </option>
              ))}
            </select>
          </div>

          {/* Type & Date Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Interaction Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as InteractionType)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500"
              >
                <option value="meeting">Meeting</option>
                <option value="call">Call</option>
                <option value="pricing">Pricing Discussion</option>
                <option value="objection">Objection</option>
                <option value="stakeholder">Stakeholder Check-in</option>
                <option value="competitor">Competitor Mention</option>
                <option value="email">Email Thread</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-400" /> Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500"
                placeholder="e.g. Sept 29, 2026"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Title / Headline
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500"
              placeholder="Brief title of interaction"
            />
          </div>

          {/* Notes / Details */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-teal-400" /> Interaction Notes & Quote
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-teal-500 placeholder:text-slate-600"
              placeholder="What did the customer say? Key objections, requests, timeline shifts..."
            />
          </div>

          {/* Notice Banner */}
          <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-xs text-teal-300 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-teal-400" />
            <span>
              DealMemory AI will parse these notes in real-time, update the deal risk score, and synthesize new pre-call brief suggestions.
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 rounded-xl text-xs font-bold shadow-lg shadow-teal-950 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Save & Update Memory</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
