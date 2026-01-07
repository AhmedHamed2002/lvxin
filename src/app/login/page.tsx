"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { userService } from "@/services/userService";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export default function LoginForm() {
    const router = useRouter();

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState({ email: false, password: false });

    useEffect(() => {
    setIsDarkMode(localStorage.getItem("theme") === "dark");

    const token = localStorage.getItem("Lvxin_token");
    if (token) {
        userService
        .checkToken()
        .then((res) => {
            if (res.status === "success") {
            localStorage.setItem("Lvxin_logged", "true");
            window.dispatchEvent(new Event("login-success"));

            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "info",
                title: "You are already logged in",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                background: isDarkMode ? "#1e293b" : "#fff",
                color: isDarkMode ? "#f8fafc" : "#111827",
            });

            router.push("/mydash/dashboard");
            }
        })
        .catch(() => localStorage.removeItem("Lvxin_token"));
    }
    }, [isDarkMode, router]);

    const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    try {
        const res = await userService.login({ email, password });
        setLoading(false);

        if (res.status === "success") {
        localStorage.setItem("Lvxin_token", res.token);

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: res.data || "Login successful",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: isDarkMode ? "#1e293b" : "#fff",
            color: isDarkMode ? "#f8fafc" : "#111827",
        });

        router.push("/home");
        } else {
        Swal.fire({
            icon: "warning",
            title: "Warning!",
            text: res.data || "Login failed",
            confirmButtonColor: "#f1c40f",
            background: isDarkMode ? "#1e293b" : "#fff",
            color: isDarkMode ? "#f8fafc" : "#111827",
        });
        }
    } catch (err: any) {
        setLoading(false);
        Swal.fire({
        icon: "error",
        title: "Error!",
        text: err?.message || "Login failed",
        confirmButtonColor: "#e74c3c",
        background: isDarkMode ? "#1e293b" : "#fff",
        color: isDarkMode ? "#f8fafc" : "#111827",
        });
    }
    };

    return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-[#f8fafc] dark:bg-[#0f172a]">
        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
            <img
                src="/assets/images/logo.png"
                alt="LVXIN"
                className="h-12 w-auto object-contain"
            />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Welcome Back
            </h2>
            <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            Sign in to your account to continue
            </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                Email
            </label>

            <div className="relative">
                <Mail className="absolute top-1/2 mx-4 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() =>
                    setTouched((t) => ({ ...t, email: true }))
                }
                placeholder="Enter your email"
                className="w-full bg-slate-50 dark:bg-[#0f172a]
                border border-slate-200 dark:border-[#334155]
                rounded-xl py-3 ps-12 pe-3
                text-slate-900 dark:text-slate-100
                focus:outline-none focus:ring-2
                focus:ring-[#0F4C81] dark:focus:ring-blue-400
                placeholder:text-slate-400 transition-all"
                />
            </div>

            {touched.email && !/\S+@\S+\.\S+/.test(email) && (
                <p className="text-red-500 text-sm mt-1">
                Enter a valid email
                </p>
            )}
            </div>

            {/* Password */}
            <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">
                Password
            </label>

            <div className="relative">
                <Lock className="absolute top-1/2 mx-4 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                    setTouched((t) => ({ ...t, password: true }))
                }
                placeholder="Enter your password"
                className="w-full bg-slate-50 dark:bg-[#0f172a]
                border border-slate-200 dark:border-[#334155]
                rounded-xl py-3 ps-12 pe-3
                text-slate-900 dark:text-slate-100
                focus:outline-none focus:ring-2
                focus:ring-[#0F4C81] dark:focus:ring-blue-400
                placeholder:text-slate-400 transition-all"
                />
            </div>

            {touched.password && !password && (
                <p className="text-red-500 text-sm mt-1">
                Password is required
                </p>
            )}
            </div>

            {/* Submit */}
            <button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full text-white bg-[#184891] hover:bg-[#0a355c]
            focus:ring-4 focus:outline-none focus:ring-blue-300
            rounded-full px-5 py-2.5 text-center
            disabled:bg-[#0a355c] disabled:cursor-not-allowed"
            >
            {loading ? (
                <>
                <div className="flex items-center justify-center gap-3 cursor-auto">
                    <Spinner />
                    Signing in...
                </div>
                </>
            ) : (
                "Sign in"
            )}
            </button>

            {/* Forgot password */}
            <div className="text-center mt-2">
            <Link
                href="/forgot-password"
                className="text-slate-500 dark:text-slate-300 hover:underline text-sm"
            >
                Forgot password?
            </Link>
            </div>

            <hr className="my-4 border-slate-200 dark:border-[#334155]" />

            {/* Register */}
            <div className="text-center text-xs text-slate-600 dark:text-slate-300">
            <span>Don't have an account? </span>
            <Link
                href="/register"
                className="font-bold text-[#3b82f6] hover:underline"
            >
                Sign Up
            </Link>
            </div>
        </form>
        </div>
    </div>
    );
}
