"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Share2 } from "lucide-react"
import Image from "next/image"

export default function ReferralProgramTab() {
    return (
        <div className="space-y-8">
        {/* Summary Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#2659c7] to-[#244780] rounded-2xl p-8 text-white">
            <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6">Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-1">
                <p className="text-sm opacity-90">Total Referrals</p>
                <p className="text-3xl font-bold">0</p>
                </div>
                <div className="space-y-1">
                <p className="text-sm opacity-90">Successful Referrals</p>
                <p className="text-3xl font-bold">0</p>
                </div>
                <div className="space-y-1">
                <p className="text-sm opacity-90">Tokens Earned</p>
                <p className="text-3xl font-bold">0</p>
                </div>
            </div>
            </div>
            <div className="absolute top-0 right-3 h-full w-1/3 opacity-20 pointer-events-none">
            <Image 
                src="/assets/images/Star2.png" 
                alt="Decoration" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                className="object-contain object-right"
            />
            </div>
            <div className="absolute top-0 right-20 h-full w-1/3 opacity-20 pointer-events-none">
            <Image 
                src="/assets/images/Star2.png" 
                alt="Decoration" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                className="object-contain object-right"
            />
            </div>
            <div className="absolute top-0 right-36 h-full w-1/3 opacity-20 pointer-events-none">
            <Image 
                src="/assets/images/Star2.png" 
                alt="Decoration" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                className="object-contain object-right"
            />
            </div>
        </div>

        {/* Referral Code */}
        <div className="space-y-4">
            <div>
            <Label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Your Referral Code
            </Label>
            <div className="flex gap-2 mt-2">
                <Input 
                readOnly 
                value="**************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl flex-1 text-gray-500"
                />
                <Button variant="outline" size="icon" className="cursor-pointer h-12 w-12 rounded-xl border-gray-200 dark:border-gray-800 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:border-none">
                <Copy size={20} />
                </Button>
                <Button variant="outline" size="icon" className="cursor-pointer h-12 w-12 rounded-xl border-gray-200 dark:border-gray-800 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:border-none">
                <Share2 size={20} />
                </Button>
            </div>
            </div>
            <p className="text-xs text-gray-400">
            Share your referral code and when new users sign up with your code, both you and they will receive 1 free token!
            </p>
        </div>

        {/* Referral Link */}
        <div className="space-y-4">
            <div>
            <Label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Referral Link
            </Label>
            <div className="flex gap-2 mt-2">
                <Input 
                readOnly 
                value="**************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl flex-1 text-gray-500"
                />
                <Button variant="outline" size="icon" className="cursor-pointer h-12 w-12 rounded-xl border-gray-200 dark:border-gray-800 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:border-none">
                <Copy size={20} />
                </Button>
            </div>
            </div>
        </div>
        </div>
    )
}
