import { LayoutDashboard, Smile } from "lucide-react"
import Link from "next/link"


export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl h-[79vh] text-center bg-white dark:bg-[#0d0f15]">
            {/* Icon */}
            <div className="mb-6">
                <Smile className="text-blue-500 dark:text-blue-400 w-20 h-20 animate-bounce" /> 
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to Lvxin Dashboard
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-slate-300 mb-6 max-w-lg">
                Here you can manage your profile, view analytics, subscriptions, and feedback. 
                Navigate using the sidebar to explore different sections of your dashboard.
            </p>

            {/* Back to dashboard button */}
            <Link
                href="/mydash/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                        bg-blue-800 hover:bg-blue-700 
                        dark:bg-blue-700 dark:hover:bg-blue-600
                        text-white font-medium transition-shadow shadow-sm"
            >
                <LayoutDashboard className="w-5 h-5" />
                Go to Dashboard
            </Link>
        </div>
    )
}



