'use client';

import React, { useState } from 'react';
import { 
    Search, 
    Plus, 
    Edit2, 
    Trash2, 
    RotateCcw, 
    Mail, 
    User as UserIcon, 
    Calendar,
    Filter,
    MoreHorizontal,
    ArrowUpRight,
    Users,
    Shield,
    Eye,
    EyeOff
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
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie,
} from 'recharts';

// Dummy Data
const USERS = [
    { id: 1, name: "Abdo Araby", email: "AbdoAraby1911@gmail.com", role: "Admin", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "Egypt" },
    { id: 2, name: "Ahmed Hassan", email: "ahmed.h@example.com", role: "User", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "Egypt" },
    { id: 3, name: "Mohamed Ali", email: "m.ali@example.com", role: "User", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "KSA" },
    { id: 4, name: "Sara Jones", email: "sara.j@example.com", role: "User", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "USA" },
    { id: 5, name: "John Doe", email: "j.doe@example.com", role: "User", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "UK" },
    { id: 6, name: "Jane Smith", email: "jane.s@example.com", role: "Admin", createdAt: "Jan 15, 2024", avatar: "/assets/images/placeholder.png", country: "Canada" },
];


const ACTIVITY_DATA = [
    { name: 'Mon', count: 4 },
    { name: 'Tue', count: 7 },
    { name: 'Wed', count: 5 },
    { name: 'Thu', count: 8 },
    { name: 'Fri', count: 12 },
    { name: 'Sat', count: 6 },
    { name: 'Sun', count: 9 },
];

