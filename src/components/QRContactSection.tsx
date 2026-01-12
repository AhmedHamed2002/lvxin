"use client";

import Image from "next/image";
import { QrCode, MessageCircle, Phone, Mail } from "lucide-react";

export default function QRContactSection() {
    return (
        <section className="relative py-16 md:py-20 px-4 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
                        Contact Us via QR Code
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                        Scan the QR codes below to connect with us instantly on your preferred platform
                    </p>
                </div>

                {/* QR Code Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {/* Xiaohongshu QR */}
                    <div className="group relative bg-white dark:bg-slate-800/30 cursor-pointer backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700/50 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/10">
                        <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            {/* QR Code */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4 shadow-xl group-hover:scale-105 transition-transform duration-300 border border-slate-100">
                                <Image
                                    src="/assets/images/red_qr.png"
                                    alt="Xiaohongshu QR Code"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            
                            {/* Label */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400">
                                    <QrCode className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Scan to Connect</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                    Contact us on Xiaohongshu
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Follow us for legal insights and updates
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* WeChat QR */}
                    <div className="group relative bg-white dark:bg-slate-800/30 cursor-pointer backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/10">
                        <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            {/* QR Code */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4 shadow-xl group-hover:scale-105 transition-transform duration-300 border border-slate-100">
                                <Image
                                    src="/assets/images/we_chat.jpg"
                                    alt="WeChat QR Code"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            
                            {/* Label */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Scan to Chat</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                    WeChat Customer Service
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Get instant support and consultation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Douyin QR */}
                    <div className="group relative bg-white dark:bg-slate-800/30 cursor-pointer backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700/50 hover:border-slate-900/50 dark:hover:border-slate-300/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-slate-500/10">
                        <div className="absolute inset-0 bg-linear-to-br from-slate-900/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                            {/* QR Code */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4 shadow-xl group-hover:scale-105 transition-transform duration-300 border border-slate-100">
                                <Image
                                    src="/assets/images/douyin.jpg"
                                    alt="Douyin QR Code"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            
                            {/* Label */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200">
                                    <QrCode className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Scan to Follow</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                    Contact us on Douyin
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Follow us for legal insights and updates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Contact Info */}
                <div className="bg-slate-50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700/50 shadow-md">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                        Other Ways to Reach Us
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                icon: Phone,
                                label: "Phone",
                                value: "+86 199 2455 4911",
                                href: "tel:+8619924554911",
                                color: "blue"
                            },
                            {
                                icon: Mail,
                                label: "Email",
                                value: "mahmoud@lvxlaw.com",
                                href: "mailto:mahmoud@lvxlaw.com",
                                color: "purple"
                            },
                            {
                                icon: MessageCircle,
                                label: "Website",
                                value: "www.lvxlaw.com",
                                href: "https://www.lvxlaw.com",
                                color: "green"
                            }
                        ].map((contact, idx) => (
                            <a
                                key={idx}
                                href={contact.href}
                                target={contact.label === "Website" ? "_blank" : undefined}
                                rel={contact.label === "Website" ? "noopener noreferrer" : undefined}
                                className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600/30 hover:border-slate-300 dark:hover:border-slate-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className={`p-3 bg-${contact.color}-500/10 dark:bg-${contact.color}-500/10 rounded-lg group-hover:bg-${contact.color}-500/20 dark:group-hover:bg-${contact.color}-500/20 transition-colors`}>
                                    <contact.icon className={`w-5 h-5 text-${contact.color}-600 dark:text-${contact.color}-400`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-0.5">{contact.label}</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {contact.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 dark:bg-blue-900/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-2xl pointer-events-none" /> */}
            </div>
        </section>
    );
}
