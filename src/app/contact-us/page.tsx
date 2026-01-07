"use client";

import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Send } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import PageHero from "@/components/PageHero";

const ContactUsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-neutral-950 font-sans overflow-x-hidden">

      <main className="pt-16">
        {/* Header Section */}
        <PageHero title="Contact Us" breadcrumbs={breadcrumbs} />

        {/* Contact Form Section */}
        <section className="bg-[#f2f3f7] dark:bg-[#1b1f2c] px-4 pt-20 pb-10 border-t-[3px] border-dotted border-blue-200 dark:border-blue-900">
          <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-start">
            {/* Contact Form */}
            <div className="flex-1 bg-white dark:bg-[#161719] rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
              
              <div className="flex flex-wrap gap-6">
                {/* Name */}
                <div className="w-full lg:w-[calc(50%-12px)] space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Enter your name here"
                      className="pl-12 h-12 rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="w-full lg:w-[calc(50%-12px)] space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-12 h-12 rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                    />
                  </div>
                </div>

                {/* Activity */}
                <div className="w-full lg:w-[calc(50%-12px)] space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Activity
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-xl bg-gray-50/50 dark:bg-gray-800/50">
                      <SelectValue placeholder="Select activity type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal-counsel">Legal Counsel</SelectItem>
                      <SelectItem value="contract-review">Contract Review</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Phone */}
                <div className="w-full lg:w-[calc(50%-12px)] space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 h-12 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border">
                      <img src="/assets/images/China.png" className="w-5 h-5" />
                      <span className="text-sm">+86</span>
                    </div>
                    <Input
                      placeholder="Enter your phone number"
                      className="flex-1 h-12 rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="w-full space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your message
                  </label>
                  <Textarea
                    placeholder="Leave your message here"
                    className="min-h-[200px] rounded-xl bg-gray-50/50 dark:bg-gray-800/50"
                  />
                </div>
              </div>

              <Button variant="outline" className="w-full mt-8 h-14 rounded-xl cursor-pointer text-white hover:text-white bg-blue-600 dark:bg-blue-700  hover:bg-blue-700 dark:hover:bg-blue-800 text-lg">
                  Send the message
                <Send size={18}  className="mt-1"/>
              </Button>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[420px]">
                <div className="bg-white dark:bg-[#161719] rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  {/* Customer Service */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#eff6ff] dark:bg-blue-900/20 flex items-center justify-center text-[#2b63ff]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Customer Service</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors cursor-pointer">+1(854)264-45521</p>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#faf5ff] dark:bg-purple-900/20 flex items-center justify-center text-[#a855f7]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Email Address</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 transition-colors cursor-pointer">support@lvxin.com</p>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#f0fdf4] dark:bg-green-900/20 flex items-center justify-center text-[#22c55e]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Office Address</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Chaoyang District, next to the International Trade Tower</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default ContactUsPage;
