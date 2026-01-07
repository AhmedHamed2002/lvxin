import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from "@/components/ui/providers";

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.lvxlaw.com"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "LVXIN | AI Legal Technology",
  description:
    "Pioneering advanced AI-powered legal solutions for modern businesses",

  icons: {
    icon: "/assets/images/logo2.png",
    shortcut: "/assets/images/logo2.png",
    apple: "/assets/images/logo2.png",
  },

  openGraph: {
    title: "LVXIN | AI Legal Technology",
    description:
      "Pioneering advanced AI-powered legal solutions for modern businesses",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LVXIN Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LVXIN | AI Legal Technology",
    description:
      "Pioneering advanced AI-powered legal solutions for modern businesses",
    images: ["/assets/images/logo.png"],
  },
};



export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-900 transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
