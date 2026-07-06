import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Steal a Brainrot Wiki — Collect, Trade & Go Viral",
    template: "%s | Steal a Brainrot Wiki",
  },
  description:
    "The complete Steal a Brainrot wiki. Brainrots, traits, tier lists, admin abuse events, Taco Tuesday, and more.",
  openGraph: {
    title: "Steal a Brainrot Wiki — Collect, Trade & Go Viral",
    description:
      "The complete Steal a Brainrot wiki. Brainrots, traits, tier lists, admin abuse events, Taco Tuesday, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Steal a Brainrot Wiki",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google AdSense Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="flex-1">
          <div id="ad-banner-top" style={{ minHeight: "90px", textAlign: "center", margin: "15px 0" }}></div>
          {children}
        </main>
        <div id="ad-banner-footer" style={{ minHeight: "250px", textAlign: "center", margin: "20px 0" }}></div>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYRWBHSZHB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XYRWBHSZHB');
          `}
        </Script>
      </body>
    </html>
  );
}
