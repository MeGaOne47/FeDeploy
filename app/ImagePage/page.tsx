"use client";
import dynamic from "next/dynamic";

const Image = dynamic(() => import('@/components/Images/Images'), { ssr: true });

const PDFViewPage = () => {
    
    return (
      <div style={{ padding: '20px' }}>
        <Image />
      </div>
    );
};

export default PDFViewPage;

