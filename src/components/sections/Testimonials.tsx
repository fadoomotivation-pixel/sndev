"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Arvind Mehta",
    location: "New Delhi",
    text: "The completely transparent process and the instant CCTV access to my plot gave me absolute peace of mind. Truly a premium experience.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mrs. Kavita Singh",
    location: "Gurugram",
    text: "Being just 15 minutes from Prem Mandir was the deciding factor. The 40-foot entrance is stunning. A world-class township.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Rajiv & Sunita Sharma",
    location: "Noida",
    text: "0% Interest EMIs and guaranteed firm registry made our decision effortless. SN Developers delivered exactly what they promised.",
    rating: 5,
    videoThumbnail: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=600&auto=format&fit=crop",
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-gray-50 text-[#10243E]" id="testimonials">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center mb-20">
          <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Legacy of Trust
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Hear From Our Residents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Video Thumbnail Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#10243E]">
                <Image 
                  src={testimonial.videoThumbnail} 
                  alt={testimonial.name}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play fill="white" className="text-white ml-1" size={24} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <div className="flex gap-1 mb-6 text-[#CDA85A]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 min-h-[80px] leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm font-bold text-[#CDA85A] uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
