import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

export const openGraphImage = { images: ['https://www.vjp-connect.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogobanner.dcf00dbd.png&w=1200&q=75'] }
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deploy dự án",
  description: "VJC thực tập",
  openGraph: {
    title: 'Học Nextjs 14',
    description: 'Nâng cao kỹ năng lập trình và tiến bộ hơn trong tương lai.',
    type: 'website',
    ...openGraphImage,
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
