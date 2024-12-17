"use client"
import dynamic from 'next/dynamic';
const PDFView = dynamic(() => import('@/components/PDFView/PDFView'));

const ContestReportPages = () => {

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1 style={{textAlign: 'center'}}>Hung Nguyen</h1> */}
      <PDFView/>
    </div>
  );
};

export default ContestReportPages;

