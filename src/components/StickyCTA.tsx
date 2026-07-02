"use client";

import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down a bit
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-[9999]"
        >
          <a
            href="https://wa.me/917678122463"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-[#10243E] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border border-[#CDA85A]/30 relative"
          >
            <div className="absolute inset-0 rounded-full border border-[#CDA85A] animate-ping opacity-20"></div>
            <MessageSquare size={24} className="text-[#CDA85A]" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-white text-[#10243E] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-100">
              Chat with Sales
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
