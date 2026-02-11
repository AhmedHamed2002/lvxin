"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminDashboardNavbar } from "@/components/admin/admin-dashboard-navbar"
import { useTranslation } from "@/hooks/useTranslation"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="mt-16 h-full bg-gray-50 dark:bg-[#14161f] transition-colors">
        <SidebarProvider defaultOpen dir="auto">
            <AdminSidebar />

            <SidebarInset className="h-auto bg-gray-50 dark:bg-[#202227]" dir="auto">
            <AdminDashboardNavbar />
            <main className="p-4 h-auto text-gray-900 dark:text-gray-100">
                {children}
            </main>
            </SidebarInset>
        </SidebarProvider>
        </div>
    )
}
