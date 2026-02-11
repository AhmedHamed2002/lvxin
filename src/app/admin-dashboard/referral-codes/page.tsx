'use client';

import { useState } from 'react';
import { 
    Users, Ticket, Award, CheckCircle2, 
    Search, Plus, MoreHorizontal, Filter,
    Copy, Calendar, BarChart3, ArrowUpRight,
    Trash2, Edit, Eye, Power, X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Dialog, DialogContent, DialogDescription, 
    DialogHeader, DialogTitle, DialogFooter, DialogTrigger 
} from '@/components/ui/dialog';
import {
    Select, SelectContent, SelectItem, 
    SelectTrigger, SelectValue 
} from '@/components/ui/select';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Mock Data
const stats = [
    { title: "Total Referral Codes", value: "28", change: "+23%", trend: "up", icon: Ticket, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
    { title: "Active Codes", value: "34", change: "+12%", trend: "up", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/20" },
    { title: "Total Users Acquired", value: "2,224", change: "+8%", trend: "up", icon: Users, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/20" },
    { title: "Total Rewards Distributed", value: "12,125", change: "+15%", trend: "up", icon: Award, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/20" },
];

const referralCodes = [
    { id: 1, code: "Araby2026", assignedTo: "Abdo Araby", maxUsage: 100, used: 45, type: "Tokens", value: 50, expiry: "2026-06-30", status: "Active" },
    { id: 2, code: "SUMMER50", assignedTo: "Marketing Team", maxUsage: 500, used: 120, type: "Percentage", value: "20%", expiry: "2026-08-15", status: "Active" },
    { id: 3, code: "WELCOME10", assignedTo: "System", maxUsage: 1000, used: 850, type: "Fixed Amount", value: "$10", expiry: "2026-12-31", status: "Active" },
    { id: 4, code: "VIPUSER", assignedTo: "Sarah Wilson", maxUsage: 50, used: 50, type: "Tokens", value: 100, expiry: "2025-12-31", status: "Limit Reached" },
    { id: 5, code: "TESTCODE", assignedTo: "Dev Team", maxUsage: 10, used: 2, type: "Tokens", value: 10, expiry: "2024-01-01", status: "Expired" },
    { id: 6, code: "PARTNER25", assignedTo: "Tech Corp", maxUsage: 200, used: 45, type: "Percentage", value: "25%", expiry: "2026-09-30", status: "Active" },
];

export default function ReferralCodesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<typeof referralCodes[0] | null>(null);

    const filteredCodes = referralCodes.filter(code => {
        const matchesSearch = code.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            code.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || code.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch(status.toLowerCase()) {
            case 'active':
                return <Badge className="text-[10px] bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 border-none shadow-none">Active</Badge>;
            case 'expired':
                return <Badge className="text-[10px] bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 border-none shadow-none">Expired</Badge>;
            case 'limit reached':
                return <Badge className="text-[10px] bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 border-none shadow-none">Limit Reached</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-8 rounded-2xl shadow-md bg-white  dark:bg-[#0d0f15] min-h-screen p-4 md:p-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="space-y-1 mt-4 text-center md:text-start">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Referral Codes</h1>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Manage and track your referral campaigns and rewards.</p>
                </div>
                <Button onClick={() => setIsCreateOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Referral Code
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <Card key={i} className="border-none shadow-md transition-all duration-700 hover:scale-95 cursor-pointer bg-[#fbfcfd] dark:bg-[#14161f]">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</h3>
                                </div>
                                <div className={`p-2 rounded-lg ${stat.bg}`}>
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-xs">
                                <span className="text-green-500 font-semibold flex items-center">
                                    <ArrowUpRight className="w-3 h-3 mr-1" />
                                    {stat.change}
                                </span>
                                <span className="text-slate-400 dark:text-slate-500 ml-1">from last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Filters Section */}
            <Card className="border-none shadow-sm bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <Filter className="w-4 h-4 text-slate-500" />
                        Filters
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input 
                                placeholder="Search by code or assigned user..." 
                                className="text-xs md:text-base pl-9 bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-[200px]">
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="cursor-pointer bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="all">All Status</SelectItem>
                                    <SelectItem className="cursor-pointer" value="active">Active</SelectItem>
                                    <SelectItem className="cursor-pointer" value="expired">Expired</SelectItem>
                                    <SelectItem className="cursor-pointer" value="limit reached">Limit Reached</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button 
                            variant="outline" 
                            className="border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#13151b] cursor-pointer"
                            onClick={() => { setSearchTerm(""); setStatusFilter("all"); }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Content Area */}
            <div className="space-y-4">
                {/* Desktop Table View */}
                <div className="hidden xl:block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#14161f] overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-[#0d0f15]/50 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Code</th>
                                    <th className="px-6 py-4 font-semibold">Assigned User</th>
                                    <th className="px-6 py-4 font-semibold">Usage</th>
                                    <th className="px-6 py-4 font-semibold">Reward</th>
                                    <th className="px-6 py-4 font-semibold">Expiry Date</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {filteredCodes.map((code) => (
                                    <tr key={code.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                        <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-400">
                                            {code.code}
                                        </td>
                                        <td className="px-6 py-4 text-slate-900 dark:text-slate-200">
                                            {code.assignedTo}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                            <span className="font-semibold text-slate-900 dark:text-white">{code.used}</span>
                                            <span className="text-slate-400"> / {code.maxUsage}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-900 dark:text-white">{code.value}</span>
                                                <span className="text-xs text-slate-500">{code.type}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                            {code.expiry}
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(code.status)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    className="h-8 w-8 cursor-pointer text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                    onClick={() => {
                                                        setSelectedCode(code);
                                                        setIsEditOpen(true);
                                                    }}
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:hidden">
                    {filteredCodes.map((code) => (
                        <Card key={code.id} className="bg-white dark:bg-[#14161f] cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-900/20 transition-all duration-700 border-slate-200 dark:border-slate-800 shadow-sm">
                            <CardHeader className="border-b border-slate-100 dark:border-slate-800/50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-sm lg:text-lg font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                                            {code.code}
                                            <Button variant="ghost" size="icon" className="h-6 w-6 cursor-pointer text-slate-400 hover:text-blue-600">
                                                <Copy className="w-3 h-3" />
                                            </Button>
                                        </CardTitle>
                                        <CardDescription className="text-[10px] mt-1">
                                            Assigned to: <span className="font-medium text-slate-700 dark:text-slate-300">{code.assignedTo}</span>
                                        </CardDescription>
                                    </div>
                                    {getStatusBadge(code.status)}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-1 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <span className="text-xs text-slate-400 uppercase font-semibold">Usage</span>
                                        <div className="font-medium text-slate-900 dark:text-white">
                                            {code.used} <span className="text-slate-400 mb-0.5">/ {code.maxUsage}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <span className="text-xs text-slate-400 uppercase font-semibold">Reward</span>
                                        <div className="flex flex-col items-end">
                                            <span className="font-bold text-slate-900 dark:text-white">{code.value}</span>
                                            <span className="text-[10px] text-slate-500">{code.type}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" /> Expiry
                                        </span>
                                        <span className="font-medium text-slate-900 dark:text-white">{code.expiry}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 pt-1">
                                    <Button 
                                        variant="outline" 
                                        className="flex-1 cursor-pointer border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                        onClick={() => {
                                            setSelectedCode(code);
                                            setIsEditOpen(true);
                                        }}
                                    >
                                        <Edit className="w-4 h-4 mr-2" /> Edit
                                    </Button>
                                    <Button variant="outline" className="flex-1 cursor-pointer border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-red-600 hover:text-red-700 dark:text-red-400">
                                        <Power className="w-4 h-4 mr-2" /> Deactivate
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Create Referral Code Modal */}
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white dark:bg-[#14161f] border-slate-200 dark:border-slate-800">
                    <DialogHeader>
                        <DialogTitle className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">Create Referral Code</DialogTitle>
                        <DialogDescription className="text-[8px] sm:text-base">
                            Generate a new referral code and assign it to a user or partner.
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-2 sm:gap-3 py-1">
                        <div className="space-y-1">
                            <Label className="text-xs sm:text-sm" htmlFor="code">Referral Code</Label>
                            <div className="flex gap-2">
                                <Input id="code" placeholder="e.g. SUMMER2026" className="uppercase font-mono" defaultValue="REF8829X92" />
                                <Button variant="outline" size="icon" title="Generate Random">
                                    <BarChart3 className="w-4 h-4 rotate-90" />
                                </Button>
                            </div>
                            <p className="text-[10px] text-slate-500">Auto-generated code (editable)</p>
                        </div>
                        
                        <div className="space-y-1">
                            <Label className="text-xs sm:text-sm" htmlFor="user">Assign to User / Partner</Label>
                            <Input id="user" placeholder="Search user or enter partner name" className='text-xs sm:text-sm' />
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                            <div className="space-y-1">
                                <Label className="text-xs sm:text-sm" htmlFor="usage">Max Usage</Label>
                                <Input id="usage" type="number" placeholder="100" className='text-xs sm:text-sm' />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs sm:text-sm" htmlFor="expiry">Expiration Date</Label>
                                <Input id="expiry" type="date" className='text-xs sm:text-sm' />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch id="auto-expire"  className='cursor-pointer'/>
                            <Label htmlFor="auto-expire" className="font-normal text-[6px] sm:text-sm text-slate-600 dark:text-slate-300">Auto Expire (Code will automatically expire on date)</Label>
                        </div>

                        <Separator className="bg-slate-100 dark:bg-slate-800" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                            <div className="space-y-1">
                                <Label className="text-xs sm:text-sm">Reward Type</Label>
                                <Select defaultValue="tokens">
                                    <SelectTrigger className='cursor-pointer'>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className='cursor-pointer' value="tokens">Tokens</SelectItem>
                                        <SelectItem className='cursor-pointer' value="percentage">Percentage Discount</SelectItem>
                                        <SelectItem className='cursor-pointer' value="fixed">Fixed Amount</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs sm:text-sm">Reward Value</Label>
                                <Input type="number" placeholder="50" className='text-xs sm:text-sm' />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="cap" className='text-xs sm:text-sm'>Total Tokens Cap (Optional)</Label>
                            <Input id="cap" type="number" placeholder="Maximum total reward allowed" className='text-xs sm:text-sm' />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" className='cursor-pointer' onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Save Code</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Referral Code Modal */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white dark:bg-[#14161f] border-slate-200 dark:border-slate-800">
                    <DialogHeader>
                        <DialogTitle className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">Edit Referral Code</DialogTitle>
                        <DialogDescription className="text-[8px] sm:text-base">
                            Update the details and rewards for this referral code.
                        </DialogDescription>
                    </DialogHeader>
                    
                    {selectedCode && (
                        <div className="grid gap-2 sm:gap-3 py-1">
                            <div className="space-y-1">
                                <Label htmlFor="edit-code" className="text-xs sm:text-sm">Referral Code</Label>
                                <div className="flex gap-2">
                                    <Input id="edit-code" value={selectedCode.code} readOnly className="uppercase font-mono bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs sm:text-sm" />
                                </div>
                                <p className="text-[11px] text-slate-500">Code cannot be changed once created</p>
                            </div>
                            
                            <div className="space-y-1">
                                <Label htmlFor="edit-user" className="text-xs sm:text-sm">Assign to User / Partner</Label>
                                <Input id="edit-user" defaultValue={selectedCode.assignedTo} placeholder="Search user or enter partner name" className="text-xs sm:text-sm" />
                            </div>

                            <div className="grid grid-cols-2 gap-2 sm:gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="edit-usage" className="text-xs sm:text-sm">Max Usage</Label>
                                    <Input id="edit-usage" type="number" defaultValue={selectedCode.maxUsage} className="text-xs sm:text-sm" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="edit-expiry" className="text-xs sm:text-sm">Expiration Date</Label>
                                    <Input id="edit-expiry" type="date" defaultValue={selectedCode.expiry} className="text-xs sm:text-sm" />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Switch id="edit-auto-expire" defaultChecked={true} className="cursor-pointer" />
                                <Label htmlFor="edit-auto-expire" className="font-normal text-[9px] sm:text-sm text-slate-600 dark:text-slate-300">Auto Expire</Label>
                            </div>

                            <Separator className="bg-slate-100 dark:bg-slate-800" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                <div className="space-y-1">
                                    <Label className="text-xs sm:text-sm">Reward Type</Label>
                                    <Select defaultValue={selectedCode.type.toLowerCase()}>
                                        <SelectTrigger className="cursor-pointer text-xs sm:text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="tokens" className="cursor-pointer text-xs sm:text-sm">Tokens</SelectItem>
                                            <SelectItem value="percentage" className="cursor-pointer text-xs sm:text-sm">Percentage Discount</SelectItem>
                                            <SelectItem value="fixed amount" className="cursor-pointer text-xs sm:text-sm">Fixed Amount</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xs sm:text-sm">Reward Value</Label>
                                    {/* Handle value display for non-numeric types like "20%" or "$10" - ideally backend sends raw numbers, but using defaultValue here */}
                                    <Input defaultValue={selectedCode.value.toString().replace(/[^0-9.]/g, '')} type="number" className="text-xs sm:text-sm" /> 
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="edit-cap" className="text-xs sm:text-sm">Total Tokens Cap</Label>
                                <Input id="edit-cap" type="number" placeholder="Maximum total reward allowed" className="text-xs sm:text-sm" />
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                                <Switch id="edit-active" defaultChecked={selectedCode.status === 'Active'} className="cursor-pointer" />
                                <Label htmlFor="edit-active" className="font-medium text-slate-800 dark:text-white text-xs sm:text-sm cursor-pointer">Active</Label>
                            </div>
                        </div>
                    )}

                    <DialogFooter>
                        <Button variant="outline" className="cursor-pointer" onClick={() => setIsEditOpen(false)}>Cancel</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
