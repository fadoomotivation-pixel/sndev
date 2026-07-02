"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={clsx("text-2xl font-bold tracking-tight uppercase", isScrolled ? "text-[#10243E]" : "text-white")}>
          SN Developers
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Overview", "Projects", "Location", "ROI", "About"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={clsx(
                "text-sm font-medium uppercase tracking-widest hover:text-[#CDA85A] transition-colors",
                isScrolled ? "text-[#10243E]" : "text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-[#CDA85A] text-[#10243E] font-bold text-sm tracking-wider uppercase hover:bg-[#b89345] transition-all rounded-sm"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-[#10243E]" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-[#10243E]" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {["Overview", "Projects", "Location", "ROI", "About"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#10243E] uppercase tracking-wider"
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#10243E] text-white font-bold text-center text-sm tracking-wider uppercase mt-4"
              >
                Inquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
