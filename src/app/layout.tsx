import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "autoPRO Fahrzeugtechnik",
  description: "Ihre Kfz-Meisterwerkstatt — professionell, zuverlässig, günstig.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
