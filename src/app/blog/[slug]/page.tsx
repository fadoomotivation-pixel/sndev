import { blogPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Markdown from 'react-markdown';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-[#10243E]">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
            <Link href="/#blog" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm">
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#CDA85A] text-[#10243E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-white/60 font-medium text-sm tracking-wider">
                {post.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight max-w-4xl drop-shadow-xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose prose-lg md:prose-xl prose-headings:font-black prose-headings:text-[#10243E] prose-h3:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-[#10243E]">
            <Markdown>{post.content}</Markdown>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-gray-200 text-center">
            <h3 className="text-2xl font-black text-[#10243E] mb-6">Interested in learning more?</h3>
            <a 
              href="https://wa.me/917678122463"
              target="_blank"
              className="inline-block px-10 py-4 bg-[#10243E] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#CDA85A] hover:text-[#10243E] transition-colors duration-300 rounded-sm"
            >
              Consult with our experts
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
