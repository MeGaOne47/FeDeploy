"use client";
import React from "react";

interface PDFViewProps {
  url: string;
}

const PDFView: React.FC<PDFViewProps> = ({ url }) => {
  console.log("url", url);
  return (
    <div>
      <iframe
        src={`https://docs.google.com/gview?url=${url}&embedded=true`}
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
};

export default PDFView;

