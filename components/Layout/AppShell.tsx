"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SHELLLESS_ROUTES } from "@/app/site-config";
import FooterComponent from "@/components/Layout/footer";
import HeaderComponent from "@/components/Layout/header";
import ScrollToTopButton from "@/components/ScrollToTopButton/scrollToTopButton";

interface AppShellProps {
  children: ReactNode;
}

function matchesShelllessRoute(pathname: string) {
  return SHELLLESS_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = matchesShelllessRoute(pathname);

  return (
    <>
      {!hideChrome && <HeaderComponent />}
      {children}
      <ScrollToTopButton />
      {!hideChrome && <FooterComponent />}
    </>
  );
}
