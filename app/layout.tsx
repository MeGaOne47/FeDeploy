import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ROOT_METADATA } from "@/app/site-config";
import AppProviders from "@/components/Layout/AppProviders";
import AppShell from "@/components/Layout/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata = ROOT_METADATA;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
