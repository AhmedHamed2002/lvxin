"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {Moon,Sun,LogOut,User,Settings,Menu,BookOpen,Home,DollarSign,Info,Phone,HelpCircle,LayoutDashboard,} from "lucide-react";
import Swal from "sweetalert2";
import { userService } from "@/services/userService";
import NavItem from "@/components/NavItem";

/* ---------------- Navbar ---------------- */
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  /* -------- Load user -------- */
  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem("Lvxin_token");
      setLoggedIn(!!token);

      if (token) {
        userService.getUserImage().then((res) => {
          if (res?.data) setUsername(res.data.name);
        });
      }
    };

    loadUser();
    window.addEventListener("login-success", loadUser);
    return () => window.removeEventListener("login-success", loadUser);
  }, []);

  /* -------- Dark mode -------- */
  const toggleDark = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  /* -------- Logout -------- */
  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      background: darkMode ? "#1e293b" : "#fff",
      color: darkMode ? "#f8fafc" : "#111827",
    });

    if (confirm.isConfirmed) {
      await userService.logout();
      localStorage.removeItem("Lvxin_token");
      setLoggedIn(false);
      setUsername("");
      router.push("/login");
    }
  };

  /* -------- Active link -------- */
  const isActive = (path: string) =>
    pathname === path
      ? "text-[#184892] dark:text-[#1a52a6] pb-1"
      : "text-gray-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-600";

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-[#f6fbfe] dark:bg-[#202227] backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="LVXIN"
            width={140}
            height={140}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-4 font-medium">
          <li>
            <NavItem
              href="/home"
              label="Home"
              icon={<Home className="w-5 h-5" />}
              activeClass={isActive("/home")}
            />
          </li>

          {loggedIn && (
            <li>
              <NavItem
                href="/mydash/dashboard"
                label="My Dashboard"
                icon={<LayoutDashboard className="w-5 h-5" />}
                activeClass={isActive("/mydash/dashboard")}
              />
            </li>
          )}

          <li>
            <NavItem
              href="/pricing"
              label="Pricing"
              icon={<DollarSign className="w-5 h-5" />}
              activeClass={isActive("/pricing")}
            />
          </li>

          <li>
            <NavItem
              href="/about-us"
              label="About Us"
              icon={<Info className="w-5 h-5" />}
              activeClass={isActive("/about-us")}
            />
          </li>

          <li>
            <NavItem
              href="/contact-us"
              label="Contact Us"
              icon={<Phone className="w-5 h-5" />}
              activeClass={isActive("/contact-us")}
            />
          </li>

          <li>
            <NavItem
              href="/blog"
              label="Blog"
              icon={<BookOpen className="w-5 h-5" />}
              activeClass={isActive("/blog")}
            />
          </li>

          <li>
            <NavItem
              href="/faq"
              label="FAQ"
              icon={<HelpCircle className="w-5 h-5" />}
              activeClass={isActive("/faq")}
            />
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 pe-0 md:pe-12">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="cursor-pointer">
            {darkMode ? <Sun className="text-yellow-500"/> : <Moon className="text-blue-700"/>}
          </Button>

          {loggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-blue-800 text-white font-semibold">
                      {username?.charAt(0)?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={12}>
                <DropdownMenuLabel>Lvxin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/mydash/profile" className="cursor-pointer">
                    <User className="mr-2 w-4 h-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mydash/profile" className="cursor-pointer">
                    <Settings className="mr-2 w-4 h-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                  {loggedIn && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin-dashboard/dashboard" className="cursor-pointer">
                      <Settings className="mr-2 w-4 h-4" /> Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  )}
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOut className="mr-2 w-4 h-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => { router.push("/login"); }} variant="outline" className="text-center hidden md:block  text-white bg-blue-800 hover:border-blue-600 dark:bg-blue-900 dark:hover:border-blue-800 cursor-pointer" > Login </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#f6fbfe] dark:bg-[#202227]">
                <SheetHeader>
                  <SheetTitle>LVXIN</SheetTitle>
                  <SheetDescription>
                    AI-powered legal solutions
                  </SheetDescription>
                </SheetHeader>

                <ul className="mt-6 space-y-6 px-5">
                  {[
                    ["/home", "Home", Home],

                    ...(loggedIn
                      ? [["/mydash/dashboard", "My Dashboard", LayoutDashboard]]
                      : []),

                    ["/pricing", "Pricing", DollarSign],
                    ["/about-us", "About Us", Info],
                    ["/contact-us", "Contact Us", Phone],
                    ["/blog", "Blog", BookOpen],
                    ["/faq", "FAQ", HelpCircle],
                  ].map(([href, label, Icon]: any) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex gap-2 transition-colors ${
                          pathname === href
                            ? "text-blue-800 dark:text-blue-700 font-semibold"
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-700"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {label}
                      </Link>
                    </li>
                  ))}
                  {!loggedIn && ( <li> <Button onClick={() => { setMenuOpen(false); router.push("/login"); }} variant="outline" className="w-full text-left text-white bg-blue-800 hover:border-blue-600 dark:bg-blue-900 dark:hover:border-blue-800 cursor-pointer" > Login </Button> </li> )}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
