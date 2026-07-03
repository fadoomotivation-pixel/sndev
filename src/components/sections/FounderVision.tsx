"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FounderVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const founders = [
    {
      name: "Mr. Rahul Goud",
      title: "Co-Founder",
      image: "/images/rahul_bhati.jpg"
    },
    {
      name: "Mr. Nitin Bhati",
      title: "Founder & Director",
      image: "/images/nitin_bhati.png"
    }
  ];

  return (
    <section className="py-24 bg-white text-[#10243E] relative overflow-hidden border-t border-gray-100" id="about">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Visionary Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Building a Legacy of Trust
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            "At SN Developers, our goal has never been just to sell land. Our mission is to build completely secure, highly-appreciating communities that offer unparalleled luxury in the spiritual heart of India."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {founders.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:border-[#CDA85A] transition-colors duration-500">
                <Image 
                  src={founder.image} 
                  alt={founder.name} 
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">{founder.name}</h3>
              <p className="text-[#CDA85A] text-xs font-bold uppercase tracking-widest">{founder.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
