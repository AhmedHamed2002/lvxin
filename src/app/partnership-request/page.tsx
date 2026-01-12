"use client";

import { useState } from "react";
import { BadgeCheck, Globe, Zap, Shield, TrendingUp, User, Building, Mail, Phone, ShieldCheck, Calendar, Upload, MessageSquare, Send, CheckCircle2, ArrowRight, Award, Fingerprint, CreditCard, Hash, Briefcase, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import Footer from "@/components/footer";
import Swal from "sweetalert2";

const BENEFITS = [
    { 
        icon: Globe,
        title: "Global Reach", 
        description: "Partner with us to reach legal markets worldwide",
        id: "global-reach",
        color: "blue"
    },
    { 
        icon: Zap,
        title: "AI Technology Integration", 
        description: "Access cutting-edge legal AI technology and APIs",
        id: "ai-technology",
        color: "blue"
    },
    { 
        icon: Shield,
        title: "Compliance & Security", 
        description: "Enterprise-grade security and regulatory compliance",
        id: "compliance",
        color: "blue"
    },
    { 
        icon: Award,
        title: "Revenue Growth", 
        description: "Flexible partnership models for shared success",
        id: "revenue-growth",
        color: "blue"
    },
];

export default function PartnershipRequestPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        nationality: "",
        idType: "",
        idNumber: "",
        idExpiry: "",
        partnershipType: "",
        proposal: "",
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
                title: 'Partnership Request Submitted',
                text: 'Thank you for your interest. Our partnership team will review your proposal and contact you within 2-3 business days.',
                confirmButtonColor: '#2563eb',
                background: document.documentElement.classList.contains('dark') ? "#1e293b" : "#fff",
                color: document.documentElement.classList.contains('dark') ? "#f8fafc" : "#111827",
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#f2f3f7] dark:bg-[#11131c] text-gray-900 dark:text-gray-100 transition-all duration-300">
            
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden px-8">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('/assets/images/terms-and-conditions.png')"}}>
                    <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-700/20 to-blue-950/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4 pt-10 text-center text-white">
                    <Badge variant="outline" className="px-4 py-1 text-white border-white/30 bg-white/10 backdrop-blur-md mb-6">
                        Partnership Program
                    </Badge>
                    <h1 className="text-2xl md:text-4xl font-bold mb-5 drop-shadow-lg">
                        Partner With LVXIN
                    </h1>
                    <p className="max-w-4xl mx-auto text-sm md:text-lg opacity-90 leading-relaxed drop-shadow-md">
                        Join our partner ecosystem to drive digital transformation in legal services and deliver intelligent legal solutions to more users worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <BadgeCheck className="text-green-500 dark:text-green-400"/>
                            <p>Flexible Models</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <BadgeCheck className="text-green-500 dark:text-green-400"/>
                            <p>Technical Support</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <BadgeCheck className="text-green-500 dark:text-green-400"/>
                            <p>Revenue Growth</p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-24 max-w-7xl">
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 -mt-12 relative z-20">
                    {BENEFITS.map((benefit) => (
                        <Card 
                            key={benefit.id} 
                            className="group dark:border dark:border-[#334155] bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/90 cursor-pointer backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <CardContent className="p-6 md:px-6 md:py-2 flex flex-col items-start">
                                {/* Icon */}
                                <div className="p-3 bg-linear-to-tl from-[#2a80cc] to-[#15599d] dark:bg-linear-to-tl dark:from-[#226aaa] dark:to-[#0c3762] rounded-xl mb-4 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                                    {benefit.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Main Form */}
                    <Card className="lg:col-span-2 shadow-2xl dark:border dark:border-[#334155] dark:shadow-none bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden">
                        <CardHeader className="p-8 text-white">
                            <div className="flex items-center flex-col justify-center sm:flex-row sm:justify-start gap-4 mb-2">
                                <div className="p-2 bg-linear-to-tl from-[#2a80cc] to-[#15599d] dark:bg-linear-to-tl dark:from-[#226aaa] dark:to-[#0c3762] rounded-xl">
                                    <Handshake className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <CardTitle className="text-2xl font-bold text-black dark:text-white">Partnership Request</CardTitle>
                                    <CardDescription className="text-[#72869c] font-medium">
                                        Fill out the form and we'll get back to you
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <User className="w-3.5 h-3.5" /> Full Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            placeholder="Enter your full name"
                                            className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                                            required
                                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        />
                                    </div>
                                    
                                    {/* Company */}
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Building className="w-3.5 h-3.5" /> Company / Organization <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            placeholder="Enter company or organization name"
                                            className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                                            required
                                            onChange={(e) => handleInputChange("company", e.target.value)}
                                        />
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Mail className="w-3.5 h-3.5" /> Email Address <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                                            required
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                        />
                                    </div>
                                    
                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Phone className="w-3.5 h-3.5" /> Phone Number <span className="text-slate-400 font-medium">(Optional)</span>
                                        </Label>
                                        <Input
                                            placeholder="e.g., +1 234 567 890"
                                            className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Identity Verification Section */}
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-0.5 flex-1 bg-slate-200 dark:bg-[#5f708a]" />
                                        <span className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                            <Shield className="w-4 h-4 text-[#2571c3]" /> Identity Verification
                                        </span>
                                        <div className="h-0.5 flex-1 bg-slate-200 dark:bg-[#5f708a]" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Globe className="w-3.5 h-3.5" /> Nationality <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                placeholder="Enter your nationality"
                                                className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl font-medium"
                                                required
                                                onChange={(e) => handleInputChange("nationality", e.target.value)}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <CreditCard className="w-3.5 h-3.5" /> ID Document Type <span className="text-red-500">*</span>
                                            </Label>
                                            <Select onValueChange={(v) => handleInputChange("idType", v)}>
                                                <SelectTrigger className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl font-medium">
                                                    <SelectValue placeholder="Select ID type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="passport">Passport</SelectItem>
                                                    <SelectItem value="id-card">National ID Card</SelectItem>
                                                    <SelectItem value="license">Driver's License</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Fingerprint className="w-3.5 h-3.5" /> ID Number <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                placeholder="Enter ID document number"
                                                className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl font-medium"
                                                required
                                                onChange={(e) => handleInputChange("idNumber", e.target.value)}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5" /> ID Expiry Date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                type="date"
                                                className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl font-medium"
                                                required
                                                onChange={(e) => handleInputChange("idExpiry", e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Upload Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Upload className="w-3.5 h-3.5" /> ID Document (Front) <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="h-24 bg-slate-50 dark:bg-[#0f172a] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-500 transition-colors group">
                                                <Upload className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                                                <span className="text-[10px] text-slate-400 group-hover:text-blue-500 font-bold uppercase">Upload Front Side</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                <Upload className="w-3.5 h-3.5" /> ID Document (Back) <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="h-24 bg-slate-50 dark:bg-[#0f172a] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-500 transition-colors group">
                                                <Upload className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                                                <span className="text-[10px] text-slate-400 group-hover:text-blue-500 font-bold uppercase">Upload Back Side</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Partnership Specifics */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Briefcase className="w-3.5 h-3.5" /> Partnership Type <span className="text-red-500">*</span>
                                        </Label>
                                        <Select onValueChange={(v) => handleInputChange("partnershipType", v)}>
                                            <SelectTrigger className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-xl font-medium">
                                                <SelectValue placeholder="Select partnership type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="technology">Technology Partner</SelectItem>
                                                <SelectItem value="legal">Legal Service Partner</SelectItem>
                                                <SelectItem value="referral">Referral Program</SelectItem>
                                                <SelectItem value="corporate">Corporate Alliance</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <MessageSquare className="w-3.5 h-3.5" /> Proposal / Message <span className="text-red-500">*</span>
                                        </Label>
                                        <Textarea
                                            placeholder="Describe your partnership interest, company background, and what you hope to achieve through this collaboration..."
                                            className="min-h-[150px] bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-blue-500 font-medium resize-none p-4"
                                            required
                                            onChange={(e) => handleInputChange("proposal", e.target.value)}
                                        />
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                                {formData.proposal.length} / 2000
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-14 cursor-pointer bg-linear-to-tl from-[#2a80cc] to-[#15599d] dark:bg-linear-to-r dark:from-[#163e61] dark:to-[#13467a] dark:hover:from-[#246dac] dark:hover:to-[#0c335b] hover:from-[#246dac] hover:to-[#0c335b] text-white rounded-2xl text-base font-bold shadow shadow-blue-600/30 transition-all flex items-center justify-center gap-3"
                                >
                                    {loading ? (
                                        <Spinner className="w-5 h-5" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" /> Submit Partnership Request <ArrowRight className="w-4 h-4 ml-1" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium pt-2">
                                    By submitting, you agree to our privacy policy. We'll respond within 2-3 business days.
                                </p>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Sidebar Content */}
                    <div className="space-y-6">
                        {/* Why Partner With Us Card */}
                        <Card className="border-none bg-white dark:bg-[#1e293b] dark:border dark:border-[#334155] text-white rounded-3xl overflow-hidden shadow-2xl">
                            <CardHeader className="px-8 py-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-3 text-black dark:text-white">
                                    Why Partner With Us?
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-8 pb-4">
                                <ul className="space-y-6">
                                    {[
                                        { title: "Advanced AI Technology", desc: "Leading legal AI analysis engine" },
                                        { title: "Wide Customer Base", desc: "Serving enterprises and individuals" },
                                        { title: "Technical Support", desc: "Professional team full support" },
                                        { title: "Flexible Models", desc: "Customized partnership plans" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-x-4 gap-y-2 group">
                                            <div className="p-1.5 h-fit bg-green-500/20 rounded-md shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-black dark:text-white text-sm font-bold group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                                <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Need More Information Card */}
                        <Card className="border-none bg-linear-to-tl from-[#2a80cc] to-[#15599d] dark:bg-linear-to-tl dark:from-[#1c5689] dark:to-[#0c3762] text-white rounded-3xl overflow-hidden shadow-2xl relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="text-xl font-bold">Need More Information?</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 pt-4 space-y-6">
                                <p className="text-sm text-blue-50 font-medium leading-relaxed">
                                    If you have any questions or need more details about our partnership program, please feel free to reach out to our partnership team directly.
                                </p>
                                <Button className="w-full h-12 bg-white/20 hover:bg-white/30 text-white border-none rounded-xl text-sm font-bold backdrop-blur-md flex items-center justify-center gap-3">
                                    <Mail className="w-4 h-4" /> mahmoud@lvxlaw.com
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

