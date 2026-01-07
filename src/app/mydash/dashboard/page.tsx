"use client"

import React from "react"
import { FileText, Files, DollarSign, Type, Upload, Home, Briefcase, Users, Handshake } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import HistoryTable from "@/components/analytics-history/HistoryTable"

const chartData = [
    { name: "Mar", value: 0 },
    { name: "Mar", value: 12 },
    { name: "Mar", value: 15 },
    { name: "Apr", value: 25 },
    { name: "Apr", value: 20 },
    { name: "May", value: 35 },
    { name: "May", value: 28 },
    { name: "May", value: 32 },
    { name: "Jun", value: 5 },
    { name: "Jun", value: 18 },
    { name: "Jun", value: 20 },
    { name: "Jul", value: 10 },
    { name: "Jul", value: 25 },
    { name: "Jul", value: 2 },
    { name: "Aug", value: 10 },
]

const stats = [
    {
        title: "Contracts Uploaded",
        value: "128",
        icon: FileText,
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
        color: "bg-indigo-200 text-indigo-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        title: "Pages Uploaded",
        value: "1,842",
        icon: Files,
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        color: "bg-blue-200 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        title: "Total Cost",
        value: "$2,480",
        icon: DollarSign,
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
        color: "bg-indigo-200 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
    {
        title: "Chinese Words Processed",
        value: "96,540",
        icon: Type,
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        color: "bg-blue-200 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
]

const breakdown = [
    { label: "Lease Contracts", count: 45, icon: Home, progress: 85, color: "bg-blue-500" },
    { label: "Service Agreements", count: 35, icon: Briefcase, progress: 70, color: "bg-rose-500" },
    { label: "Employment", count: 28, icon: Users, progress: 55, color: "bg-emerald-500" },
    { label: "Partnership", count: 21, icon: Handshake, progress: 40, color: "bg-amber-500" },
]

export default function DashboardPage() {
    return (
        <div className="text-gray-900 dark:text-gray-100">
            <div className=" bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
                    <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#1a1f36] dark:text-white">
                        Good Morning, Mahmoud
                    </h1>
                    <Button className="cursor-pointer bg-[#2463eb] hover:bg-[#1d4ed8] text-white px-6 py-5 rounded-lg flex items-center gap-2 transition-all">
                        <Upload className="size-4" />
                        Upload New Document
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className={cn("border border-transparent  dark:border-gray-700  hover:shadow-lg hover:dark:shadow-black/30 cursor-pointer p-6 rounded-2xl shadow-sm flex justify-between items-center group transition-all hover:scale-[1.02] duration-700 hover:translate-y-[-2px]", stat.bgColor)}
                    >
                        <div>
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                                {stat.title}
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                            </h3>
                        </div>
                        <div className={cn("p-3 rounded-xl transition-colors", stat.color)}>
                            <stat.icon className="size-5" />
                        </div>
                    </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Analysis Overview */}
                    <div className="flex-1 min-w-0 cursor-pointer bg-white dark:bg-[#11141d] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                        Analysis Overview
                    </h2>
                    <div className="h-[300px] w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid 
                            vertical={false} 
                            strokeDasharray="0" 
                            stroke="#f1f1f1" 
                            className="dark:stroke-gray-800" 
                            />
                            <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: "#9ca3af", fontSize: 12 }} 
                            dy={10}
                            />
                            <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: "#9ca3af", fontSize: 12 }} 
                            />
                            <Tooltip 
                            contentStyle={{ 
                                backgroundColor: "#1f2937", 
                                border: "none", 
                                borderRadius: "8px",
                                color: "#fff"
                            }}
                            itemStyle={{ color: "#fff" }}
                            />
                            <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#2463eb" 
                            strokeWidth={3} 
                            dot={false}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            />
                        </LineChart>
                        </ResponsiveContainer>
                    </div>
                    </div>

                    {/* Contract Breakdown */}
                    <div className="w-full cursor-pointer lg:w-[350px] bg-white dark:bg-[#11141d] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                    <div className="space-y-6">
                        {breakdown.map((item, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className={cn("p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50", 
                                item.label === "Lease Contracts" && "text-blue-500",
                                item.label === "Service Agreements" && "text-rose-500",
                                item.label === "Employment" && "text-emerald-500",
                                item.label === "Partnership" && "text-amber-500"
                                )}>
                                <item.icon className="size-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {item.label}
                                </span>
                            </div>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                                {item.count}
                            </span>
                            </div>
                            <div className="relative h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div 
                                className={cn("h-full absolute left-0 top-0 transition-all duration-1000", item.color)} 
                                style={{ width: `${item.progress}%` }}
                            />
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="pt-8 mt-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Total Contracts
                        </span>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white leading-none">
                        128
                        </span>
                    </div>
                    </div>
                </div>

                {/* Table Wrapper section*/}
                <HistoryTable />
            </div>

        </div>
    )
}
