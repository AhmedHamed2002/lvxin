'use client';
import { useState, useEffect } from 'react';
import { Button } from'../../components/ui/button';
import { Switch } from'../../components/ui/switch';
import { Slider } from "@/components/ui/slider";
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Zap, Calendar, ArrowRight, Settings } from 'lucide-react';
import Footer from '@/components/footer';
import CTASection from "@/components/CTASection";


export default function PricingPage() {
  const [isYearly, setIsYearly] = useState<boolean>(false)
  const [selectedTab, setSelectedTab] = useState<string>('Contract Analysis')
  const [userCount, setUserCount] = useState<number>(5)
  const [contractCount, setContractCount] = useState<number>(50)
  const [advancedRisk, setAdvancedRisk] = useState<boolean>(false)
  const [compliance, setCompliance] = useState<boolean>(false)
  const [estimatedCost, setEstimatedCost] = useState<number>(200)

  const tokensUsed = 3450;
  const tokensTotal = 5000;
  const tokensPercentage = (tokensUsed / tokensTotal) * 100;

  useEffect(() => {
    // Calculate estimated cost based on selections
    let cost = userCount * 20 + contractCount * 2
    if (advancedRisk) cost += 50
    if (compliance) cost += 75
    setEstimatedCost(cost)
  }, [userCount, contractCount, advancedRisk, compliance])


  const tabs = [
    'Contract Analysis',
    'Comparison',
    'Risk Detection',
    'Legal Compliance',
    'Clause Insights',
    'API & Integrations'
  ]


  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212]">      
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="
            w-full
            py-24 lg:py-32
            bg-cover bg-center bg-no-repeat
            bg-[url('/assets/images/hero.png')]
            dark:bg-[url('/assets/images/hero-dark.png')]
            bg-gradient-to-b
            from-[#fffefe00] via-[#fffefe33] to-white
            dark:from-[#020617]/80 dark:via-[#020617]/90 dark:to-[#020617]
          "
        >
          <div className="w-full max-w-[2080px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex flex-col gap-12 justify-start items-center">

              {/* Title */}
              <div className="flex flex-col gap-6 items-center w-full">
                <h1
                  className=" text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold leading-tight text-center capitalize max-w-4xl text-[#0e2259] dark:text-white">
                  Simple, transparent pricing <br />
                  <span className="text-[#2761ff] dark:text-blue-400">
                    for every legal team.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-center max-w-2xl text-[#0e2259] dark:text-slate-300">
                  From solo practitioners to enterprise legal departments. Choose the plan that
                  fits your scale.
                </p>
              </div>

              {/*  Current Plan Cards */}
              <div >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:to-[#0d1d48] border border-gary-200 rounded-lg shadow-md">
                  {/* Header Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Crown className="w-8 h-8 text-yellow-500" />
                      <h2 className="text-3xl font-bold text-text-secondary">Your Current Plan</h2>
                    </div>
                    <p className="text-text-muted text-lg text-gray-400">Active subscription and token usage</p>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Current Plan Card */}
                    <Card className="hover:shadow-md transition-shadow bg-blue-300/30">
                      <CardHeader>
                        <div className=" flex items-center gap-3 mb-2">
                          <div className='bg-blue-700 p-2 rounded-md'>
                            <Crown className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="text-sm font-medium text-text-muted">
                            <div>
                              <span className="text-gray-600 dark:text-gray-300">Current Plan</span>
                              <h3 className="text-2xl font-bold text-text-secondary">Business</h3>
                            </div>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          <p className="text-xl font-semibold text-text-primary">$899 <span className="text-sm text-gray-400">/year</span> </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tokens Remaining Card */}
                    <Card className="hover:shadow-md transition-shadow bg-fuchsia-300/20">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-purple-500" />
                          <CardTitle className="text-sm font-medium text-text-muted">Tokens Remaining</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-text-secondary">{tokensUsed.toLocaleString()}</span>
                            <span className="text-lg text-text-muted">/{tokensTotal.toLocaleString()}</span>
                          </div>
                          <div className="space-y-2">
                            <Progress value={tokensPercentage} className="h-2 bg-gray-200 [&>div]:bg-fuchsia-600"/>

                            <p className="text-sm text-gray-400">{Math.round(tokensPercentage)}% remaining</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Next Renewal Card */}
                    <Card className="hover:shadow-md transition-shadow bg-green-300/20">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-green-500" />
                          <CardTitle className="text-sm font-medium text-text-muted">Next Renewal</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-text-secondary">March 15, 2026</h3>
                          <p className="text-sm text-gray-400">Auto-renewal enabled</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline inline-block mt-1">
                            Manage billing
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Upgrade Plan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-border-primary hover:bg-accent-light"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Price Solutions */}
        <section className="w-full bg-white dark:bg-[#121212] pt-20 mb-20 pb-30 -mt-18">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
            <div className="flex flex-col gap-12 justify-start items-center">
              {/* Billing Toggle */}
              <div className="flex flex-row justify-center items-start w-auto gap-4">
                <span className="text-xl font-medium leading-[38px] text-center text-[#515151] self-center">
                  Monthly
                </span>
                <div className="mt-1">
                  <Switch 
                    checked={isYearly}
                    onCheckedChange={setIsYearly}
                    className="ml-4"
                  />
                </div>
                <div className="flex flex-row justify-center items-center ml-4">
                  <span className="text-xl font-semibold leading-[37px] text-center text-[#2761ff]">
                    Yearly 
                  </span>
                  <span className="text-xs font-medium leading-[16px] text-center text-[#1f4ecc] bg-[#dfe7ff] px-2 py-1 rounded-[10px] ml-2">
                    -20%
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-8 justify-start items-center w-full max-w-6xl">
               {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-8">

                {/* Starter */}
                <div className="flex flex-col items-center border border-[#e1e8f0] bg-[#fffefecc] dark:bg-[#393d46] hover:bg-[#b2c3f4d2] dark:hover:bg-[#485478d2] transition-all duration-700 cursor-pointer rounded-[16px] shadow-[0px_1px_2px_#00000019]">
                  <div className="w-full p-6">
                    <h3 className="text-2xl font-bold text-[#0e162b] dark:text-[#f0f0f0] mb-4">Starter</h3>
                    <p className="text-[#3f3f3f] dark:text-[#d0d0d0] mb-6">
                      For solo lawyers and freelancers.
                    </p>

                    <div className="flex items-end mb-8">
                      <span className="text-4xl font-bold text-[#05090f] dark:text-[#f0f0f0]">$49</span>
                      <span className="ml-2 text-[#878787] dark:text-[#2358d5]">/mo</span>
                    </div>

                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        1 User
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        10 Contract Analyses /mo
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Basic Risk Detection
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Email Support
                      </li>
                    </ul>

                    <Button variant="outline" size="lg" className="w-full text-blue-800 dark:bg-white border-blue-800 hover:bg-blue-50">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Business (Popular) */}
                <div className="relative overflow-hidden flex flex-col items-center border border-[#e9efff] bg-white dark:bg-[#191919] hover:bg-[#b2c3f4d2] dark:hover:bg-[#485478d2] transition-all duration-700 cursor-pointer rounded-[16px] shadow-[0px_1px_2px_#00000019]">
                  <div className="w-full h-1 bg-[#2761ff] rounded-t-[16px]" />
                  
                  <div className="w-full p-6">
                    <div className="flex justify-between items-center mb-4 flex-wrap flex-col sm:flex-row">
                      <div className="flex items-center justify-center gap-3">
                        <h3 className="text-2xl font-bold text-[#0e162b] dark:text-[#f0f0f0]">
                          Business
                        </h3>
                        <i className="fa-solid fa-bolt text-blue-600"></i>
                      </div>
                      <span className="text-xs font-semibold text-[#1d49bf]  bg-[#bcceff] px-2 py-1 rounded-[10px]">
                        Most Popular
                      </span>
                    </div>
                    <p className="text-[#3f3f3f] dark:text-[#d0d0d0] mb-6">
                      For growing legal teams.
                    </p>

                    <div className="flex items-end mb-8">
                      <span className="text-4xl font-bold text-[#05090f] dark:text-[#f0f0f0]">$199</span>
                      <span className="ml-2 text-[#878787] dark:text-[#2358d5]">/mo</span>
                    </div>

                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        5 Users
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Unlimited Analyses
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Advanced Risk & Compliance
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Comparison Tools
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Priority Support
                      </li>
                    </ul>

                    <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Start Free Trial
                    </Button>
                  </div>
                </div>

                {/* Enterprise */}
                <div className="flex flex-col items-center border border-[#e1e8f0] bg-[#fffefecc] dark:bg-[#0e2259] hover:bg-[#b2c3f4d2] dark:hover:bg-[#485478d2] transition-all duration-700 cursor-pointer rounded-[16px] shadow-[0px_1px_2px_#00000019]">
                  <div className="w-full p-6">
                    <h3 className="text-2xl font-bold text-[#0e162b] dark:text-[#f0f0f0] mb-4">
                      Enterprise
                    </h3>
                    <p className="text-[#3f3f3f] dark:text-[#d0d0d0] mb-6">
                      For large organizations.
                    </p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-[#05090f] dark:text-[#f0f0f0]">
                        Custom
                      </span>
                    </div>

                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Unlimited Users
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Custom AI Models
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        API Access & Integrations
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        Dedicated Success Manager
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-blue-600"></i>
                        SSO & Audit Logs
                      </li>
                    </ul>

                    <Button variant="outline" size="lg" className="w-full text-blue-800 dark:bg-white border-blue-800 hover:bg-blue-50">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Solutions */}
        <section className="w-full bg-[#f8f9fb] dark:bg-[#0d0f15] py-12 -mt-18">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
            <div className="flex flex-col gap-12 justify-start items-center">

              {/* Header */}
              <div className="flex flex-col gap-4 justify-start items-center w-full max-w-4xl">
                <h2 className="text-3xl font-bold leading-[59px] text-center text-[#0e2259] dark:text-white">
                  One platform, multiple solutions.
                </h2>
                <p className="text-xl font-normal leading-[26px] text-center text-[#0d1b2a] dark:text-slate-300 px-14">
                  Everything you need to manage the contract lifecycle.
                </p>
              </div>

              {/* Tabs */}
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex justify-center min-w-max px-4">
                  <div className="
                    flex items-center
                    bg-white dark:bg-[#0d1d48]
                    border border-[#e1e8f0] dark:border-slate-700
                    rounded-[28px] p-1
                    shadow-sm
                    gap-1 sm:gap-2
                  ">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`
                          px-4 sm:px-5 py-2
                          rounded-[22px]
                          text-sm sm:text-base
                          font-semibold
                          transition-all
                          whitespace-nowrap
                          ${
                            selectedTab === tab
                              ? 'bg-[#2761ff] text-white shadow'
                              : 'text-[#3f3f3f] dark:text-slate-300 hover:text-[#2761ff]'
                          }
                        `}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="
                w-full
                bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:to-[#0d1d48]
                border border-[#e9efff] dark:border-slate-700
                rounded-[16px]
                p-12
                shadow-sm
              ">
                <div className="flex flex-col lg:flex-row gap-6">

                  {/* Left */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="flex justify-center items-center w-12 h-12 rounded-[16px] bg-blue-200/40 dark:bg-blue-500/20 text-blue-600">
                      <i className="fa-regular fa-file-lines"></i>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0e2259] dark:text-white">
                      Instant Contract Review
                    </h3>

                    <p className="text-base font-semibold text-[#3f3f3f] dark:text-slate-300">
                      Upload any legal document and get an instant summary, key clause
                      extraction, and obligation mapping in seconds.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Automatic Summary",
                        "Obligation Tracking",
                        "Clause Extraction",
                        "Multi-language Support",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <i className="fa-regular fa-circle-check text-green-500"></i>
                          <span className="text-sm text-[#3f3f3f] dark:text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-end border-t border-[#f0f4f9] dark:border-slate-700 pt-4 mt-4">
                      <div>
                        <span className="text-sm font-semibold text-[#3f3f3f] dark:text-slate-400">
                          Pricing
                        </span>
                        <div className="text-[#2761ff] font-semibold hover:underline cursor-pointer">
                          Included in all plans
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 px-6 py-1
                          border-blue-600 text-blue-600
                          hover:bg-blue-50 dark:hover:bg-blue-600/10"
                      >
                        Learn more
                        <i className="fa-solid fa-arrow-right"></i>
                      </Button>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src="/assets/images/feature-preview.png"
                      alt="Feature Preview"
                      className="w-full h-auto rounded-[16px] dark:opacity-90"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full bg-white dark:bg-[#0d0f15] py-20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
            <div className="flex flex-col gap-12 justify-start items-center">
              <div className="flex flex-col justify-start items-center w-full max-w-3xl">
                <h2 className="text-3xl font-bold leading-[59px] text-center text-[#05090f] dark:text-white">
                  Compare Features
                </h2>
                <p className="text-base font-normal leading-[21px] text-center text-[#3f3f3f] dark:text-slate-300 px-14">
                  Detailed breakdown of what is included.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="w-full max-w-5xl bg-white dark:bg-[#0d1d48] border border-[#e1e8f0] dark:border-slate-700 rounded-[16px] shadow-[0px_1px_2px_#00000019] overflow-hidden">

                {/* Table Header */}
                <div className="flex flex-row justify-between items-end bg-[#f8f9fb] dark:bg-[#0d1d48] px-8 py-2 border-b border-[#e1e8f0] dark:border-slate-700">
                  <span className="text-base lg:text-xl font-semibold leading-[37px] text-left text-[#05090f] dark:text-slate-200 w-2/12">
                    Feature
                  </span>
                  <span className="text-base lg:text-xl font-semibold leading-[37px] text-center text-[#05090f] dark:text-slate-300 w-2/12">
                    Starter
                  </span>
                  <span className="text-base lg:text-xl font-semibold leading-[37px] text-center text-[#2761ff] dark:text-blue-400 w-2/12">
                    Business
                  </span>
                  <span className="text-base lg:text-xl font-semibold leading-[37px] text-center text-[#05090f] dark:text-slate-300 w-2/12">
                    Enterprise
                  </span>
                </div>

                {/* Table Body */}
                <div className="flex flex-col w-full">

                  {/* ================= Core Features ================= */}
                  <div className="w-full">

                    {/* Category Header */}
                    <div className="flex items-end w-full border-y border-[#f0f4f9] dark:border-slate-700 bg-[#f8f9fb7f] dark:bg-[#1a1d2b7f] px-4 sm:px-8 py-2">
                      <span className="text-sm text-[#0e2259] dark:text-slate-200 font-medium">Core Features</span>
                    </div>

                    {/* Contract Analysis */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Contract Analysis</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                    </div>

                    {/* Clause Extraction */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Clause Extraction</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <span className="text-sm font-semibold dark:text-slate-300">Basic</span>
                      </div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded">
                        <span className="text-sm font-semibold text-[#0e2259] dark:text-slate-200">Advanced</span>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <span className="text-sm font-semibold dark:text-slate-300">Advanced</span>
                      </div>
                    </div>

                    {/* Document Storage */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Document Storage</span>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">1GB</div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded dark:text-slate-300">50GB</div>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Unlimited</div>
                    </div>

                    {/* Search & Filtering */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Search & Filtering</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                    </div>
                  </div>

                  {/* ================= Intelligence ================= */}
                  <div className="w-full">

                    <div className="flex items-end w-full border-y border-[#f0f4f9] dark:border-slate-700 bg-[#f8f9fb7f] dark:bg-[#1a1d2b7f] px-4 sm:px-8 py-2">
                      <span className="text-sm text-[#0e2259] dark:text-slate-200 font-medium">Intelligence</span>
                    </div>

                    {/* Risk Detection */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Risk Detection</span>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Basic</div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded dark:text-slate-300">Advanced</div>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Custom</div>
                    </div>

                    {/* Comparison Tool */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Comparison Tool</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <div className="w-3 h-0.5 bg-[#9ca3af] dark:bg-slate-500 mx-auto"></div>
                      </div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                    </div>

                    {/* Multi-language */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Multi-language</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <div className="w-3 h-0.5 bg-[#9ca3af] dark:bg-slate-500 mx-auto"></div>
                      </div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded dark:text-slate-300">5 Languages</div>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Unlimited</div>
                    </div>
                  </div>

                  {/* ================= Security & Support ================= */}
                  <div className="w-full">

                    <div className="flex items-end w-full border-y border-[#f0f4f9] dark:border-slate-700 bg-[#f8f9fb7f] dark:bg-[#1a1d2b7f] px-4 sm:px-8 py-2">
                      <span className="text-sm text-[#0e2259] dark:text-slate-200 font-medium">Security & Support</span>
                    </div>

                    {/* SSO (SAML) */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">SSO (SAML)</span>
                      <div className="w-full sm:w-3/12 text-center">
                        <div className="w-3 h-0.5 bg-[#9ca3af] dark:bg-slate-500 mx-auto"></div>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <div className="w-3 h-0.5 bg-[#9ca3af] dark:bg-slate-500 mx-auto"></div>
                      </div>
                      <div className="w-full sm:w-3/12 text-center">
                        <i className="fa-solid fa-check text-blue-600 dark:text-blue-400"></i>
                      </div>
                    </div>

                    {/* Data Residency */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Data Residency</span>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">US</div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded dark:text-slate-300">US/EU</div>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Global</div>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col sm:flex-row items-start dark:bg-[#1b1f2c] sm:items-center w-full px-4 sm:px-8 py-4 border-b border-[#f0f4f9] dark:border-slate-700 gap-2 sm:gap-0">
                      <span className="w-full sm:w-3/12 font-semibold text-[#314157] dark:text-slate-300">Support</span>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">Email</div>
                      <div className="w-full sm:w-3/12 text-center bg-[#eef2ff7f] dark:bg-[#0d0f16] py-2 rounded dark:text-slate-300">Priority Email</div>
                      <div className="w-full sm:w-3/12 text-center dark:text-slate-300">24/7 Dedicated</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-on Bundles */}
        <section className="w-full bg-[#f8f9fb] dark:bg-[#0d0f15] py-20 -mt-7">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
            <div className="flex flex-col gap-12 justify-start items-center">
              <div className="flex flex-col gap-1 justify-start items-center w-full">
                <h2 className="text-3xl font-bold leading-[38px] text-center text-[#0e162b] dark:text-white">
                  Add-on Bundles
                </h2>
                <p className="text-base font-normal leading-[21px] text-center text-[#45556c] dark:text-slate-300">
                  Enhance your plan with specialized capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

                {/* ===== Legal Team Bundle ===== */}
                <div className="flex flex-col justify-center items-center w-full h-auto hover:bg-[#b2c3f4d2] dark:hover:bg-[#1a1d2b] transition-all duration-700 cursor-pointer bg-white dark:bg-[#232633] border border-[#e1e8f0] dark:border-slate-700 rounded-[16px] p-6 shadow-[0px_1px_2px_#00000019]">
                  <div className="flex flex-col justify-start items-start w-full">
                    <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-blue-200/45 text-blue-600 dark:bg-blue-200/20 dark:text-blue-400">
                      <i className="fa-solid fa-user-group"></i>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full mb-3">
                      <h3 className="text-xl font-bold leading-[37px] text-left text-[#05090f] dark:text-white w-full">
                        Legal Team Bundle
                      </h3>
                      <span className="text-2xl font-bold leading-[44px] text-left text-[#2761ff] dark:text-blue-400 w-full -mt-1">
                        $99/mo
                      </span>
                    </div>

                    <p className="text-sm font-normal leading-[26px] text-left text-[#515151] dark:text-slate-300 mb-4">
                      Perfect for teams scaling up.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-1 justify-start items-center w-full mb-6">
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          5 Additional User Seats
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          Shared Team Workspace
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          Collaborative Commenting
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full py-2 px-8 text-blue-800 dark:text-blue-400 border-blue-800 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
                    >
                      Add to Plan
                    </Button>
                  </div>
                </div>

                {/* ===== Compliance Bundle ===== */}
                <div className="flex flex-col justify-center items-center w-full h-auto hover:bg-[#b2c3f4d2] dark:hover:bg-[#1a1d2b] transition-all duration-700 cursor-pointer bg-white dark:bg-gradient-to-br dark:from-[#0e2259] dark:to-[#14307d] border border-[#e1e8f0] dark:border-slate-700 rounded-[16px] p-6 shadow-[0px_1px_2px_#00000019]">
                  <div className="flex flex-col justify-start items-start w-full">
                    <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-blue-200/45 text-blue-600 dark:bg-blue-200/20 dark:text-blue-400">
                      <i className="fa-regular fa-square-check"></i>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full mb-3">
                      <h3 className="text-xl font-bold leading-[37px] text-left text-[#05090f] dark:text-white w-full">
                        Compliance Bundle
                      </h3>
                      <span className="text-2xl font-bold leading-[44px] text-left text-[#2761ff] dark:text-blue-400 w-full -mt-1">
                        $149/mo
                      </span>
                    </div>

                    <p className="text-sm font-normal leading-[26px] text-left text-[#515151] dark:text-slate-300 mb-4">
                      Advanced regulatory checks.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-1 justify-start items-center w-full mb-6">
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          GDPR & CCPA Scans
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          HIPAA Compliance Check
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          Audit Log Export
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full py-2 px-8 text-blue-800 dark:text-blue-400 border-blue-800 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
                    >
                      Add to Plan
                    </Button>
                  </div>
                </div>

                {/* ===== Intensive Review Bundle ===== */}
                <div className="flex flex-col justify-center items-center w-full h-auto hover:bg-[#b2c3f4d2] dark:hover:bg-[#1a1d2b] transition-all duration-700 cursor-pointer bg-white dark:bg-[#000b2b] border border-[#e1e8f0] dark:border-slate-700 rounded-[16px] p-6 shadow-[0px_1px_2px_#00000019]">
                  <div className="flex flex-col justify-start items-start w-full">
                    <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-blue-200/45 text-blue-600 dark:bg-blue-200/20 dark:text-blue-400">
                      <i className="fa-regular fa-file-lines"></i>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full mb-3">
                      <h3 className="text-xl font-bold leading-[37px] text-left text-[#05090f] dark:text-white w-full">
                        Intensive Review Bundle
                      </h3>
                      <span className="text-2xl font-bold leading-[44px] text-left text-[#2761ff] dark:text-blue-400 w-full -mt-1">
                        $199/mo
                      </span>
                    </div>

                    <p className="text-sm font-normal leading-[26px] text-left text-[#515151] dark:text-slate-300 mb-4">
                      For high-volume periods.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-1 justify-start items-center w-full mb-6">
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          +500 Extra Analyses
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          Priority Processing
                        </span>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full">
                        <i className="fa-solid fa-check text-green-600 dark:text-green-400 mt-1"></i>
                        <span className="text-sm font-semibold leading-[26px] text-left text-[#05090f] dark:text-slate-200 ml-3">
                          Concierge Onboarding
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full py-2 px-8 text-blue-800 dark:text-blue-400 border-blue-800 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
                    >
                      Add to Plan
                    </Button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Custom Estimate Calculator */}
        <section className="w-full bg-white dark:bg-[#0d0f15] py-20 border-t border-[#f0f4f9] dark:border-slate-700">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-14">
            <div className="flex flex-col gap-12 justify-start items-center">
              <div className="flex flex-col gap-1 justify-start items-center w-full max-w-3xl">
                <h2 className="text-3xl font-bold leading-[38px] text-center text-[#0e162b] dark:text-white">
                  Get a custom estimate
                </h2>
                <p className="text-base font-normal leading-[21px] text-center text-[#45556c] dark:text-slate-300">
                  Calculate your monthly costs based on volume.
                </p>
              </div>

              <div className="w-full max-w-3xl bg-white dark:bg-[#3a3d48] border border-[#e1e8f0] dark:border-slate-700 rounded-[24px] p-12 shadow-[0px_8px_10px_#00000019]">
                <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">

                  {/* Left Controls */}
                  <div className="flex flex-col gap-7 justify-start items-center w-full lg:w-1/2">

                    {/* User Count */}
                    <div className="flex flex-col gap-4 justify-start items-center w-full">
                      <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-xl font-normal leading-[37px] text-left text-[#0e2259] dark:text-white">
                          Number of Users
                        </span>
                        <div className="bg-[#e9efff] dark:bg-[#1a1d2b] px-3 py-1 rounded-[14px]">
                          <span className="text-sm font-bold leading-[18px] text-left text-[#2761ff] dark:text-blue-400">
                            {userCount} users
                          </span>
                        </div>
                      </div>

                      {/* Slider from shadcn/ui */}
                      <Slider
                        value={[userCount]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setUserCount(value[0])}
                        className="w-full"
                      />

                      <p className="text-xs font-normal leading-[16px] text-left text-[#3f3f3f] dark:text-slate-300 w-full">
                        Includes access to workspace and collaboration tools.
                      </p>
                    </div>

                    {/* Contract Count */}
                    <div className="flex flex-col gap-4 justify-start items-center w-full">
                      <div className="flex flex-row justify-between items-center w-full">
                        <span className="text-xl font-normal leading-[37px] text-left text-[#0e2259] dark:text-white">
                          Contracts / mo
                        </span>
                        <div className="bg-[#e9efff] dark:bg-[#1a1d2b] px-3 py-1 rounded-[14px]">
                          <span className="text-sm font-bold leading-[18px] text-left text-[#2761ff] dark:text-blue-400">
                            {contractCount} docs
                          </span>
                        </div>
                      </div>

                      {/* Slider from shadcn/ui */}
                      <Slider
                        value={[contractCount]}
                        max={1000}
                        step={1}
                        onValueChange={(value) => setContractCount(value[0])}
                        className="w-full"
                      />

                      <p className="text-xs font-semibold leading-[22px] text-left text-[#3f3f3f] dark:text-slate-300 w-full">
                        Monthly volume of contracts analyzed.
                      </p>
                    </div>

                    {/* Additional Options */}
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex flex-row justify-between items-start w-full">
                        <span className="text-base font-normal leading-[29px] text-left text-[#05090f] dark:text-white self-center">
                          Advanced Risk Mode
                        </span>
                        <Switch 
                          checked={advancedRisk}
                          onCheckedChange={setAdvancedRisk}
                        />
                      </div>
                      <div className="flex flex-row justify-between items-start w-full">
                        <span className="text-base font-normal leading-[29px] text-left text-[#05090f] dark:text-white self-center">
                          Regulatory Compliance
                        </span>
                        <Switch 
                          checked={compliance}
                          onCheckedChange={setCompliance}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Estimate Card */}
                  <div className="relative w-full lg:w-2/3">
                    <div className="bg-[#0e162b] dark:bg-[#1a1d2b] rounded-[16px] p-8 md:mx-4 relative z-10">
                      <div className="flex flex-col justify-start items-start w-full">
                        <span className="text-xl font-normal leading-[37px] text-left text-[#e9efff]">
                          Estimated Cost
                        </span>
                        <span className="text-5xl font-bold leading-[89px] text-left text-white mt-2">
                          ${estimatedCost}
                        </span>
                        <p className="text-sm font-normal leading-[26px] text-left text-[#e9efff] w-1/2">
                          per month billed annually
                        </p>

                        {/* Cost Breakdown */}
                        <div className="flex flex-col gap-3 w-full mt-8">
                          <div className="flex flex-row justify-between items-start w-full border-b border-blue-600 pb-2">
                            <span className="text-sm font-semibold leading-[26px] text-left text-[#e7e8ea] dark:text-slate-300">
                              Users ({userCount})
                            </span>
                            <span className="text-sm font-normal leading-[18px] text-left text-[#e7e8ea] dark:text-slate-300">
                              ${userCount * 20}
                            </span>
                          </div>
                          <div className="flex flex-row justify-between items-start w-full border-b border-blue-600 pb-2">
                            <span className="text-sm font-semibold leading-[26px] text-left text-[#e7e8ea] dark:text-slate-300">
                              Contracts ({contractCount})
                            </span>
                            <span className="text-sm font-normal leading-[18px] text-left text-[#e7e8ea] dark:text-slate-300">
                              ${contractCount * 2}
                            </span>
                          </div>
                        </div>

                        <Button
                          variant="default"
                          size="lg"
                          className="w-full py-3 px-8 mt-10 bg-blue-700 dark:bg-blue-800"
                        >
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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