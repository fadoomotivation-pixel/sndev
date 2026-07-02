"use client";

import { Award, ShieldCheck, Trophy, Verified } from "lucide-react";

export default function Awards() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
            <ShieldCheck size={48} className="text-[#10243E]" />
            <span className="font-bold text-xs uppercase tracking-widest text-[#10243E]">Firm Registry</span>
          </div>
          <div className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
            <Verified size={48} className="text-[#10243E]" />
            <span className="font-bold text-xs uppercase tracking-widest text-[#10243E]">100% Mutation</span>
          </div>
          <div className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
            <Trophy size={48} className="text-[#10243E]" />
            <span className="font-bold text-xs uppercase tracking-widest text-[#10243E]">80c Approved</span>
          </div>
          <div className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
            <Award size={48} className="text-[#10243E]" />
            <span className="font-bold text-xs uppercase tracking-widest text-[#10243E]">Premium Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
