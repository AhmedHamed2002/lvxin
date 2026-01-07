"use client";

import { MessageSquare, LifeBuoy, Scale, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  { name: "AI Analysis", count: 24, icon: MessageSquare, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
  { name: "Contract Tips", count: 18, icon: LifeBuoy, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" },
  { name: "Legal Tech", count: 31, icon: Scale, color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20" },
  { name: "Compliance", count: 12, icon: ShieldCheck, color: "text-teal-500 bg-teal-50 dark:bg-teal-900/20" },
  { name: "Industry Trends", count: 15, icon: TrendingUp, color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20" },
];

const recentPosts = [
  { title: "10 AI-Powered Contract Analysis Tips for 2025", date: "Dec 4, 2025", href: "#" },
  { title: "Understanding Smart Contract Automation", date: "Dec 3, 2025", href: "#" },
  { title: "Legal Tech Trends Transforming Law Firms", date: "Nov 29, 2025", href: "#" },
  { title: "How AI Reduces Contract Review Time by 80%", date: "Nov 27, 2025", href: "#" },
];

export function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-8 w-full">
      {/* Categories Section */}
      <div className="bg-white dark:bg-[#252a3a] p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Categories</h3>
        <div className="flex flex-col gap-x-4 gap-y-2">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href="#" 
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.name}
                </span>
              </div>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                ({cat.count})
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white dark:bg-[#252a3a] p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Recent Posts</h3>
        <div className="flex flex-col gap-x-4 ">
          {recentPosts.map((post, index) => (
            <Link key={index} href={post.href} className="group">
              <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h4>
              <span className="text-xs text-neutral-500 dark:text-neutral-500">{post.date}</span>
              {index !== recentPosts.length - 1 && (
                <div className="my-1 border-b border-gray-300 dark:border-gray-600" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="relative bg-white dark:bg-[#252a3a] px-8 py-5 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 text-center overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Scale className="h-24 w-24 text-blue-600" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="h-16 w-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white mb-3">AI-Powered Legal Analysis</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Transform your contract review process with cutting-edge AI technology.
          </p>
          <Button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-blue-600/20 group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
