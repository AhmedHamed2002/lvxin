'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Save, Undo, Redo, Clock, LayoutTemplate, EyeOff, Eye, PenTool, Upload, Building2, MapPin, Mail, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ReviewFinalContractPage() {
    const [showBranding, setShowBranding] = useState(false);
    const [showChanges, setShowChanges] = useState(true);
    const [brandingOption, setBrandingOption] = useState("platform");

    // Content for "Original" View
    const contractContentOriginal = `
## CONTRACT TITLE
"Employment Agreement"

## 4.1 Monthly salary
RMB 30,000, payable "by the end of each month."

## 4.4 Profit-sharing
Company A: 70%
Party B: 30%

## 7. Equipment & Costs
Company A will provide a laptop. Party B must return it upon termination.

## PARTIES
BluePeak Data Systems International Ltd. ("Company A")
Registered Address: [Address]

Mr. Daniel Huang ("Contractor")
ID No.: 3301***********

## 2.2
Party B is an independent contractor.

## 3. Term of Agreement
12 months starting from March 1, 2024.
Termination notice: 30 days.

## 5. Confidentiality
Standard confidentiality applies.

## 11. Miscellaneous
Written in English.
    `;

    // Content for "Adjusted" View
    const contractContentAdjusted = `
## CONTRACT TITLE
"Strategic Employment–Cooperation Hybrid Agreement"

## 4.1 Monthly salary
RMB 32,000, payable "within 15 days after each month unless delayed."

## 4.4 Profit-sharing
Company A: 75%
Party B: 25%

## 7. Equipment & Costs
Company A will provide a laptop, but Party B must "return it or keep it depending on future discussions."

## PARTIES
BluePeak Data Systems International Ltd. ("Company A")
Registered Address: Said to be in Shenzhen, but no address actually listed here.

Mr. Daniel Huang ("Worker/Partner/Consultant/Contractor")
ID No.: 3301************

## 2.2
Party B is an independent contractor responsible for external business dealings.

## 3. Term of Agreement
18 months starting retroactively from March 1, 2024.
Termination notice: 0-60 days variable.

## 5. Confidentiality
Party B must keep all info secret indefinitely.

## 11. Miscellaneous
English version prevails.
    `;

    // Content for "Comparison" View
    const contractContentComparison = `
# test7.docx

## CONTRACT TITLE

CONTRACT TITLE: “Strategic Employment–Cooperation Hybrid Agreement”

## 4.1 Monthly salary

RMB 32,000, payable “within 15 days after each month unless delayed.”

## 4.4 Profit-sharing

Later in the document: Company A and Party B agree to “revise the split to 90/20 if necessary,” which is mathematically impossible.

## 7. Equipment & Costs

Company A will provide a laptop, but Party B must “return it or keep it depending on future discussions.”

## PARTIES

BluePeak Data Systems International Ltd. (“Company A”)
Registered Address: Said to be in Shenzhen, but no address actually listed here.
Mr. Daniel Huang (“Worker/Partner/Consultant/Contractor”)
ID No.: 3301************

## 2.2

2.2 At the same time, Party B is an independent contractor responsible for external business dealings.

## 3. Term of Agreement

The contract term is “18 months starting retroactively from March 1, 2024, even if signed later.”
Termination clause states that “either Party may terminate by a notice period between 0–60 days depending on circumstances determined later.”

## 5. Confidentiality

Party B must keep “all confidential info, non-confidential info, and other miscellaneous things” secret.
No duration is defined.
Exceptions are unclear and say “unless required to disclose for convenience.”

## Breach of Contract and Compensation Clause

11. Miscellaneous Provisions
The English version prevails unless the Chinese version (not attached) is created later.
The contract may be signed digitally, physically, or orally.
Several placeholders (like “[Insert Details]”) remain unfilled.
Severability clause says that if any provision is invalid, “the remaining parts shall be renegotiated from scratch.”

## 11. Miscellaneous Provisions

The English version prevails unless the Chinese version (not attached) is created later.
Several placeholders (like "[Insert Details]") remain unfilled.
    `;

    // Mock Data for Changes
    const changes = [
        { id: 1, title: "CONTRACT TITLE", description: "Contract title contains contradictory and legally ambiguous terms...", type: "high", time: "2.13" },
        { id: 2, title: "4.1 Monthly salary", description: "Improper punctuation and quotation mark usage...", type: "high", time: "2.14" },
        { id: 3, title: "4.4 Profit-sharing", description: "Comma and quotation mark inconsistency...", type: "high", time: "2.14" },
        { id: 4, title: "7. Equipment & Costs", description: "Incomplete sentence structure and improper punctuation...", type: "high", time: "2.14" },
        { id: 5, title: "PARTIES", description: "Incomplete and ambiguous identification of contracting parties...", type: "high", time: "2.20" },
        { id: 6, title: "2.2", description: "代理权限未明确界定...", type: "high", time: "2.1" },
    ];

    const renderContent = (content: string) => (
        <ScrollArea className="flex-1 p-4 sm:p-8 h-full overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-6 pb-20">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mb-8 dark:bg-[#1a1f2e]">
                    <p className="text-gray-600 font-mono text-sm leading-relaxed dark:text-gray-300">
                        Later in the document: Company A and Party B agree to "revise the split to 90/20 if necessary," which is <span className="text-red-600 bg-red-500/10 px-1 border-b border-red-500 dark:text-white dark:bg-red-500/20">mathematically impossible</span>.
                    </p>
                </div>

                <div className="font-mono text-gray-800 whitespace-pre-wrap leading-relaxed text-sm sm:text-base dark:text-gray-300">
                    {content.split('\n').map((line, i) => {
                        if (line.trim().startsWith('##')) {
                            return <h2 key={i} className="text-blue-600 font-bold text-lg mt-8 mb-4 dark:text-blue-400">{line.replace(/^##\s*/, '')}</h2>
                        }
                        if (line.trim().length === 0) return <div key={i} className="h-4" />
                        return (
                            <p key={i} className="mb-2">
                                {line}
                            </p>
                        )
                    })}
                </div>
            </div>
        </ScrollArea>
    );

    return (
        <Tabs defaultValue="comparison" className="flex flex-col rounded-lg shadow-lg h-[calc(100vh-4rem)] bg-white text-gray-900 overflow-hidden dark:bg-[#0d1118] dark:text-white">
            {/* Top Toolbar */}
            <header className="py-4 border-b border-gray-200 flex items-center flex-wrap justify-center gap-3 px-4 shrink-0 bg-white dark:bg-[#0d1118] dark:border-gray-800">
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-2 text-gray-900 font-semibold text-lg dark:text-white">
                        <PenTool size={20} className="text-blue-600 dark:text-blue-500" />
                        <span className="hidden lg:inline">Review & Edit Contract</span>
                    </div>
                    
                    <TabsList className="bg-gray-100 p-1 rounded-lg border-none h-auto dark:bg-gray-800/50">
                        <TabsTrigger value="original" className="px-3 py-1.5 cursor-pointer rounded-md text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-500 hover:text-gray-800 dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white dark:text-gray-400 dark:hover:text-gray-200">Original</TabsTrigger>
                        <TabsTrigger value="adjusted" className="px-3 py-1.5 cursor-pointer rounded-md text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-500 hover:text-gray-800 dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white dark:text-gray-400 dark:hover:text-gray-200">Adjusted</TabsTrigger>
                        <TabsTrigger value="comparison" className="px-3 py-1.5 cursor-pointer rounded-md text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-500 hover:text-gray-800 dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white dark:text-gray-400 dark:hover:text-gray-200">Comparison</TabsTrigger>
                    </TabsList>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 mr-4 dark:text-gray-500">
                        <Clock size={14} />
                        <span>Last saved: 4:08:07 PM</span>
                    </div>

                    <div className="hidden md:flex items-center gap-1 mr-2">
                        <Button variant="ghost" size="icon" className="text-gray-500 cursor-pointer hover:text-gray-900 h-8 w-8 dark:text-gray-400 dark:hover:text-white"><Undo size={16} /></Button>
                        <Button variant="ghost" size="icon" className="text-gray-500 cursor-pointer hover:text-gray-900 h-8 w-8 dark:text-gray-400 dark:hover:text-white"><Redo size={16} /></Button>
                    </div>

                    <Button 
                        variant={showBranding ? "default" : "outline"}
                        size="sm"
                        className={cn(
                            "gap-2 cursor-pointer border-blue-500/30 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20",
                            showBranding && "bg-blue-600 text-white hover:bg-blue-700 border-transparent dark:bg-blue-600 dark:hover:bg-blue-700"
                        )}
                        onClick={() => setShowBranding(!showBranding)}
                    >
                        <LayoutTemplate size={16} />
                        <span className="hidden md:inline">Branding</span>
                    </Button>

                    <Button variant="outline" size="sm" className="flex gap-2 cursor-pointer border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
                        <Save size={16} />
                        <span className="hidden md:inline">Save Draft</span>
                    </Button>

                    <Button size="sm" className="gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">
                        <Download size={16} />
                        <span className="hidden md:inline">Download</span>
                    </Button>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden relative">
                
                {/* Branding Sidebar (Left) */}
                {showBranding && (
                    <aside className="absolute z-20 left-0 top-0 bottom-0 shadow-xl lg:static w-80 border-r border-gray-200 bg-white flex flex-col transition-all duration-300 dark:border-gray-800 dark:bg-[#0d1118]">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center dark:border-gray-800">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Branding Settings</h3>
                            <button onClick={() => setShowBranding(false)} className="lg:hidden text-gray-500 dark:text-gray-400">✕</button>
                        </div>
                        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                            <div 
                                className={cn("p-4 rounded-xl border-2 cursor-pointer transition-all flex gap-3", brandingOption === 'platform' ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 dark:bg-blue-500/10 dark:border-gray-800 dark:hover:border-gray-700")}
                                onClick={() => setBrandingOption('platform')}
                            >
                                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center mt-1 shrink-0", brandingOption === 'platform' ? "border-blue-500" : "border-gray-400 dark:border-gray-500")}>
                                    {brandingOption === 'platform' && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200">Platform Branding</h4>
                                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-500">Use LVXIN platform logo and company info</p>
                                </div>
                            </div>

                            <div 
                                className={cn("p-4 rounded-xl border-2 cursor-pointer transition-all flex gap-3", brandingOption === 'custom' ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 dark:bg-blue-500/10 dark:border-gray-800 dark:hover:border-gray-700")}
                                onClick={() => setBrandingOption('custom')}
                            >
                                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center mt-1 shrink-0", brandingOption === 'custom' ? "border-blue-500" : "border-gray-400 dark:border-gray-500")}>
                                    {brandingOption === 'custom' && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200">Custom Branding</h4>
                                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-500">Use your own logo and company info</p>
                                </div>
                            </div>

                            <div 
                                className={cn("p-4 rounded-xl border-2 cursor-pointer transition-all flex gap-3", brandingOption === 'none' ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 dark:bg-blue-500/10 dark:border-gray-800 dark:hover:border-gray-700")}
                                onClick={() => setBrandingOption('none')}
                            >
                                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center mt-1 shrink-0", brandingOption === 'none' ? "border-blue-500" : "border-gray-400 dark:border-gray-500")}>
                                    {brandingOption === 'none' && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200">No Branding</h4>
                                    <p className="text-xs text-gray-500 mt-1 dark:text-gray-500">Clean document without any branding</p>
                                </div>
                            </div>

                            {brandingOption === 'custom' && (
                                <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Upload Logo</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 hover:bg-blue-50 transition-colors cursor-pointer group dark:border-gray-700 dark:hover:bg-blue-500/5">
                                            <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2 transition-colors dark:text-gray-500 dark:group-hover:text-blue-400" />
                                            <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">Upload Logo</span>
                                            <span className="text-[10px] text-gray-400 mt-1 dark:text-gray-500">Supports PNG, JPG, SVG (max 10MB)</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <Building2 size={12} /> Company Name
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Your Company Name"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors dark:bg-[#151921] dark:border-gray-800 dark:text-white dark:placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <MapPin size={12} /> Address
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Company Address"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors dark:bg-[#151921] dark:border-gray-800 dark:text-white dark:placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <Mail size={12} /> Email
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="email@company.com"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors dark:bg-[#151921] dark:border-gray-800 dark:text-white dark:placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <Phone size={12} /> Phone
                                            </label>
                                            <input 
                                                type="tel" 
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors dark:bg-[#151921] dark:border-gray-800 dark:text-white dark:placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <Globe size={12} /> Website
                                            </label>
                                            <input 
                                                type="url" 
                                                placeholder="https://company.com"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors dark:bg-[#151921] dark:border-gray-800 dark:text-white dark:placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2 text-white">
                                    <Save size={16} />
                                    Save Branding
                                </Button>
                        </div>
                    </aside>
                )}

                {/* Central Editor Area */}
                <main className="flex-1 flex flex-col min-w-0 bg-white h-full dark:bg-[#0f1219]">
                    {/* Stats Bar */}
                    <div className="py-3 border-b border-gray-200 flex items-center justify-center flex-wrap gap-3 px-4 sm:px-6 bg-white shrink-0 dark:border-gray-800 dark:bg-[#0f1219]">
                        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm overflow-x-auto no-scrollbar">
                            <span className="text-gray-600 font-medium whitespace-nowrap dark:text-gray-400">Total Changes <span className="text-gray-900 ml-1 sm:ml-2 text-base sm:text-lg font-bold dark:text-white">41</span></span>
                            <span className="text-red-600 font-medium whitespace-nowrap dark:text-red-400">High Risk <span className="text-red-600 ml-1 font-bold dark:text-red-500">41</span></span>
                            <span className="text-yellow-600 font-medium whitespace-nowrap hidden sm:inline dark:text-yellow-400">Medium <span className="text-yellow-600 ml-1 font-bold dark:text-yellow-500">0</span></span>
                            <span className="text-green-600 font-medium whitespace-nowrap hidden sm:inline dark:text-green-400">Low <span className="text-green-600 ml-1 font-bold dark:text-green-500">0</span></span>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-500 hover:text-gray-900 gap-2 shrink-0 ml-2 dark:text-gray-400 dark:hover:text-white"
                            onClick={() => setShowChanges(!showChanges)}
                        >
                            {showChanges ? <EyeOff size={16} /> : <Eye size={16} />}
                            <span className="hidden sm:inline">{showChanges ? "Hide Changes" : "View Changes"}</span>
                        </Button>
                    </div>

                    {/* Document Content via TabsContent - Height handling is key here due to flex-1 in parent */}
                    <div className="flex-1 overflow-hidden">
                        <TabsContent value="original" className="h-full mt-0 focus-visible:ring-0 focus-visible:outline-none">
                            {renderContent(contractContentOriginal)}
                        </TabsContent>
                        <TabsContent value="adjusted" className="h-full mt-0 focus-visible:ring-0 focus-visible:outline-none">
                            {renderContent(contractContentAdjusted)}
                        </TabsContent>
                        <TabsContent value="comparison" className="h-full mt-0 focus-visible:ring-0 focus-visible:outline-none">
                            {renderContent(contractContentComparison)}
                        </TabsContent>
                    </div>
                </main>

                {/* Right Sidebar (Changes) */}
                {showChanges && (
                    <aside className="absolute right-0 top-0 bottom-0 z-20 shadow-xl xl:static w-80 border-l overflow-auto border-gray-200 bg-white flex flex-col dark:border-gray-800 dark:bg-[#0d1118]">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center dark:border-gray-800">
                            <h3 className="font-semibold text-gray-900 px-4 dark:text-white">Changes (41)</h3>
                            <button onClick={() => setShowChanges(false)} className="xl:hidden text-gray-500 dark:text-gray-400">✕</button>
                        </div>
                        <ScrollArea className="flex-1">
                            <div className="p-4 space-y-4">
                                {changes.map((change) => (
                                    <div key={change.id} className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-3 transition-colors group cursor-pointer shadow-sm dark:bg-[#151921] dark:border-gray-800 dark:hover:border-gray-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-red-600 font-medium text-xs uppercase tracking-wider dark:text-red-400">{change.title}</h4>
                                            <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase dark:bg-red-500/20 dark:text-red-500">High</span>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-3 dark:text-gray-400">
                                            {change.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <button className="bg-yellow-50 text-yellow-600 text-[10px] px-2 py-1 rounded border border-yellow-200 hover:bg-yellow-100 transition-colors dark:bg-[#2d2a20] dark:text-yellow-500 dark:border-yellow-900/50 dark:hover:bg-yellow-900/30">
                                                replace
                                            </button>
                                            <span className="text-gray-400 text-[10px] dark:text-gray-600">{change.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </aside>
                )}

            </div>
        </Tabs>
    );
}