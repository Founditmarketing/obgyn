"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useChat } from "@/hooks/useChat";

export function ChatWidget() {
  const { user } = useAuth();
  const { messages, sendMessage } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Only show chat widget to logged-in users who have a portal
  if (!user) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const msg = inputValue;
    setInputValue("");
    await sendMessage(msg);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#3C4A3E] text-[#F9F7F3] rounded-full shadow-xl flex items-center justify-center z-50"
            aria-label="Open Nurse Concierge"
            suppressHydrationWarning
          >
            <MessageCircle className="w-7 h-7" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-[#F9F7F3] rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E8E3] z-50"
          >
            {/* Header */}
            <div className="bg-[#3C4A3E] text-[#F9F7F3] p-5 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Nurse Concierge
                </h3>
                <p className="text-[#A0B2A1] text-xs">Replies typically within 5 mins</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#2A342B] rounded-full transition-colors text-[#A0B2A1] hover:text-white"
                suppressHydrationWarning
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F9F7F3]">
              {messages.length === 0 && (
                <div className="text-center text-[#6D7D6D] text-sm mt-10">
                  <p>Welcome to your direct line to our clinical team.</p>
                  <p className="mt-2">How can we support you today?</p>
                </div>
              )}
              
              {messages.map((msg) => {
                const isMe = msg.senderId === user.uid;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] p-4 text-sm ${
                      isMe 
                        ? "bg-[#3C4A3E] text-[#F9F7F3] rounded-2xl rounded-tr-sm" 
                        : "bg-white text-[#2C312C] border border-[#E2E8E3] rounded-2xl rounded-tl-sm shadow-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#E2E8E3] flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message securely..."
                className="flex-1 bg-[#F9F7F3] border border-[#D1DDD2] rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-3 bg-[#3C4A3E] text-white rounded-full hover:bg-[#2A342B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
                suppressHydrationWarning
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
