import FooterComponent from "@/components/Layout/footer";
import HeaderComponent from "@/components/Layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const metadataBase = new URL("https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75");

export const metadata: Metadata = {
  title: "Hung Nguyen - Deploy dự án",
  description: "Hung Nguyen - VJC thực tập",
  openGraph: {
    title: 'Hung Nguyen - Deploy dự án',
    description: 'Hung Nguyen - VJC thực tập',
    type: 'website',
    images: [
      {
        url: 'https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=3840&q=75', // Đường dẫn tương đối đến hình ảnh
        width: 1200,
        height: 630,
        alt: 'Hung Nguyen - Dự án deploy thực tập',
      },
    ],
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
      <body className={inter.className}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
