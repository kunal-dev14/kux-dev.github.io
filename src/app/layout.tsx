import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kux.dev | Full-Stack Developer & Cybersecurity Enthusiast",
  description:
    "Portfolio of a BCA student, full-stack engineer, and cybersecurity enthusiast. Showcasing real projects: JanSetu, FitBook, Airport Runway Management, and Yatrik.",
  keywords: [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "BCA Student",
    "JanSetu",
    "FitBook",
    "Next.js",
    "React",
    "Three.js",
    "TypeScript",
  ],
  authors: [{ name: "Kunal / Kux" }],
  creator: "Kux",
  openGraph: {
    title: "Kux.dev — Expandable 3D Developer Portfolio",
    description: "Full-Stack Developer & Cybersecurity Enthusiast. Real projects, honest engineering.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-slate-100 antialiased selection:bg-lavender-600/30 selection:text-lavender-200">
        {children}
      </body>
    </html>
  );
}

