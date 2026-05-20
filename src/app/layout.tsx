import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "autoPRO Fahrzeugtechnik",
  description: "Ihre Kfz-Meisterwerkstatt — professionell, zuverlässig, günstig.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geist.variable} antialiased`}>
        {children}
        <CookieBanner />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
