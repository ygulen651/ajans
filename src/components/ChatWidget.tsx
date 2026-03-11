import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { chatWidgetConfig } from '../config';
import gsap from 'gsap';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleWidget = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Entrance animation for the floating button
    gsap.from(buttonRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Animate opening
      gsap.to(widgetRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
        display: "flex",
      });
      
      gsap.fromTo(optionsRef.current?.children || [], 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.3, delay: 0.1, ease: "power2.out" }
      );
    } else {
      // Animate closing
      gsap.to(widgetRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (widgetRef.current) {
             widgetRef.current.style.display = "none";
          }
        }
      });
    }
  }, [isOpen]);

  const handleOptionClick = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${chatWidgetConfig.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Widget Container */}
      <div 
        ref={widgetRef}
        className="mb-4 hidden flex-col w-[320px] sm:w-[350px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden shadow-[#facc15]/10"
        style={{ opacity: 0, transform: 'translateY(20px) scale(0.95)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#facc15] to-[#eab308] p-5 text-white flex justify-between items-center relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
           <div className="flex items-center gap-3 relative z-10">
             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                <MessageCircle size={20} className="text-white" />
             </div>
             <div>
               <h4 className="font-bold text-lg leading-tight">Canlı Destek</h4>
               <p className="text-white/80 text-xs">{chatWidgetConfig.greetingHeader}</p>
             </div>
           </div>
        </div>
        
        {/* Options List */}
        <div ref={optionsRef} className="p-4 flex flex-col gap-2 max-h-[400px] overflow-y-auto custom-scrollbar bg-[#0f0f0f]">
          {chatWidgetConfig.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.text)}
              className="group text-left p-4 rounded-xl text-sm md:text-base border border-white/5 bg-white/5 hover:bg-[#facc15]/10 hover:border-[#facc15]/30 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-gray-200 group-hover:text-white pr-4">{option.text}</span>
              <ExternalLink size={16} className="text-[#facc15] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={toggleWidget}
        className="w-16 h-16 rounded-full bg-[#facc15] text-black shadow-lg shadow-[#facc15]/20 flex items-center justify-center hover:scale-110 hover:shadow-[#facc15]/40 transition-all duration-300 relative group"
        aria-label="Toggle chat options"
      >
        {/* Ping Animation */}
        <div className="absolute inset-0 rounded-full bg-[#facc15] animate-ping opacity-20 group-hover:opacity-40" />
        
        {isOpen ? (
          <X size={28} strokeWidth={2} />
        ) : (
          <MessageCircle size={28} strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
