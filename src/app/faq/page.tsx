"use client";

import Footer from "@/components/footer";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import PageHero from "@/components/PageHero";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "FAQ", href: "/faq" },
    ];

    const faqData = [
        {
            question: "1. How accurate and reliable is your A1 analysis of Chinese legal documents?",
            answer: "Our A1 system is highly reliable, trained extensively on Chinese legal databases, and consistently achieves industry-leading accuracy. Complex matters receive additional verification from leading law firms, with multiple validation checks to ensure quality.",
        },
        {
            question: "2. What types of legal documents can your system process?",
            answer: "Our system can handle a wide range of legal documents including commercial contracts, employment agreements, corporate governance documents, regulatory compliance documents, IP-related agreements, and real estate contracts.",
        },
        {
            question: "3. How can I change my subscription plan?",
            answer: "You can easily upgrade or downgrade your subscription at any time through your account settings. Changes take effect at the beginning of the next billing cycle, with unused credits prorated and applied to your new plan. For assistance, contact support at info@lvxlaw.com.",
        },
        {
            question: "4. Do you offer customized solutions for specific industries?",
            answer: "Yes, our Enterprise Package includes custom A1 model training tailored to your industry's specific legal requirements and terminology. For detailed pricing, please refer to our subscription page or contact the support department.",
        },
        {
            question: "5. Can your platform accurately handle both Chinese and English legal documents?",
            answer: "Yes. Our platform employs advanced bilingual A1 capabilities to process Chinese and English legal documents with equal accuracy. Analyses are conducted simultaneously in both languages, ensuring consistency and precision.",
        },
        {
            question: "6. How do you maintain compliance with Chinese and global legal standards?",
            answer: "Our platform integrates current Chinese legal requirements alongside international standards. Regular updates from regulatory bodies and collaborations with international law firms ensure compliance in cross-border matters.",
        },
        {
            question: "7. Can your system integrate with our existing legal management software?",
            answer: "Yes, our Professional and Enterprise packages include API access for seamless integration with your existing systems. We provide full documentation and technical support for custom integrations.",
        },
        {
            question: "8. How does your A1 support comprehensive legal research?",
            answer:(
                <>
                    <p>Our AI enhances legal research by:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Quickly analyzing cases and regulations</li>
                    <li>Identifying relevant precedents</li>
                    <li>Producing detailed research reports</li>
                    <li>Monitoring regulatory updates affecting specific legal areas</li>
                    </ul>
                </>
            ),
        },
        {
            question: "9. Does your platform support team collaboration?",
            answer:(
                <>
                    <p>Team collaboration features are coming soon. We are currently developing tools to:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Share and comment on documents</li>
                    <li>Track document changes and versions</li>
                    <li>Assign and manage tasks</li>
                    <li>Maintain secure internal communications</li>
                    </ul>
                </>
            ),
        },
        {
            question: "10. Is the platform easy to use for users without legal training?",
            answer: (
            <>
                <p>Absolutely. The platform offers a simple, intuitive interface with:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Step-by-step user guides</li>
                <li>Plain language explanations</li>
                <li>Templates for common legal documents</li>
                <li>Round-the-clock customer support</li>
                </ul>
            </>
            ),
        },
        {
            question: "11. What kind of support do you provide if I encounter issues?",
            answer: (
            <>
                <p>We offer:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>24/7 technical support via chat and email</li>
                <li>Video tutorials and user guides</li>
                <li>Regular webinars for new users</li>
                <li>Dedicated phone support for Premium and Enterprise users</li>
                </ul>
            </>
            ),
        },
        {
            question: "12. How do you protect my legal documents and personal information?",
            answer: (
            <>
                <p>We implement enterprise-grade security measures including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>End-to-end encryption</li>
                <li>Secure cloud storage</li>
                <li>Regular security audits</li>
                <li>Strict access controls</li>
                <li>Compliance with Chinese data protection laws and GDPR standards</li>
                </ul>
            </>
            ),
        },
        {
            question: "13. How reliable is your service uptime, and what happens during downtime?",
            answer: (
            <>
                <p>We ensure high reliability with:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>99.9% uptime guarantee for Enterprise users</li>
                <li>Redundant infrastructure for uninterrupted service</li>
                <li>Automatic backup and recovery processes</li>
                <li>Real-time service status notifications</li>
                </ul>
            </>
            ),
        },
        {
            question: "14. How frequently is your legal database updated?",
            answer: (
            <>
                <p>Our legal database is updated:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Daily for new laws and regulatory changes</li>
                <li>Weekly for recent cases and judicial interpretations</li>
                <li>Monthly for contract templates and optimizations</li>
                <li>Quarterly for major feature updates</li>
                </ul>
            </>
            ),
        },
        {
            question: "15. How can I securely share sensitive contracts with my team?",
            answer: "Use our built-in secure sharing feature, which offers end-to-end encryption, detailed permission controls, and audit logs. Refer to our Security Guide for more details or contact support at info@lvxlaw.com for assistance.",
        },
        {
            question: "16. Can I get a trial before committing to a subscription?",
            answer: "Yes, we Offer a free trial period to explore our platform fully. Sign up on our Free Trial Page or contact our sales team at info@lvxlaw.com to arrange a demonstration tailored to your needs.",
        },
        {
            question: "17. How does the platform handle multilingual contract scenarios?",
            answer: "Our A1 model is uniquely trained for multilingual scenarios, efficiently managing documents across multiple languages with high precision. This allows seamless cross-border legal operations. Learn more in our Multilingual Support Guide or schedule a consultation at info@lvxlaw.com.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfdfe] dark:bg-neutral-950 font-sans overflow-x-hidden">

        <main className="pt-16">
            {/* Header Section */}
            <PageHero title="FAQ" breadcrumbs={breadcrumbs} />

            {/* FAQ Section */}
            <section className="bg-[#f2f3f7] dark:bg-[#1b1f2c] px-4 pt-20 pb-20  border-t-[3px] border-dotted border-blue-200 dark:border-blue-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white dark:bg-[#161719] rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-none border border-neutral-100 dark:border-neutral-800 p-8 md:p-16">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#11234b] dark:text-white leading-tight">
                                Find answers to common questions about our legal AI platform
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((item, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="border-b border-neutral-300 dark:border-neutral-800 last:border-0 py-2"
                                >
                                    <AccordionTrigger className="text-left text-lg cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 py-6 px-4 font-bold mb-2 text-[#11234b] dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className=" text-base px-4 border border-neutral-100 dark:border-neutral-800 leading-relaxed py-6 mb-3 rounded-lg text-white bg-[#5d78e1] dark:bg-[#153065]">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#f2f3f7] dark:bg-[#1b1f2c]">
            <ContactSection />
            </section>

            {/* Newsletter Section */}
            <div className="bg-[#f2f3f7] dark:bg-[#1b1f2c]">
            <NewsletterSection />
            </div>

            {/* CTA Section */}
            <CTASection />
        </main>

        {/* Footer Section */}
        <Footer />
        </div>
    );
};
