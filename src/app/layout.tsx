import type { Metadata } from "next";
import "./globals.css";
import{ Inter, Paytone_One } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar";

import { Footer } from "@/components/layout/Footer"

import { WaveDivider } from "@/components/layout/WaveDivider"
import { LangProvider } from "@/context/LangContext";




const inter = Inter({
  subsets:["latin"],
  variable:"--font-inter",
})

const paytone = Paytone_One({
  subsets:["latin"],
  weight:"400",
  variable:"--font-paytone"
})


export const metadata: Metadata = {
  title: "Hässelby Strands Sjöscoutkår",
  description: "Sea scouting in western Stockholm",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${paytone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <LangProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          
          <div className="relative bg-navy">
            <WaveDivider 
            fill="var(--color-paper)"
            className="absolute inset-x-0 top-0 -translate-y-px" />
          <Footer />
        </div>         
        </LangProvider>
              
      </body>
    </html>
  );
}
