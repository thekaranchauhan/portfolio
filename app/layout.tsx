
import type { Metadata } from 'next'
import { Syne } from "next/font/google";
import './globals.css'

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Karan Chauhan - Designer, Developer, and Business Analyst",
  description:
    "Full Stack Developer. Focused on Innovation and Business.",
  generator: "Next.js",
  applicationName: "Karan Chauhan - Portfolio",
  keywords: [
    "UI/UX Researcher",
    "Business Analyst",
    "Full Stack Developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "creative developer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Karan Chauhan - Designer, Developer, and Business Analyst",
    description:
      "Full Stack Developer. Focused on Innovation and Business.",
    url: "https://www.thekaran.pro/",
    siteName: "www.thekaran.pro",
    images: [
      // {
      //   url: "/profile.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Karan Chauhan — Designer, Developer, UI/UX Researcher and Business Analyst.",
      // },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  )
}