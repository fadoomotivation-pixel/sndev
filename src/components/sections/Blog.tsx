"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/posts";

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
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#10243E]">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <h3 className="font-bold text-xl mb-6 leading-snug group-hover:text-[#CDA85A] transition-colors flex-1">
                  {post.title}
                </h3>
                <Link href={`/blog/${post.id}`} className="mt-auto inline-flex items-center text-[#CDA85A] font-bold uppercase tracking-widest text-sm hover:text-[#10243E] transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
