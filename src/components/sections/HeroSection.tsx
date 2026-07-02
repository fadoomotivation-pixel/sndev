"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#10243E]" id="hero">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full opacity-60"
          poster="/hero-bg.png"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#10243E]/50 via-transparent to-[#10243E]/90" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-[#CDA85A] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
            A Super Luxury Project
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          Shree Jee Vatika
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 font-light"
        >
          Elevated Living in the Spiritual Heart of Mathura, Vrindavan & Govardhan.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#projects" className="px-10 py-4 bg-[#CDA85A] text-[#10243E] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
            Explore Plots
          </a>
          <a href="https://wa.me/918076146988" target="_blank" className="px-10 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#10243E] transition-colors duration-300">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
