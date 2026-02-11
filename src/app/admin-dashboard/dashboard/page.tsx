'use client';

import { Users, DollarSign, FileText, Calendar, Wallet, TrendingUp, Activity as PulseIcon, ChartNoAxesCombined, ChartColumnStacked } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LatestUsersTable } from '@/components/admin/LatestUsersTable';

// Mock data based on the image
const stats = [
    { title: "Active Users", value: "2876", unit: "user", change: "+23%", icon: PulseIcon, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Monthly Revenue", value: "2876", unit: "$", change: "+23%", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Total Contracts Analyzed", value: "12000", unit: "Contracts", change: "+23%", icon: FileText, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Total Users", value: "5000", unit: "user", change: "+23%", icon: Users, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Active Subscriptions", value: "1400", unit: "Subscriptions", change: "+23%", icon: Wallet, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Website Traffic", value: "125k", unit: "Visitors", change: "+23%", icon: ChartNoAxesCombined, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
];

const revenueData = [
    { name: 'SEP', value: 25000 },
    { name: 'OCT', value: 22000 },
    { name: 'NOV', value: 30000 },
    { name: 'DEC', value: 20000 },
    { name: 'JAN', value: 35000 },
    { name: 'FEB', value: 38000 },
];

const trafficData = [
    { name: 'Desktop', value: 45, fill: '#6366f1' },
    { name: 'Mobile', value: 40, fill: '#f59e0b' },
    { name: 'Tablet', value: 15, fill: '#10b981' },
];



const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-[#0d0f15] border border-slate-100 dark:border-slate-700 shadow-2xl p-4 rounded-2xl animate-in fade-in zoom-in duration-200">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{label}</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <p className="text-sm font-black text-slate-900 dark:text-white">
                        {`$${(payload[0].value / 1000).toFixed(1)}K`}
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

export default function DashboardPage() {
    return (
        <div className="space-y-6 bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
            <header className="flex flex-col justify-center items-center md:items-start gap-2 pt-4">
                <h1 className="text-base sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-800 dark:text-white">Welcome Back Mr. Mahmoud</h1>
            </header>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                <Card key={i} className="border-none cursor-pointer transition-all duration-700 hover:scale-95 shadow-sm bg-slate-50 dark:bg-[#14161f] rounded-2xl hover:shadow-md">
                    <CardContent className="px-4 py-5">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <p className="text-[10px] sm:text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                                    <span className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.unit}</span>
                                </div>
                                <p className="text-[10px] font-semibold text-emerald-500 mt-2 flex items-center gap-1">
                                    {stat.change} <span className="text-slate-400 dark:text-slate-500 font-normal">from last month</span>
                                </p>
                            </div>
                            <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <Card className="xl:col-span-2 border-none shadow-sm dark:bg-[#14161f] rounded-xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2 px-6">
                    <div className="flex flex-col gap-6">
                    <Button variant="ghost" size="sm" className="w-fit cursor-pointer rounded-xl bg-slate-100 dark:bg-[#0b0d11] hover:bg-slate-200 dark:hover:bg-[#1a1d26] text-slate-600 dark:text-slate-400 font-bold px-4 h-9 shadow-sm border border-slate-100 dark:border-slate-800 text-[11px] uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        This month
                    </Button>
                    <div className="space-y-1">
                        <h3 className="text-2xl md:text-4xl font-bold text-[#0f111b] dark:text-white">$37.5K</h3>
                        <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-600 font-medium">Total revenue</span>
                        <span className="text-emerald-500 font-bold flex items-center">
                            <TrendingUp className="w-3.5 h-3.5 mr-1" />
                            +2.45%
                        </span>
                        </div>
                    </div>
                    </div>
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/40">
                    <ChartColumnStacked className="w-6 h-6 text-blue-600" />
                    </div>
                </CardHeader>
                <CardContent className="px-4 pb-8">
                    <div className="h-85 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" className="dark:stroke-slate-800" />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}}
                            dy={20}
                        />
                        <YAxis hide />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#2563eb" 
                            strokeWidth={4}
                            fillOpacity={1} 
                            fill="url(#revenueGradient)" 
                            dot={{ fill: '#2563eb', strokeWidth: 2, r: 5, stroke: '#fff' }}
                            activeDot={{ r: 8, strokeWidth: 0, fill: '#1d4ed8' }}
                        />
                        </AreaChart>
                    </ResponsiveContainer>
                    </div>
                </CardContent>
                </Card>

                {/* Daily Traffic Chart */}
                <Card className="border-none shadow-sm dark:bg-[#14161f] rounded-3xl flex flex-col p-2">
                <CardHeader className="pb-4 pt-6 px-6">
                    <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em]">Daily Traffic</p>
                        <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">2.579</h3>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Visitors</span>
                        </div>
                    </div>
                    <span className="text-emerald-500 text-[10px] font-black bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg">+2.45%</span>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col px-6">
                    <div className="flex-1 min-h-60 relative mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart 
                        innerRadius="30%" 
                        outerRadius="100%" 
                        data={[...trafficData].reverse()} 
                        startAngle={90} 
                        endAngle={450}
                        barSize={12}
                        >
                        <RadialBar
                            background={{ fill: '#f1f5f9', className: 'dark:fill-[#0f172a]' }}
                            dataKey='value'
                            cornerRadius={10}
                        />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-1 gap-2 pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto pb-4">
                    {trafficData.map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.fill}} />
                            <span className="text-[12px] font-bold text-slate-600 dark:text-slate-400">{item.name}</span>
                        </div>
                        <span className="text-[12px] font-black text-slate-900 dark:text-white">{item.value}%</span>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </div>

            {/* Latest Users Table Section */}
            <LatestUsersTable />
        </div>
    );
}