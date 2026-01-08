"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Building2, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RegisterPage() {
    const [accountType, setAccountType] = useState<"individual" | "company">("individual");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("theme") === "dark");
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        referralCode: "",
        companyName: "",
        licenseAgreement: "",
        industry: "",
        companySize: "",
        website: "",
        address: ""
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const getPasswordStrength = (pass: string) => {
        if (!pass) return { label: "Weak", color: "bg-slate-200", textColor: "text-slate-400", width: "w-0" };
        let points = 0;
        if (pass.length >= 8) points += 2;
        if (/[A-Z]/.test(pass)) points += 1;
        if (/[0-9]/.test(pass)) points += 1;
        if (/[^A-Za-z0-9]/.test(pass)) points += 1;
        if (points < 2) return { label: "Weak", color: "bg-red-500", textColor: "text-red-500", width: "w-1/3" };
        if (points < 4) return { label: "Medium", color: "bg-yellow-500", textColor: "text-yellow-500", width: "w-2/3" };
        if(points >= 4) return { label: "Strong", color: "bg-green-500", textColor: "text-green-500", width: "w-full" };
    };

    const strength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] py-12 px-4 flex justify-center items-center transition-colors duration-300">
            <Card className="w-full max-w-2xl bg-white dark:bg-[#1e293b] border-none shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in duration-500">
                <CardContent className="p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/assets/images/logo.png"
                                alt="LVXIN"
                                className="h-10 w-auto"
                            />
                        </div>
                        <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                            LVXIN - Sign Up
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Create your account to get started
                        </p>
                    </div>

                    <Tabs defaultValue="individual" className="space-y-8" onValueChange={(v) => setAccountType(v as "individual" | "company")}>
                        {/* Account Type Selection */}
                        <div className="space-y-4">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                                Account Type
                            </Label>
                            <TabsList className="grid grid-cols-2 w-full h-20 p-2 bg-slate-50/50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl">
                                <TabsTrigger 
                                    value="individual"
                                    className="flex flex-col cursor-pointer items-center justify-center gap-1 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-[#1e293b] data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 data-[state=active]:shadow-sm transition-all duration-300 h-full"
                                >
                                    <User className="w-5 h-5" />
                                    <span className="text-sm font-bold">Individual</span>
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="company"
                                    className="flex flex-col cursor-pointer items-center justify-center gap-1 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-[#1e293b] data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 data-[state=active]:shadow-sm transition-all duration-300 h-full"
                                >
                                    <Building2 className="w-5 h-5" />
                                    <span className="text-sm font-bold">Company</span>
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-6">
                            <TabsContent value="individual" className="mt-0 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name *</Label>
                                        <Input 
                                            placeholder="John Doe"
                                            className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Username *</Label>
                                        <Input 
                                            placeholder="johndoe"
                                            className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                            value={formData.username}
                                            onChange={(e) => handleInputChange("username", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="company" className="mt-0 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-blue-600" />
                                        Company Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Company Name *</Label>
                                            <Input 
                                                placeholder="ACME Corporation"
                                                className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                                value={formData.companyName}
                                                onChange={(e) => handleInputChange("companyName", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">License Agreement</Label>
                                            <Input 
                                                placeholder="123456789"
                                                className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                                value={formData.licenseAgreement}
                                                onChange={(e) => handleInputChange("licenseAgreement", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Industry</Label>
                                            <Input 
                                                placeholder="Legal Services"
                                                className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                                value={formData.industry}
                                                onChange={(e) => handleInputChange("industry", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Company Size</Label>
                                            <Select onValueChange={(v) => handleInputChange("companySize", v)}>
                                                <SelectTrigger className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl transition-all font-medium">
                                                    <SelectValue placeholder="Select size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-10">1-10 employees</SelectItem>
                                                    <SelectItem value="11-50">11-50 employees</SelectItem>
                                                    <SelectItem value="51-200">51-200 employees</SelectItem>
                                                    <SelectItem value="201+">201+ employees</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 mt-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Website (Optional)</Label>
                                            <Input 
                                                placeholder="https://example.com"
                                                className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                                value={formData.website}
                                                onChange={(e) => handleInputChange("website", e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Address (Optional)</Label>
                                            <Input 
                                                placeholder="123 Business St, City, Country"
                                                className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                                value={formData.address}
                                                onChange={(e) => handleInputChange("address", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <div className="space-y-6">
                        {/* Common Fields */}
                                <div className="space-y-2 mt-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email *</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <Input 
                                            placeholder="john@example.com"
                                            className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl ps-12 focus:ring-blue-500 transition-all font-medium"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Password *</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <Input 
                                            type="password"
                                            placeholder="••••••••"
                                            className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl ps-12 pe-4 focus:ring-blue-500 transition-all font-medium"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange("password", e.target.value)}
                                        />
                                        <button 
                                            type="button"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                        >
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 ml-1">
                                        <span className={`text-[10px] font-bold uppercase tracking-tighter transition-colors ${strength.textColor}`}>{strength.label}</span>
                                        <div className="h-1 flex-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full transition-all duration-500 ${strength.color} ${strength.width}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Referral Code (Optional)</Label>
                                    <Input 
                                        placeholder="REFER123"
                                        className="bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] h-12 rounded-xl focus:ring-blue-500 transition-all font-medium"
                                        value={formData.referralCode}
                                        onChange={(e) => handleInputChange("referralCode", e.target.value)}
                                    />
                                </div>

                                {/* Verify Email Block */}
                                <div className="bg-blue-50/50  dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 space-y-4">
                                    <div className="flex gap-4">
                                        <div className="bg-blue-600/10 dark:bg-blue-600/20 p-2.5 rounded-full h-fit">
                                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Verify Email Address</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Please verify your email address to continue</p>
                                        </div>
                                    </div>
                                    <div className="pl-12">
                                        <Button className="bg-[#0a355c] hover:bg-[#0a355c]/80 text-white rounded-full px-8 font-bold h-10 shadow-lg shadow-[#0a355c]/20">
                                            Send Code
                                        </Button>
                                    </div>
                                </div>

                                {/* Terms & Privacy */}
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center space-x-3 group cursor-pointer">
                                        <Checkbox id="terms" className="rounded-md border-slate-200 dark:border-slate-700 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                        <label htmlFor="terms" className="text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer group-hover:text-blue-600 transition-colors tracking-tight">
                                            I agree to the <Link href="/terms-of-service" className="text-blue-600 hover:underline">Terms & Conditions</Link>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3 group cursor-pointer">
                                        <Checkbox id="privacy" className="rounded-md border-slate-200 dark:border-slate-700 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                        <label htmlFor="privacy" className="text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer group-hover:text-blue-600 transition-colors tracking-tight">
                                            I accept the <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit */}
                                <Button className="w-full bg-[#0a355c] hover:bg-[#0a355c]/80 cursor-pointer text-white rounded-2xl h-14 text-base shadow-xl shadow-[#0a355c]/20 transition-all mt-4">
                                    Sign Up
                                </Button>

                                <div className="text-center pt-4">
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                        Already have an account?{" "}
                                        <Link href="/login" className="text-blue-600 font-bold hover:underline">
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
