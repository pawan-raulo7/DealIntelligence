import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-slate-800 border border-teal-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md animate-bounce-subtle">
      {type === 'success' && <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />}
      {type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
      {type === 'info' && <Info className="w-5 h-5 text-cyan-400 shrink-0" />}
      <span className="text-sm font-medium pr-2">{message}</span>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-200 transition-colors p-1"
        aria-label="Close Toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
