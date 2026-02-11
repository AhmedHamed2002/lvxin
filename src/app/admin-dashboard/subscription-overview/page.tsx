'use client';

import React, { useState } from 'react';
import { 
    Search, 
    RotateCcw, 
    Mail, 
    Calendar,
    MoreHorizontal,
    Users,
    CreditCard,
    Zap,
    Clock,
    Eye,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Info,
    History,
    TrendingUp
} from 'lucide-react';
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    CardDescription 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { 
    ResponsiveContainer, 
    PieChart, 
    Pie, 
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';

// Dummy Data
const SUBSCRIPTIONS = [
    { 
        id: "USR-10234", 
        name: "Abdo Araby", 
        email: "AbdoAraby1911@gmail.com", 
        plan: "Enterprise", 
        status: "Active", 
        tokensUsed: 1420, 
        tokensTotal: 2000, 
        autoRenew: "Yes", 
        startDate: "Jan 15, 2024", 
        expiryDate: "Mar 15, 2024", 
        avatar: "/assets/images/placeholder.png" 
    },
    { 
        id: "USR-10235", 
        name: "Ahmed Hassan", 
        email: "ahmed.h@example.com", 
        plan: "Starter", 
        status: "Paused", 
        tokensUsed: 200, 
        tokensTotal: 500, 
        autoRenew: "Yes", 
        startDate: "Jan 10, 2024", 
        expiryDate: "Feb 10, 2024", 
        avatar: "/assets/images/placeholder.png" 
    },
    { 
        id: "USR-10236", 
        name: "Sara Jones", 
        email: "sara.j@example.com", 
        plan: "Pro", 
        status: "Expired", 
        tokensUsed: 1000, 
        tokensTotal: 1000, 
        autoRenew: "No", 
        startDate: "Dec 01, 2023", 
        expiryDate: "Jan 01, 2024", 
        avatar: "/assets/images/placeholder.png" 
    },
    { 
        id: "USR-10237", 
        name: "John Doe", 
        email: "john.d@example.com", 
        plan: "Enterprise", 
        status: "Cancelled", 
        tokensUsed: 50, 
        tokensTotal: 2000, 
        autoRenew: "No", 
        startDate: "Jan 20, 2024", 
        expiryDate: "Feb 20, 2024", 
        avatar: "/assets/images/placeholder.png" 
    },
];

const TokenUsageGauge = ({ used, total, size = 48 }: { used: number, total: number, size?: number }) => {
    const percentage = Math.min((used / total) * 100, 100);
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    className="text-slate-100 dark:text-slate-800"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className="text-blue-600 transition-all duration-1000 ease-out"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-[8px] leading-tight font-bold">
                <span className="text-slate-700 dark:text-slate-200">{used.toLocaleString()}</span>
                <div className="w-4 h-px bg-slate-200 dark:bg-slate-700 my-0.5" />
                <span className="text-slate-400">{total.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default function SubscriptionOverviewPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedPlan, setSelectedPlan] = useState('all');
    const [selectedSub, setSelectedSub] = useState<any>(null);
    
    // Modals
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isChangePlanOpen, setIsChangePlanOpen] = useState(false);
    const [isPauseOpen, setIsPauseOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    const filteredSubs = SUBSCRIPTIONS.filter(sub => {
        const matchesSearch = sub.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            sub.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || sub.status === selectedStatus;
        const matchesPlan = selectedPlan === 'all' || sub.plan === selectedPlan;
        return matchesSearch && matchesStatus && matchesPlan;
    });

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedStatus('all');
        setSelectedPlan('all');
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400';
            case 'Paused': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400';
            case 'Expired': return 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400';
            case 'Cancelled': return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Subscription Overview</h1>
                    <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 mt-1">Manage user subscriptions and token allocations.</p>
                </div>
            </div>

            {/* Filter Section */}
            <Card className="border-none shadow-md bg-[#f8fafc] dark:bg-[#14161f] rounded-2xl">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        <div className="space-y-2">
                            <Label className="text-xs ms-1 font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Search</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="User ID or Email"
                                    className="pl-10 h-11 text-xs md:text-sm rounded-xl bg-white dark:bg-[#070c16] border-slate-200 dark:border-slate-800 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs ms-1 font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Status</Label>
                            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                <SelectTrigger className="h-11 py-5 cursor-pointer rounded-xl bg-white dark:bg-[#070c16] border-slate-200 dark:border-slate-800">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="all">All Status</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Active">Active</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Paused">Paused</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Expired">Expired</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs ms-1 font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Subscription Plan</Label>
                            <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                                <SelectTrigger className="h-11 py-5 cursor-pointer rounded-xl bg-white dark:bg-[#070c16] border-slate-200 dark:border-slate-800">
                                    <SelectValue placeholder="All Plans" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="all">All Plans</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Starter">Starter</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Pro">Pro</SelectItem>
                                    <SelectItem className="cursor-pointer" value="Enterprise">Enterprise</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-2">
                            <Button 
                                variant="outline" 
                                onClick={handleClearFilters}
                                className="w-full h-11 cursor-pointer rounded-xl bg-white dark:bg-[#070c16] border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                <span>Reset Filters</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* List Section */}
            <div className="space-y-4">
                {/* Mobile View */}
                <div className="grid grid-cols-1 gap-4 xl:hidden">
                    {filteredSubs.length > 0 ? filteredSubs.map((sub) => (
                        <Card key={sub.id} className="border-none shadow-sm cursor-pointer bg-white hover:bg-[#f5f6fa] dark:bg-[#14161f] dark:hover:bg-[#181a21] transition-all duration-700 rounded-2xl p-5 group hover:shadow-lg">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-10 h-10 border-2 border-white dark:border-slate-700 shadow-sm">
                                        <AvatarImage src={sub.avatar} />
                                        <AvatarFallback className="bg-blue-600 text-white font-bold">{sub.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs md:text-base">{sub.name}</h3>
                                        <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">{sub.id}</p>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer rounded-full">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 dark:bg-[#1e222d] border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                                        <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsDetailsOpen(true); }} className="cursor-pointer py-1 hover:bg-blue-50 dark:hover:bg-blue-900/10">
                                            <Eye className="w-4 h-4 mr-3 text-blue-500" />
                                            <span className="font-medium text-xs text-blue-500">View Details</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsChangePlanOpen(true); }} className="cursor-pointer py-1 hover:bg-emerald-50 dark:hover:bg-emerald-900/10">
                                            <Zap className="w-4 h-4 mr-3 text-purple-500" />
                                            <span className="font-medium text-xs text-purple-500">Change Plan</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsPauseOpen(true); }} className="cursor-pointer py-1 hover:bg-amber-50 dark:hover:bg-amber-900/10">
                                            <Clock className={`w-4 h-4 mr-3 ${sub.status === 'Paused' ? 'text-green-500' : 'text-amber-500'}`} />
                                            <span className={`font-medium text-xs ${sub.status === 'Paused' ? 'text-green-500' : 'text-amber-500'}`}>{sub.status === 'Paused' ? 'Resume' : 'Pause'} Subscription</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsCancelOpen(true); }} className="cursor-pointer py-1 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10">
                                            <XCircle className="w-4 h-4 mr-3 text-rose-500" />
                                            <span className="font-medium text-xs text-rose-500">Cancel Subscription</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Plan</p>
                                    <p className="text-[10px] font-bold text-slate-700 dark:text-slate-200">{sub.plan}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Status</p>
                                    <Badge className={`rounded-lg px-2 py-0.5 border-none font-bold text-[8px] uppercase tracking-wider ${getStatusBadge(sub.status)}`}>
                                        {sub.status}
                                    </Badge>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Token Usage</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-blue-600 rounded-full" 
                                                style={{ width: `${(sub.tokensUsed / sub.tokensTotal) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{Math.round((sub.tokensUsed / sub.tokensTotal) * 100)}%</span>
                                    </div>
                                </div>
                                <div className="space-y-1 text-right">
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Expiry</p>
                                    <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400 italic">{sub.expiryDate}</p>
                                </div>
                            </div>
                        </Card>
                    )) : (
                        <div className="py-20 text-center space-y-3">
                            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                                <Search className="w-8 h-8 text-slate-300" />
                            </div>
                            <p className="text-slate-500 font-medium">No results found for your search criteria</p>
                            <Button variant="link" onClick={handleClearFilters} className="text-blue-600">Clear all filters</Button>
                        </div>
                    )}
                </div>

                {/* Desktop Table View */}
                <Card className="hidden xl:block border-none shadow-md dark:bg-[#14161f] rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-[#161d2b] border-y border-slate-100 dark:border-slate-800">
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider">User ID</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider text-center">Plan</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider text-center">Token Usage</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider text-center">Auto Renew</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider">Start Date</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider">Expiry Date</th>
                                    <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                {filteredSubs.map((sub) => (
                                    <tr key={sub.id} className="cursor-pointer hover:bg-slate-50/70 dark:hover:bg-blue-900/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <Avatar className="w-8 h-8 border border-white dark:border-slate-700 shadow-sm">
                                                    <AvatarImage src={sub.avatar} />
                                                    <AvatarFallback className="bg-blue-600 text-white font-bold">{sub.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col mt-1">
                                                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">{sub.name}</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">{sub.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <Mail className="w-3.5 h-3.5 opacity-50" />
                                                <span className="text-[13px] font-medium">{sub.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{sub.plan}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Badge className={`rounded-lg px-2.5 py-1 border-none font-bold text-[9px] uppercase tracking-wider ${getStatusBadge(sub.status)}`}>
                                                {sub.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center">
                                                <TokenUsageGauge used={sub.tokensUsed} total={sub.tokensTotal} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`text-[13px] font-bold ${sub.autoRenew === 'Yes' ? 'text-emerald-500' : 'text-slate-400'}`}>
                                                {sub.autoRenew}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-[12px] text-slate-600 dark:text-slate-400 font-medium">{sub.startDate}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-[12px] text-slate-600 dark:text-slate-400 font-medium">{sub.expiryDate}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer rounded-full opacity-50 group-hover:opacity-100 transition-opacity">
                                                        <MoreHorizontal className="h-5 w-5" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48 dark:bg-[#1e222d] border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                                                    <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsDetailsOpen(true); }} className="cursor-pointer py-3 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                                                        <Eye className="w-4 h-4 mr-3 text-blue-500" />
                                                        <span className="font-bold text-[13px] text-blue-500">View Details</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsChangePlanOpen(true); }} className="cursor-pointer py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors">
                                                        <Zap className="w-4 h-4 mr-3 text-purple-500" />
                                                        <span className="font-bold text-[13px] text-purple-500">Change Plan</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsPauseOpen(true); }} className="cursor-pointer py-3 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                                                        <Clock className={`w-4 h-4 mr-3 ${sub.status === 'Paused' ? 'text-emerald-500' : 'text-amber-500'}`} />
                                                        <span className={`font-bold text-[13px] ${sub.status === 'Paused' ? 'text-emerald-500' : 'text-amber-500'}`}>{sub.status === 'Paused' ? 'Resume' : 'Pause'} Subscription</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator className="border-slate-100 dark:border-slate-800" />
                                                    <DropdownMenuItem onClick={() => { setSelectedSub(sub); setIsCancelOpen(true); }} className="cursor-pointer py-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors">
                                                        <XCircle className="w-4 h-4 mr-3 text-rose-500" />
                                                        <span className="font-bold text-[13px] text-rose-500">Cancel Subscription</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <p className="text-xs font-medium text-slate-500">Showing 4 to {filteredSubs.length} of 10 users</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-lg border-slate-200 dark:border-slate-800 cursor-pointer">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="h-9 w-9 p-0 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">1</Button>
                            <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-lg border-slate-200 dark:border-slate-800 cursor-pointer">2</Button>
                            <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-lg border-slate-200 dark:border-slate-800 cursor-pointer">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* View Details Modal */}
            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                <DialogContent className="p-0 overflow-y-auto sm:max-h-[600px] premium-scrollbar border-none shadow-3xl rounded-[25px] dark:bg-[#14161f]">
                    <DialogHeader className="px-6 pt-5">
                        <div className="flex items-center justify-center md:justify-between">
                            <DialogTitle className="text-base sm:text-lg md:text-xl font-bold">Subscription Details</DialogTitle>
                        </div>
                    </DialogHeader>
                    <div className="p-6 pt-0 space-y-4 overflow-y-auto max-h-[86vh]">
                        {/* User Profile Card */}
                        <div className="bg-slate-50/80 dark:bg-slate-900/40 rounded-2xl p-3 flex items-center gap-2 border border-white dark:border-slate-800">
                            <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white dark:border-slate-700 shadow-lg">
                                <AvatarImage src={selectedSub?.avatar} />
                                <AvatarFallback className="bg-blue-600 text-white font-bold text-xs sm:text-sm">{selectedSub?.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[10px] sm:text-sm md:text-base  font-semibold text-slate-800 dark:text-slate-100">{selectedSub?.name}</h3>
                                    <Badge className={`rounded-lg px-2 py-1 border-none font-semibold text-[8px] uppercase tracking-widest ${getStatusBadge(selectedSub?.status)}`}>
                                        {selectedSub?.status}
                                    </Badge>
                                </div>
                                <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{selectedSub?.email}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-400">User ID:</span>
                                    <span className="text-[7px] sm:text-[8px] font-bold text-slate-600 dark:text-slate-300">{selectedSub?.id}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Plan Details */}
                            <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                                    <CreditCard className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm sm:text-base">Plan Details</span>
                                </div>
                                <Card className="border-none bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl p-3">
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] sm:text-xs">
                                            <span className="text-slate-600 font-medium">Current Plan</span>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSub?.plan}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[9px] sm:text-xs">
                                            <span className="text-slate-600 font-medium">Billing Amount</span>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">${selectedSub?.plan === 'Enterprise' ? '499' : '99'}/month</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[9px] sm:text-xs">
                                            <span className="text-slate-600 font-medium">Auto Renew</span>
                                            <span className={`font-bold ${selectedSub?.autoRenew === 'Yes' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                {selectedSub?.autoRenew === 'Yes' ? 'Enabled' : 'Disabled'}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Token Usage Detail */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm sm:text-base">Token Usage</span>
                                </div>
                                <Card className="border-none bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl p-3">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                                            <span className="text-slate-600 font-medium">Tokens Used</span>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">
                                                {selectedSub?.tokensUsed?.toLocaleString()} / {selectedSub?.tokensTotal?.toLocaleString()}
                                            </span>
                                        </div>
                                        <Progress value={(selectedSub?.tokensUsed / selectedSub?.tokensTotal) * 100} className="h-2 bg-orange-100 dark:bg-orange-900/20 [&>div]:bg-orange-400 rounded-full" />
                                        <p className="text-[10px] text-slate-500 font-medium italic">
                                            {Math.round((selectedSub?.tokensUsed / selectedSub?.tokensTotal) * 100)}% of total tokens used
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Dates Section */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span className="text-sm sm:text-base">Subscription Dates</span>
                            </div>
                            <Card className="border-none bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl p-6">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="space-y-1">
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Start Date</p>
                                        <p className="text-[9px] sm:text-xs font-bold">{selectedSub?.startDate}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Expiry Date</p>
                                        <p className="text-[9px] sm:text-xs font-bold">{selectedSub?.expiryDate}</p>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase">Days Remaining</p>
                                        <p className="text-[9px] sm:text-xs font-bold text-blue-600">-367 days</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Activity History */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                                <History className="w-4 h-4 text-slate-500" />
                                <span>Activity History</span>
                            </div>
                            <div className="space-y-2 overflow-y-auto max-h-[120px] premium-scrollbar ps-4 border-l-3 border-slate-100 dark:border-slate-800 ml-2">
                                <div className="relative">
                                    <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-[#14161f]" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Subscription Created</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Starter plan activated</p>
                                        <p className="text-[10px] text-slate-400">Feb 10, 2024</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-[#14161f]" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Subscription Paused</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Paused by admin</p>
                                        <p className="text-[10px] text-slate-400">Apr 5, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Change Plan Modal */}
            <Dialog open={isChangePlanOpen} onOpenChange={setIsChangePlanOpen}>
                <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <DialogTitle className="text-lg md:text-2xl font-bold">Change Subscription Plan</DialogTitle>
                        <DialogDescription className='text-xs md:text-base'>Downgrade or upgrade the user's current subscription plan.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 py-2">
                        <div className="space-y-1">
                            <Label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Current Plan</Label>
                            <div className="space-y-1 bg-slate-50 dark:bg-[#070c16] border border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex items-center justify-between flex-wrap">
                                <div className="flex items-center gap-1">
                                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100">{selectedSub?.plan}</p>
                                        <p className="text-xs text-slate-500">2000 tokens/month</p>
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm font-bold text-slate-600">$499/month</p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">New Plan <span className="text-red-500">*</span></Label>
                            <Select>
                                <SelectTrigger className="h-12 py-6 cursor-pointer rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800">
                                    <SelectValue placeholder="Choose plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="starter">Starter - $99/mo</SelectItem>
                                    <SelectItem className="cursor-pointer" value="pro">Pro - $199/mo</SelectItem>
                                    <SelectItem className="cursor-pointer" value="enterprise">Enterprise - $499/mo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Effective Date</Label>
                            <div className="grid grid-cols-1 gap-3">
                                <label className="flex items-center gap-2 p-3 border border-slate-100 dark:border-slate-800 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <input type="radio" name="effective" defaultChecked className="w-4 h-4 text-blue-600" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs sm:text-sm font-bold">Immediately</p>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Plan changes take effect right away. Prorated billing will apply.</p>
                                    </div>
                                </label>
                                <label className="flex items-center gap-2 p-3 border border-slate-100 dark:border-slate-800 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <input type="radio" name="effective" className="w-4 h-4 text-blue-600" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs sm:text-sm font-bold">On Next Renewal</p>
                                        <p className="text-[10px] sm:text-xs text-slate-500">Current plan continues until Jan 15, 2025</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="gap-2">
                        <Button variant="ghost" onClick={() => setIsChangePlanOpen(false)} className="h-10 cursor-pointer text-sm sm:text-base rounded-xl px-8 hover:bg-slate-100 dark:hover:bg-slate-800">Cancel</Button>
                        <Button className="h-10 cursor-pointer text-sm sm:text-base rounded-xl px-10 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 hover:text-white dark:hover:bg-blue-800 text-white font-bold">Change Plan</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Pause/Resume Modal */}
            <Dialog open={isPauseOpen} onOpenChange={setIsPauseOpen}>
                <DialogContent className="sm:max-w-[480px] border-none shadow-2xl rounded-3xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${selectedSub?.status === 'Paused' ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-amber-50 dark:bg-amber-900/20'}`}>
                                {selectedSub?.status === 'Paused' ? <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" /> : <Clock className="w-3 h-3 md:w-6 md:h-6 text-amber-600" />}
                            </div>
                            <DialogTitle className="text-base sm:text-lg md:text-2xl font-bold">
                                {selectedSub?.status === 'Paused' ? 'Resume Subscription' : 'Pause Subscription'}
                            </DialogTitle>
                        </div>
                    </DialogHeader>
                    
                    <div className="py-4 space-y-4">
                        <div className="flex bg-slate-50 dark:bg-[#070c16] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                            <div className="flex-1 space-y-1">
                            <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">User</p>
                            <p className="text-xs md:text-sm font-bold">{selectedSub?.id}</p>
                            </div>
                            <div className="flex-1 space-y-1">
                            <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Plan</p>
                            <p className="text-xs md:text-sm font-bold">{selectedSub?.plan}</p>
                            </div>
                        </div>

                        <div className={`rounded-2xl p-4 border ${selectedSub?.status === 'Paused' ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30' : 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30'}`}>
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className={`w-4 h-4 ${selectedSub?.status === 'Paused' ? 'text-emerald-600' : 'text-amber-600'}`} />
                                <h4 className="text-[9px] sm:text-xs font-bold uppercase tracking-wide">What happens when you {selectedSub?.status === 'Paused' ? 'resume' : 'pause'}?</h4>
                            </div>
                            <ul className="space-y-0.5 sm:space-y-2">
                                <li className="text-[8px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                    <span>Contract analysis features will be {selectedSub?.status === 'Paused' ? 'immediately enabled' : 'temporarily disabled'}</span>
                                </li>
                                <li className="text-[8px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                    <span>Token balance and subscription data will be preserved</span>
                                </li>
                                <li className="text-[8px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                    <span>Billing will be {selectedSub?.status === 'Paused' ? 're-activated' : 'paused (no charges during pause period)'}</span>
                                </li>
                                <li className="text-[8px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                    <span>User can {selectedSub?.status === 'Paused' ? 'pause' : 'resume'} the subscription at any time</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-[9px] sm:text-xs font-medium text-slate-500 leading-relaxed px-1">
                            Are you sure you want to {selectedSub?.status === 'Paused' ? 'resume' : 'pause'} this subscription? The user will {selectedSub?.status === 'Paused' ? 'now' : 'not'} be able to use contract analysis features until the subscription is {selectedSub?.status === 'Paused' ? 'paused again' : 'resumed'}.
                        </p>
                    </div>

                    <DialogFooter className="gap-3 sm:gap-2">
                        <Button variant="ghost" onClick={() => setIsPauseOpen(false)} className="h-10 cursor-pointer rounded-xl px-8 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold">Cancel</Button>
                        <Button className={`h-10 cursor-pointer rounded-xl px-10 font-black tracking-tight ${selectedSub?.status === 'Paused' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-500 hover:bg-amber-600'}`}>
                            {selectedSub?.status === 'Paused' ? 'Resume Subscription' : 'Pause Subscription'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Cancel Subscription Modal */}
            <Dialog open={isCancelOpen} onOpenChange={setIsCancelOpen}>
                <DialogContent className="sm:max-w-[480px] border-none shadow-2xl rounded-3xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 md:w-10 h-8 md:h-10 rounded-xl flex items-center justify-center bg-rose-50 dark:bg-rose-900/20">
                                <XCircle className="w-5 md:w-6 h-5 md:h-6 text-rose-600" />
                            </div>
                            <DialogTitle className="text-base sm:text-xl md:text-2xl font-bold">Cancel Subscription</DialogTitle>
                        </div>
                    </DialogHeader>
                    
                    <div className="py-4 space-y-6">
                        <div className="flex bg-slate-50 dark:bg-[#070c16] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                            <div className="flex-1 space-y-1">
                            <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">User</p>
                            <p className="text-[7px] sm:text-sm font-bold">{selectedSub?.id}</p>
                            </div>
                            <div className="flex-1 space-y-1">
                            <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plan</p>
                            <p className="text-[7px] sm:text-sm font-bold">{selectedSub?.plan}</p>
                            </div>
                            <div className="flex-1 space-y-1 text-right">
                            <p className="text-[7px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Billing Amount</p>
                            <p className="text-[7px] sm:text-sm font-bold">$499/month</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Confirm Cancellation</h4>
                            <div className="rounded-2xl p-4 border bg-rose-100 dark:bg-rose-900/10 border-rose-200 dark:border-rose-900/50">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="mt-1">
                                        <input type="checkbox" className="w-4 h-4 rounded border-rose-300 text-rose-600 focus:ring-rose-500" />
                                    </div>
                                    <p className="text-[10px] sm:text-xs font-bold text-red-700 dark:text-red-700 leading-relaxed group-hover:text-rose-600 transition-colors">
                                        I understand this action cannot be undone and will result in permanent service cancellation
                                    </p>
                                </label>
                            </div>
                        </div>

                        <p className="text-[10px] ms:text-xs font-medium text-slate-500 leading-relaxed px-1">
                            Are you sure you want to pause this subscription? The user will not be able to use contract analysis features until the subscription is resumed.
                        </p>
                    </div>

                    <DialogFooter className="gap-3 sm:gap-2">
                        <Button variant="ghost" onClick={() => setIsCancelOpen(false)} className="h-10 cursor-pointer rounded-xl px-8 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold">Cancel</Button>
                        <Button variant="outline" className="h-10  cursor-pointer rounded-xl px-10 border-rose-200 text-rose-600 font-bold tracking-tight hover:bg-rose-50 dark:hover:bg-rose-900/20">
                            CANCEL SUBSCRIPTION
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
