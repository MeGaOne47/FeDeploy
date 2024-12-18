"use client";
import dynamic from "next/dynamic";

const PDFView = dynamic(() => import('@/components/PDFView/PDFView'), { ssr: true });

const PDFViewPage = () => {
    const url = window.location.href; // Lấy URL hiện tại
    const file = new URL(url).searchParams.get('file'); // Lấy tham số query "file" từ URL

    return (
      <div style={{ padding: '20px' }}>
        <PDFView url={`https://be-deploy.vercel.app/view/${file}`} />
      </div>
    );
};

export default PDFViewPage;

