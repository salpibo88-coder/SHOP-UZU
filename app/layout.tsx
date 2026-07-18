import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "https://UzuTR77.com",
  description: "Premium Shopping Store",
  icons: {
    icon: [
      { url: "/online.jpg", type: "image/png" },
      { url: "/online.jpg" },
    ],
    apple: "online.jpg",
    shortcut: "/online.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

