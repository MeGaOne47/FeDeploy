import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deploy dự án",
  description: "VJC thực tập",
  openGraph: {
    title: 'Deploy dự án',
    description: 'VJC thực tập',
    type: 'website',
    images: [
      {
        url: '../image/logobanner.png', // Đường dẫn tương đối đến hình ảnh
        width: 1200,
        height: 630,
        alt: 'Mô tả cho hình ảnh',
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
