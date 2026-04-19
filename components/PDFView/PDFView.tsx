"use client";

interface PDFViewProps {
  onLoad?: () => void;
  src: string;
  title?: string;
}

export default function PDFView({
  onLoad,
  src,
  title = "PDF Viewer",
}: PDFViewProps) {
  return (
    <iframe
      src={src}
      width="100%"
      height="720"
      className="min-h-[70vh] w-full rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
      style={{ border: "none" }}
      title={title}
      onLoad={onLoad}
    />
  );
}
