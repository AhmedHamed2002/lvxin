
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Minus, CreditCard, Coins } from 'lucide-react';

export default function SubscriptionManagementPage() {
    const [tokenAmount, setTokenAmount] = useState<number>(0);

    const handleTokenChange = (increment: boolean) => {
        setTokenAmount(prev => increment ? prev + 100 : prev - 100);
    };

    return (
        <div className="space-y-8 bg-white dark:bg-[#0d0f15] mb-3 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700 flex flex-col p-4 md:p-8 animate-in fade-in duration-500 min-h-screen">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-2">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">Subscription Management</h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">Manage user subscriptions and token allocations</p>
                </div>
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <Input
                        placeholder="Search users..."
                        className="pl-12 h-12 rounded-2xl bg-slate-50 dark:bg-[#070c16] border border-slate-100 dark:border-slate-800 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-slate-500 text-[13px]"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 gap-8 mx-auto w-full">
                {/* Assign Subscription Section */}
                <Card className="border-none shadow-sm dark:shadow-black/20 bg-gray-50 dark:bg-[#14161f] rounded-xl overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="p-8 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/60">
                                <CreditCard className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">Assign Subscription</CardTitle>
                        </div>
                        <CardDescription className="text-slate-600 dark:text-slate-400 font-medium ml-11">
                            Assign or update a subscription plan for a user
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-6 space-y-8">
                        <div className="space-y-3">
                            <Label htmlFor="user-id-assign" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center">
                                User ID <span className="text-red-500 ml-1 font-black">*</span>
                            </Label>
                            <Input
                                id="user-id-assign"
                                placeholder="e.g., user_123abc456"
                                className="h-14 rounded-2xl bg-gray-100 dark:bg-[#0b0d11] border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 ml-1">Enter the unique identifier for the user</p>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center">
                                Subscription Plan <span className="text-red-500 ml-1 font-black">*</span>
                            </Label>
                            <Select>
                                <SelectTrigger className="h-14 rounded-xl cursor-pointer bg-gray-100 dark:bg-[#0b0d11] border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20">
                                    <SelectValue placeholder="Choose a plan..." />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl bg-white dark:bg-[#0c0d13]">
                                    <SelectItem value="free" className="cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/40 rounded-xl">Free Tier</SelectItem>
                                    <SelectItem value="pro" className="cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/40 rounded-xl">Pro Monthly</SelectItem>
                                    <SelectItem value="enterprise" className="cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/40 rounded-xl">Enterprise</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 ml-1">Choose the subscription tier to assign</p>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="notes" className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                Notes <span className="text-slate-600 font-semibold dark:text-slate-400 ml-1">(optional)</span>
                            </Label>
                            <Textarea
                                id="notes"
                                placeholder="Add any additional notes or comments..."
                                className="min-h-[120px] rounded-2xl bg-gray-100 dark:bg-[#0b0d11] border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 resize-none transition-all p-4"
                            />
                            <p className="text-[11px] text-slate-700 dark:text-slate-400 ml-1">Optional notes about this subscription assignment</p>
                        </div>

                        <Button className="w-full h-14 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm uppercase tracking-widest transition-all duration-700 cursor-pointer hover:scale-95 active:scale-95">
                            Assign Subscription
                        </Button>
                    </CardContent>
                </Card>

                {/* Token Adjustment Section */}
                <Card className="border-none shadow-sm dark:shadow-black/20 bg-gray-50  dark:bg-[#14161f] rounded-xl overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="p-8 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-900/60">
                                <Coins className="w-5 h-5 text-yellow-700 dark:text-yellow-400" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">Token Adjustment</CardTitle>
                        </div>
                        <CardDescription className="text-slate-600 dark:text-slate-400 font-medium ml-11">
                            Add or deduct tokens from a user's account balance
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-6 space-y-8">
                        <div className="space-y-3">
                            <Label htmlFor="user-id-token" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center">
                                User ID <span className="text-red-500 ml-1 font-black">*</span>
                            </Label>
                            <Input
                                id="user-id-token"
                                placeholder="e.g., user_123abc456"
                                className="h-14 rounded-2xl bg-gray-100 dark:bg-[#0b0d11] border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 ml-1">Enter the unique identifier for the user</p>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="token-amount" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center">
                                Token Amount <span className="text-red-500 ml-1 font-black">*</span>
                            </Label>
                            <div className="flex gap-3">
                                <Input
                                    id="token-amount"
                                    type="number"
                                    value={tokenAmount}
                                    onChange={(e) => setTokenAmount(parseInt(e.target.value) || 0)}
                                    placeholder="e.g., 100 or -50"
                                    className="h-14 rounded-2xl bg-gray-100 dark:bg-[#0b0d11] border-gray-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all flex-1"
                                />
                                <div className="flex gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => handleTokenChange(false)}
                                        className="h-14 w-14 rounded-2xl shadow-sm cursor-pointer border-gray-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                    >
                                        <Minus className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => handleTokenChange(true)}
                                        className="h-14 w-14 rounded-2xl shadow-sm cursor-pointer border-gray-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                    >
                                        <Plus className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                    </Button>
                                </div>
                            </div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 ml-1">Enter a positive number to add tokens or negative to deduct</p>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="reason" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center">
                                Adjustment Reason <span className="text-red-500 ml-1 font-black">*</span>
                            </Label>
                            <Input
                                id="reason"
                                placeholder="e.g., Promotional bonus, Support refund, System error correction"
                                className="h-14 rounded-2xl bg-gray-100 dark:bg-[#0b0d11] border-slate-100 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 ml-1">Provide a reason for this adjustment for audit purposes</p>
                        </div>

                        <Button className="w-full h-14 rounded-2xl bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-700 text-white cursor-pointer text-sm uppercase tracking-widest shadow-lg transition-all duration-700 hover:scale-95 active:scale-90">
                            Adjust Tokens
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
