"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, CloudUpload, File, Plus, Star,Search, Zap, ChevronsDown, FileText, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";
import Link from "next/link";
import Image  from 'next/image';
import Footer from "@/components/footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import CTASection from "@/components/CTASection";
import WhyChooseLVX from "@/components/WhyChooseLVX";

export default function HomePage() {
    
    const scrollToNumbers = () => {
        const numbersSection = document.getElementById('numbers-section');
        if (numbersSection) {
            numbersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Legal Counsel, TechFlow",
            text: "LVX Law has cut our contract review time by This platform has transformed how our legal team works. What used to take days now takes minutes. The AI accuracy is incredible, and it catches details we might have missed. It's become an essential part of our contract workflow.24/7.",
            avatar: "/assets/images/avatar1.png",
        },
        {
            name: "David Chen",
            role: "Senior Associate, Chen & Partners",
            text:"The accuracy of the risk detection is This platform has transformed how our legal team works. What used to take days now takes minutes. The AI accuracy is incredible, and it catches details we might have missed. It's become an essential part of our contract workflow.experienced lawyers might miss.",
            avatar: "/assets/images/avatar2.png",
        },
        {
            name: "Elena Rodriguez",
            role: "COO, Startup Inc.",
            text: "This platform has transformed how our legal team works. What used to take days now takes minutes. The AI accuracy is incredible, and it catches details we might have missed. It's become an essential part of our contract workflow." ,
            avatar: "/assets/images/avatar3.png",
        },
        {
            name: "Mark Thompson",
            role: "Head of Legal, FinCore",
            text: "Fast, reliable, and incredibly smart. LVX changed how we handle contracts.",
            avatar: "/assets/images/avatar2.png",
        },
    ];


    return(
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212]">      
        <main className="flex-1">
            {/* <section className="h-lvh flex flex-col justify-center items-center py-24 lg:py-32 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home.png')] dark:bg-[url('/assets/images/home-dark.png')]"> */}
            
            {/* Header Section */}
            <section className="relative h-lvh flex flex-col justify-center items-center py-24 lg:py-32 overflow-hidden bg-linear-to-br from-blue-200 via-white to-blue-200 dark:from-black dark:via-neutral-950 dark:to-neutral-900">           
                {/* Interactive Effect */}
                <InteractiveBackground />

                <div className=" relative z-10 w-full max-w-[2080px] mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex flex-col gap-12 justify-start items-center">
                        {/* Title */}
                        <div className="flex flex-col gap-6 items-center w-full">
                            <div className="flex items-center justify-between  px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-transparent dark:border dark:border-[#d4dbe3] dark:text-[#d4dbe3]">
                                <Zap className="text-sm me-1 w-4 h-4" />
                                <span className="text-sm font-medium">
                                    AI-Powered Legal Technology
                                </span>
                            </div>
                            <h1 className=" text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-center capitalize max-w-4xl text-[#0e2259] dark:text-white">
                                AI Legal   <br />
                                <span className="text-[#1b66a9] dark:text-[#1b66a9]">
                                    Solutions  
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-center max-w-2xl text-[#0e2259] dark:text-slate-300">
                                Pioneering advanced AI-powered legal solutions for modern businesses
                            </p>
                            <Link href="/login">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="px-10 py-6 cursor-pointer text-white bg-[#134d7f] hover:bg-[#0c3c67] border border-blue-900 rounded-[16px] shadow-lg"
                                >
                                    Start Free Trial
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={scrollToNumbers}>
                    <div className="p-3 rounded-full hover:bg-blue-200/70  dark:hover:bg-gray-100/30 backdrop-blur-md transition-all duration-700 shadow-lg">
                            <ChevronsDown className="w-6 h-6 text-[#0e2259] dark:text-white"/>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section id="numbers-section" className="flex flex-col lg:flex-row justify-around items-center dark:bg-[#1a1f29] px-20 py-16 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/number.png')]">
                <div className="mb-8 lg:mb-0">
                    <h2 className="text-[30px] sm:text-[30px] font-bold leading-tight text-center capitalize max-w-4xl text-[#0e2259] dark:text-[#b4bed7]">Livxn Law numbers</h2>
                </div>
                <div className="flex ps-10 sm:ps-0 sm:justify-center items-center flex-wrap">
                    <div className="flex flex-col items-start justify-center me-10">
                        <div className="flex items-center justify-between my-6">
                            <h3 className="text-4xl md:text-5xl font-medium text-[#0e2259] dark:text-[#b4bed7] me-4">1.6K</h3>
                            <div className="dark:text-[#b4bed7]">
                                <Plus size={16}  className="text-[#4369c7] dark:text-[#b4bed7] font-bold"/>
                                <p className="mt-2 text-sm md:text-lg">Contracts Analyzed</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-4xl md:text-5xl font-medium text-[#0e2259] dark:text-[#b4bed7] me-4">1.9K</h3>
                            <div className="dark:text-[#b4bed7]">
                                <Plus size={16} className="text-[#4369c7] dark:text-[#b4bed7] font-bold"/>
                                <p className="mt-2 text-sm md:text-lg">Active Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between me-10">
                        <div className="flex items-center sm:justify-between my-6">
                            <h3 className="text-4xl md:text-5xl font-medium text-[#0e2259] dark:text-[#b4bed7] me-4">63</h3>
                            <div className="dark:text-[#b4bed7]">
                                <Plus size={16} className="text-[#4369c7] dark:text-[#b4bed7] font-bold"/>
                                <p className="mt-2 text-sm md:text-lg">Team Members</p>
                            </div>
                        </div>
                        <div className="flex items-center sm:justify-between">
                            <h3 className="text-4xl md:text-5xl font-medium text-[#0e2259] dark:text-[#b4bed7] me-4">8</h3>
                            <div className="dark:text-[#b4bed7]">
                                <Plus size={16} className="text-[#4369c7] dark:text-[#b4bed7] font-bold"/>
                                <p className="mt-2 text-sm md:text-lg">Integrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           

            {/* Everything You Need  Section*/}
            <section className="w-full bg-[#f5f8ff] dark:bg-[#162242] py-10">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
                    <div className="flex flex-col gap-12 justify-start items-center">
                    <div className="flex flex-col justify-start items-center w-full max-w-3xl">
                        <h2 className="text-3xl md:text-4xl mb-5 font-bold leading-[59px] text-center text-[#0e2259] dark:text-[#b4bed7]">
                            Everything You Need
                        </h2>
                        <p className="text-sm md:text-base font-normal leading-[21px] text-center text-[#3f3f3f] dark:text-slate-300 px-14">
                            Comprehensive legal tools powered by artificial intelligence to streamline your workflow.
                        </p>
                    </div>

                    <div className="h-lvh">
                    </div>
                    </div>
                </div>
            </section>

            {/* See What You've Been Missing Section*/}
            <section className="w-full bg-[#fcfcfe] dark:bg-[#0e2259] py-12">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full container mx-auto px-4 sm:px-8 gap-8">
                    {/* Left */}
                    <div className="flex-1 mb-8 lg:mb-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-center lg:text-start text-[#0e2259] dark:text-[#b4bed7] mb-4 sm:mb-6">
                        See What You've Been Missing
                    </h3>

                    <p className="text-sm sm:text-base lg:text-lg text-center lg:text-start  text-[#848a93] dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                        Our AI doesn't just read it understands. It highlights critical risks, missing
                        clauses, and unfavorable terms instantly, using a simple color-coded 
                        system.
                    </p>

                    <div className="flex items-center justify-center flex-col md:grid md:grid-cols-2 gap-2 me-4">
                        {[
                        "Instant Risk Detection",
                        "Clause-by-Clause Breakdown",
                        "Smart Recommendations",
                        "Negotiation Playbooks",
                        ].map((item) => (
                        <div key={item} className="flex items-center md:justify-center lg:justify-start gap-2">
                            <i className="fa-regular fa-circle-check text-green-500"></i>
                            <span className="text-sm sm:text-base text-[#3f3f3f] dark:text-slate-300">
                            {item}
                            </span>
                        </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-center lg:justify-start">
                    <Button
                            variant="default"
                            size="lg"
                            className="px-10 py-6 mt-8 cursor-pointer text-white bg-blue-800 hover:bg-[#0c3c67] rounded-[16px] shadow-lg"
                        >
                            View Sample Report
                            <ArrowRight />
                    </Button>
                    </div>
                    </div>

                   {/* Right */}
                    <div className="flex-1 w-full flex justify-center items-center ">
                    <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[400px] flex flex-col space-y-3 cursor-pointer shadow-2xl shadow-blue-300 dark:shadow-blue-800 border border-gray-200 dark:border-[#bdc4d0bd] rounded-xl p-4 bg-white dark:bg-[#202227]">
                        {/* Header */}
                        <Skeleton className="h-[20px] w-3/4 rounded-xl bg-blue-700" />

                        <div className="space-y-2">
                        <Skeleton className="h-2 w-[70%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-[55%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-6 w-[35%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-full bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-4 w-[75%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-[80%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-[60%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-[75%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-6 w-[35%] bg-blue-200 dark:bg-blue-900" />
                        <Skeleton className="h-2 w-full bg-blue-200 dark:bg-blue-900" />
                        </div>

                        {/* Labels */}
                        <p className="hidden sm:flex absolute top-4 -left-8 shadow-xl shadow-blue-300 dark:shadow-blue-800 border border-gray-200 dark:border-[#bdc4d0bd] bg-white dark:bg-[#202227] text-blue-700 dark:text-blue-300 text-xs px-3 py-2 rounded-lg items-center">
                        <span className="w-2 h-2 rounded-full me-1 bg-green-600"></span>
                            Risk Detected
                        </p>

                        <p className="hidden md:flex absolute top-36 -right-6 shadow-xl shadow-blue-300 dark:shadow-blue-800 border border-gray-200 dark:border-[#bdc4d0bd] bg-white dark:bg-[#202227] text-blue-700 dark:text-blue-300 text-xs px-3 py-2 rounded-lg items-center">
                            <span className="w-2 h-2 rounded-full me-1 bg-green-600"></span>
                            Key Term Found
                        </p>

                        <p className="hidden md:flex absolute top-52 -left-6 shadow-xl shadow-blue-300 dark:shadow-blue-800 border border-gray-200 dark:border-[#bdc4d0bd] bg-white dark:bg-[#202227] text-blue-700 dark:text-blue-300 text-xs px-3 py-2 rounded-lg items-center">
                        <span className="w-2 h-2 rounded-full me-1 bg-yellow-600"></span>
                            Analyzing...
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full bg-[#f5f8ff] dark:bg-[#162242] py-10">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
                    <div className="flex flex-col gap-12 justify-start items-center">
                        <div className="flex flex-col justify-start items-center w-full max-w-3xl">
                            <h2 className="text-3xl md:text-4xl mb-5 font-bold leading-[59px] text-center text-[#0e2259] dark:text-[#b4bed7]">
                                How It Works                        
                            </h2>
                            <p className="text-sm md:text-base font-normal leading-[21px] text-center text-[#3f3f3f] dark:text-slate-300 px-14">
                                From upload to actionable insights in four simple steps.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center md:mt-12 gap-6">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                                <div className="flex flex-col cursor-pointer justify-center items-center">
                                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 bg-white dark:bg-[#202227] shadow-lg shadow-blue-200 dark:shadow-blue-800">
                                        <CloudUpload className="text-blue-600 dark:text-blue-400" size={18}/>
                                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white bg-blue-600 rounded-full ring-2 ring-white dark:ring-[#202227]">
                                            01
                                        </span>
                                    </div>
                                    <h4 className="font-bold ">Upload</h4>
                                    <p className="text-gray-500 dark:text-gray-300">Upload your contract securely</p>
                                </div>
                                <div className="flex flex-col cursor-pointer justify-center items-center">
                                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 bg-white dark:bg-[#202227] shadow-lg shadow-blue-200 dark:shadow-blue-800">
                                        <Search className="text-blue-600 dark:text-blue-400" size={18}/>
                                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white bg-blue-600 rounded-full ring-2 ring-white dark:ring-[#202227]">
                                            02
                                        </span>
                                    </div>
                                    <h4 className="font-bold ">AI Review</h4>
                                    <p className="text-gray-500 dark:text-gray-300">AI analyzes every clause</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                                <div className="flex flex-col cursor-pointer justify-center items-center">
                                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 bg-white dark:bg-[#202227] shadow-lg shadow-blue-200 dark:shadow-blue-800">
                                        <Zap className="text-blue-600 dark:text-blue-400" size={18}/>
                                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white bg-blue-600 rounded-full ring-2 ring-white dark:ring-[#202227]">
                                            03
                                        </span>
                                    </div>
                                    <h4 className="font-bold ">Insights</h4>
                                    <p className="text-gray-500 dark:text-gray-300">Get risk alerts & summaries</p>
                                </div>
                                <div className="flex flex-col cursor-pointer justify-center items-center">
                                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 bg-white dark:bg-[#202227] shadow-lg shadow-blue-200 dark:shadow-blue-800">
                                        <File className="text-blue-600 dark:text-blue-400" size={18}/>
                                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white bg-blue-600 rounded-full ring-2 ring-white dark:ring-[#202227]">
                                            04
                                        </span>
                                    </div>
                                    <h4 className="font-bold ">Export</h4>
                                    <p className="text-gray-500 dark:text-gray-300">Download or share report.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-w-4xl mx-auto mt-16 aspect-video">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Video preview"
                            fill
                            priority={false}
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
                        />
                    </div>
                </div>
            </section>
            
            {/* Why Legal Teams Choose LVX */}
            <section className="bg-[#f6f9ff] dark:bg-[#0d1630]">
                <WhyChooseLVX />
            </section>

            {/* Trusted by Modern Legal Teams */}
            <section className="relative z-0 w-full bg-white dark:bg-[#0b1020] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 z-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#0e2259] dark:text-[#b4bed7]">
                        Trusted by Modern Legal Teams
                    </h2>

                    <Carousel opts={{ align: "start", loop: true,}} className="w-full">
                    <CarouselContent className="px-2">
                        {testimonials.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className=" basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                            <Card className="h-full border shadow-md dark:bg-[#151619] cursor-pointer hover:scale-[0.95]  transition-transform duration-700 hover:shadow-xl  hover:bg-blue-200 dark:hover:bg-[#272626]">
                            <CardContent className="py-6 flex flex-col justify-between h-full space-y-4">
                                
                                {/* Stars */}
                                <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                                </div>

                                {/* Text */}
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    “{item.text}”
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-3 pt-4">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={36}
                                    height={36}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.role}
                                    </p>
                                </div>
                                </div>

                            </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation */}
                    <CarouselPrevious className="hidden lg:flex mx-4 cursor-pointer z-40" />
                    <CarouselNext className="hidden lg:flex mx-4 cursor-pointer z-40"/>

                    <div className="flex justify-center gap-4 mt-10 lg:hidden cursor-pointer">
                        <CarouselPrevious className="static h-9 w-9 cursor-pointer  z-40 bg-white dark:bg-[#202227] shadow-md "/>
                        <CarouselNext className="static h-9 w-9 cursor-pointer z-40 bg-white dark:bg-[#202227] shadow-md"/>
                    </div>    
                    </Carousel>
                </div>

                {/* Rectangle1 && Rectangle2 */}
                <div className="absolute top-127 md:-top-10 -left-10 md:-left-15 w-full max-w-[200px] md:max-w-xs mx-auto mt-16 aspect-video">
                    <Image
                        src="/assets/images/Rectangle1.png"
                        alt="Rectangle1"
                        fill
                        loading="lazy"
                        className="object-contain z-0"
                        sizes="(max-width: 100px) 90vw, (max-width: 200px) 70vw, 300px"
                    />
                </div>
                <div className="absolute block z-10 -top-10 md:-top-15 right-0 w-full max-w-[200px] md:max-w-[280px] mx-auto mt-16 aspect-video">
                    <Image
                        src="/assets/images/Rectangle2.png"
                        alt="Rectangle2"
                        fill
                        loading="lazy"
                        className="object-contain"
                        sizes="(max-width: 50px) 90vw, (max-width: 70px) 70vw, 100px"
                    />
                </div>
            </section>

            {/* Ready to Transform Your Legal Workflow? */}
            <section className="w-full bg-[#f6f9ff] dark:bg-[#0b1020] py-20 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/Workflow.png')]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e2259] dark:text-[#b4bed7]">
                        Ready to Transform Your Legal Workflow?               
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                        Try all our premium features completely free for 14 days. No credit card required.
                    </p>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row gap-4">
                    <Card className="border-0 shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-700 hover:shadow-xl bg-[#1949cc] ">
                        <CardContent className="p-6 space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50/30 ">
                            <FileText className="text-white" size={20} />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Contract Analysis</h4>
                            <p className="text-sm text-gray-300">
                                Upload any contract and get instant AI review and risk assessment.
                            </p>
                            <Button
                                variant="default"
                                size="lg"
                                className="px-10 py-6 w-full cursor-pointer bg-white text-[#134d7f] hover:bg-blue-900 hover:text-white hover:border hover:border-blue-900 rounded-[16px] shadow-lg"
                            >
                                Start Free Trial
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-md cursor-pointer hover:scale-[1.02]  transition-transform duration-700 hover:shadow-xl bg-[#060d15] ">
                        <CardContent className="p-6 space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50/30 ">
                            <UserCheck className="text-white" size={20} />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Consult Legal Agent</h4>
                            <p className="text-sm text-gray-300">
                                Chat with our expert AI to get answers to your complex legal questions.
                            </p>
                            <Button
                                variant="default"
                                size="lg"
                                className="px-10 py-6 w-full cursor-pointer bg-white text-[#134d7f] hover:bg-black hover:text-white hover:border hover:border-blue-900 rounded-[16px] shadow-lg"
                            >
                                Start Free Trial
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <section className="bg-[#0b163f]">
                <Footer />
            </section>
        </main>
    </div>
    )
}
