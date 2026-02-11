'use client';

import { FileText, Users, WalletCards } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LatestUsersTable } from '@/components/admin/LatestUsersTable';

const statsCards = [
    {
        title: "Active Users",
        value: "2876",
        unit: "user",
        change: "+23%",
        icon: Users,
        bgColor: "bg-indigo-100 dark:bg-indigo-900/50",
        color: "bg-indigo-200 text-indigo-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        title: "Active Subscriptions",
        value: "1400",
        unit: "Subscriptions",
        change: "+23%",
        icon: WalletCards,
        bgColor: "bg-yellow-50 dark:bg-yellow-900/50",
        color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400",
    },
    {
        title: "Total Contracts Analyzed",
        value: "12000",
        unit: "Contracts",
        change: "+23%",
        icon: FileText,
        bgColor: "bg-green-100 dark:bg-green-900/50",
        color: "bg-green-200 text-green-600 dark:bg-green-900/50 dark:text-green-400",
    },
];


export default function UserPage() {
    return (
        <div className="space-y-6 bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
            <header className="flex flex-col justify-center items-center md:items-start gap-2 pt-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">User Management</h1>
            </header>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
                {statsCards.map((stat, i) => (
                <Card key={i} className={`${stat.bgColor} border-none cursor-pointer transition-all duration-700 hover:scale-95 shadow-sm rounded-2xl hover:shadow-md`}>
                    <CardContent className="px-6 py-2">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{stat.title}</p>
                        <div className="flex items-baseline gap-1 mt-2">
                            <h3 className="text-2xl font-bold text-[#0f111b] dark:text-white">{stat.value}</h3>
                            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stat.unit}</span>
                        </div>
                        <p className="text-[11px] font-bold text-emerald-500 mt-2 flex items-center gap-1">
                            {stat.change} <span className="text-slate-600 dark:text-slate-300 font-normal">from last month</span>
                        </p>
                        </div>
                        <div className={`p-2.5 rounded-xl ${stat.color}`}>
                        <stat.icon className={`w-5 h-5`} />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Latest Users Table Section */}
            <LatestUsersTable />
        </div>
    );
}