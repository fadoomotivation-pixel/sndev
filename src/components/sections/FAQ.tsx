"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Shree Jee Vatika an approved project?",
    answer: "Yes, Shree Jee Vatika holds firm registry, mutation (Dakhil Kharij), NOC papers, and is 80c approved. It is an entirely legal, secure, and white-labeled township.",
  },
  {
    question: "What is the booking amount?",
    answer: "The booking amount is exactly 30% of the total plot value. The base rate starts at ₹16,000 per Sq. Yard.",
  },
  {
    question: "Are there any hidden interest charges on EMI?",
    answer: "Absolutely not. We offer 0% Interest EMIs spanning across 12 to 24 months. You only pay for the exact value of the plot.",
  },
  {
    question: "How far is the site from key temples?",
    answer: "The site is strategically located just 15 minutes away from Govardhan Parikrama, Radha Rani Mandir (Barsana), and Vrindavan Prem Mandir.",
  },
  {
    question: "What security features are provided?",
    answer: "The township is fully gated with a grand 40-foot main entrance, 24x7 security personnel, and exclusive CCTV access provided directly to every property owner's smartphone.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white text-[#10243E]" id="faq">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Absolute Transparency
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'border-[#CDA85A] shadow-lg shadow-[#CDA85A]/5' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-white"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <span className="text-[#CDA85A] shrink-0">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4 bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