export default function AdminUsersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState('all');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showAdminPassword, setShowAdminPassword] = useState(false);

    const filteredUsers = USERS.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = selectedRole === 'all' || user.role === selectedRole;
        return matchesSearch && matchesRole;
    });

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedRole('all');
    };

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };

    const handleDelete = (user: any) => {
        setSelectedUser(user);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="space-y-6 bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Admins & Users</h1>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">Manage your team members and their roles.</p>
                </div>
                <Button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-6 h-12"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Admin User
                </Button>
            </div>

            {/* Quick Stats / Recharts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <Card className="border-none cursor-pointer transition-all duration-700 hover:scale-95 shadow-sm bg-[#f8fafc] dark:bg-[#14161f] rounded-xl overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Personnel</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-3xl font-bold">12</span>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none cursor-pointer transition-all duration-700 hover:scale-95 shadow-sm bg-[#f8fafc] dark:bg-[#14161f] rounded-xl overflow-hidden md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="p-6 flex flex-col justify-center">
                            <h3 className="text-lg font-bold">Role Distribution</h3>
                            <p className="text-sm text-slate-500 mb-4">Breakdown of admins vs users</p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                    <span className="text-sm font-medium">Admins (34%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    <span className="text-sm font-medium">Users (66%)</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[150px] w-full p-4 cursor-pointer">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ACTIVITY_DATA}>
                                    <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    {/* <Tooltip 
                                        cursor={{fill: 'transparent'}}
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    /> */}
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Filter Section */}
            <Card className="border-none shadow-md dark:bg-[#14161f] rounded-2xl">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-2 space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-600">Search Members</Label>
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by name or email..."
                                    className="text-xs md:text-sm pl-11 h-13 rounded-lg bg-[#f5f6fa] dark:bg-[#070c16] border-slate-100 dark:border-slate-800 transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-600">Role</Label>
                            <Select value={selectedRole} onValueChange={setSelectedRole}>
                                <SelectTrigger className="h-12 py-6 cursor-pointer rounded-lg bg-[#f5f6fa] hover:bg-[#e8eaef]  dark:bg-[#070c16] border-slate-100 dark:border-slate-800">
                                    <SelectValue placeholder="All Roles" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Roles</SelectItem>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                    <SelectItem value="User">User</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-2">
                            <Button 
                                variant="outline" 
                                onClick={handleClearFilters}
                                title="Clear Filters"
                                className="cursor-pointer py-6 rounded-lg bg-[#f5f6fa] hover:bg-[#e8eaef] border-slate-100 dark:border-slate-800 mt-[26px]"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Clear Filters</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* User List Section */}
            <div className="space-y-4">
                {/* Mobile/Tablet Card View (sm & md) */}
                <div className="grid grid-cols-1 gap-4 lg:hidden">
                    {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                        <Card key={user.id} className="border-none shadow-md cursor-pointer bg-white hover:bg-[#f5f6fa] dark:bg-[#14161f] dark:hover:bg-[#181a21] rounded-2xl p-5 transition-all hover:shadow-lg">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar className="w-9 h-9 border-2 border-white dark:border-slate-700 shadow-md">
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback className="bg-blue-600 text-white font-bold text-sm sm:text-lg">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight">{user.name}</h3>
                                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 mt-0.5">
                                            <Mail className="w-3.5 h-3.5" />
                                            <span className="text-sm truncate max-w-[130px] sm:max-w-none">{user.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                                            <MoreHorizontal className="h-5 w-5 text-slate-500" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-44 dark:bg-[#14161f] border-slate-200 dark:border-slate-800 rounded-xl shadow-xl">
                                        <DropdownMenuLabel className="text-xs uppercase tracking-widest text-slate-500 font-bold p-3">User Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem 
                                            onClick={() => handleEdit(user)}
                                            className="cursor-pointer py-2.5 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 transition-colors"
                                        >
                                            <Edit2 className="mr-3 h-4 w-4" />
                                            <span className="font-medium">Edit</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem 
                                            onClick={() => handleDelete(user)}
                                            className="cursor-pointer py-2.5 focus:bg-red-50 dark:focus:bg-red-900/20 focus:text-red-600 text-red-500 transition-colors"
                                        >
                                            <Trash2 className="mr-3 h-4 w-4" />
                                            <span className="font-medium">Delete</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            
                            <div className="mt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800/50 pt-4">
                                <Badge 
                                    className={`rounded-lg px-3 py-1 border-none font-bold text-[10px] uppercase tracking-widest ${
                                        user.role === 'Admin' 
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' 
                                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
                                    }`}
                                >
                                    {user.role}
                                </Badge>
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-bold">
                                    <Calendar className="w-4 h-4 text-blue-500/70" />
                                    <span>{user.createdAt}</span>
                                </div>
                            </div>
                        </Card>
                    )) : (
                        <Card className="col-span-full border-none shadow-none bg-slate-50/50 dark:bg-slate-900/20 py-16 text-center">
                            <UserIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500 font-medium tracking-tight">No team members found matching your search.</p>
                        </Card>
                    )}
                </div>

                {/* Desktop Table View (lg+) */}
                <Card className="hidden lg:block border-none shadow-md dark:bg-[#14161f] rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-[#161d2b] border-y border-slate-100 dark:border-slate-800">
                                    <th className="px-6 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Created At</th>
                                    <th className="px-6 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                                    <tr key={user.id} className="cursor-pointer hover:bg-slate-50/50 dark:hover:bg-blue-900/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-10 h-10 border-2 border-white dark:border-slate-700 shadow-sm">
                                                    <AvatarImage src={user.avatar} />
                                                    <AvatarFallback className="bg-blue-600 text-white font-bold">{user.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-bold text-slate-700 dark:text-slate-200">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <Mail className="w-3 h-3" />
                                                <span className="text-sm">{user.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge 
                                                className={`rounded-lg px-2.5 py-1 border-none font-medium text-xs ${
                                                    user.role === 'Admin' 
                                                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                                                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}
                                            >
                                                {user.role}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <Calendar className="w-3 h-3" />
                                                <span className="text-[11px] xl:text-xs">{user.createdAt}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-5 w-5" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-40 dark:bg-[#14161f] border-slate-200 dark:border-slate-800">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem 
                                                        onClick={() => handleEdit(user)}
                                                        className="cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600"
                                                    >
                                                        <Edit2 className="mr-2 h-4 w-4" />
                                                        <span>Edit</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        onClick={() => handleDelete(user)}
                                                        className="cursor-pointer focus:bg-red-50 dark:focus:bg-red-900/20 focus:text-red-600 text-red-500"
                                                    >
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        <span>Delete</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                            No team members found matching your filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Create Admin User Modal */}
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-3xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold">Create Admin User</DialogTitle>
                        <DialogDescription className="text-xs sm:text-base">Add a new member to your administrative team.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3 py-3">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-xs md:text-sm font-bold">Name <span className="text-red-500">*</span></Label>
                            <Input id="name" placeholder="Enter full name" className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-xs md:text-sm font-bold">E-Mail <span className="text-red-500">*</span></Label>
                            <Input id="email" type="email" placeholder="Enter email address" className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-xs md:text-sm font-bold">Password <span className="text-red-500">*</span></Label>
                                <div className="relative">
                                    <Input 
                                        id="password" 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800 pr-10" 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm" className="text-xs md:text-sm font-bold">Confirm Password <span className="text-red-500">*</span></Label>
                                <div className="relative">
                                    <Input 
                                        id="confirm" 
                                        type={showConfirmPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800 pr-10" 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-xs md:text-sm font-bold">Role <span className="text-red-500">*</span></Label>
                            <Select>
                                <SelectTrigger className="h-12 rounded-xl cursor-pointer bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800">
                                    <SelectValue placeholder="Choose role" />
                                </SelectTrigger>
                                <SelectContent className="cursor-pointer">
                                    <SelectItem className="cursor-pointer" value="Admin">Admin</SelectItem>
                                    <SelectItem className="cursor-pointer" value="user">User</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(false)} className="h-12 cursor-pointer rounded-xl px-8 flex-1 sm:flex-none">Cancel</Button>
                        <Button className="h-12 cursor-pointer rounded-xl px-10 bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-none">Create User</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit User Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-3xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold">Edit Admin User</DialogTitle>
                        <DialogDescription className="text-xs sm:text-base">Update the details of your team member.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="edit-name" className="text-xs md:text-sm font-bold">Name <span className="text-red-500">*</span></Label>
                            <Input id="edit-name" defaultValue={selectedUser?.name} className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-email" className="text-xs md:text-sm font-bold">E-Mail <span className="text-red-500">*</span></Label>
                            <Input id="edit-email" defaultValue={selectedUser?.email} className="text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-xs md:text-sm font-bold">Role <span className="text-red-500">*</span></Label>
                            <Select defaultValue={selectedUser?.role}>
                                <SelectTrigger className="cursor-pointer text-xs md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-[#070c16] border-slate-100 dark:border-slate-800">
                                    <SelectValue placeholder="Choose role" />
                                </SelectTrigger>
                                <SelectContent className="cursor-pointer">
                                    <SelectItem className="cursor-pointer" value="Admin">Admin</SelectItem>
                                    <SelectItem className="cursor-pointer" value="User">User</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button variant="outline" onClick={() => setIsEditModalOpen(false)} className="h-10 cursor-pointer rounded-xl px-8 flex-1 sm:flex-none">Cancel</Button>
                        <Button className="h-10 cursor-pointer rounded-xl px-10 bg-blue-600 hover:bg-blue-700 flex-1 ms-2 sm:flex-none">Update</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent className="sm:max-w-[450px] border-none shadow-2xl rounded-3xl dark:bg-[#14161f]">
                    <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Delete Admin User</DialogTitle>
                        <DialogDescription className="text-xs sm:text-base text-slate-500 mt-2">
                            Are you sure you want to delete the admin user <span className="font-bold text-slate-800 dark:text-slate-200">"{selectedUser?.name}"</span>? 
                            This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="admin-pwd" className="text-xs md:text-sm font-bold">Admin Password</Label>
                            <div className="relative">
                                <Input 
                                    id="admin-pwd" 
                                    type={showAdminPassword ? "text" : "password"} 
                                    placeholder="****************" 
                                    className="h-12 rounded-xl border-red-100 focus:border-red-500 dark:bg-[#070c16] dark:border-slate-800 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowAdminPassword(!showAdminPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                                >
                                    {showAdminPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <p className="text-xs text-red-500 font-medium">Incorrect admin password</p>
                        </div>
                    </div>
                    <DialogFooter className="gap-3 sm:gap-2">
                        <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)} className="h-12 cursor-pointer rounded-xl px-8 hover:bg-slate-100 dark:hover:bg-slate-800">Cancel</Button>
                        <Button className="h-12 cursor-pointer rounded-xl px-10 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20">Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
