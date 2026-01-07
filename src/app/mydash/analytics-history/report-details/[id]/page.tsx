'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, RefreshCw, AlertTriangle, Sparkles, Eye } from "lucide-react"
import StatsCards from "@/components/analytics-history/stats/StatsCards";
import ClausesSummary from "@/components/analytics-history/clauses/ClausesSummary";
import SuggestionsSummary from "@/components/analytics-history/suggestions/SuggestionsSummary";
import RisksSummary from "@/components/analytics-history/risks/RisksSummary";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import RefineWithAI from "@/components/refine-with-ai";

interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

export default function ReportDetails() {
    const params = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        const newMsg: Message = { id: Date.now(), role: "user", text: input };
        setMessages([...messages, newMsg]);
        setInput("");
        
        // Mock response
        setTimeout(() => {
            const botMsg: Message = { id: Date.now(), role: "assistant", text: "I'm reviewing your request regarding the contract details." };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div>
            <div className="p-6 flex flex-col gap-2 mb-3 bg-white dark:bg-[#0d0f15] rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="flex justify-center md:justify-between items-center flex-wrap gap-x-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Report Details
                    </h3>

                    <div className="flex flex-wrap gap-2 justify-center mt-6 md:mt-0 md:justify-start">
                        <Button className="mt-2 mx-2 cursor-pointer bg-white hover:bg-gray-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-black dark:text-white border border-gray-300 dark:border-gray-700">
                        <RefreshCw size={16} className="mr-2" />
                            Re-Analyze
                        </Button>

                        <Button className="mt-2 cursor-pointer bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white">
                        <Download size={16} className="mr-2" />
                            Download Full Report
                        </Button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap gap-2 mt-6 mb-10 p-5 bg-blue-100 dark:bg-[#11131b] rounded-2xl">
                    {/* File Name */}
                    <Card className="rounded-2xl flex-grow-1 min-w-64 bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                        <CardHeader>
                        <CardTitle className="flex flex-col gap-y-3 justify-center items-center text-gray-600 dark:text-gray-300">
                            <i className="fa-regular fa-file text-gray-400 dark:text-gray-400 text-xl"></i>
                            <p className="text-sm">File Name</p>
                        </CardTitle>
                        </CardHeader>
                        <Link href={`/mydash/analytics-history/report-details/review-final-contract/${params.id}`} className="underline text-yellow-500 dark:text-yellow-600 flex justify-center">
                            <CardContent className="flex items-center gap-x-2  text-sm font-bold text-center text-yellow-500 dark:text-yellow-600">
                                <Eye size={20}/>
                                <span>Master Service Agreement_v3.pdf</span>
                            </CardContent>
                        </Link>
                    </Card>

                    {/* Analysis Date */}
                    <Card className="rounded-2xl flex-grow-1 min-w-64 bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                        <CardHeader>
                        <CardTitle className="flex flex-col gap-y-3 justify-center items-center text-gray-600 dark:text-gray-300">
                            <i className="fa-solid fa-chart-line text-gray-400 dark:text-gray-400 text-xl"></i>
                            <p className="text-sm">Analysis Date</p>
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm font-bold text-center text-blue-900 dark:text-blue-400">
                        Nov 10, 2025, 11:21 PM
                        </CardContent>
                    </Card>

                    {/* Pages Processed */}
                    <Card className="rounded-2xl flex-grow-1 min-w-64 bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                        <CardHeader>
                        <CardTitle className="flex flex-col gap-y-3 justify-center items-center text-gray-600 dark:text-gray-300">
                            <i className="fa-regular fa-copy text-gray-400 dark:text-gray-400 text-xl"></i>
                            <p className="text-sm">Pages Processed</p>
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm font-bold text-center text-blue-900 dark:text-blue-400">
                        24
                        </CardContent>
                    </Card>

                    {/* Words Processed */}
                    <Card className="rounded-2xl flex-grow-1 min-w-64 bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                        <CardHeader>
                        <CardTitle className="flex flex-col gap-y-3 justify-center items-center text-gray-600 dark:text-gray-300">
                            <i className="fa-solid fa-file-signature text-gray-400 dark:text-gray-400 text-xl"></i>
                            <p className="text-sm">Words Processed</p>
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm font-bold text-center text-blue-900 dark:text-blue-400">
                        8.623
                        </CardContent>
                    </Card>
                </div>
            </div>
                
            <div className="p-6 flex flex-col gap-2 bg-white dark:bg-[#0d0f15] rounded-lg shadow border border-gray-200 dark:border-gray-700"> 
                <Tabs defaultValue="one" className="w-full max-w-7xl mx-auto">
                    
                    {/* Tabs Header */}
                    <div className="border-b border-gray-200 pb-3">
                        <TabsList className="grid grid-cols-4 bg-transparent gap-2 p-1 w-full md:max-w-3xl">
                        {/* Tab 1 */}
                        <TabsTrigger value="one" className="flex items-center cursor-pointer justify-center gap-2 rounded-md py-2 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-xs">
                                1
                            </span>
                            <span className="hidden sm:inline">Summary</span>
                        </TabsTrigger>

                        {/* Tab 2 */}
                        <TabsTrigger value="two" className="flex items-center cursor-pointer justify-center gap-2 rounded-md py-2 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-xs">
                                2
                            </span>
                            <span className="hidden sm:inline">Suggestions</span>
                        </TabsTrigger>

                        {/* Tab 3 */}
                        <TabsTrigger value="three" className="flex items-center cursor-pointer justify-center gap-2 rounded-md py-2 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            <AlertTriangle size={16} />
                            <span className="hidden sm:inline">Risk Details</span>
                        </TabsTrigger>

                         {/* Tab 4 */}
                        <TabsTrigger value="four" className="flex items-center cursor-pointer justify-center gap-y-2 gap-x-1 rounded-md py-2 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            <Sparkles size={12} />
                            <span className="hidden sm:inline text-xs">Refine with AI</span>
                        </TabsTrigger>
                        </TabsList>
                    </div>
                    
                    {/* Summary */}
                    <div className="my-4">
                        <TabsContent value="one">
                            <StatsCards />
                            <ClausesSummary />
                        </TabsContent>
                    </div>
                    
                    {/* Suggestions */}
                    <TabsContent value="two">
                        <SuggestionsSummary />
                    </TabsContent>

                    {/* Risks */}
                    <TabsContent value="three">
                        <RisksSummary />
                    </TabsContent>

                    {/* Refine with AI */}
                    <TabsContent value="four" className="min-h-[500px] flex flex-col">
                        <RefineWithAI 
                            messages={messages}
                            input={input}
                            setInput={setInput}
                            sendMessage={sendMessage}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
