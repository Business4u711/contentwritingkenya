import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, User, ChevronRight } from "lucide-react";

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Executive AI Assistant ready. Are you looking to scale organic revenue, or do you need a technical audit?" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: "assistant", content: "Understood. Our enterprise strategies are built for exactly that scale. Would you like to schedule a confidential strategy session with our executive team, or see a case study similar to your industry?"}
      ]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-gold text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-[#0f0f13] border border-white/10 shadow-2xl overflow-hidden round-xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-gold/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm leading-tight">Growth AI</h4>
                  <p className="text-brand-gold/60 text-[10px] uppercase font-bold tracking-widest">Active</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 pb-8 space-y-4 bg-gradient-to-b from-transparent to-brand-black/50 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm font-light leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-white/10 text-white' 
                      : 'bg-brand-blue/10 border border-brand-blue/20 text-white/90'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {/* Optional Quick Replies */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mt-4 items-start pl-2">
                  <button onClick={() => setInput("I need an SEO Audit")} className="text-xs bg-white/5 border border-white/10 px-3 py-2 text-white/70 hover:bg-white/10 transition-colors flex items-center gap-2">
                     I need an SEO Audit <ChevronRight className="w-3 h-3 text-brand-gold" />
                  </button>
                  <button onClick={() => setInput("What is your pricing?")} className="text-xs bg-white/5 border border-white/10 px-3 py-2 text-white/70 hover:bg-white/10 transition-colors flex items-center gap-2">
                     What is your pricing? <ChevronRight className="w-3 h-3 text-brand-gold" />
                  </button>
                </div>
              )}
              
              <div ref={endRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/50 backdrop-blur">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors font-light"
                />
                <button type="submit" disabled={!input.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors disabled:opacity-50">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
