"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from "react";
import { ChevronsRight } from "lucide-react"

export function AdminDashboardNavbar() {
    const pathname = usePathname()

    const pageNameMap: Record<string, ReactNode> = {
        "/admin-dashboard": "Welcome Page",
        "/admin-dashboard/dashboard": "Dashboard",
        "/admin-dashboard/user": "Users",
        "/admin-dashboard/subscription-overview": "Subscription Overview",
        "/admin-dashboard/manage-subscriptions": "Manage Subscriptions",
        "/admin-dashboard/comments": "Comments",
        "/admin-dashboard/settings": "Settings",
        "/admin-dashboard/users-roles": "Users & Roles",
        "/admin-dashboard/financials": "Financials",
        "/admin-dashboard/referral-codes": "Referral Codes",
        "/admin-dashboard/success-stories": "Success Stories"
    };

    return (
        <header
        className="
            h-14 flex items-center gap-x-2 px-4
            border-b
            bg-white dark:bg-[#0d0f15]
            border-gray-200 dark:border-[#1f2937]
            sticky top-14 z-50
        "
        >
        <SidebarTrigger />

        <Link
            href="/admin-dashboard"
            className="
            font-semibold flex items-center sm:gap-x-1
            text-gray-800 dark:text-gray-200
            hover:underline
            hover:text-blue-800 dark:hover:text-blue-400
            transition-colors
            text-[9px] sm:text-xs
            "
        >
            Admin Dashboard
            <ChevronsRight className="inline-block mt-1 ml-1 mb-0.5" size={12} />
        </Link>

        <span className="text-blue-800 dark:text-blue-400 text-[10px] sm:text-xs">
            {pageNameMap[pathname]}
        </span>
        </header>
    )
}
