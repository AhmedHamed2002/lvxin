'use client';

import { Eye, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface User {
    name: string;
    email: string;
    status: string;
    date: string;
    lastActivity: string;
    avatar: string;
}

const latestUsers: User[] = [
    { name: "Abdo Araby", email: "AbdoAraby1911@gmail.com", status: "Active", date: "Jan 15, 2024", lastActivity: "2 hours ago", avatar: "/assets/images/placeholder.png" },
    { name: "Abdo Araby", email: "AbdoAraby1911@gmail.com", status: "Trial", date: "Jan 15, 2024", lastActivity: "2 hours ago", avatar: "/assets/images/placeholder.png" },
    { name: "Abdo Araby", email: "AbdoAraby1911@gmail.com", status: "Inactive", date: "Jan 15, 2024", lastActivity: "2 hours ago", avatar: "/assets/images/placeholder.png" },
];

export function LatestUsersTable() {
    return (
        <Card className="border-none shadow-sm dark:bg-[#14161f] rounded-2zl overflow-hidden">
            <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 px-8">
                <div>
                    <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">Latest Users</CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-500 mt-1 ">Recently registered users on the platform</p>
                </div>
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <Input
                        placeholder="Search users..."
                        className="pl-12 h-12 rounded-2xl bg-slate-50 dark:bg-[#070c16] border border-slate-100 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-slate-500 text-[13px]"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-0">
                {/* Mobile & Tablet View (Cards) */}
                <div className="xl:hidden divide-y divide-slate-50 dark:divide-slate-800/50">
                    {latestUsers.map((user, i) => (
                        <div key={i} className="p-6 cursor-pointer hover:bg-slate-100/80 dark:hover:bg-slate-800/20 transition-all duration-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-7 h-7 md:w-10 md:h-10 border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <AvatarFallback className="bg-blue-600 text-white font-bold text-sm md:text-base">{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold text-slate-700 dark:text-slate-200 text-xs md:text-sm">{user.name}</p>
                                        <p className="text-[9px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">{user.email}</p>
                                    </div>
                                </div>
                                <Badge
                                    variant="secondary"
                                    className={`rounded-lg ms-2 px-2 py-1.5 font-bold text-[7px] md:text-[10px] uppercase tracking-wider shadow-sm border-none ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' :
                                            user.status === 'Trial' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' :
                                                'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                                        }`}
                                >
                                    {user.status}
                                </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className='ms-6 sm:ms-12'>
                                    <p className="text-[9px] md:text-[10px] font-black text-slate-600 dark:text-slate-200 uppercase tracking-widest mb-1">Registration</p>
                                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-500 font-bold">{user.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] md:text-[10px] font-black text-slate-600 dark:text-slate-200 uppercase tracking-widest mb-1">Last Activity</p>
                                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-500 font-bold">{user.lastActivity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View (Table) */}
                <div className="hidden xl:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-[#161d2b] border-y border-slate-100 dark:border-slate-800">
                                <th className="px-8 py-4 font-black text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">User Name</th>
                                <th className="px-8 py-4 font-black text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">Email</th>
                                <th className="px-8 py-4 font-black text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">Subscription Status</th>
                                <th className="px-8 py-4 font-black text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">Registration Date</th>
                                <th className="px-8 py-4 font-black text-slate-700 dark:text-slate-300 text-[10px] uppercase tracking-widest">Last Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                            {latestUsers.map((user, i) => (
                                <tr key={i} className="group cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-200">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-10 h-10 border border-slate-100 dark:border-slate-700 shadow-sm">
                                                <AvatarFallback className="bg-blue-600 text-white font-bold">{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-bold text-slate-700 dark:text-slate-200 text-sm whitespace-nowrap">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 font-bold text-slate-700 dark:text-slate-200 text-[13px]">{user.email}</td>
                                    <td className="px-8 py-5">
                                        <Badge
                                            variant="secondary"
                                            className={`rounded-lg px-3 py-1.5 font-black text-[9px] uppercase tracking-wider shadow-sm border-none ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' :
                                                    user.status === 'Trial' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' :
                                                        'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                                                }`}
                                        >
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-[13px]  text-slate-700 dark:text-slate-300 whitespace-nowrap">{user.date}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-[13px]  text-slate-700 dark:text-slate-400 whitespace-nowrap">{user.lastActivity}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 border-t border-slate-50 dark:border-slate-800 flex justify-center">
                    <Button variant="ghost" size="sm" className="cursor-pointer text-slate-400 hover:text-blue-600 text-[10px] uppercase tracking-[0.2em] transition-all">
                        <Eye className="w-4 h-4 mr-2" />
                        View All Users
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
