import { Suspense } from "react";
import Spin from "antd/es/spin";
import PDFViewClient from "@/components/PDFView/PDFViewClient";

export default function PDFViewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <Spin size="large" tip="Dang tai tai lieu..." />
        </div>
      }
    >
      <PDFViewClient />
    </Suspense>
  );
}
