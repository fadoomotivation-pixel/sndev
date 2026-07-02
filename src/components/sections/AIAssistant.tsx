"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AIAssistant() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({ purpose: "", budget: "", timeframe: "" });

  const handleNext = (key: string, value: string) => {
    setPreferences({ ...preferences, [key]: value });
    setStep(step + 1);
  };

  return (
    <section className="py-32 bg-[#10243E] text-white relative overflow-hidden" id="ai-assistant">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-[#CDA85A]/10 rounded-full mb-6">
            <Sparkles className="text-[#CDA85A]" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            AI Property Assistant
          </h2>
          <p className="text-white/60 text-lg">
            Answer 3 quick questions. Let our algorithm find the perfect plot for your lifestyle and investment goals.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-xl shadow-2xl relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">What is your primary goal?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button onClick={() => handleNext("purpose", "Investment")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] hover:border-[#CDA85A] transition-all font-bold text-lg group">
                    High ROI Investment
                    <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </button>
                  <button onClick={() => handleNext("purpose", "Living")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] hover:border-[#CDA85A] transition-all font-bold text-lg group">
                    Building a Future Home
                    <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">What is your preferred plot size?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button onClick={() => handleNext("budget", "50-100")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] transition-all font-bold">
                    50 - 100 Sq. Yd.
                  </button>
                  <button onClick={() => handleNext("budget", "150-250")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] transition-all font-bold">
                    150 - 250 Sq. Yd.
                  </button>
                  <button onClick={() => handleNext("budget", "Premium")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] transition-all font-bold">
                    Premium Estate
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full justify-center"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">When do you plan to book?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button onClick={() => handleNext("timeframe", "Immediate")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] transition-all font-bold">
                    Immediately
                  </button>
                  <button onClick={() => handleNext("timeframe", "Future")} className="p-6 border border-white/10 rounded-2xl hover:bg-[#CDA85A] hover:text-[#10243E] transition-all font-bold">
                    Within 3-6 Months
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col h-full justify-center items-center text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500" size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4 text-[#CDA85A]">Perfect Match Found!</h3>
                <p className="text-white/70 mb-8 max-w-lg">
                  Based on your interest in a <strong className="text-white">{preferences.purpose}</strong> plot 
                  of <strong className="text-white">{preferences.budget}</strong> size, we highly recommend our 
                  <strong className="text-[#CDA85A]"> Signature Corner Lots</strong>. 
                </p>
                <a 
                  href={`https://wa.me/917678122463?text=Hi! My AI match recommended a ${preferences.purpose} plot of ${preferences.budget} size.`}
                  target="_blank"
                  className="px-10 py-4 bg-[#CDA85A] text-[#10243E] font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-xl"
                >
                  Claim Your Match on WhatsApp
                </a>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Progress Bar */}
          {step < 4 && (
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/5 rounded-b-3xl overflow-hidden">
              <motion.div 
                className="h-full bg-[#CDA85A]"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
