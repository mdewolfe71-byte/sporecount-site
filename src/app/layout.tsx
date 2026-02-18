import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SporeCount | AI-Powered Air Quality Testing",
    template: "%s | SporeCount",
  },
  description:
    "AI-powered air quality testing for homes, inspectors, and agriculture. Next-day results. 182 contaminants identified. Lab-certified analysis powered by Sporecyte AI.",
  metadataBase: new URL("https://sporecount.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sporecount.com",
    siteName: "SporeCount",
    title: "SporeCount | AI-Powered Air Quality Testing",
    description:
      "AI-powered air quality testing for homes, inspectors, and agriculture. Next-day results. 182 contaminants identified.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SporeCount - AI-Powered Air Quality Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SporeCount | AI-Powered Air Quality Testing",
    description:
      "AI-powered air quality testing for homes, inspectors, and agriculture. Next-day results you can trust.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
