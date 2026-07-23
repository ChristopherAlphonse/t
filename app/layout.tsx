import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const outfitFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolebound - Job Search CRM with Jobs, Contacts, and Outreach",
  description:
    "Rolebound helps job seekers track fitting jobs, find who to contact, approve outreach, and move each opportunity through a CRM pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="Rolebound"
      />
      <meta
        property="og:url"
        content="https://nextjs-notion-waitlist.vercel.app/"
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={outfitFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
