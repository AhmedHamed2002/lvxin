"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Shield, ChevronLeft, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function ForgotPasswordPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [type, setType] = useState("email");
    const router = useRouter();

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("theme") === "dark");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!identifier) {
            Swal.fire({
                icon: "warning",
                title: "Required Field",
                text: "Please enter your email, phone, or username.",
                confirmButtonColor: "#7c3aed",
                background: isDarkMode ? "#1e293b" : "#fff",
                color: isDarkMode ? "#f8fafc" : "#111827",
            });
            return;
        }

        setLoading(true);
        // Simulate API call
        router.push("/reset-password");
        // setTimeout(() => {
        //     setLoading(false);
        //     Swal.fire({
        //         icon: "success",
        //         title: "Reset Link Sent",
        //         text: `A reset link has been sent to your ${type}. please check your inbox.`,
        //         confirmButtonColor: "#7c3aed",
        //         background: isDarkMode ? "#1e293b" : "#fff",
        //         color: isDarkMode ? "#f8fafc" : "#111827",
        //     });
        //     router.push("/reset-password");
        // }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] py-12 px-4 flex justify-center items-center transition-colors duration-300">
            <Card className="w-full max-w-lg bg-white dark:bg-[#1e293b] border-none shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in duration-500 relative">
                <div className="absolute top-4 right-4 bg-[#ffffff] dark:bg-[#1e293b] shadow rounded-lg">
                    <ModeToggle/>
                </div>

                <CardContent className="px-8 pt-4 md:px-12 md:pt-6">
                    {/* Header */}
                    <div className="text-center mb-7">
                        <div className="flex justify-center mb-6">
                            <img
                                src="/assets/images/logo.png"
                                alt="LVXIN"
                                className="h-10 w-auto"
                            />
                        </div>
                        <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                            Reset Your Password
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                            Enter your email address, phone number, or username and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Identifier Input */}
                        <div className="space-y-1">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                                Email, Phone, or Username
                            </Label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                <Input 
                                    placeholder="Enter your email, phone, or username"
                                    className="h-12 pl-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Type Selection */}
                        <div className="space-y-1">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                                Type (Optional)
                            </Label>
                            <Select value={type} onValueChange={setType}>
                                <SelectTrigger className="h-12 bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-[#334155] rounded-xl focus:ring-blue-500 transition-all font-medium">
                                    <SelectValue placeholder="Email" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="phone">Phone</SelectItem>
                                    <SelectItem value="username">Username</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Submit Button */}
                        <Button 
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-[#0a355c] hover:bg-[#0a355c]/80 cursor-pointer text-white rounded-2xl text-base shadow-xl shadow-[#0a355c]/20 transition-all mt-2 font-bold"
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </Button>
                    </form>

                    {/* Security Notice */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl px-6 py-2 flex gap-4 mt-5">
                        <div className="shrink-0 pt-1">
                            <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Security Notice:</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                For your security, we'll only send reset links to verified accounts. The link will expire in 1 hour and can only be used once.
                            </p>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="pt-4 space-y-4">
                        <div className="h-px bg-slate-100 dark:bg-slate-800 w-full" />
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-0">
                            <Link href="/login" className="text-blue-600 font-bold text-sm hover:underline transition-colors flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" /> Back to Login
                            </Link>
                            <Link href="/register" className="text-blue-600 font-bold text-sm hover:underline transition-colors">
                                Create Account
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
