"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, AlertTriangle, ShieldCheck, BarChart3, PenTool, Layout } from "lucide-react";

export const features = [
    {
        title: "Intelligent Review",
        desc: "Context-aware analysis that goes beyond keyword matching.",
        icon: FileSearch,
    },
    {
        title: "Risk Detection",
        desc: "Proactively identify potential liabilities before signing.",
        icon: AlertTriangle,
    },
    {
        title: "Clause Insights",
        desc: "Deep dive into specific clauses with historical comparison.",
        icon: ShieldCheck,
    },
    {
        title: "Analytics",
        desc: "Track contract performance and turnaround times.",
        icon: BarChart3,
    },
    {
        title: "Smart Drafting",
        desc: "Draft new contracts from scratch using natural language.",
        icon: PenTool,
    },
    {
        title: "Template Access",
        desc: "Unlimited access to our premium legal template database.",
        icon: Layout,
    },
];

export default function WhyChooseLVX() {
    return (
        <div className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e2259] dark:text-[#b4bed7]">
                        Why Legal Teams Choose LVX
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                        Built for accuracy, designed for efficiency.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item) => (
                        <Card
                            key={item.title}
                            className="border-0 shadow-md cursor-pointer hover:scale-[1.02]  transition-transform duration-700 hover:shadow-xl  hover:bg-blue-200 dark:bg-[#171717] hover:dark:bg-[#272626]"
                        >
                            <CardContent className="p-6 space-y-3">
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <item.icon className="text-blue-600 dark:text-blue-400" size={20} />
                                </div>
                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
