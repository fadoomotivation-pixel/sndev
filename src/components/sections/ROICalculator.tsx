"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Activity, ArrowRight } from "lucide-react";

export default function ROICalculator() {
  const [plotSize, setPlotSize] = useState(100);
  const [years, setYears] = useState(5);
  const [appreciationRate, setAppreciationRate] = useState(12);

  const baseRate = 15000;
  const initialInvestment = plotSize * baseRate;
  const futureValue = initialInvestment * Math.pow(1 + appreciationRate / 100, years);
  const totalProfit = futureValue - initialInvestment;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section className="py-32 bg-white text-[#10243E] border-t border-gray-100" id="roi">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Wealth Generation
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Projected ROI Calculator
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real estate in the Mathura-Vrindavan belt is seeing unprecedented appreciation due to massive government infrastructure projects. Calculate your potential returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase tracking-wider">Plot Size (Sq. Yards)</label>
                <span className="font-black text-[#CDA85A]">{plotSize}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={plotSize}
                onChange={(e) => setPlotSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10243E]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase tracking-wider">Investment Horizon (Years)</label>
                <span className="font-black text-[#CDA85A]">{years} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10243E]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-sm uppercase tracking-wider">Expected Annual Appreciation</label>
                <span className="font-black text-[#CDA85A]">{appreciationRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10243E]"
              />
            </div>
            
            <p className="text-xs text-gray-400 italic">
              *Projections are estimates based on regional historical data and planned developments (Airport Metro, Smart City).
            </p>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10243E] to-[#0c1a2d] rounded-2xl transform rotate-2 scale-105 opacity-10"></div>
            <motion.div 
              layout
              className="relative bg-[#10243E] text-white p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Initial Investment</p>
                  <p className="text-3xl font-black">{formatCurrency(initialInvestment)}</p>
                </div>
                <Activity className="text-[#CDA85A]" size={40} />
              </div>
              
              <div className="mb-10">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Estimated Future Value</p>
                <motion.p 
                  key={futureValue}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-[#CDA85A] break-words"
                >
                  {formatCurrency(futureValue)}
                </motion.p>
              </div>

              <div className="flex items-center justify-between bg-white/5 p-6 rounded-xl border border-white/10">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Total Profit</p>
                  <p className="text-xl font-bold text-green-400">+{formatCurrency(totalProfit)}</p>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp size={20} />
                  <span className="font-bold">+{((futureValue / initialInvestment - 1) * 100).toFixed(0)}%</span>
                </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-[#CDA85A] text-[#10243E] font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                Reserve Plot Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
