"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Spin } from 'antd';  // Import Spin từ Ant Design

// Dynamically import the PDFView component to ensure it's only rendered on the client
const PDFView = dynamic(() => import('@/components/PDFView/PDFView'), { ssr: false });

const PDFViewPage = () => {
  const [file, setFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Đảm bảo mã này chỉ chạy trên client-side
    const url = window.location.href; // Lấy URL hiện tại
    const fileParam = new URL(url).searchParams.get('file'); // Lấy tham số query "file" từ URL
    setFile(fileParam); // Cập nhật trạng thái với giá trị "file"
  }, []); // Chạy một lần sau khi component đã mount

  const handlePdfLoad = () => {
    setLoading(false); // Khi PDF được tải xong, thay đổi trạng thái loading
  };

  if (!file) {
    return <Spin tip="Đang tải..." size="large" fullscreen />; // Hiển thị loading khi chưa có giá trị "file"
  }

  const googleDocsViewerUrl = `https://docs.google.com/gview?url=https://be-deploy.vercel.app/view/${file}&embedded=true`;

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Spin tip="Đang tải..." size="large" /> {/* Hiển thị hiệu ứng loading */}
        </div>
      )}
      <iframe
        src={googleDocsViewerUrl}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="PDF Viewer"
        onLoad={handlePdfLoad} // Khi PDF được tải, gọi hàm handlePdfLoad
      />
    </div>
  );
};

export default PDFViewPage;
