"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "50 Sq. Yards",
    dimensions: "18 x 25 Dimensions",
    price: "₹8,00,000",
    booking: "₹2,40,000",
    emi12: "₹46,666",
    emi24: "₹23,333",
  },
  {
    title: "100 Sq. Yards",
    dimensions: "20 x 45 Dimensions",
    price: "₹16,00,000",
    booking: "₹480,000",
    emi12: "₹93,333",
    emi24: "₹46,666",
    featured: true,
  },
  {
    title: "150 Sq. Yards",
    dimensions: "30 x 45 Dimensions",
    price: "₹24,00,000",
    booking: "₹720,000",
    emi12: "₹140,000",
    emi24: "₹70,000",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-gray-50 text-[#10243E]" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            The Investment
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            Accessible Luxury
          </h2>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100">
            <span className="text-lg">Base Rate: <strong className="text-[#10243E]">₹16,000 / Sq. Yd</strong></span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="text-lg">Booking: <strong className="text-[#CDA85A]">30% Upfront</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl p-8 transition-shadow duration-300 ${
                project.featured 
                  ? "border-2 border-[#CDA85A] shadow-2xl shadow-[#CDA85A]/10 scale-105 z-10" 
                  : "border border-gray-100 shadow-xl shadow-gray-200/50"
              }`}
            >
              {project.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CDA85A] text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Signature Plot
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-3xl font-black mb-2">{project.title}</h3>
                <p className="text-gray-500 font-medium">{project.dimensions}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-black text-[#10243E] mb-2">{project.price}</div>
                <div className="text-sm font-bold text-[#CDA85A] uppercase tracking-wider">
                  30% Booking: {project.booking}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  0% Interest EMI
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 font-medium">12 Months</span>
                  <span className="font-bold text-[#10243E]">{project.emi12}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">24 Months</span>
                  <span className="font-bold text-[#10243E]">{project.emi24}/mo</span>
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                project.featured
                  ? "bg-[#10243E] text-white hover:bg-[#0c1a2d]"
                  : "bg-gray-100 text-[#10243E] hover:bg-gray-200"
              }`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
