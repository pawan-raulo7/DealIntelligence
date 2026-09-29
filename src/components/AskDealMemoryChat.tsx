import React, { useState } from 'react';
import { Brain, Send, Sparkles, MessageSquare, Database, User } from 'lucide-react';
import { ChatMessage, Deal } from '../types';
import { askDealMemory } from '../services/aiService';

interface AskDealMemoryChatProps {
  deal: Deal;
}

export const AskDealMemoryChat: React.FC<AskDealMemoryChatProps> = ({ deal }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(deal.chatHistory || []);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What are the customer's biggest concerns?",
    "Who is the decision maker?",
    "Why is this deal at risk?",
    "What happened in the last meeting?",
    "What worked in similar deals?",
    "Have we seen this objection before?"
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = askDealMemory(deal, textToSend);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        memoryReferences: aiResponse.references
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">Ask DealMemory</h2>
            <p className="text-xs text-slate-400">Ask anything about this deal's history and company sales memory</p>
          </div>
        </div>
        <span className="text-[11px] text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20 flex items-center gap-1 font-medium">
          <Sparkles className="w-3 h-3" /> AI Active
        </span>
      </div>

      {/* Suggested Questions Carousel/Chips */}
      <div>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
          Suggested Questions
        </span>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs rounded-xl font-medium transition-all text-left flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3 h-3 text-teal-400 shrink-0" />
              <span>{q}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="min-h-[220px] max-h-[360px] overflow-y-auto space-y-4 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        {messages.length === 0 ? (
          <div className="h-40 flex flex-col items-center justify-center text-slate-500 space-y-2">
            <Brain className="w-8 h-8 opacity-40 text-teal-400" />
            <p className="text-xs font-medium">Click a suggested question or type your prompt below to query deal memory.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs space-y-2 shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-slate-950 font-semibold rounded-tr-none'
                    : 'bg-slate-900 border border-slate-700/80 text-slate-100 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 text-[10px] opacity-75 pb-1 border-b border-white/10">
                  <span className="font-bold">{msg.sender === 'user' ? 'Alex Rivera' : 'DealMemory AI'}</span>
                  <span>{msg.timestamp}</span>
                </div>

                <p className="leading-relaxed font-sans">{msg.text}</p>

                {/* Memory Source References */}
                {msg.memoryReferences && msg.memoryReferences.length > 0 && (
                  <div className="pt-2 border-t border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-teal-400 flex items-center gap-1 uppercase tracking-wider">
                      <Database className="w-3 h-3" /> Memory Sources Referenced:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {msg.memoryReferences.map((ref, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-950 text-slate-300 border border-teal-500/30 text-[10px] font-medium rounded-md"
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))
        )}

        {isTyping && (
          <div className="flex items-center space-x-2 text-xs text-teal-400 bg-slate-900 p-3 rounded-xl border border-slate-800 w-fit">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Searching deal timeline & 42 historical memory records...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center space-x-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask anything about ${deal.name}...`}
          className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60"
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl text-xs shadow-md transition-all flex items-center space-x-1.5"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ask</span>
        </button>
      </form>

    </div>
  );
};
