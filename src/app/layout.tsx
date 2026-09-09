import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { ADSENSE_CLIENT_ID } from "@/lib/ad-config";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "BrowseEast Blog",
  description: "Your blog description here",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
          {process.env.NODE_ENV === "production" && (
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}