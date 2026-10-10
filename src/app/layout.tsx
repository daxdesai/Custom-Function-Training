import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Custom Function Training",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Custom Function training",
    "Custom Function programming",
    "clinical technology",
    "EDC programming",
    "edit check programming",
    "interview preparation",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1b33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
