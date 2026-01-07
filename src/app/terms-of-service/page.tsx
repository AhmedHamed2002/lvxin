"use client"

import CTASection from "@/components/CTASection"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/NewsletterSection"
import { CircleCheck } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#1f2128] text-gray-900 dark:text-gray-100 italic transition-all duration-300">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                    style={{ 
                        backgroundImage: "url('/assets/images/terms-and-conditions.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-900/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-700/20 to-blue-950/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg">
                        Terms and Conditions
                    </h1>
                    <p className="max-w-4xl mx-auto text-xs md:text-lg opacity-90 leading-relaxed drop-shadow-md">
                        At Lvxin, we are committed to making our visitors' privacy a top priority. We fully understand your concern about protecting your personal and contractual data. Our platform provides a secure environment for uploading and reviewing contracts, ensuring safe and reliable use of AI-powered analysis. We guarantee that your information will not be shared with any third party. This privacy policy is designed for you to ensure a safe and transparent experience on our platform.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <main className="container mx-auto px-6 md:px-12 py-16 md:py-24 max-w-7xl">
                
                {/* Preface */}
                <section className="mb-20 p-8 bg-blue-50/30 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
                    <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-3">
                        <CircleCheck className="text-blue-500" />
                        Preface
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                        Thank you for using the products and/or services provided by Shenzhen Lvxin Fazhi Technology Co., Ltd. Before completing the registration process or using Shenzhen Lvxin Fazhi website services in any way, please carefully read and thoroughly understand these Shenzhen Lvxin Fazhi website service terms (hereinafter referred to as "Service Terms"). After confirming your full understanding, choose to accept or not accept these Service Terms. Once you complete "Agree to Terms and Register" or begin using Shenzhen Lvxin Fazhi services in other ways, it indicates that you have read and agreed to be bound by these Service Terms. If you do not agree to these Service Terms or any provisions thereof, you should not proceed further or stop the registration process.
                        </p>
                        <p className="font-bold">
                        Shenzhen Lvxin Fazhi again reminds you to carefully read and fully understand all terms, especially the corresponding terms that limit or exempt liability. Terms that limit or exempt liability may be highlighted in bold or other prominent forms to draw your attention.
                        </p>
                    </div>
                </section>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {/* Section 1 */}
                    <AccordionItem value="section-1" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    1. Contracting Parties and Agreement Scope
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>
                                1.1. The Shenzhen Lvxin Fazhi website service terms constitute a valid contract between you and Shenzhen Lvxin Fazhi Technology Co., Ltd. (hereinafter referred to as "Shenzhen Lvxin Fazhi" or "we") regarding the use of Shenzhen Lvxin Fazhi website services (including providing you with website page information browsing, account registration services, etc., hereinafter referred to as "this service"). The Shenzhen Lvxin Fazhi website includes the website with domain www.lvxlaw.com and Shenzhen Lvxin Fazhi client or derivative product services.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 2 */}
                    <AccordionItem value="section-2" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    2. Account Registration, Use and Security
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <div>
                                    <p className="font-bold mb-2">2.1. Registration Eligibility</p>
                                    <p>2.1.1. You confirm that when you complete the registration process or actually use this service in other ways permitted by Shenzhen Lvxin Fazhi, you should be a natural person, legal entity or other organization with full civil rights capacity and full civil capacity (hereinafter referred to as "you").</p>
                                    <p>2.1.2. If you are a minor or a person with limited civil capacity, you do not have the aforementioned subject qualifications, and you and your guardian should bear all consequences resulting from your improper registration behavior.</p>
                                    <p>2.1.3. You also need to ensure that you are not subject to trade restrictions, sanctions or other legal or regulatory restrictions imposed by any country, international organization or region, otherwise you may not be able to register and use Shenzhen Lvxin Fazhi services normally.</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-2">2.2. Account Registration</p>
                                    <p>2.2.1. When you fill in information according to the registration page prompts, read and agree to these service terms and complete all registration procedures, you can obtain a Shenzhen Lvxin Fazhi account and become a user of Shenzhen Lvxin Fazhi.</p>
                                    <p>2.2.2. You can complete the registration process through the account name ("account name") you set or confirm and the password you set; you can choose to complete the registration of Shenzhen Lvxin Fazhi user account through setting login mobile phone number and completing dynamic verification, authorizing the use of third-party account associated registration or other registration methods provided by Shenzhen Lvxin Fazhi. When you register an account through a certain form, Shenzhen Lvxin Fazhi may automatically generate an "account ID" for you. You understand and agree that when referring to your Shenzhen Lvxin Fazhi account or account, it actually refers to the collective term for the above account name and password, login mobile phone number, authorized third-party account or other information belonging to "account" or "account" in the user interface.</p>
                                    <p>2.2.3. The account name you set must not violate national laws and regulations, public order and good customs, social morality, Shenzhen Lvxin Fazhi management standards or easily cause confusion between you and Shenzhen Lvxin Fazhi identity, otherwise your account may not be successfully registered or Shenzhen Lvxin Fazhi has the right to cancel it after notifying you.</p>
                                    <p>2.2.4. You should accurately provide and timely update your account information according to legal and regulatory requirements or prompts on corresponding pages to make it true, timely, complete and accurate. If the information you provide is incorrect, untrue, outdated or incomplete, Shenzhen Lvxin Fazhi may send you inquiries and/or notices requiring corrections, and you should cooperate to provide or update relevant information according to Shenzhen Lvxin Fazhi's requirements. You should bear the consequences and losses of not being able to use your Shenzhen Lvxin Fazhi account (unable to register successfully, or account being frozen or cancelled) or during use due to the information and materials you fill in being untrue, untimely, incomplete or inaccurate.</p>
                                    <p>2.2.5. Under normal circumstances, your Shenzhen Lvxin Fazhi account is the unique identity identifier for all your activities on the Shenzhen Lvxin Fazhi website. Unless otherwise agreed, each Shenzhen Lvxin Fazhi account can independently carry out activities on this website. However, in the following circumstances, Shenzhen Lvxin Fazhi has the right to make unified processing of multiple Shenzhen Lvxin Fazhi accounts owned by the same and/or related legal entities according to its own judgment, such as based on the associated information of different Shenzhen Lvxin Fazhi accounts in registration, login, and use, Shenzhen Lvxin Fazhi judges that they are actually the same user. Examples of associated information: same certificate, same mobile phone number, same payment account, same device, same address, etc.</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-2">2.3. Account Use and Security</p>
                                    <p>2.3.1. One Shenzhen Lvxin Fazhi account can only correspond to a unique legal entity. Unless there are explicit legal provisions, judicial rulings or with the consent of Shenzhen Lvxin Fazhi, you may not transfer, lend, rent, give or let others inherit your Shenzhen Lvxin Fazhi account in any way.</p>
                                    <p>2.3.2. Your account information is set and kept by yourself. You must keep your Shenzhen Lvxin Fazhi account and password, mobile verification code and other information and materials related to the account confidential. You need to ensure that you leave the website in the correct steps at the end of each online session.</p>
                                    <p>2.3.3. If you find that others are using your Shenzhen Lvxin Fazhi account without authorization, you should immediately notify Shenzhen Lvxin Fazhi; Shenzhen Lvxin Fazhi will assist you in freezing the account, changing passwords or making other security settings; you understand that Shenzhen Lvxin Fazhi needs reasonable time to take action on your request, and Shenzhen Lvxin Fazhi does not bear any responsibility for the consequences that have occurred before taking action and caused by you (including but not limited to any losses you may suffer).</p>
                                    <p>2.3.4. Shenzhen Lvxin Fazhi will also provide relevant free services to assist you in ensuring the security of your account, including reminding you to configure security products, providing basic monitoring and alerting capabilities, and notification and alerting capabilities for your designated account when abnormal operations occur in the account. To achieve the above capabilities, you know and agree that Shenzhen Lvxin Fazhi will obtain your AK and account activity records in order to alert high-risk events. You understand and accept that although Shenzhen Lvxin Fazhi provides you with the above account security monitoring services, you are the first person responsible for your account security. Shenzhen Lvxin Fazhi cannot guarantee the effectiveness and service quality of the free services provided, and Shenzhen Lvxin Fazhi does not bear any responsibility for the consequences caused by the leakage of AK or other login authentication methods (including but not limited to any losses you may suffer).</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 3 */}
                    <AccordionItem value="section-3" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    3. Account Suspension, Cancellation and Appeals
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <div>
                                    <p className="font-bold mb-2">3.1. Account Suspension</p>
                                    <p>Your Shenzhen Lvxin Fazhi account (all or partial permissions or functions) may be suspended in the following situations (for example, Shenzhen Lvxin Fazhi account is restricted from logging in; restricted from fund withdrawal functions, etc.), and Shenzhen Lvxin Fazhi will notify you through email, internal messages, SMS or phone calls:</p>
                                    <p>3.1.1. Based on the needs of Shenzhen Lvxin Fazhi website or cloud service operation and transaction security, if you engage in or may engage in activities that damage or attempt to damage the fair trading environment or normal trading order of Shenzhen Lvxin Fazhi or its affiliated companies, or any use of names, brands containing Shenzhen Lvxin Fazhi or its affiliated companies that may mislead others, or any use of certain Chinese and English (full name or abbreviation), numbers, domain names, etc. intended to indicate or map some association with Shenzhen Lvxin Fazhi or its affiliated companies;</p>
                                    <p>3.1.2. Violation of these Service Terms and related rules of Shenzhen Lvxin Fazhi website;</p>
                                    <p>3.1.3. Violation of national laws, regulations, policies, and legal documents;</p>
                                    <p>3.1.4. You are complained by others, and the other party has provided relevant evidence, while you have not provided contrary evidence as required by us;</p>
                                    <p>3.1.5. Shenzhen Lvxin Fazhi reasonably analyzes and determines that your account operations, earnings, exchanges, etc. are abnormal;</p>
                                    <p>3.1.6. Freezing required by competent national authorities;</p>
                                    <p>3.1.7. Shenzhen Lvxin Fazhi reasonably determines that the same user has engaged in other situations with the same nature as the above behaviors or producing similar risks as above.</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-2">3.2. Account Cancellation</p>
                                    <p>3.2.1. Your Shenzhen Lvxin Fazhi account will be cancelled in any of the following circumstances:</p>
                                    <p>3.2.1.1. Shenzhen Lvxin Fazhi processes your cancellation request and completes account cancellation based on your personal account cancellation application, in accordance with legal provisions and account cancellation procedures.</p>
                                    <p>3.2.1.2. When the circumstances mentioned in Section 3.1 above occur and are serious, or based on requirements from competent national authorities, Shenzhen Lvxin Fazhi cancels your relevant Shenzhen Lvxin Fazhi account, and Shenzhen Lvxin Fazhi will notify you through email, SMS, phone or other appropriate means.</p>
                                    <p>3.2.2. You understand and agree that once your account is cancelled, you will:</p>
                                    <p>3.2.2.1 Be unable to log in to Shenzhen Lvxin Fazhi website, forums, Apps, etc. again;</p>
                                    <p>3.2.2.2 Be unable to access control panels or cloud site control panels;</p>
                                    <p>3.2.2.3 Be unable to perform other operations that depend on account permissions;</p>
                                    <p>3.2.2.4 Be unable to retrieve personal information, transaction records, business data, historical information, etc. under that account.</p>
                                    <p>3.2.2.5 However, account cancellation does not mean that all your account behaviors and related responsibilities before account cancellation are exempted or reduced.</p>
                                    <p>3.2.3 After account cancellation, Shenzhen Lvxin Fazhi will:</p>
                                    <p>3.2.3.1 Have no right to continue collecting, storing and using your personal information and data, except in circumstances where laws and regulations require otherwise, such as: retaining corresponding invoice information for tax compliance purposes;</p>
                                    <p>3.2.3.2 Have the obligation to ensure that all your data under that account cannot be retrieved or accessed in systems involved in daily business functions, while complying with national laws and regulations;</p>
                                    <p>3.2.3.3 Account cancellation does not affect Shenzhen Lvxin Fazhi's fulfillment of related obligations such as legally confirming the user's true identity before account cancellation when required by regulatory authorities or in other legal scenarios.</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-2">3.3. Appeals</p>
                                    <p>In the event of the aforementioned account suspension or cancellation, you should pay timely attention and may follow procedures for appeals and other follow-up operations:</p>
                                    <p>3.3.1. When you apply to Shenzhen Lvxin Fazhi through the appeal process to lift the above suspension or cancellation, for your account security, you should cooperate in truthfully providing identity proof and related materials, as well as other information or documents required by Shenzhen Lvxin Fazhi, so that Shenzhen Lvxin Fazhi can verify. You should fully understand that your appeal may not necessarily be allowed, and Shenzhen Lvxin Fazhi has the right to decide whether to agree to your appeal request.</p>
                                    <p>3.3.2. You understand and agree that if you refuse to truthfully provide identity proof and related materials, or fail to pass Shenzhen Lvxin Fazhi's review, Shenzhen Lvxin Fazhi has the right to freeze such accounts for a long time and restrict some or all account functions for a long time, until the aforementioned circumstances are reasonably corrected, or cancel the account based on the provisions of Article 3.2.1.3.</p>
                                    <p>3.4 You understand and agree that if you have multiple Shenzhen Lvxin Fazhi accounts under your name, and one or more accounts are frozen or cancelled due to your illegal, irregular, or breach of contract behaviors, Shenzhen Lvxin Fazhi has the right to make reasonable judgments based on specific circumstances and related risk levels, and freeze or cancel all or part of your other accounts.</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 4 */}
                    <AccordionItem value="section-4" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    4. Website Services and Standards
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>4.1. You have the right to enjoy Internet technology services and information services provided by Shenzhen Lvxin Fazhi through this website. You should also fulfill responsibilities such as timely payment and service management according to these Service Terms and related terms and conditions you confirm when purchasing specific cloud services.</p>
                                <div>
                                    <p className="font-bold mb-2">4.2. When using Shenzhen Lvxin Fazhi services, you should guarantee:</p>
                                    <p>4.2.1. When using Shenzhen Lvxin Fazhi services, you will comply with national and local laws and regulations, industry practices and social public morality, and will not use services provided by Shenzhen Lvxin Fazhi to store, publish, or disseminate the following information and content:</p>
                                    <p>(i) Any content (information) that violates national laws, regulations and policies;</p>
                                    <p>(ii) Political propaganda and/or news information that violates national regulations;</p>
                                    <p>(iii) Information involving national secrets and/or security;</p>
                                    <p>(iv) Feudal superstition and/or obscene, pornographic, vulgar information or information that incites crime;</p>
                                    <p>(v) Gambling with prizes, gambling games; information that violates national ethnic and religious policies;</p>
                                    <p>(vi) Information that hinders Internet operation security;</p>
                                    <p>(vii) Information that infringes on others' legitimate rights and interests and/or other information or content that damages social order, social security, and public morality;</p>
                                    <p>(viii) You also promise not to provide any convenience for others to publish the above information content that does not comply with national regulations and/or these Service Terms, including but not limited to setting up URLs, BANNER links, etc.</p>
                                    <p>4.2.2. There should be no behavior that damages or attempts to damage network security, including not using technology or other means to damage or disrupt this website and other customers' websites of Shenzhen Lvxin Fazhi;</p>
                                    <p>4.2.3. Your use of Shenzhen Lvxin Fazhi website services should comply with these Service Terms;</p>
                                    <p>If you violate the above guarantees, Shenzhen Lvxin Fazhi has the right to take measures such as deleting information, suspending services, and terminating services according to relevant Service Terms, and has the right to freeze or cancel some or all functions of your account.</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 5 */}
                    <AccordionItem value="section-5" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    5. Privacy and Personal Information Protection
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>5.1. To timely follow up on your needs, we may enter your provided contact information or account data (including name, email address, phone number, position), your company's basic information and project service information into our customer relationship management system. Service consultants who interface with you will have permission to view the aforementioned information and contact you when necessary.</p>
                                <p>5.2. If you wish to further understand how we collect and use your personal information or how we protect your privacy, you may refer to the "Privacy Policy".</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 6 */}
                    <AccordionItem value="section-6" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    6. Intellectual Property
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>6.1. We respect intellectual property rights. Unless we have obtained your consent, Shenzhen Lvxin Fazhi will not use, modify, copy, publicly disseminate, change, distribute, publish or publicly display your intellectual property achievements without authorization.</p>
                                <p>6.2. Unless otherwise stated, the intellectual property rights of Shenzhen Lvxin Fazhi website Logo, "Shenzhen Lvxin Fazhi", "lvxlaw" and other text, graphics and their combinations, as well as other logos, emblems, service names, technical documents, etc. of Shenzhen Lvxin Fazhi website belong to Shenzhen Lvxin Fazhi. "Intellectual property" includes any and all rights, ownership and interests specified in patent law, copyright law, trademark law, anti-unfair competition law and other laws, as well as any and all applications, updates, extensions and restorations thereof.</p>
                                <p>6.3. You may not attack Shenzhen Lvxin Fazhi's official website, modify, adapt, or translate software, technology, materials, etc. used by cloud services, or obtain source code involved in cloud services through reverse engineering, reverse compilation, disassembly or other similar behaviors. Otherwise, you shall be responsible for all legal consequences arising therefrom, and Shenzhen Lvxin Fazhi has the right to pursue your legal responsibility according to law.</p>
                                <p>6.4. You should respect the intellectual property and other legitimate rights/interests of Shenzhen Lvxin Fazhi and third parties, and guarantee to protect Shenzhen Lvxin Fazhi and its employees, shareholders, partners, etc. from being affected or suffering losses due to such events when illegal events that infringe the aforementioned rights and interests occur. Shenzhen Lvxin Fazhi reserves the right to terminate providing services to you and not refund any payments when you infringe the legitimate rights/interests of Shenzhen Lvxin Fazhi and/or other third parties.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 7 */}
                    <AccordionItem value="section-7" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    7. Confidentiality
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>Shenzhen Lvxin Fazhi promises to take confidentiality measures for information you submit or become aware of when registering an account or using Shenzhen Lvxin Fazhi services, and not to disclose your information to third parties, except:</p>
                                <p>7.1. Information that can be provided according to these Service Terms or other service agreements, contracts, online terms, etc. between you and Shenzhen Lvxin Fazhi;</p>
                                <p>7.2. Information that should be provided according to legal and regulatory provisions or requirements from administrative, judicial and other competent authorities;</p>
                                <p>7.3. Without violating the agreed responsibilities in these Service Terms, the confidential information has been made public or can be obtained from the public domain;</p>
                                <p>7.4. Information necessary to provide the services you request.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 8 */}
                    <AccordionItem value="section-8" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    8. Information Security Incidents
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>Shenzhen Lvxin Fazhi manages information security incidents according to national legal and regulatory requirements and relevant security incident handling standards. When information security incidents involving your related assets occur, we will promptly inform you of the relevant circumstances of the incident through email, letters, phone calls, push notifications and other means according to law. You can also actively contact us through customer service phone and other means.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 9 */}
                    <AccordionItem value="section-9" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    9. Scope of Responsibility and Limitation of Liability
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>9.1. You acknowledge and agree that you should bear any third-party claims resulting from your use of this service, violation of these Service Terms, or any actions taken under your account. If this causes Shenzhen Lvxin Fazhi and its affiliated companies, employees, customers and partners to be claimed by third parties, you should be responsible for handling and compensating Shenzhen Lvxin Fazhi and its affiliated companies for all losses and liabilities suffered thereby.</p>
                                <p>9.2. To the extent permitted by applicable law, Shenzhen Lvxin Fazhi shall not be liable for any indirect, punitive, special, or derivative losses related to or arising from these Service Terms.</p>
                                <p>9.3. Shenzhen Lvxin Fazhi hereby reminds that you should comply with the laws of the People's Republic of China during your use of Shenzhen Lvxin Fazhi services, not endanger network security, and not use Shenzhen Lvxin Fazhi services to engage in activities that infringe others' reputation, privacy, intellectual property and other legitimate rights and interests. Shenzhen Lvxin Fazhi does not bear any responsibility for your illegal or breach of contract behaviors in using Shenzhen Lvxin Fazhi services.</p>
                                <p>9.4. Information you upload, provide, and publish on Shenzhen Lvxin Fazhi website forums, communities and cloud marketplace, including but not limited to user names, company names, contact persons and contact information, related pictures, information, etc., are all provided by yourself, and you must bear full legal responsibility for the aforementioned information you provide.</p>
                                <p>9.5. If you obtain any products or services from third parties through using Shenzhen Lvxin Fazhi website, the service provider will be responsible to you for the services they provide, and Shenzhen Lvxin Fazhi does not bear any responsibility for such third-party services.</p>
                                <p>9.6. In some cases, to help you use Shenzhen Lvxin Fazhi services more conveniently, Shenzhen Lvxin Fazhi may display Shenzhen Lvxin Fazhi's reference code or software (if it belongs to third-party open source software, you should comply with the relevant usage requirements of third-party open source software). Based on the usage instructions on corresponding display pages, such software may allow you to download, conduct secondary development and other related operations. You should understand and promise that the intellectual property of such code belongs to Shenzhen Lvxin Fazhi, and you should clearly indicate the rights holder when using it. At the same time, Shenzhen Lvxin Fazhi is not responsible for whether you can use and the work and consequences of using such code and software.</p>
                                <p>9.7. You acknowledge and agree that during Shenzhen Lvxin Fazhi's public testing, invitation testing and other periods when you use services for free (trial) or within free service quotas, although Shenzhen Lvxin Fazhi will provide support for service availability and reliability, it will not make any commitments regarding service availability and reliability, and Shenzhen Lvxin Fazhi also does not bear any responsibility for your work or results of using or being unable to use Shenzhen Lvxin Fazhi services. Shenzhen Lvxin Fazhi reserves the possibility of charging fees for such free services in the future, and will notify you separately before charging service fees.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 10 */}
                    <AccordionItem value="section-10" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    10. Force Majeure and Unexpected Events
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>Shenzhen Lvxin Fazhi's website and cloud services are provided according to the current state achievable by existing technology and conditions. Shenzhen Lvxin Fazhi will make every effort to ensure service continuity and security, but cannot always foresee and prevent legal, technical and other risks. Within the scope permitted by law, if normal services cannot be provided due to the following force majeure or unexpected events, Shenzhen Lvxin Fazhi does not bear any legal responsibility:</p>
                                <p>10.1. Force majeure, that is, objective circumstances that both parties cannot foresee and whose occurrence and consequences cannot be overcome and avoided, including but not limited to the following situations: (1) Natural disasters such as floods, hail, tsunamis, typhoons, droughts, fires; (2) Social factors such as strikes, riots, wars and applicable policies, laws, regulations that make performance impossible;</p>
                                <p>10.2. Public service factors such as power supply failures, communication network failures;</p>
                                <p>10.3. Hacker attacks, viruses, abnormalities in your own software and hardware equipment and other non-independent responsibilities of Shenzhen Lvxin Fazhi;</p>
                                <p>10.4. System maintenance by Shenzhen Lvxin Fazhi for short periods with advance announcement or notification (including but not limited to troubleshooting, system upgrades, system expansion, server migration).</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 11 */}
                    <AccordionItem value="section-11" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    11. Applicable Law and Jurisdiction
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>The effectiveness, interpretation, changes, execution and dispute resolution of these Service Terms shall all be governed by the laws of the People's Republic of China. Disputes arising from these Service Terms shall be submitted to the People's Court of Shenzhen City, Guangdong Province for resolution.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 12 */}
                    <AccordionItem value="section-12" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    12. Notice Delivery
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>12.1. You understand and agree that Shenzhen Lvxin Fazhi may send notices to you through one or more of the above notification methods such as web announcements, emails, internal messages, SMS, phone calls, system messages and instant communication, and Shenzhen Lvxin Fazhi may rely on the contact information you provide being complete, accurate and currently valid; the above notices are deemed delivered upon successful sending.</p>
                                <p>12.2. Unless these Service Terms provide otherwise or agreements separately signed between Shenzhen Lvxin Fazhi and you clearly specify notification methods, notices you send to Shenzhen Lvxin Fazhi should be delivered through communication addresses, fax numbers, email addresses and other contact information officially published by Shenzhen Lvxin Fazhi.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 13 */}
                    <AccordionItem value="section-13" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    13. Terms Updates and Termination
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>13.1. Shenzhen Lvxin Fazhi has the right to change the content of these Service Terms and corresponding service rules, and will announce or notify through web announcements, emails, internal messages, SMS and other methods; if you continue to use this service after changes to these Service Terms, it indicates that you have fully read, understood and accepted the modified content, and will also follow the modified terms content.</p>
                                <p>13.2. These Service Terms terminate when your account is cancelled or website services are terminated by mutual agreement between both parties.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Section 14 */}
                    <AccordionItem value="section-14" className="border-none">
                        <AccordionTrigger className="hover:no-underline p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="mb-4 text-left">
                                <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 inline-block">
                                    14. Other
                                </h2>
                                <div className="h-1 w-full max-w-[350px] bg-blue-600/20 dark:bg-blue-500/20 relative rounded-full">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-4 border-l-2 border-gray-100 dark:border-gray-800 py-4">
                                <p>14.1. These Service Terms consist of the content of these Service Terms, rules and specifications displayed on relevant website pages, service descriptions (including operation documents) and other terms/conditions you click to confirm. Both Shenzhen Lvxin Fazhi and you are bound by them, and the relevant terms therein may reference and explain each other.</p>
                                <p>14.2. The section headings of these Service Terms are set only for writing convenience and have no legal or contractual effect.</p>
                                <p>14.3. If any provision of these Service Terms is deemed abolished, invalid or unenforceable, that provision should be deemed severable and does not affect the validity and enforceability of these Service Terms and other provisions.</p>
                                <p>14.6. The confidentiality clauses, intellectual property clauses, applicable law and jurisdiction clauses, and other clauses that should continue to exist by nature (such as guarantees of the authenticity of registration information) under these Service Terms shall not become invalid due to the termination of these Terms.</p>
                                <p>14.7. Shenzhen Lvxin Fazhi will strictly abide by the principles of voluntary, equal, fair and honest cooperation, and fully respect the autonomous business rights of partners. If you find that Shenzhen Lvxin Fazhi employees have improper behaviors that violate the above cooperation principles, you can report problems through Shenzhen Lvxin Fazhi supervision email [info@lvxlaw.com], and Shenzhen Lvxin Fazhi will conduct investigations and handling following confidential and objective principles.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <hr className="my-16 border-2 border-blue-200 dark:border-blue-400"/>
                    
                <div className="flex gap-6 flex-col md:flex-row justify-center items-stretch mt-12 mb-20 animate-in slide-in-from-bottom duration-1000">
                    <div className="flex-1 max-w-xl text-[#4c505d] dark:text-gray-300 bg-[#fbfcff] dark:bg-[#252833] p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-blue-50 dark:border-gray-700 shadow-sm flex items-center">
                        <p className="text-sm italic leading-relaxed">These terms and policies are subject to ongoing development and improvement, so beneficiaries should review them periodically.</p>
                    </div>
                    <div className="flex-1 max-w-xl text-[#4c505d] dark:text-gray-300 bg-[#fdf4cc] dark:bg-[#3d3a2a] p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-yellow-200 dark:border-yellow-900/40 shadow-sm flex items-center">
                        <p className="text-sm italic leading-relaxed">We may modify the privacy policy and make changes at any time, and when this happens, we will publish the latest update on the (Labeih) app. Your continued use of our services and not canceling your personal account will be considered acceptance of the privacy policy as updated.</p>
                    </div>
                </div>

                {/* Newsletter Section */}           
                <NewsletterSection />

            </main>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    )
}