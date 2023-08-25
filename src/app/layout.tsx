import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Barriecito } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const barriecito = Barriecito({
  weight: ['400', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Fat Cat",
  description: "Quiz yourself on anything!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(barriecito.className, "antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
