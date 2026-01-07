"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Share2, ArrowLeft, Eye } from "lucide-react";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import Footer from "@/components/footer";
import PageHero from "@/components/PageHero";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
    const { slug } = use(params);

    const post = {
        title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
        excerpt: "A comprehensive guide to streamlining your contract review process with proven techniques and AI-powered tools.",
        content: `
        <p>Artificial Intelligence is no longer just a buzzword in the legal industry; it's a transformative force that's redefine how legal professionals approach their daily tasks. In this detailed exploration, we dive deep into the future of contract analysis and how AI is leading the charge.</p>
        
        <h3>The Evolution of Contract Review</h3>
        <p>Historically, contract review was a labor-intensive process, often consuming hundreds of hours from specialized legal teams. Today, sophisticated machine learning models can scan thousands of pages in seconds, identifying key clauses, potential risks, and deviations from standard terminology with remarkable precision.</p>
        
        <blockquote>
            "AI doesn't replace lawyers; it empowers them to focus on high-value strategic work by handling the repetitive, data-heavy lifting."
        </blockquote>

        <h3>Key Benefits of AI-Powered Analysis</h3>
        <ul>
            <li><strong>Speed:</strong> Reduction in review time by up to 80%.</li>
            <li><strong>Accuracy:</strong> Elimination of human fatigue-related errors during long review sessions.</li>
            <li><strong>Consistency:</strong> Ensuring all contracts adhere to the same organizational standards.</li>
            <li><strong>Cost-Efficiency:</strong> Significant reduction in legal overhead for large-scale projects.</li>
        </ul>

        <p>As we move towards 2025, the integration of Large Language Models (LLMs) specifically trained on legal datasets will further enhance these capabilities, allowing for even more nuanced understanding of complex legal frameworks.</p>
        `,
        image: "/assets/images/blog1.jpg",
        categories: ["AI Analysis", "Legal Tech"],
        author: {
        name: "Dr. Catherine Smith",
        image: "/assets/images/avatar1.png",
        role: "Senior Legal Analyst"
        },
        date: "October 15, 2025",
        readTime: "12 min read",
        views: "1.2k"
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title, href: "#" },
    ];

    return (
        <div className="min-h-screen bg-[#f2f3f7] dark:bg-[#11131c] font-sans overflow-x-hidden">
        <main className="pt-16">
            <PageHero title="Blog Post" breadcrumbs={breadcrumbs} />

            <section className="bg-[#f2f3f7] dark:bg-[#11131c] px-4 py-16 border-t-[3px] border-dotted border-blue-200 dark:border-blue-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="w-full lg:w-2/3">
                    <article className="bg-white dark:bg-[#252a3a] rounded-3xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800">
                    {/* Post Image */}
                    <div className="relative h-[300px] md:h-[450px] w-full">
                        <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                        {post.categories.map((cat, idx) => (
                            <Badge key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-none px-3 py-1 text-xs font-semibold">
                            {cat}
                            </Badge>
                        ))}
                        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 ml-auto">
                            <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                            </div>
                        </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-8 leading-tight">
                        {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center justify-between pb-10 mb-10 border-b border-neutral-100 dark:border-neutral-800">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-14 w-14">
                            <AvatarImage src={post.author.image} alt={post.author.name} />
                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                            <p className="text-base font-bold text-neutral-900 dark:text-white">{post.author.name}</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.author.role} • {post.date}</p>
                            </div>
                        </div>
                        <button className="p-3 rounded-full bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                            <Share2 className="h-5 w-5" />
                        </button>
                        </div>

                        {/* Content */}
                        <div 
                        className="prose prose-lg max-w-none dark:prose-invert 
                            prose-headings:text-neutral-900 dark:prose-headings:text-white 
                            prose-p:text-neutral-600 dark:prose-p:text-neutral-400 
                            prose-strong:text-neutral-900 dark:prose-strong:text-white
                            prose-blockquote:border-blue-600 dark:prose-blockquote:bg-blue-900/10 
                            prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300
                            prose-li:text-neutral-600 dark:prose-li:text-neutral-400"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Footer / Sharing */}
                        <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                        <Link 
                            href="/blog" 
                            className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                        </div>
                    </div>
                    </article>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3">
                    <BlogSidebar />
                </div>
                </div>
            </div>
            </section>
        </main>
        <Footer />
        </div>
    );
}
