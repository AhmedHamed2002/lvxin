import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardNavbar } from "@/components/dashboard-navbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mt-16 bg-gray-50 dark:bg-[#14161f] min-h-screen transition-colors">
        <SidebarProvider defaultOpen>
            <AppSidebar />

            <SidebarInset className="bg-gray-50 dark:bg-[#202227]">
            <DashboardNavbar />
            <main className="p-4 text-gray-900 dark:text-gray-100">
                {children}
            </main>
            </SidebarInset>
        </SidebarProvider>
        </div>
    )
}
