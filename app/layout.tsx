import type { Metadata } from "next";
import { Noto_Serif, Manrope } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "./components/WhatsAppButton";
import Providers from "./components/Providers";

const notoSerif = Noto_Serif({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-noto-serif' });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: "FitMeByNHC | Medical Fat Loss & Metabolic Correction",
  description: "Doctor-guided weight loss program in Gurgaon, Mumbai, & Bangalore. Fix thyroid, hormones, and metabolism for sustainable fat loss.",
  keywords: ["Medical Weight Loss", "Fat Loss Gurgaon", "Weight Loss Mumbai", "Metabolic Correction", "Thyroid Weight Loss", "PCOS Weight Loss", "FitMeByNHC"],
  openGraph: {
    title: "FitMeByNHC | Medical Fat Loss",
    description: "Doctor-guided sustainable fat loss. No crash diets, just science.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${notoSerif.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {children}
          <Toaster />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
