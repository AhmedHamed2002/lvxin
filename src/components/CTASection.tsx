import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section
            className="w-full py-20 bg-gradient-to-br from-[#0e2259] via-[#163a9b] to-[#1e48bf]"
        >
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center gap-5 w-full max-w-2xl px-4 text-center">

                        <h2 className="text-[22px] sm:text-[30px] md:text-[36px] font-bold text-white leading-tight">
                            Ready to streamline your legal review?
                        </h2>

                        <p className="text-lg text-[#90a1b8] leading-relaxed">
                            Join 500+ legal teams using ContractAI to close deals faster.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-8">
                            <Button
                                variant="default"
                                size="lg"
                                className="px-10 py-6 cursor-pointer text-white bg-blue-800 hover:bg-blue-900 border border-blue-900 rounded-[16px] shadow-lg"
                            >
                                Start Free Trial
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="px-10 py-6 cursor-pointer text-white border border-gray-500 bg-white/10 hover:bg-white/20 rounded-[16px]"
                            >
                                Book Demo
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
