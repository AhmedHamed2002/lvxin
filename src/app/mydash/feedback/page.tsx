"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MessageSquare, User, Star, Settings, Lightbulb, ShieldCheck, Send } from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
    return (
        <div className="px-2 py-5 md:p-6  animate-in fade-in duration-500 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
            Share Your Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your feedback helps us improve our services and assists other customers in making informed decisions. 
            Whether it's a success story, suggestion, or general feedback, we value your input.
            </p>
        </header>

        <Card className="p-6 md:p-10 bg-white dark:bg-[#0d0f15] border-gray-100 dark:border-gray-800 shadow-xl rounded-3xl">
            <form className="space-y-12">
            
            {/* Contact Information */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <User size={20} className="text-blue-500" />
                Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="contactName" className="font-semibold text-gray-700 dark:text-gray-300 italic">Full Name</Label>
                    <Input 
                    id="contactName" 
                    placeholder="Enter your full name" 
                    className="h-12 bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl"
                    />
                    <p className="text-[11px] text-gray-400">Optional - only if you're comfortable sharing</p>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="font-semibold text-gray-700 dark:text-gray-300 italic">Email Address</Label>
                    <Input 
                    id="contactEmail" 
                    type="email"
                    placeholder="your.email@example.com" 
                    className="h-12 bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl"
                    />
                    <p className="text-[11px] text-gray-400">We'll only use this to follow up if needed</p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="contactPhone" className="font-semibold text-gray-700 dark:text-gray-300 italic">Phone Number</Label>
                    <Input 
                    id="contactPhone" 
                    type="tel"
                    placeholder="+1 (555) 123-4567" 
                    className="h-12 bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl"
                    />
                    <p className="text-[11px] text-gray-400">Optional - for urgent follow-ups only</p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="category" className="font-semibold text-gray-700 dark:text-gray-300 italic">Feedback Category</Label>
                    <Select defaultValue="other">
                    <SelectTrigger className="h-12 bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-[#11141d] dark:border-gray-800">
                        <SelectItem value="other">General Feedback</SelectItem>
                        <SelectItem value="contract_analysis">Contract Analysis</SelectItem>
                        <SelectItem value="legal_consultation">Legal Consultation</SelectItem>
                        <SelectItem value="risk_management">Risk Management</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                    </SelectContent>
                    </Select>
                    <p className="text-[11px] text-gray-400">Choose the area your feedback relates to</p>
                </div>
                </div>
            </section>

            {/* Your Feedback */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <MessageSquare size={20} className="text-blue-500" />
                Your Feedback
                </h2>
                <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold text-gray-700 dark:text-gray-300 italic">
                    Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                    id="subject" 
                    placeholder="Brief summary of your feedback" 
                    className="h-12 bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-300 italic">
                    Detailed Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea 
                    id="message" 
                    placeholder="Please share your detailed feedback, experience, or suggestions..." 
                    className="min-h-[150px] bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl resize-none"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="useCase" className="font-semibold text-gray-700 dark:text-gray-300 italic">How do you use LVXIN?</Label>
                    <Textarea 
                    id="useCase" 
                    placeholder="Tell us about your specific use case or how you use our platform..." 
                    className="min-h-[100px] bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl resize-none"
                    />
                </div>
                </div>
            </section>

            {/* Rate Your Experience */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <Star size={20} className="text-blue-500" />
                Rate Your Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { label: "Overall Satisfaction", name: "satisfaction" },
                    { label: "Likelihood to Recommend", name: "recommend" },
                    { label: "Ease of Use", name: "ease" },
                    { label: "Value for Money", name: "value" }
                ].map((rating) => (
                    <div key={rating.name} className="space-y-3">
                    <Label className="font-medium text-gray-700 dark:text-gray-400 italic">{rating.label}</Label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50/50 dark:bg-[#11141d] border border-gray-100 dark:border-gray-800 rounded-2xl">
                        {[1, 2, 3, 4, 5].map((val) => (
                        <label key={val} className="flex-1 flex flex-col items-center gap-1 cursor-pointer group">
                            <input type="radio" name={rating.name} value={val} className="peer sr-only" />
                            <div className="w-full py-2 text-center rounded-xl bg-white dark:bg-[#1a1e29] border border-gray-200 dark:border-gray-700 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:text-white transition-all text-sm font-bold text-gray-600 dark:text-gray-400">
                            {val}
                            </div>
                        </label>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </section>

            {/* Features You've Used */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <Settings size={20} className="text-blue-500" />
                Features You've Used
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    "Contract Analysis",
                    "Legal Chat Assistant",
                    "Risk Assessment",
                    "Compliance Checking",
                    "Document Review",
                    "Legal Research"
                ].map((feature) => (
                    <label key={feature} className="flex items-center gap-3 p-4 bg-gray-50/50 dark:bg-[#11141d] border border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a1e29] transition-all group">
                    <input type="checkbox" className="w-5 h-5 rounded-md border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500 dark:bg-[#0d0f15]" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                        {feature}
                    </span>
                    </label>
                ))}
                </div>
            </section>

            {/* Improvement Suggestions */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <Lightbulb size={20} className="text-blue-500" />
                Suggestions for Improvement
                </h2>
                <div className="space-y-2">
                <Label htmlFor="suggestions" className="font-semibold text-gray-700 dark:text-gray-300 italic">What could we improve?</Label>
                <Textarea 
                    id="suggestions" 
                    placeholder="Share your ideas on how we can make LVXIN even better..." 
                    className="min-h-[120px] bg-gray-50/50 dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl resize-none"
                />
                <p className="text-[11px] text-gray-400">Your suggestions help us prioritize new features and improvements</p>
                </div>
            </section>

            {/* Consent and Permissions */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <ShieldCheck size={20} className="text-blue-500" />
                Permissions & Consent
                </h2>
                <div className="space-y-4">
                {[
                    { 
                    title: "Allow us to contact you for follow-up", 
                    desc: "We may reach out to clarify your feedback or provide updates on improvements you suggested." 
                    },
                    { 
                    title: "Allow us to use your feedback in marketing materials", 
                    desc: "Your feedback may be featured on our website or promotional materials (anonymized unless you specifically allow name usage)." 
                    },
                    { 
                    title: "Convert to success story or testimonial", 
                    desc: "If your feedback is particularly positive, we may convert it to a featured success story or testimonial." 
                    }
                ].map((consent, i) => (
                    <label key={i} className="flex gap-4 p-5 bg-gray-50/50 dark:bg-[#11141d] border border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1a1e29] transition-all group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded-md border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500 dark:bg-[#0d0f15]" />
                    <div className="space-y-1">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors italic">{consent.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{consent.desc}</p>
                    </div>
                    </label>
                ))}
                </div>
            </section>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                <Button size="lg" className="flex-1 h-14 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 gap-2 transition-all hover:scale-[1.02]">
                    <Send size={18} />
                    Submit Feedback
                </Button>
                <Link href="/success-stories" className="flex-1">
                <Button variant="outline" size="lg" className="w-full cursor-pointer h-14 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-500 dark:hover:text-blue-500 rounded-2xl font-bold transition-all gap-2">
                    <ArrowLeft size={18} />
                    View Success Stories
                </Button>
                </Link>
            </div>
            </form>
        </Card>
        </div>
    )
}
