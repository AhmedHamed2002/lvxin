'use client';

import { 
    Users, DollarSign, FileText, Wallet, ChartNoAxesCombined, 
    Activity as PulseIcon, Eye, Download, CreditCard, 
    Calendar, MapPin, User, CheckCircle, Clock, XCircle 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Dialog, DialogContent, 
    DialogHeader, DialogTitle 
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useState } from 'react';

// Mock data based on the image
const stats = [
    { title: "Active Users", value: "2876", unit: "user", change: "+23%", icon: PulseIcon, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Monthly Revenue", value: "2876", unit: "$", change: "+23%", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Total Contracts Analyzed", value: "12000", unit: "Contracts", change: "+23%", icon: FileText, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Total Users", value: "5000", unit: "user", change: "+23%", icon: Users, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Active Subscriptions", value: "1400", unit: "Subscriptions", change: "+23%", icon: Wallet, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Website Traffic", value: "125k", unit: "Visitors", change: "+23%", icon: ChartNoAxesCombined, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
];

const transactions = [
    {
        id: "INV-2026-001",
        user: { name: "Abdoaraby", email: "abdoaraby@email.com", address: "987 Cedar Ln, Denver, CO 80201" },
        subscription: "Premium",
        amount: 299,
        date: "Jan 17, 2026",
        status: "completed",
        paymentMethod: "Mastercard **** 7777"
    },
    {
        id: "INV-2026-002",
        user: { name: "Robert Taylor", email: "robert.taylor@email.com", address: "123 Pine St, San Francisco, CA 94101" },
        subscription: "Premium",
        amount: 299,
        date: "Jan 17, 2026",
        status: "completed",
        paymentMethod: "Visa **** 4242"
    },
    {
        id: "INV-2026-003",
        user: { name: "Sarah Wilson", email: "sarah.w@email.com", address: "456 Oak Dr, Austin, TX 78701" },
        subscription: "Premium",
        amount: 299,
        date: "Jan 17, 2026",
        status: "completed",
        paymentMethod: "Paypal"
    },
    {
        id: "INV-2026-004",
        user: { name: "James Anderson", email: "j.anderson@email.com", address: "789 Maple Ave, New York, NY 10001" },
        subscription: "Enterprise",
        amount: 299,
        date: "Jan 17, 2026",
        status: "pending",
        paymentMethod: "Wire Transfer"
    },
    {
        id: "INV-2026-005",
        user: { name: "Emily Parker", email: "emily.p@email.com", address: "321 Birch Rd, Seattle, WA 98101" },
        subscription: "Enterprise",
        amount: 299,
        date: "Jan 17, 2026",
        status: "pending",
        paymentMethod: "Wire Transfer"
    },
    {
        id: "INV-2026-006",
        user: { name: "Michael Chang", email: "m.chang@email.com", address: "654 Cedar Blvd, Chicago, IL 60601" },
        subscription: "Enterprise",
        amount: 299,
        date: "Jan 17, 2026",
        status: "pending",
        paymentMethod: "Wire Transfer"
    },
    {
        id: "INV-2026-007",
        user: { name: "Lisa Wong", email: "lisa.w@email.com", address: "987 Elm Ln, Boston, MA 02101" },
        subscription: "Basic",
        amount: 299,
        date: "Jan 17, 2026",
        status: "failed",
        paymentMethod: "Mastercard **** 1111"
    },
    {
        id: "INV-2026-008",
        user: { name: "David Miller", email: "d.miller@email.com", address: "147 Spruce St, Miami, FL 33101" },
        subscription: "Basic",
        amount: 299,
        date: "Jan 17, 2026",
        status: "failed",
        paymentMethod: "Visa **** 9999"
    },
];

export default function FinancialsPage() {
    const [selectedTransaction, setSelectedTransaction] = useState<typeof transactions[0] | null>(null);
    const [filter, setFilter] = useState("all");

    const filteredTransactions = transactions.filter(t => {
        if (filter === "all") return true;
        return t.status === filter;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "completed":
                return <Badge className="mt-1 ms-10 sm:ms-0 md:ms-10 sm:mt-0 md:mt-1 text-[10px] bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 border-none shadow-none">completed</Badge>;
            case "pending":
                return <Badge className="mt-1 ms-10 sm:ms-0 md:ms-10 sm:mt-0 md:mt-1 text-[10px] bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 border-none shadow-none">pending</Badge>;
            case "failed":
                return <Badge className="mt-1 ms-10 sm:ms-0 md:ms-10 sm:mt-0 md:mt-1 text-[10px] bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 border-none shadow-none">failed</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-8 shadow-md rounded-2xl bg-white dark:bg-[#0d0f15] min-h-screen p-4 md:p-8 animate-in fade-in duration-500">
            <header className="flex flex-col justify-center items-center md:items-start gap-2 pt-4">
                <h1 className="text-lg sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">Payments Dashboard</h1>
                <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 text-center md:text-start">Here's what's happening with your business today.</p>
            </header>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <Card key={i} className="border-none cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-sm bg-slate-50/50 dark:bg-[#14161f] rounded-2xl hover:shadow-md">
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

            {/* Recent Transactions Section */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Transactions</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">All payment transactions from your subscribers</p>
                    </div>
                </div>

                <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
                    <TabsList className="bg-slate-100 dark:bg-[#14161f] py-1 px-0.5 sm:p-1 rounded-lg">
                        <TabsTrigger value="all" className="cursor-pointer rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d0f15] data-[state=active]:shadow-sm"> <span className="text-[6px] sm:text-sm">All</span><Badge variant="secondary" className="ms-0 sm:ms-2 bg-slate-200 dark:bg-slate-700 text-[8px] sm:text-xs px-0.5 sm:px-1 py-0 min-w-4 h-4 sm:min-w-5 sm:h-4 flex items-center justify-center text-slate-700 dark:text-slate-300 rounded-full shadow-none">{transactions.length}</Badge></TabsTrigger>
                        <TabsTrigger value="completed" className="cursor-pointer rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d0f15] data-[state=active]:shadow-sm"> <span className="text-[6px] sm:text-sm">Paid</span><Badge variant="secondary" className="ms-0 sm:ms-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[8px] sm:text-xs px-0.5 sm:px-1 py-0 min-w-4 h-4 sm:min-w-5 sm:h-4 flex items-center justify-center rounded-full shadow-none">{transactions.filter(t => t.status === "completed").length}</Badge></TabsTrigger>
                        <TabsTrigger value="pending" className="cursor-pointer rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d0f15] data-[state=active]:shadow-sm"> <span className="text-[6px] sm:text-sm">Pending</span><Badge variant="secondary" className="ms-0 sm:ms-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[8px] sm:text-xs px-0.5 sm:px-1 py-0 min-w-4 h-4 sm:min-w-5 sm:h-4 flex items-center justify-center rounded-full shadow-none">{transactions.filter(t => t.status === "pending").length}</Badge></TabsTrigger>
                        <TabsTrigger value="failed" className="cursor-pointer rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d0f15] data-[state=active]:shadow-sm"> <span className="text-[6px] sm:text-sm">Failed</span><Badge variant="secondary" className="ms-0 sm:ms-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[8px] sm:text-xs px-0.5 sm:px-1 py-0 min-w-4 h-4 sm:min-w-5 sm:h-4 flex items-center justify-center rounded-full shadow-none">{transactions.filter(t => t.status === "failed").length}</Badge></TabsTrigger>
                    </TabsList>

                    <TabsContent value={filter} className="mt-4">
                        {/* Desktop View - Table */}
                        <div className="hidden lg:block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#14161f] overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-700 dark:text-slate-400 uppercase bg-slate-50 dark:bg-[#0d0f15]/50 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">User Name</th>
                                            <th className="px-6 py-4 font-semibold">Subscription Type</th>
                                            <th className="px-6 py-4 font-semibold">Amount Paid</th>
                                            <th className="px-6 py-4 font-semibold">Date</th>
                                            <th className="px-6 py-4 font-semibold">Payment Status</th>
                                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {filteredTransactions.map((transaction) => (
                                            <tr key={transaction.id} className="cursor-pointer hover:bg-slate-100/70 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs font-bold">
                                                            {transaction.user.name.charAt(0)}
                                                        </div>
                                                        {transaction.user.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{transaction.subscription}</td>
                                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">${transaction.amount}</td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-xs">{transaction.date}</td>
                                                <td className="px-6 py-4">{getStatusBadge(transaction.status)}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="cursor-pointer h-8 w-8 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 rounded-full"
                                                            onClick={() => setSelectedTransaction(transaction)}
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            <span className="sr-only">View</span>
                                                        </Button>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="cursor-pointer h-8 w-8 text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 rounded-full"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            <span className="sr-only">Download</span>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredTransactions.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                                                    No transactions found matching your filter.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile/Tablet View - Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:hidden">
                            {filteredTransactions.map((transaction) => (
                                <Card key={transaction.id} className="bg-white dark:bg-[#14161f] border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-5 space-y-3">
                                        <div className="my-2 flex flex-wrap sm:flex-nowrap md:flex-wrap items-center justify-between">
                                            <div className="cursor-pointer flex items-center gap-3">
                                                <div className="cursor-pointer w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm font-bold">
                                                    {transaction.user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-900 dark:text-white">{transaction.user.name}</p>
                                                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{transaction.id}</p>
                                                </div>
                                            </div>
                                            {getStatusBadge(transaction.status)}
                                        </div>
                        
                                        <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-slate-100 dark:border-slate-800/50">
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-500 text-xs mb-1">Subscription</p>
                                                <p className="font-medium text-slate-900 dark:text-white text-sm">{transaction.subscription}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-slate-500 dark:text-slate-500 text-xs mb-1">Amount</p>
                                                <p className="font-bold text-slate-900 dark:text-white">${transaction.amount}</p>
                                            </div>
                                            <div className="col-span-2 pt-2">
                                                <p className="text-slate-500 dark:text-slate-500 text-xs mb-1">Date</p>
                                                <p className="font-medium text-slate-900 dark:text-white text-sm flex items-center gap-2">
                                                    <Calendar className="w-3.5 h-3.5 opacity-70" />
                                                    {transaction.date}
                                                </p>
                                            </div>
                                        </div>
                        
                                        <div className="flex gap-2">
                                            <Button 
                                                variant="outline" 
                                                className=" text-[10px] sm:text-base cursor-pointer flex-1 w-full border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                                                onClick={() => setSelectedTransaction(transaction)}
                                            >
                                                <Eye className="w-3 h-3 sm:mr-2" />
                                                View Details
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="icon"
                                                className="cursor-pointer shrink-0 border border-slate-200 dark:border-slate-700 text-slate-500"
                                            >
                                                <Download className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            {filteredTransactions.length === 0 && (
                                <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-500 dark:text-slate-400 bg-white dark:bg-[#14161f] rounded-2xl border border-slate-200 dark:border-slate-800">
                                    No transactions found matching your filter.
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Invoice Details Modal */}
            <Dialog open={!!selectedTransaction} onOpenChange={(open) => !open && setSelectedTransaction(null)}>
                <DialogContent className="bg-white dark:bg-[#14161f] border-slate-200 dark:border-slate-800 p-0 overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col gap-0">
                    <DialogHeader className="pt-4 pb-2 ps-3 pe-5 md:py-4 md:px-4 border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between space-y-0">
                        <DialogTitle className="text-xs md:text-lg font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                            Payment Status
                            {selectedTransaction && getStatusBadge(selectedTransaction.status)}
                        </DialogTitle>
                    </DialogHeader>
                    
                    {selectedTransaction && (
                        <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                {/* Customer Info */}
                                <div className="space-y-1 md:space-y-3">
                                    <h4 className="text-[9px] ms:text-xs font-bold text-slate-600 dark:text-slate-500 uppercase tracking-wider">Customer Information</h4>
                                    <div className="space-y-1 md:space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                                                <User className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Name</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.user.name}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30">
                                                <span className="text-xs font-bold">@</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Email</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.user.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                                                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Billing Address</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.user.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Info */}
                                <div className="space-y-1 md:space-y-3">
                                    <h4 className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-500 uppercase tracking-wider">Payment Information</h4>
                                    <div className="space-y-1 md:space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                                                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Payment Date</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                                                <CreditCard className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Payment Method</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.paymentMethod}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center shrink-0 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                                                <Wallet className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">Subscription Type</p>
                                                <p className="text-[9px] md:text-[10px] font-semibold text-slate-900 dark:text-white">{selectedTransaction.subscription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1 md:space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                                <h4 className="text-[9px] md:text-[10px] font-bold text-slate-600 dark:text-slate-500 uppercase tracking-wider">Item Details</h4>
                                <div className="bg-slate-50 dark:bg-[#0d0f15] rounded-xl px-5 py-2 border border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-[8px] md:text-[10px] font-bold text-slate-700 dark:text-slate-200">{selectedTransaction.subscription} Monthly Subscription</p>
                                        <p className="text-[12px] md:text-sm font-bold text-slate-900 dark:text-white">${selectedTransaction.amount - 200}</p>
                                    </div>
                                    <p className="text-[8px] md:text-[10px] text-slate-500 dark:text-slate-400">Monthly Subscription</p>
                                </div>

                                <div className="bg-blue-600 rounded-xl px-5 py-2 md:py-3 flex justify-between items-center text-white shadow-lg shadow-blue-600/20">
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-4 h-4 opacity-50" />
                                        <span className="font-bold text-xs md:text-base">Total Amount</span>
                                    </div>
                                    <span className="text-sm md:text-base font-bold">${selectedTransaction.amount}</span>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 p-2 md:p-4 rounded-xl text-[10px] md:text-xs leading-relaxed border border-blue-100 dark:border-blue-900/20">
                                    This invoice was generated automatically. For any questions or concerns regarding this payment, please contact our support team.
                                </div>

                                <div className="pt-6 flex justify-between items-end">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">Invoice Details</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">Invoice #{selectedTransaction.id}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                                            <Download className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}