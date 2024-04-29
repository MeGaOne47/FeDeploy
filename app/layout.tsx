import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const metadataBase = new URL("https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75");

export const metadata: Metadata = {
  title: "Deploy dự án",
  description: "VJC thực tập",
  openGraph: {
    title: 'Deploy dự án',
    description: 'VJC thực tập',
    type: 'website',
  },
  metadataBase: metadataBase,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
