import dynamic from 'next/dynamic';
const HeaderComponent = dynamic(() => import('@/components/Layout/header'));
const FooterComponent = dynamic(() => import('@/components/Layout/footer'));
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hung Nguyen",
  description: "Hung Nguyen - VJC thực tập",
  openGraph: {
    title: 'Hung Nguyen',
    description: 'Hung Nguyen - VJC thực tập',
    type: 'website',
    images: [
      {
        url: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75',
        width: 1200,
        height: 630,
        alt: 'Hung Nguyen - Dự án deploy thực tập',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta name="google-site-verification" content="nmnsgjnJTG_EFzE9fyE8eVRXVSMix03TWrG4UqMj95E" />
      <body>
        <div lang="en" className={inter.className}>
          <HeaderComponent/>
            {children}
            <SpeedInsights/>
          <FooterComponent/>
        </div>
      </body>
    </html>
  );
}
