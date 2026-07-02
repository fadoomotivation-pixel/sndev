"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2024", quarter: "Q1", title: "Land Acquisition", desc: "Secured 8 acres of prime real estate on Chhata Govardhan Road.", status: "completed" },
  { year: "2024", quarter: "Q3", title: "MVDA & Authority Approvals", desc: "Obtained all necessary clearances, Firm Registry, Mutation, and 80c.", status: "completed" },
  { year: "2025", quarter: "Q2", title: "Infrastructure Development", desc: "Laying 100ft and 60ft pass roads, internal 25ft roads, and underground sewage.", status: "in-progress" },
  { year: "2025", quarter: "Q4", title: "Grand Entrance & Clubhouse", desc: "Completion of the 40-foot massive gateway and luxury clubhouse.", status: "upcoming" },
  { year: "2026", quarter: "Q2", title: "Handover Phase 1", desc: "First batch of ultra-luxury plot owners receive full possession and CCTV access.", status: "upcoming" },
];

export default function Timeline() {
  return (
    <section className="py-32 bg-[#10243E] text-white border-y border-white/10" id="timeline">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Construction Progress
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The Journey to Luxury
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We deliver on our promises. Track the exact progress of Shree Jee Vatika's development, from land acquisition to final handover.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center group">
                
                {/* Desktop Left Side (Year) */}
                <div className={`hidden md:block w-1/2 pr-16 text-right transition-all duration-300 ${item.status === 'completed' ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="text-3xl font-black text-[#CDA85A] font-manrope">{item.year}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/60">{item.quarter}</div>
                </div>

                {/* Node */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-[#10243E] md:-translate-x-1/2 z-10 transition-colors duration-500"
                     style={{ backgroundColor: item.status === 'completed' ? '#CDA85A' : item.status === 'in-progress' ? '#ffffff' : 'transparent' }}>
                </div>

                {/* Content */}
                <div className="pl-16 md:pl-0 md:w-1/2 md:pl-16">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`p-8 rounded-2xl border transition-all duration-300 ${
                      item.status === 'in-progress' 
                        ? 'bg-white/5 border-[#CDA85A]/50 shadow-2xl shadow-[#CDA85A]/10' 
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="text-2xl font-black text-[#CDA85A] font-manrope">{item.year}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/60">{item.quarter}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    
                    {item.status === 'in-progress' && (
                      <div className="mt-6 flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CDA85A] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CDA85A]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#CDA85A]">Currently Active</span>
                      </div>
                    )}
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
