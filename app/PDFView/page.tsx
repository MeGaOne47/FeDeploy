"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the PDFView component to ensure it's only rendered on the client
const PDFView = dynamic(() => import('@/components/PDFView/PDFView'), { ssr: false });

const PDFViewPage = () => {
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    // Đảm bảo mã này chỉ chạy trên client-side
    const url = window.location.href; // Lấy URL hiện tại
    const fileParam = new URL(url).searchParams.get('file'); // Lấy tham số query "file" từ URL
    setFile(fileParam); // Cập nhật trạng thái với giá trị "file"
  }, []); // Chạy một lần sau khi component đã mount

  if (!file) {
    return <p>Đang tải...</p>; // Hiển thị thông báo khi chưa có giá trị "file"
  }

  return (
    <div style={{ padding: '20px' }}>
      <PDFView url={`https://be-deploy.vercel.app/view/${file}`} />
    </div>
  );
};

export default PDFViewPage;
