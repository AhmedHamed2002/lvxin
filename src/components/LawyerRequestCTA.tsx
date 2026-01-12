"use client";

import Link from "next/link";
import { Scale, ArrowRight, Shield, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LawyerRequestCTA() {
    return (
        <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-blue-950/30 dark:to-blue-950/30">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}/>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold">
                            <Scale className="w-4 h-4" />
                            Legal Services
                        </div>
                        
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                            Need Legal Assistance in <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">China?</span>
                        </h2>
                        
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            Connect with experienced legal professionals who understand your needs. Our network of licensed lawyers in China is ready to help you navigate complex legal matters with confidence.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {[
                                { icon: Shield, label: "Confidential" },
                                { icon: Users, label: "Expert Lawyers" },
                                { icon: FileText, label: "Fast Response" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                                        <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col justify-center md:justify-start sm:flex-row gap-4 pt-4">
                            <Button asChild className="h-14 px-8 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-base font-bold shadow-lg shadow-blue-500/20 transition-all transform group">
                                <Link href="/lawyer-request" className="flex items-center gap-2">
                                    Request a Lawyer
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            
                            <Button asChild variant="outline" className="h-14 px-8 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-bold">
                                <Link href="/contact-us">
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-linear-to-br from-blue-400/15 to-blue-400/15 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 left-2 w-60 h-60 bg-linear-to-br from-blue-400/15 to-blue-400/15 rounded-full blur-2xl" />
                            
                            {/* Main Card */}
                            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-linear-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                                            <Scale className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">LVXLAW</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Legal Services Platform</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {[
                                            "Corporate & Investment Law",
                                            "Intellectual Property",
                                            "Contract & Commercial Law",
                                            "Employment & HR"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                                                <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-500" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-500 dark:text-slate-400">Response Time</span>
                                            <span className="font-bold text-green-600 dark:text-green-400">Within 24 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
