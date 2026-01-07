import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50/50 dark:bg-neutral-950">
            <div className="flex flex-col items-center space-y-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                    {/* Pulsing background effect */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20 ring-1 ring-blue-500/30"></div>
                    <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/10"></div>
                    
                    {/* Spinner Icon */}
                    <Loader2 className="relative h-10 w-10 animate-spin text-blue-200 dark:text-blue-600/20" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                        Loading...
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 animate-pulse">
                        Please wait a moment
                    </p>
                </div>
            </div>
        </div>
    );
}
