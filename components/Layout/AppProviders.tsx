"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import LanguageProvider from "@/components/Layout/LanguageProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
