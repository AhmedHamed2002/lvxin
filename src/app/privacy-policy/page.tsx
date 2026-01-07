"use client"

import CTASection from "@/components/CTASection"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/NewsletterSection"
import { ShieldCheck, UserCheck, Lock, Globe, Database, Scale, Eye, FileText, Bell, PhoneCall, Info, Share2 } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#1f2128] text-gray-900 dark:text-gray-100 italic transition-all duration-300">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden px-8">
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
                        Shenzhen Lvxin Legal Declaration and Privacy Policy
                    </h1>
                    <p className="max-w-4xl mx-auto text-xs md:text-lg opacity-90 leading-relaxed drop-shadow-md">
                        We are well aware of the importance of user information to you. Your trust is very important to us. We will strictly comply with legal and regulatory requirements and take appropriate security protection measures to ensure the security of user information and privacy.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <main className="container mx-auto px-6 md:px-12 py-16 md:py-24 max-w-7xl">
                
                {/* Important Notice Section */}
                <section className="mb-24 relative">
                    <div className="absolute bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur-xl opacity-10 dark:opacity-20 transition duration-1000 group-hover:duration-200" />
                    <div className="relative shadow-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-8 md:p-12 bg-white/80 dark:bg-[#252833]/80 rounded-lg border border-blue-100 dark:border-blue-900/30 ">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-600 dark:text-blue-400">
                                <ShieldCheck size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Important Notice
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                            <p>
                                Welcome to use the products and/or services of Shenzhen Lvxin Legal Technology Co., Ltd.! We are well aware of the importance of user information to you. Your trust is very important to us. We will strictly comply with legal and regulatory requirements and take appropriate security protection measures to ensure the security of user information and privacy. Based on this, Shenzhen Lvxin Legal Technology Co., Ltd. (hereinafter referred to as "we") has specially formulated this "Shenzhen Lvxin Legal Declaration and Privacy Policy" (hereinafter referred to as "this policy") to help you fully understand how we collect, use, share, store and protect your user information in the process of using our products and/or services, as well as how you can manage your user information, so that you can make appropriate choices.
                            </p>
                            <p>
                                Before you start using our products and/or services, please be sure to carefully read and understand this policy, especially pay attention to the terms we mark in bold/bold underline, and make sure you fully understand and agree before starting to use. In addition to this policy, in specific scenarios, we will also explain the corresponding information collection purpose, scope and usage through instant notification (including pop-ups, page prompts, etc.), feature update instructions, etc. These instant notifications and feature update instructions constitute part of this policy and have the same effect as this policy. For professional terms involved in this policy, we try to explain them in simple and popular expressions for your understanding. If you have any questions, opinions or suggestions about the content of this policy, you can contact us through the contact information at the end of this policy.
                            </p>
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-blue-500">
                                <p className="font-bold text-blue-900 dark:text-blue-200">
                                    Your agreement to this policy indicates that you have understood the products and/or services we provide, as well as the necessary user information required for the operation of the corresponding product and/or service functions (please note that the user information described in this policy may include personal information and/or sensitive personal information, please refer to "Appendix: Definitions" for details, which will not be repeated below), and give corresponding authorization for collection and use.
                                </p>
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">This policy will help you understand the following:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    {[
                                        "1. Scope of this policy",
                                        "2. How we collect and use your user information",
                                        "3. How we provide your user information externally",
                                        "4. How we share, transfer, and publicly disclose your user information",
                                        "5. User business data and public information",
                                        "6. How you manage your user information",
                                        "7. How we use cookies and similar technologies",
                                        "8. How we protect and store your user information",
                                        "9. Special provisions for minors' user information",
                                        "10. Updates to this policy",
                                        "11. How to contact us"
                                    ].map((item, idx) => (idx < 11) && (
                                        <li key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Policy Accordion */}
                <div className="mb-24">
                    <Accordion type="single" collapsible className="w-full space-y-6">
                        {[
                            { 
                                id: "1", 
                                title: "1. Scope of This Policy", 
                                icon: <Globe className="text-blue-500" />,
                                content: (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="font-bold underline">1.1.</p>
                                            <p>This policy applies to various products and services provided to you by Shenzhen Lvxin Legal websites, apps, mini-programs, and new forms that emerge with technological development (hereinafter collectively referred to as "Shenzhen Lvxin Legal Applications").</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">1.2.</p>
                                            <p>This policy does not apply to services provided to you by other third parties. Your information processing and protection matters should be governed by the privacy policies or similar documents of such third parties. We do not assume any legal responsibility for any improper use or disclosure of information provided by you by any third party.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "2", 
                                title: "2. How We Collect and Use Your User Information", 
                                icon: <UserCheck className="text-purple-500" />,
                                content: (
                                    <div className="space-y-6">
                                        <p>During your use of Shenzhen Lvxin Legal services, we may obtain your information through the following three methods:</p>
                                        <ul className="space-y-4">
                                            <li className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                                Information you actively provide to us during your use of our products and/or services, such as corresponding information filled in by you or your authorized entity when registering an account, purchasing technical services, etc.;
                                            </li>
                                            <li className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                                Related information we actively collect during your use of our products and/or services, such as operation records or other log data when you use Shenzhen Lvxin Legal applications;
                                            </li>
                                            <li className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                                In special scenarios, you may authorize our employees or partners to upload and submit relevant information on your behalf, such as when you entrust customer service personnel to assist you in completing information upload and submission.
                                            </li>
                                        </ul>
                                        <p>When you use Shenzhen Lvxin Legal applications, your personal information that we need/may need to collect and use includes the following two types:</p>
                                        
                                        <div className="space-y-4 ps-4 border-l-2 border-blue-500/30">
                                            <p>1. To provide you with basic functions or services of Shenzhen Lvxin Legal applications, you must authorize us to collect and use necessary information. If you refuse to provide corresponding information, you will not be able to use Shenzhen Lvxin Legal applications normally.</p>
                                            <p>2. To provide you with additional functions or services of Shenzhen Lvxin Legal applications, you can choose to agree or disagree with our collection and use of information. If you refuse to provide, you will not be able to use related additional functions normally or achieve the functional effects we intend to achieve, but it will not affect your use of basic functions of Shenzhen Lvxin Legal applications.</p>
                                        </div>

                                        <div className="space-y-6 pt-4">
                                            <p className="font-bold text-gray-900 dark:text-white">(1) To provide you with basic functions or services of Shenzhen Lvxin Legal applications</p>
                                            
                                            <div className="space-y-6">
                                                <div className="space-y-4">
                                                    <p className="font-bold underline text-lg">2.1. Assist you in becoming our member</p>
                                                    
                                                    <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.1.1.</p>
                                                            <p>When creating an account on the Shenzhen Lvxin Fazhi app, you are required to provide a username, set and confirm your login password, and submit a mobile phone number registered within the People’s Republic of China. The phone number you provide (referred to as your "security mobile number" or "account contact number") will be used to receive verification codes for registration, login, account binding, and password recovery. It will also serve as one of the designated contact methods between you and Shenzhen Lvxin Fazhi for receiving business-related notifications (such as new product launches or service updates). If you choose not to provide the above information, you will be unable to register an account with Shenzhen Lvxin Fazhi and will only be able to use browsing services.</p>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.1.2.</p>
                                                            <p>Due to our cooperation with telecommunications operators, when you choose to use the "One-Click Login" feature to quickly access the Shenzhen Lvxin Fazhi App, and upon your consent, we will utilize the functionality provided by the operator to retrieve the mobile phone number from your device. This number will be used as your registration and login account, bypassing the need for password or SMS verification, enabling a faster registration and login experience. If you prefer not to use the "One-Click Login" feature, you may register and log in to the Shenzhen Lvxin Fazhi App through alternative methods.</p>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.1.3.</p>
                                                            <p>If you have already registered a WeChat account or similar, and with your separate consent, we may obtain your third-party account information (such as avatar, nickname, mobile phone number, and any other information specified on a separate page) from the relevant third party to allow you to conveniently log in to the Shenzhen Lvxin Fazhi App. This third-party account will be linked to your Shenzhen Lvxin Fazhi account. However, Shenzhen Lvxin Fazhi will still require you to provide the security mobile number as specified in section 2.1.1. If the mobile number you provide as your security number differs from the one associated with your third-party account, Shenzhen Lvxin Fazhi will use the separately submitted number as your security mobile number.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="font-bold underline text-lg">2.2. To Provide You with Technical Services</p>
                                                    <p>According to the laws and regulations of the People’s Republic of China, when using certain technical services, you may be required to provide your real identity information through your Shenzhen Lvxin Fazhi account. Shenzhen Lvxin Fazhi offers various methods to assist you in submitting your real identity information. You should choose the method appropriate to your identity type.</p>
                                                    <div className="grid grid-cols-1 gap-4 ps-4 border-l border-gray-200 dark:border-gray-700">
                                                        <p>(1) If you complete identity verification through a corporate account, you will need to submit your company name, Unified Social Credit Code, business license image, and bank account information (including the account-opening bank, bank account number, and account holder name) to Shenzhen Lvxin Fazhi. The submitted information will only be used for the purpose of completing your identity verification via bank transfer.</p>
                                                        <p>(2) If you complete identity verification through facial recognition, you will be required to follow the instructions on the verification page, provide biometric facial data, as well as front and back images of your ID card, and authorize us to verify the information through a nationally accredited identity authentication authority. Please note that we will only use this information to verify your identity and record the results. We will not store this sensitive personal data or use it for any purpose beyond what you have explicitly authorized.</p>
                                                    </div>
                                                    <p className="font-bold italic">You acknowledge and understand that ID document information, as well as Alipay account information, bank account information, or biometric facial data—depending on the identity verification method you choose—are necessary for verifying your real identity in accordance with legal requirements.</p>
                                                    <p className="p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-lg font-bold">The above information includes your sensitive personal data. If leaked or misused, it could result in harm to your personal dignity, or to your personal or property safety. Please carefully consider which method you wish to use for identity verification. However, if you refuse to provide any of the required verification information, we will be unable to complete your identity verification or provide the related technical services.</p>

                                                    <div className="space-y-4 ps-4 border-l border-gray-200 dark:border-gray-700 pt-4">
                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.2.2.</p>
                                                            <p>To help you complete your order payment, you need to provide Shenzhen Lvxin Fazhi with certain transaction-related information, including details of the products and/or services, transaction amount, order time, order number, order status, payment method, payment transaction ID, payment status, and any other information required by anti-money laundering laws. We collect this information to ensure your transaction is completed smoothly, to protect your payment security, to allow order inquiries, and to provide customer support. If you refuse to provide this information, we will be unable to offer you the corresponding technical services.</p>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.2.3.</p>
                                                            <p>After you register a Shenzhen Lvxin Fazhi account and purchase our technical services, you may request us to issue and deliver an invoice. If you choose a paper invoice, you will need to provide your delivery address, including recipient name, detailed address, postal code, and mobile phone number. If you choose an electronic invoice, you will need to provide your email address. If you refuse to provide this information, we will be unable to assist with invoice issuance or delivery.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="font-bold underline text-lg">2.3. To Provide You with Secure and Stable Shenzhen Lvxin Fazhi Services</p>
                                                    <p>To enhance the security of your experience with our services, ensure a secure operating environment, detect abnormal account activities, and protect the personal and property safety of you, other users, or the public, as well as to better prevent phishing, fraud, network vulnerabilities, viruses, cyberattacks, and intrusions, and to more accurately identify violations of laws, regulations, or relevant agreements and rules of Shenzhen Lvxin Fazhi— we may use your account information, device information, relevant network logs, and information lawfully shared by our affiliates or partners during your use of the Shenzhen Lvxin Fazhi website and app services. This information is used to assess account and transaction risks, perform identity verification, detect and prevent security incidents, and to take necessary recording, auditing, analysis, and response measures as required by law. If you refuse to provide this information, we will be unable to offer these services. Specifically, we collect the following necessary information:</p>
                                                    <div className="space-y-4 ps-4 border-l border-gray-200 dark:border-gray-700">
                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.3.1. Device Information:</p>
                                                            <p>With the permissions you grant during installation and use, we may receive and record device-related information, such as hardware model, hardware serial number, software list, installed applications, software installations, unique device identifiers (IMEI), device MAC address, SIM card, IMSI, Android ID, MEID, Open UDID, GUID, BSSID, SSID, OAID, GAID, broadcast component communication data, ICCID, carrier information, and sensor data (gyroscope, gravity sensor, accelerometer, ambient sensors, optical heart rate sensor), as well as clipboard contents.</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="font-bold underline">2.3.2. Log Information:</p>
                                                            <p>When you use our client services, we automatically collect detailed logs about your interactions with our services, such as your search queries, IP address, browser type, telecom operator, language settings, access date and time, and pages visited.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                                    <p className="font-bold underline">2.4.</p>
                                                    <p>We may use aggregated user information statistics to design, develop, and promote new products and services. We may also perform statistical analysis on service usage and may share such statistical data with the public or third parties, but these statistics will not contain any personally identifiable information.</p>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 mt-8">
                                                <p className="font-bold mb-4 text-lg">(II) Circumstances Where Collection and Use of Personal Information Does Not Require Your Consent</p>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <p className="font-bold underline">2.5.</p>
                                                        <p>You fully understand that, in accordance with applicable laws, we may collect and use your personal information without your prior consent in the following circumstances:</p>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-3 ps-4">
                                                        {[
                                                            "2.5.1. Where it concerns national security or national interests, or the public interest;",
                                                            "2.5.2. Where it is necessary to fulfill our legal duties or obligations, or to respond to instructions from government authorities;",
                                                            "2.5.3. Where it is necessary for signing or performing an agreement or other written document to which you are a party;",
                                                            "2.5.4. Where it is necessary to respond to public health emergencies, or to protect your or others’ life, health, or property safety in emergency situations;",
                                                            "2.5.5. Where we handle personal information that you have proactively disclosed to the public within a reasonable scope;",
                                                            "2.5.6. Where we handle personal information collected from legally and publicly disclosed sources (such as lawful news reports, government disclosures, etc.) within a reasonable scope;",
                                                            "2.5.7. Any other circumstances prescribed by laws and regulations."
                                                        ].map((item, i) => (
                                                            <p key={i} className="text-sm">{item}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-4">
                                                <p className="font-bold underline">2.6.</p>
                                                <p>Please understand that the functions and services we provide to you are constantly updated and developed. If a function or service is not included in the above description and collects your information, we will separately explain the content, scope and purpose of information collection through page prompts, interactive processes, website announcements, separate agreement signing and other means to obtain your consent.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "3", 
                                title: "3. How We Share, Transfer, and Publicly Disclose Your User Information", 
                                icon: <Share2 className="text-blue-600" />,
                                content: (
                                    <div className="space-y-6">
                                        <p>Some modules and features within our products and/or services are provided by third-party service providers. To deliver better customer service and user experience, we may share certain personal information with our partners. When cooperating with such partners, we adhere to the following principles: (1) Lawfulness, Legitimacy, and Data Minimization: Data processing must be based on a legal basis, serve a legitimate purpose, and be limited to the minimum scope necessary to achieve that purpose; (2) Maximizing User's Right to Know and Right to Decide: We fully respect users’ right to be informed and to make decisions regarding the processing of their personal information; (3) Strengthened Security Measures: We take necessary steps to ensure the security of the personal data being processed, carefully assess our partners’ purposes for using the data, evaluate their security capabilities, and require them to comply with relevant terms of our partnership agreements.</p>
                                        
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">3.1. Entrusted Processing</p>
                                            <p>We may entrust authorized partners to process your personal information so that authorized partners can provide you with certain services or perform functions on our behalf. We will only entrust them to process your information for the legal, legitimate, necessary, specific, and clear purposes stated in this policy. Authorized partners can only access the information necessary to perform their duties, and we will require them through agreements not to use this information for any other purposes beyond the scope of entrustment. If authorized partners use your information for purposes we have not entrusted, they will obtain your consent separately. Currently, our entrusted authorized partners include the following types:</p>
                                            
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.1.1.</p>
                                                    <p>Authorized partners for advertising and analytical services. Under the premise of adopting industry-standard security technologies, we entrust these partners to process information related to advertising placement, coverage, and effectiveness. We will not entrust partners to process your personal identity information.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.1.2.</p>
                                                    <p>Product or service suppliers and other partners. We entrust information to suppliers and other partners who support our business for processing. This support includes professional services such as consulting, analysis, marketing, and technical support provided under our entrustment.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.1.3.</p>
                                                    <p>Payment-related authorized partners. To complete order payments, we will provide your account information, order information, payment account information, and other necessary information for completing payments to third-party payment authorized partners.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">3.2. Third-party Sharing</p>
                                            <p>In principle, we will not share your user information with other organizations and individuals, except in the following circumstances:</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.2.1.</p>
                                                    <p>Sharing with your explicit consent: After obtaining your explicit consent, we will share your user information with other parties.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.2.2.</p>
                                                    <p>Sharing necessary for fulfilling Shenzhen Lvxin Legal's statutory obligations: We may share your user information externally according to laws and regulations, litigation, arbitration resolution needs, or requests lawfully made by administrative and judicial organs.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="font-bold underline text-lg">3.3. Transfer</p>
                                            <p>In principle, we will not share your user information with other organizations and individuals, but when Shenzhen Lvxin Legal and other legal entities undergo merger, acquisition, or bankruptcy liquidation, or other situations involving merger, acquisition, or bankruptcy liquidation, if user information transfer is involved, we will require the new company or organization holding your user information to continue to be bound by this policy, otherwise we will require the company, organization, and individual to re-seek your authorization and consent. In case of bankruptcy with no successor, we will delete the data in accordance with the law.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">3.4. Public Disclosure</p>
                                            <p>We will only publicly disclose your user information in the following circumstances (specific circumstances can be found in Article 4.2):</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.4.1.</p>
                                                    <p>With your full consent or based on your active choice, we may publicly disclose your user information; or</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">3.4.2.</p>
                                                    <p>To protect the Shenzhen Lvxin Legal platform or the public from personal and property safety violations, we may disclose your user information in accordance with applicable laws or relevant agreements and rules of the Shenzhen Lvxin Legal platform.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 p-6 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30">
                                            <p className="font-bold text-red-800 dark:text-red-300">3.5. Exceptions to Prior Authorization and Consent When Providing User Information Externally</p>
                                            <p className="text-sm">In the following circumstances, providing user information externally does not require prior authorization and consent from you:</p>
                                            <ul className="grid grid-cols-1 gap-2 text-xs text-red-700 dark:text-red-400">
                                                {[
                                                    "3.5.1. Related to national security and defense security;",
                                                    "3.5.2. Related to public security, public health, and major public interests;",
                                                    "3.5.3. Related to criminal investigation, prosecution, trial, and judgment execution;",
                                                    "3.5.4. To protect your or others' life, property, and other major legitimate rights and interests when it is difficult to obtain personal consent;",
                                                    "3.5.5. Personal information you voluntarily disclose to the public;",
                                                    "3.5.6. Personal information collected from legally publicly disclosed information, such as legitimate news reports, government information disclosure, and other channels;",
                                                    "3.5.7. Necessary for fulfilling our statutory duties or obligations or responding to government department instructions."
                                                ].map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "4", 
                                title: "4. User Business Data and Public Information", 
                                icon: <Database className="text-cyan-500" />,
                                content: (
                                    <div className="space-y-6">
                                        <p>Unlike your personal user information, Shenzhen Lvxin Fazhi will handle user business data and public information as follows:</p>
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">4.1. User Business Data</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4 text-sm">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">4.1.1.</p>
                                                    <p>Data that you generate, process, store, upload, download, distribute, or otherwise handle through the services provided by Shenzhen Lvxin Fazhi constitutes your user business data. You retain full control over your user business data. As your service provider, we will only process your business data in strict accordance with your instructions and will not use or disclose such data for any unauthorized purpose unless otherwise agreed with you or required by applicable laws and regulations.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">4.1.2.</p>
                                                    <p>You are responsible for the sources and contents of your user business data. Shenzhen Lvxin Fazhi reminds you to carefully assess the legality of the data sources and contents. You assume full responsibility for any consequences or liabilities resulting from violations of laws, regulations, or national policies arising from your business data.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">4.1.3.</p>
                                                    <p>As agreed between you and Shenzhen Lvxin Fazhi, your user business data will be stored in the data center you select. Shenzhen Lvxin Fazhi is committed to safeguarding your data and will protect it in accordance with applicable laws.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline text-lg">4.2. Public Information</p>
                                            <p>Information you choose to publicly share may be visible to other users. Please carefully consider the content you choose to make public.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "5", 
                                title: "5. How You Can Manage Your User Information", 
                                icon: <Lock className="text-emerald-500" />,
                                content: (
                                    <div className="space-y-6">
                                        <p>We attach great importance to your rights regarding personal information and strive to protect your ability to access, correct, delete, withdraw consent, deactivate your account, file complaints, and configure privacy settings.</p>
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">5.1. Access, Correction, and Supplementation</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.1.1.</p>
                                                    <p>You may log in to the Shenzhen Lvxin Fazhi website and go to 'Account' → 'User Profile' to view and manage (modify or delete) the basic business and contact information you submitted while using our services.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.1.3.</p>
                                                    <p>To change the identity verification information associated with your account, please contact Shenzhen Lvxin Fazhi via phone or other available channels and follow the instructions in our official documentation.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline text-lg">5.2. Copying</p>
                                            <p>You may copy your personal information after accessing it through the methods outlined in Section 5.1.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">5.3. Deletion</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.3.1.</p>
                                                    <p>You may delete part of your information via the path specified in Section 5.1, or delete all your information by submitting an account deactivation request as described in Section 5.5.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.3.3.</p>
                                                    <p>Once you or we delete your information, due to legal or technical limitations, we may not be able to immediately remove the corresponding data from our backup systems. We will securely store it and restrict any further processing until it can be deleted or anonymized.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">5.4. Account Deactivation</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.4.1.</p>
                                                    <p>You may log in to the Shenzhen Lvxin Fazhi website and go to 'Account' → 'User Profile' to submit an account deactivation request.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.4.2.</p>
                                                    <p>After you deactivate your account, we will stop providing products or services to you and will delete or anonymize your personal information unless otherwise required by laws or regulatory obligations.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="font-bold underline text-lg">5.5. Responding to Your Requests</p>
                                            <div className="ps-4 border-l border-gray-200 dark:border-gray-700 space-y-4">
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.5.1.</p>
                                                    <p>For security reasons, you may need to submit a written request or verify your identity before we process your request.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold underline">5.5.2.</p>
                                                    <p>We will not charge for reasonable requests in principle, but may charge for repeated or excessive requests. We may reject requests that are unrelated to your identity, lack justification, would require disproportionate technical effort, infringe upon others' rights, or are otherwise impractical.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-emerald-50/30 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
                                            <p className="font-bold underline mb-2">5.6.</p>
                                            <p>Under applicable law, your immediate family members may, upon successful identity verification, exercise access, correction, deletion, and copying rights on your behalf—unless you have made other arrangements.</p>
                                        </div>
                                        <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30">
                                            <p className="font-bold text-red-800 dark:text-red-300 text-lg mb-4">5.7. Exceptions to Responding to Your Requests</p>
                                            <p className="mb-4">We may not respond to your requests under the following circumstances:</p>
                                            <ul className="grid grid-cols-1 gap-2 text-xs text-red-700 dark:text-red-400">
                                                {[
                                                    "5.7.1. To comply with legal or regulatory obligations;",
                                                    "5.7.2. Directly related to national security or defense;",
                                                    "5.7.3. Directly related to public safety, public health, or major public interests;",
                                                    "5.7.4. Directly related to criminal investigations, prosecutions, trials, or enforcement of court rulings;",
                                                    "5.7.5. Where we have sufficient evidence that you are abusing your rights or acting in bad faith;",
                                                    "5.7.6. To protect vital interests of you or others, where it is difficult to obtain your consent;",
                                                    "5.7.7. Where responding to the request would seriously damage the rights or interests of you, others, or organizations;",
                                                    "5.7.8. Where the request involves trade secrets."
                                                ].map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "6", 
                                title: "6. How We Use Cookies and Similar Technologies", 
                                icon: <Eye className="text-indigo-500" />,
                                content: (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="font-bold underline">6.1.</p>
                                            <p>To ensure proper functionality and provide you with a smoother access experience, we store small data files known as cookies on your mobile device. Cookies typically contain identifiers, site names, and a series of numbers and characters. Shenzhen Lvxin Fazhi can only read cookies set by our own services.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">6.2.</p>
                                            <p>You may manage cookies according to your preferences, including clearing all cookies stored on your device. Most web browsers offer the option to block cookies. However, if you do so, you may need to manually adjust your settings each time you visit our website. For more information about changing your browser settings, please refer to the settings page of your specific browser.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">6.3.</p>
                                            <p>In addition to cookies, we may use similar technologies such as web beacons and pixel tags within our app. A web beacon is typically a transparent image embedded in a webpage or email. Pixel tags in emails help us determine whether the email has been opened. If you do not wish to be tracked in this way, you may unsubscribe from our mailing list at any time.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "7", 
                                title: "7. How We Protect and Store Your User Information", 
                                icon: <ShieldCheck className="text-blue-600" />,
                                content: (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="font-bold underline">7.1.</p>
                                            <p>Shenzhen Lvxin Legal attaches great importance to your information security. We strive to take various reasonable physical, electronic, and administrative security measures to protect your user information. We prevent user information from unauthorized access, public disclosure, use, modification, damage, or loss. For example, we use encryption technology to improve the security of user information; we use trusted protection mechanisms to prevent user information from malicious attacks; we deploy access control mechanisms to ensure that only authorized personnel can access user information; and we hold security and privacy protection training courses to enhance employees' awareness of the importance of protecting user information.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">7.2.</p>
                                            <p>We will take reasonable and feasible measures to avoid collecting irrelevant user information. We will only retain your user information for the period necessary to achieve the purposes stated in this policy, unless permitted by law. After exceeding the above user information retention period, we will delete or anonymize your personal information.</p>
                                        </div>
                                        <div className="space-y-2 p-4 bg-yellow-50/30 dark:bg-yellow-950/10 border border-yellow-200 dark:border-yellow-900/30 rounded-xl">
                                            <p className="font-bold underline">7.3.</p>
                                            <p>Although we have taken reasonable and effective security measures in accordance with relevant laws and regulations, due to technical limitations and possible malicious means, we cannot guarantee 100% information security. Please understand that the systems and communication networks we provide may be affected by factors beyond our control. Therefore, we strongly recommend that you take proactive measures to protect the security of personal information, such as using complex passwords, regularly changing passwords, and not disclosing account passwords and related personal information to others.</p>
                                        </div>
                                        <div className="space-y-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                            <p className="font-bold underline">7.4.</p>
                                            <p>In the unfortunate event of user information security incidents (leakage, loss, etc.), we will promptly inform you in accordance with legal and regulatory requirements: the basic situation and possible impact of security incidents, disposal measures we have taken or will take, suggestions for you to independently prevent and reduce risks, remedial measures for you, etc. We will promptly inform you of incident-related situations through email, letters, phone calls, push notifications, etc. When it is difficult to inform user information subjects one by one, we will issue announcements in reasonable and effective ways. At the same time, we will also report the handling of user information security incidents in accordance with regulatory requirements.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">7.5.</p>
                                            <p>If Shenzhen Lvxin Legal products and services cease operations, we will take reasonable measures to protect your user information security, including promptly stopping activities to continue collecting user information; notifications of cessation of operations will be delivered to users individually or announced; and personal information held will be deleted or anonymized.</p>
                                        </div>
                                        <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                            <p className="font-bold underline">7.6.</p>
                                            <p>As mentioned in Article 4.1, if you purchase certain Shenzhen Lvxin Legal overseas service resources for your own business purposes, it may cause your user business data to cross borders. In this regard, Shenzhen Lvxin Legal will still take sufficient protective measures to ensure the security of your user business data, but since Shenzhen Lvxin Legal processes data entirely according to your instructions, you as the complete controller of user business data should bear the above compliance obligations. If you have any questions about this, you can contact us through the contact information at the end of this policy.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "8", 
                                title: "8. Special Provisions for Minor Users’ Information", 
                                icon: <UserCheck className="text-pink-500" />,
                                content: (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="font-bold underline">8.1.</p>
                                            <p>Our website services and related products are primarily intended for adults. However, we are fully committed to protecting the personal information of minors. If you are a minor, we ask that your parents or other guardians read this policy thoroughly and provide consent before you use our products or services and submit any information to us.</p>
                                        </div>
                                        <div className="space-y-2 p-4 bg-pink-50/50 dark:bg-pink-900/10 border-l-4 border-pink-500 rounded-r-xl">
                                            <p className="font-bold underline mb-1">8.2.</p>
                                            <p>Please be informed that during the identity verification process, if we identify you as a child under the age of 14, we will not be able to provide you with authentication services.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">8.3.</p>
                                            <p>Due to current technical and commercial limitations, it is difficult for us to proactively identify minors’ personal information during account registration. If you are a guardian of a minor and discover that we have collected a minor’s personal information without authorization, you may contact us using the methods provided in this policy. Upon verification, we will promptly delete or anonymize the relevant information. If we detect such circumstances ourselves, we will also proactively delete or anonymize the data.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "9", 
                                title: "9. Updates to This Policy", 
                                icon: <Bell className="text-yellow-500" />,
                                content: (
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="font-bold underline">9.1.</p>
                                            <p>We may revise this policy from time to time.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold underline">9.2.</p>
                                            <p>Without your explicit consent, we will not restrict your rights under this policy. Any revisions to this policy will be published on a dedicated page. Previous versions of this policy will also be archived on a dedicated page for your reference.</p>
                                        </div>
                                    </div>
                                )
                            },
                            { 
                                id: "10", 
                                title: "10. How to Contact Us", 
                                icon: <PhoneCall className="text-sky-500" />,
                                content: (
                                    <div className="p-8 bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/30 rounded-2xl">
                                        <p>If you have any questions or concerns about this policy or our handling of your personal information, you can contact us via the “My – Service Center” section of the app or by email at <span className="font-bold text-sky-600">info@lvxlaw.com</span>. We will respond to your request within 15 days. If you are dissatisfied with our response, you have the right to file a complaint with the China Internet Reporting Center.</p>
                                    </div>
                                )
                            },
                            { 
                                id: "11", 
                                title: "Appendix: Definitions", 
                                icon: <FileText className="text-slate-500" />,
                                content: (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { t: "Shenzhen Lvxin Fazhi", d: "Unless otherwise stated, refers to Shenzhen Lvxin Fazhi Technology Co., Ltd. (Registered address: Office 51035136-6, Tower 5, China Resources Financial Center, 5035 Menghai Avenue, Nanshan Street, Qianhai Shenzhen-Hong Kong Cooperation Zone, Shenzhen). Shenzhen Lvxin Fazhi Technology Co., Ltd. operates www.lvxlaw.com and the Shenzhen Lvxin Fazhi client application." },
                                            { t: "Shenzhen Lvxin Fazhi Website", d: "Refers to the official website of Shenzhen Lvxin Fazhi (domain: lvxlaw.com)" },
                                            { t: "User Information", d: "User information refers to the member-type data you submit or we collect when you register a Shenzhen Lvxin Fazhi account and use our services to enable us to provide those services, such as your name and contact details. Please refer to Section 2 \"How We Collect and Use Your User Information\" for specific business functions and required data. Some user information constitutes personal and/or sensitive personal information." },
                                            { t: "Business Data", d: "Unlike user information, this refers to business-related data generated, uploaded, or handled by users via Shenzhen Lvxin Fazhi's services." },
                                            { t: "Personal Information", d: "Refers to all types of information recorded electronically or otherwise that relates to an identified or identifiable natural person, excluding anonymized data." },
                                            { t: "Sensitive Personal Information", d: "Sensitive personal information refers to information which, if leaked or misused, could harm a natural person’s dignity or personal and property safety. This includes biometric data, religious beliefs, specific identity details, medical health data, financial account information, location tracking, and personal information of minors under the age of 14." },
                                            { t: "Children", d: "Refers to minors under the age of 14." },
                                            { t: "De-identification", d: "Refers to the process of rendering personal information unidentifiable without the use of additional information." },
                                            { t: "Anonymization", d: "Refers to the process through which personal information is processed to prevent the identification of a specific individual and cannot be reversed." },
                                            { t: "China Internet Reporting Center", d: "Website: https://www.12377.cn/" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <p className="font-bold underline mb-2 text-slate-900 dark:text-slate-300 text-sm">{item.t}</p>
                                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        ].map((section) => (
                            <AccordionItem key={section.id} value={`section-${section.id}`} className="group border-none overflow-hidden rounded-2xl bg-gray-50/50 dark:bg-[#252833]/50 border border-gray-100 dark:border-gray-800/50 transition-all duration-300 hover:shadow-lg hover:bg-white dark:hover:bg-[#252833]">
                                <AccordionTrigger className="hover:no-underline p-6 md:p-8 cursor-pointer data-[state=open]:bg-blue-50/50 dark:data-[state=open]:bg-blue-900/10">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {section.title}
                                        </h2>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-6 md:p-8 pt-0">
                                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed ps-2 md:ps-14">
                                        {section.content}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <hr className="my-16 border-2 border-blue-200 dark:border-blue-400 opacity-20"/>
                    
                <div className="flex gap-6 flex-col md:flex-row justify-center items-stretch mt-12 mb-20">
                    <div className="flex-1 max-w-xl text-[#4c505d] dark:text-gray-300 bg-linear-to-br from-[#fbfcff] to-[#f0f4ff] dark:from-[#252833] dark:to-[#1e2129] p-8 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-blue-100 dark:border-gray-700 shadow-sm flex items-center">
                        <p className="text-base italic leading-relaxed">These terms and policies are subject to ongoing development and improvement, so beneficiaries should review them periodically.</p>
                    </div>
                    <div className="flex-1 max-w-xl text-[#4c505d] dark:text-gray-300 bg-linear-to-br from-[#fdf4cc] to-[#fffae6] dark:from-[#3d3a2a] dark:to-[#2e2b20] p-8 rounded-3xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-yellow-200 dark:border-yellow-900/40 shadow-sm flex items-center">
                        <p className="text-base italic leading-relaxed">We may modify the privacy policy and make changes at any time, and when this happens, we will publish the latest update on the app. Your continued use of our services and not canceling your personal account will be considered acceptance of the privacy policy as updated.</p>
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