"use client";

import { useState } from "react";
import { User, Building, Globe, Mail, Phone, Languages, Briefcase, MapPin, Users, FileText, FileSearch, Scale, Coins, Clock, ShieldCheck, Upload, AlertCircle, Info, Send} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/spinner";
import Swal from "sweetalert2";
import Footer from "@/components/footer";

export default function LawyerRequestForm() {
    const [loading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        // Basic Info
        fullName: "",
        company: "",
        country: "",
        email: "",
        contactNumber: "",
        preferredLanguage: "",
        // Case Type
        legalMatter: "",
        otherLegalMatter: "",
        cityProvince: "",
        chinesePartiesInvolved: "no",
        // Description
        caseDescription: "",
        desiredOutcome: "",
        // Requirements
        requiredSpecialization: "",
        preferredCity: "",
        lawyerLanguage: "",
        preferredFeeType: "",
        estimatedBudget: "",
        urgency: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Request Submitted Successfully',
                html: '<p class="text-sm">Thank you for your request. Our legal team will review the information and contact you shortly.</p>',
                confirmButtonColor: '#0a355c',
                background: document.documentElement.classList.contains('dark') ? "#1e293b" : "#fff",
                color: document.documentElement.classList.contains('dark') ? "#f8fafc" : "#111827",
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#f2f3f7] dark:bg-[#11131c] text-gray-900 dark:text-gray-100 transition-all duration-300">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden px-4 md:px-8">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                    style={{ 
                        backgroundImage: "url('/assets/images/terms-and-conditions.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-700/20 to-blue-950/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    
                    <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                        <Separator orientation="vertical" className="h-8 bg-white/30 hidden sm:block" />
                        <span className="bg-blue-500/20 text-white border border-white/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm">
                            Global Legal Bridge
                        </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 drop-shadow-lg">
                        Lawyer Request Form — LVXLAW
                    </h1>
                    <p className="max-w-4xl mx-auto text-xs md:text-lg opacity-90 leading-relaxed drop-shadow-md">
                        Connect with experienced legal professionals in China. Submit your request and our team will match you with the right lawyer for your needs.
                    </p>
                </div>
            </section>

            {/* Form Content */}
            <main className="container mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16 max-w-7xl">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    {/* Section 1: Basic Information */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-blue-600/10 rounded-xl md:rounded-2xl">
                                    <User className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Basic Information</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Your contact details</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Full Name *</Label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <Input placeholder="John Doe" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium" required onChange={(e) => handleInputChange("fullName", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Company (If applicable)</Label>
                                    <div className="relative group">
                                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <Input placeholder="ACME Corp" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium" onChange={(e) => handleInputChange("company", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Country *</Label>
                                    <div className="relative group">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <Input placeholder="Country name" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium" required onChange={(e) => handleInputChange("country", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Email *</Label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <Input type="email" placeholder="john@example.com" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium" required onChange={(e) => handleInputChange("email", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Phone / WhatsApp / WeChat</Label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <Input placeholder="+1 234 567 890" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium" onChange={(e) => handleInputChange("contactNumber", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Preferred Language</Label>
                                    <Select onValueChange={(v) => handleInputChange("preferredLanguage", v)}>
                                        <SelectTrigger className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                            <div className="flex items-center gap-2">
                                                <Languages className="w-4 h-4 text-slate-400" />
                                                <SelectValue placeholder="Select Language" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="arabic">Arabic</SelectItem>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="chinese">Chinese</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Section 2: Case Type */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-purple-50 dark:bg-purple-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-[#a855f7]/10 rounded-xl md:rounded-2xl">
                                    <Scale className="w-5 h-5 md:w-6 md:h-6 text-[#a855f7]" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Case Type</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Legal matter details</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Legal Matter Type *</Label>
                                    <Select onValueChange={(v) => handleInputChange("legalMatter", v)}>
                                        <SelectTrigger className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-slate-400" />
                                                <SelectValue placeholder="Select legal matter" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="corporate">Corporate / Investment</SelectItem>
                                            <SelectItem value="commercial">Commercial / Contract</SelectItem>
                                            <SelectItem value="employment">Employment / HR</SelectItem>
                                            <SelectItem value="real-estate">Real Estate / Lease</SelectItem>
                                            <SelectItem value="ip">Intellectual Property</SelectItem>
                                            <SelectItem value="dispute">Dispute / Arbitration</SelectItem>
                                            <SelectItem value="tax">Tax / Finance</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {formData.legalMatter === "other" && (
                                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <Label className="text-xs font-black uppercase tracking-widest text-[#a855f7]">Specify Other</Label>
                                        <Input placeholder="Describe your legal matter" className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium" />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">City / Province in China</Label>
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#a855f7] transition-colors" />
                                        <Input placeholder="Shenzhen, Guangdong" className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-[#a855f7] transition-all font-medium" onChange={(e) => handleInputChange("cityProvince", e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Are Chinese parties involved?</Label>
                                    <div className="flex items-center gap-4 md:gap-6 h-11 md:h-12">
                                        <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input type="radio" name="chineseParties" className="peer sr-only" checked={formData.chinesePartiesInvolved === "yes"} onChange={() => handleInputChange("chinesePartiesInvolved", "yes")} />
                                                <div className="h-5 w-5 rounded-full border-2 border-slate-200 dark:border-slate-700 peer-checked:border-[#a855f7] group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-all" />
                                                <div className="absolute h-2.5 w-2.5 rounded-full bg-[#a855f7] scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#a855f7] transition-colors">Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input type="radio" name="chineseParties" className="peer sr-only" checked={formData.chinesePartiesInvolved === "no"} onChange={() => handleInputChange("chinesePartiesInvolved", "no")} />
                                                <div className="h-5 w-5 rounded-full border-2 border-slate-200 dark:border-slate-700 peer-checked:border-[#a855f7] group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-all" />
                                                <div className="absolute h-2.5 w-2.5 rounded-full bg-[#a855f7] scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#a855f7] transition-colors">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Section 3: Detailed Case Description */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-emerald-600/10 rounded-xl md:rounded-2xl">
                                    <FileSearch className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Detailed Case Description</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Explain your situation</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8 space-y-6 md:space-y-8">
                            <div className="p-3 md:p-4 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl md:rounded-2xl flex gap-3 md:gap-4">
                                <Info className="w-5 h-5 text-emerald-600 mt-0.5 md:mt-1 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs md:text-sm font-bold text-emerald-900 dark:text-emerald-300">Description Guidelines:</p>
                                    <p className="text-xs text-emerald-700/80 dark:text-emerald-400/80 leading-relaxed">
                                        Please describe the issue clearly, with a timeline of events, involved parties, and the outcome you wish to achieve.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Case Description *</Label>
                                <Textarea 
                                    placeholder="Enter full details of your case..." 
                                    className="min-h-[120px] md:min-h-[150px] bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl md:rounded-2xl focus:ring-emerald-500 font-medium resize-none p-3 md:p-4"
                                    required
                                    onChange={(e) => handleInputChange("caseDescription", e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Desired Outcome / Remedy</Label>
                                <Input placeholder="What is your goal?" className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-emerald-500 font-medium" onChange={(e) => handleInputChange("desiredOutcome", e.target.value)} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Section 4: Documents & Evidence */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-orange-50 dark:bg-orange-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-[#f59e0b]/10 rounded-xl md:rounded-2xl">
                                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b]" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Documents & Evidence</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Supporting materials</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                                {[
                                    { id: 'contract', label: 'Contract / Agreement' },
                                    { id: 'correspondence', label: 'Correspondence' },
                                    { id: 'receipts', label: 'Receipts / Invoices' },
                                    { id: 'photos', label: 'Photos / Recordings' },
                                    { id: 'otherDoc', label: 'Other Documents' }
                                ].map((doc) => (
                                    <div key={doc.id} className="flex items-center gap-3 p-3 md:p-4 bg-slate-50/50 dark:bg-slate-900/40 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800/50 group hover:border-[#f59e0b]/50 transition-colors cursor-pointer">
                                        <Checkbox id={doc.id} className="rounded-md border-slate-300 dark:border-slate-700 data-[state=checked]:bg-[#f59e0b] data-[state=checked]:border-[#f59e0b]" />
                                        <Label htmlFor={doc.id} className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">{doc.label}</Label>
                                    </div>
                                ))}
                            </div>
                            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl md:rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-[#f59e0b]/50 group transition-all bg-slate-50/30 dark:bg-slate-900/20 cursor-pointer text-center">
                                <div className="p-3 md:p-4 bg-white dark:bg-[#1e293b] rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <Upload className="w-6 h-6 md:w-8 md:h-8 text-[#f59e0b]" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200">Attach Reference Files</p>
                                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">PDF, JPG, PNG, DOCX (Max 20MB)</p>
                                </div>
                                <Button type="button" variant="outline" className="mt-2 rounded-full px-6 md:px-8 font-bold border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white transition-all text-sm md:text-base">
                                    Select Files
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Section 5: Lawyer Requirements */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-indigo-50 dark:bg-indigo-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-indigo-600/10 rounded-xl md:rounded-2xl">
                                    <Users className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Lawyer Requirements</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Your preferences</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Required Specialization</Label>
                                    <Input placeholder="e.g. Intellectual Property Expert" className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium" onChange={(e) => handleInputChange("requiredSpecialization", e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Preferred City in China</Label>
                                    <Input placeholder="e.g. Shanghai" className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium" onChange={(e) => handleInputChange("preferredCity", e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Lawyer's Language</Label>
                                    <Select onValueChange={(v) => handleInputChange("lawyerLanguage", v)}>
                                        <SelectTrigger className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                            <SelectValue placeholder="Select Language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="chinese">Chinese</SelectItem>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="arabic">Arabic</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Preferred Fee Type</Label>
                                    <Select onValueChange={(v) => handleInputChange("preferredFeeType", v)}>
                                        <SelectTrigger className="h-11 md:h-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hourly">Hourly Basis</SelectItem>
                                            <SelectItem value="fixed">Fixed Price</SelectItem>
                                            <SelectItem value="package">Retainer Package</SelectItem>
                                            <SelectItem value="success">Success Fee</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Estimated Budget</Label>
                                    <div className="relative group">
                                        <Coins className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                        <Select onValueChange={(v) => handleInputChange("estimatedBudget", v)}>
                                            <SelectTrigger className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                                <SelectValue placeholder="Budget range (USD)" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="<1k">&lt; $1,000</SelectItem>
                                                <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                                                <SelectItem value="3k-10k">$3,000 - $10,000</SelectItem>
                                                <SelectItem value=">10k">&gt; $10,000</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Urgency</Label>
                                    <div className="relative group">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                        <Select onValueChange={(v) => handleInputChange("urgency", v)}>
                                            <SelectTrigger className="h-11 md:h-12 pl-12 bg-slate-50/50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl font-medium">
                                                <SelectValue placeholder="Task urgency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="urgent">Urgent (&lt; 72h)</SelectItem>
                                                <SelectItem value="fast">Fast (1 week)</SelectItem>
                                                <SelectItem value="standard">Standard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Final Section: Confidentiality & Agreement */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden">
                        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-slate-100 dark:border-slate-800 p-4 md:p-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-blue-600/10 rounded-xl md:rounded-2xl">
                                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <div className="space-y-0.5 text-left">
                                    <CardTitle className="text-lg md:text-xl font-bold dark:text-white">Confidentiality & Agreement</CardTitle>
                                    <CardDescription className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Terms and privacy</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 md:p-8 space-y-6 md:space-y-8">
                            <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl md:rounded-2xl p-4 md:p-8 space-y-4 md:space-y-6">
                                <div className="flex items-start gap-3 md:gap-5">
                                    <div className="p-2 bg-blue-600 text-white rounded-lg shadow-lg shrink-0">
                                        <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                                            All information provided is treated as strictly confidential and shared only with licensed lawyers in China.
                                        </p>
                                        <Separator className="bg-blue-200/30 dark:bg-blue-800/20" />
                                        <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                                            LVXLAW services are informational and not a substitute for professional legal advice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 group cursor-pointer p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all">
                                <Checkbox id="agree" className="rounded-md border-slate-300 dark:border-slate-700 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-0.5" required />
                                <Label htmlFor="agree" className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer group-hover:text-blue-600 transition-colors leading-relaxed">
                                    I confirm that the information provided is accurate and I accept the terms of service.
                                </Label>
                            </div>

                            <Button 
                                type="submit" 
                                disabled={loading}
                                className="w-full h-14 md:h-16 bg-[#0a355c] hover:bg-[#0a355c]/90 text-white rounded-xl md:rounded-2xl text-base md:text-lg  cursor-pointer shadow-2xl shadow-[#0a355c]/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 md:gap-3"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <Spinner className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        <span>Processing Request...</span>
                                    </div>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                                        Submit Request
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </form>

                {/* Footer Info */}
                <div className="mt-8 md:mt-12 text-center space-y-3 md:space-y-4">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        Shenzhen Lvxin Fazhi Technology Co., Ltd.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2 text-xs md:text-sm">
                        <a href="mailto:mahmoud@lvxlaw.com" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                            <Mail className="w-3 h-3 md:w-4 md:h-4" /> mahmoud@lvxlaw.com
                        </a>
                        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                        <a href="https://www.lvxlaw.com" target="_blank" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                            <Globe className="w-3 h-3 md:w-4 md:h-4" /> www.lvxlaw.com
                        </a>
                        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                        <p className="text-slate-500 flex items-center gap-2">
                            <Phone className="w-3 h-3 md:w-4 md:h-4" /> +86 199 2455 4911
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
