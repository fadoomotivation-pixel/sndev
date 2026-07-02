"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FounderVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-white text-[#10243E] relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait Container with Premium Framing */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md aspect-[3/4]"
          >
            {/* Decorative Gold Frame */}
            <div className="absolute inset-0 border border-[#CDA85A] translate-x-6 translate-y-6 z-0 hidden md:block"></div>
            
            {/* Image Wrapper */}
            <div className="relative z-10 w-full h-full overflow-hidden bg-[#10243E] shadow-2xl group">
              <Image 
                src="/images/rahul_bhati.jpg" 
                alt="Mr. Rahul Goud - Founder & Director" 
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#10243E]/20 group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#10243E] to-transparent pt-24 pb-6 px-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg">Mr. Rahul Goud</p>
                <p className="text-[#CDA85A] text-sm uppercase tracking-widest">Founder & Director</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#CDA85A]"></div>
              <span className="text-[#CDA85A] font-bold uppercase tracking-widest text-sm">Visionary Leadership</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Building a Legacy of Trust and Excellence.
            </h2>
            
            <p className="text-[#10243E]/70 text-lg mb-6 leading-relaxed">
              "At SN Developers, our goal has never been just to sell land. Our mission is to build completely secure, highly-appreciating communities that offer unparalleled luxury in the spiritual heart of India."
            </p>
            
            <p className="text-[#10243E]/70 text-lg mb-10 leading-relaxed">
              Every detail of Shree Jee Vatika—from the 40-foot grand entrance to the completely gated 8-acre environment—has been meticulously designed to ensure our investors enjoy the absolute pinnacle of secure, modern living.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <p className="font-bold text-xl">Mr. Rahul Goud</p>
                <p className="text-[#CDA85A] text-sm font-semibold uppercase tracking-widest">Founder & Director, SN Developers</p>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-[#CDA85A] flex items-center justify-center">
                <span className="text-[#10243E] font-black text-2xl font-manrope">RG</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
