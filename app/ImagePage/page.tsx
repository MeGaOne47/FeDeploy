"use client";
import { Spin } from 'antd';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Image = dynamic(() => import('@/components/Images/Images'), { ssr: false }); // Chỉ render ở client

const PDFViewPage = () => {
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Khi component đã render xong, đặt loading là false
    setLoading(false);
  }, []);

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Spin size="large" tip="Đang tải..." /> {/* Hiển thị loading */}
        </div>
      )}
      <Image />
    </div>
  );
};

export default PDFViewPage;
