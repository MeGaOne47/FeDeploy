"use client";

import { useEffect, useState } from "react";
import Spin from "antd/es/spin";
import { useSearchParams } from "next/navigation";
import { buildGoogleViewerUrl } from "@/app/site-config";
import PDFView from "@/components/PDFView/PDFView";

export default function PDFViewClient() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");
  const [loading, setLoading] = useState(true);
  const viewerUrl = file ? buildGoogleViewerUrl(file) : "";

  useEffect(() => {
    setLoading(true);
  }, [viewerUrl]);

  if (!file) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-lg rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-900 shadow-sm">
          <h1 className="text-xl font-semibold">Khong tim thay tai lieu</h1>
          <p className="mt-2 text-sm leading-6">
            Vui long truyen query <code>file</code> tren URL de mo PDF.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative px-4 py-8 sm:px-6 lg:px-8">
      {loading && <Spin fullscreen size="large" tip="Dang tai tai lieu..." />}
      <PDFView onLoad={() => setLoading(false)} src={viewerUrl} title={file} />
    </div>
  );
}
