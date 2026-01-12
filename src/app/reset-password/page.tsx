"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, Info, AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function ResetPasswordPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
    const [email, setEmail] = useState("ah1973826450@gmail.com");

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("theme") === "dark");
        if (timeLeft <= 0) return;
        
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleResend = () => {
        // Logic to resend email would go here
        Swal.fire({
            icon: "success",
            title: "Email Resent",
            text: "A new reset link has been sent to your email address.",
            confirmButtonColor: "#7c3aed",
            background: isDarkMode ? "#1e293b" : "#fff",
            color: isDarkMode ? "#f8fafc" : "#111827",
        });
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4  bg-[#f8fafc] dark:bg-[#0f172a]">
            <Card className="w-full max-w-xl bg-white dark:bg-[#1e293b] border-none shadow-2xl rounded-xl overflow-hidden animate-in fade-in zoom-in duration-500 relative">
                <div className="absolute top-4 right-4 bg-[#ffffff] dark:bg-[#1e293b] shadow rounded-lg">
                    <ModeToggle/>
                </div>

                <CardContent className="px-4 md:px-6 py-4 md:py-6 flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="mb-4 flex justify-center">
                        <div className="bg-[#a7f3d0] dark:bg-emerald-900/30 p-4 rounded-full">
                            <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="space-y-2 mb-5">
                        <h2 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                            Check Your Email
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            Reset link sent to:
                        </p>
                    </div>

                    {/* Email Display Box */}
                    <div className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl px-4 py-2 mb-5">
                        <p className="text-slate-400 dark:text-slate-500 text-sm mb-1">Reset link sent to:</p>
                        <p className="text-slate-900 dark:text-white font-bold text-lg break-all">
                            {email}
                        </p>
                    </div>

                    {/* Next Steps */}
                    <div className="w-full bg-[#f0f9ff] dark:bg-blue-900/10 border border-[#e0f2fe] dark:border-blue-900/30 rounded-2xl px-4 py-2 text-left mb-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h4 className="font-bold text-sm text-blue-900 dark:text-blue-300">Next Steps</h4>
                        </div>
                        <ul className="space-y-1">
                            {[
                                "Check your email inbox (and spam folder)",
                                "Click the reset link in the email",
                                "Create a new secure password",
                                "Sign in with your new password"
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-xs text-blue-700 dark:text-blue-400/80">
                                    <span className="mt-1 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Security Notice */}
                    <div className="w-full bg-[#fef2f2] dark:bg-red-900/10 border border-[#fee2e2] dark:border-red-900/30 rounded-2xl px-4 py-2 text-left mb-2">
                        <div className="flex gap-x-3 gap-y-2">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-red-900 dark:text-red-300 text-xs">Security Notice:</h4>
                                <p className="text-xs text-red-700 dark:text-red-400/80 leading-relaxed">
                                    The reset link will expire in 1 hour and can only be used once. If you didn't request this reset, you can safely ignore the email.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Expiration Timer */}
                    <div className="my-3 text-center">
                        <p className="text-slate-400 dark:text-slate-500 text-sm font-medium mb-2">Link expires in:</p>
                        <p className="text-2xl font-black text-[#a855f7] dark:text-[#c084fc] tracking-tight">
                            {formatTime(timeLeft)}
                        </p>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 h-10 rounded-2xl border-slate-200 dark:border-slate-800 dark:bg-transparent dark:text-white dark:hover:bg-slate-800 font-bold"
                        >
                            <Link href="/login">
                                Back to Login
                            </Link>
                        </Button>
                        <Button
                            onClick={handleResend}
                            className="flex-1 h-10 cursor-pointer rounded-2xl bg-linear-to-r from-[#6366f1] to-[#456ad0] dark:from-[#5580f7] dark:to-[#6366f1] hover:opacity-90 text-white border-none font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Resend Email
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
