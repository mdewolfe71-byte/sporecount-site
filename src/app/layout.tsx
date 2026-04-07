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
    default: "SporeCount | Smart Science. Safe Spaces.",
    template: "%s | SporeCount",
  },
  description:
    "Smart Science. Safe Spaces. Residential air testing through Sporecyte and proprietary agricultural pathogen monitoring. Powered by BRS Lab Services.",
  metadataBase: new URL("https://sporecount.com"),
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sporecount.com",
    siteName: "SporeCount",
    title: "SporeCount | Smart Science. Safe Spaces.",
    description:
      "Residential air testing through Sporecyte and proprietary agricultural pathogen monitoring. Powered by BRS Lab Services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SporeCount - Smart Science. Safe Spaces.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SporeCount | Smart Science. Safe Spaces.",
    description:
      "Residential air testing through Sporecyte and proprietary agricultural pathogen monitoring. Powered by BRS Lab Services.",
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
