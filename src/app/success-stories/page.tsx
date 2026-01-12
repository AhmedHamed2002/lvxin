"use client";

import  { useState } from "react";
import { Search, Heart, Rocket, Star, ChevronLeft, ChevronRight, FilterX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";

    const STORIES = [
    {
        id: 1,
        author: "Ahmed Hassan",
        company: "Global Tech Solutions",
        role: "Legal Counsel",
        rating: 5,
        content: "LVXIN has completely transformed how our team handles contract reviews. What used to take days now takes hours with incredible accuracy.",
        category: "Contract Analysis",
        date: "Dec 15, 2025"
    },
    {
        id: 2,
        author: "Sarah Chen",
        company: "Innovate Law Firm",
        role: "Senior Partner",
        rating: 4.5,
        content: "The AI legal consultation tool is surprisingly sophisticated. It provides a solid baseline for our research and has saved us countless billable hours.",
        category: "Legal Consultation",
        date: "Dec 10, 2025"
    },
    {
        id: 3,
        author: "Robert Smith",
        company: "Compliance Edge",
        role: "Compliance Officer",
        rating: 5,
        content: "Safety first! The risk management insights we get from LVXIN are top-notch. It catches potential issues we might have missed manually.",
        category: "Risk Management",
        date: "Nov 28, 2025"
    },
    {
        id: 4,
        author: "Fatima Al-Sayed",
        company: "MENA Ventures",
        role: "COO",
        rating: 5,
        content: "Managing compliance across multiple jurisdictions was a nightmare. LVXIN simplified the entire process for us.",
        category: "Compliance",
        date: "Nov 15, 2025"
    },
    {
        id: 5,
        author: "Michael Brown",
        company: "StartUp Hub",
        role: "Founder",
        rating: 4,
        content: "As a startup, we couldn't afford a full legal team. LVXIN gave us the confidence to handle our initial legal needs independently.",
        category: "Other",
        date: "Oct 20, 2025"
    },
    {
        id: 6,
        author: "Linda Johnson",
        company: "Retail Giant Corp",
        role: "In-house Counsel",
        rating: 5,
        content: "The scale at which LVXIN operates is impressive. It handles thousands of documents for our retail chain without breaking a sweat.",
        category: "Contract Analysis",
        date: "Oct 05, 2025"
    }
    ];

    const STATS = [
        { label: "Success Stories", value: "150+", id: "total-stories" },
        { label: "Avg Rating", value: "4.9", id: "avg-rating" },
        { label: "Satisfaction", value: "99%", id: "satisfied-customers" },
        { label: "Companies", value: "500+", id: "companies-served" },
    ];

export default function SuccessStoriesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");

    return (
        <div className="min-h-screen bg-[#f2f3f7] dark:bg-[#11131c] text-gray-900 dark:text-gray-100 italic transition-all duration-300">
            
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden px-8">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('/assets/images/terms-and-conditions.png')"}}>
                    <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-700/20 to-blue-950/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4 pt-10 text-center text-white">
                    <Badge variant="outline" className="px-4 py-1 text-white border-white/30 bg-white/10 backdrop-blur-md mb-6">
                        Success Stories
                    </Badge>
                    <h1 className="text-2xl md:text-4xl font-bold mb-5 drop-shadow-lg">
                        Real Stories from Real Customers
                    </h1>
                    <p className="max-w-4xl mx-auto text-sm md:text-lg opacity-90 leading-relaxed drop-shadow-md italic">
                        Discover how businesses across industries are transforming their legal operations 
                        with LVXIN's AI-powered legal technology platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white gap-2 h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all border-none font-semibold">
                            <Heart className="w-4 h-4" /> Share Your Story
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2 h-12 cursor-pointer px-8 rounded-full border-white/30 text-blue-700 dark:text-white hover:bg-white/10 backdrop-blur-md transition-all font-semibold">
                            <Rocket className="w-4 h-4" /> Try Our Platform
                        </Button>
                    </div>
                </div>
            </section>

        <main className="container mx-auto px-6 md:px-12 py-16 md:py-24 max-w-7xl">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20 -mt-12 relative z-20">
                {STATS.map((stat) => (
                <Card key={stat.id} className="border-none bg-white/90 dark:bg-slate-800/90 hover:bg-[#e7eaf0] dark:hover:bg-slate-800/60 cursor-pointer backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Filters Section */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="w-full md:w-1/3 space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Search Stories</label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                    placeholder="Keyword, company or role..." 
                    className="pl-10 h-11 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl focus-visible:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                </div>
                
                <div className="w-full md:w-1/4 space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Category</label>
                <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="h-11 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="contract">Contract Analysis</SelectItem>
                    <SelectItem value="legal">Legal Consultation</SelectItem>
                    <SelectItem value="risk">Risk Management</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <div className="w-full md:w-1/4 space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Minimum Rating</label>
                <Select defaultValue="0">
                    <SelectTrigger className="h-11 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <SelectValue placeholder="All Ratings" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="0">All Ratings</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <Button variant="ghost" className="h-11 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 gap-2 shrink-0 rounded-xl">
                <FilterX className="w-4 h-4" /> Clear
                </Button>
            </div>
            </section>

            {/* Stories Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {STORIES.map((story) => (
                <Card key={story.id} className="group overflow-hidden cursor-pointer border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-1.5 w-full bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="p-6">
                    <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-slate-100 dark:border-slate-800 shadow-sm">
                        <AvatarFallback className="bg-linear-to-br from-blue-500 to-indigo-600 text-white font-bold">
                        {story.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100">{story.author}</CardTitle>
                        <CardDescription className="text-sm text-slate-500 dark:text-slate-400 font-medium">{story.role} at {story.company}</CardDescription>
                    </div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-4">
                    <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(story.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-700"}`} 
                        />
                    ))}
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">{story.rating}/5</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">"{story.content}"</p>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
                    <Badge variant="secondary" className="bg-blue-100/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-none px-3">
                    {story.category}
                    </Badge>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-tighter">{story.date}</span>
                </CardFooter>
                </Card>
            ))}
            </section>

            {/* Pagination Section */}
            <section className="flex items-center justify-center gap-2">
                <Button variant="outline" size="icon" disabled className="rounded-xl">
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="default" className="bg-blue-600 rounded-xl w-10 cursor-pointer">1</Button>
                <Button variant="outline" className="rounded-xl w-10 cursor-pointer">2</Button>
                <Button variant="outline" className="rounded-xl w-10 cursor-pointer">3</Button>
                <span className="text-slate-400 mx-1 cursor-pointer">...</span>
                <Button variant="outline" className="rounded-xl w-10 cursor-pointer">10</Button>
                <Button variant="outline" size="icon" className="rounded-xl cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </section>
        </main>

        <Footer />
        </div>
    );
}
