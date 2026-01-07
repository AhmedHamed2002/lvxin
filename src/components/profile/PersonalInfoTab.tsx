"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function PersonalInfoTab() {
    return (
        <div className="max-w-4xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-[#ffffffc2] mb-8">
            Personal Information
        </h2>

        <form className="space-y-6">
            {/* User Name */}
            <div className="space-y-2 text-left">
            <Label htmlFor="username" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                User Name
            </Label>
            <Input 
                id="username"
                placeholder="******************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* Full Name */}
            <div className="space-y-2 text-left">
            <Label htmlFor="fullname" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Full Name
            </Label>
            <Input 
                id="fullname"
                placeholder="******************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* Email Address */}
            <div className="space-y-2 text-left">
            <Label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Email Address
            </Label>
            <Input 
                id="email"
                type="email"
                placeholder="***************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* Phone Number */}
            <div className="space-y-2 text-left">
            <Label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Phone Number
            </Label>
            <Input 
                id="phone"
                type="tel"
                placeholder="***********************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* Password */}
            <div className="space-y-2 text-left">
            <Label htmlFor="password" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Password
            </Label>
            <Input 
                id="password"
                type="password"
                placeholder="***************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            <div className="pt-4">
            <Button className="bg-[#1d6aff] hover:bg-[#1656cc] text-white px-10 py-6 rounded-xl font-bold transition-all w-full md:w-auto dark:bg-blue-600 dark:hover:bg-blue-500">
                Save
            </Button>
            </div>
        </form>
        </div>
    )
}
