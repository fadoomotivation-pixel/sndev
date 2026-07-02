"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Mathura-Vrindavan is the Next Big Real Estate Hotspot",
    category: "Market Insights",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
    date: "July 2026",
  },
  {
    title: "Understanding 80c Approval and Legal Compliance in Plotting",
    category: "Investment Guide",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    date: "June 2026",
  },
  {
    title: "The Airport Metro Project: Impact on Local Property Values",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    date: "May 2026",
  }
];

export default function Blog() {
  return (
    <section className="py-32 bg-gray-50 text-[#10243E]" id="insights">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-black">
              Investment Insights
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-[#CDA85A] transition-colors">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-400 text-sm font-medium mb-4">{post.date}</p>
                <h3 className="text-xl font-bold mb-6 leading-tight group-hover:text-[#CDA85A] transition-colors">
                  {post.title}
                </h3>
                <span className="font-bold text-sm uppercase tracking-widest text-[#10243E] flex items-center gap-2">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
