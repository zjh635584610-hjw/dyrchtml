import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { askRongBao } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '你好呀！我是蓉宝，关于我们的研究报告，你有什么想问的吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await askRongBao(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-paper border border-gold rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px]"
          >
            {/* Header */}
            <div className="bg-primary p-6 flex justify-between items-center border-b border-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-gold overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/panda-ink/100/100" 
                    alt="Rong Bao" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg">蓉宝问答助手</h3>
                  <span className="text-gold text-[10px] uppercase tracking-widest">AI Research Assistant</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gold/20"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gold text-white rounded-tr-none' 
                        : 'bg-white border border-gold/20 text-primary rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gold/20 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 className="animate-spin text-gold" size={20} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-gold/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="问问蓉宝关于研究报告的事吧..."
                  className="w-full bg-paper border border-gold/30 rounded-full py-4 pl-6 pr-16 text-sm focus:outline-none focus:border-gold transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-tighter">
                Powered by Gemini AI • 蓉宝学术助手
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
