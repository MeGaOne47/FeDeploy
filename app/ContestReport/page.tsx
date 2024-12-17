"use client"
import dynamic from 'next/dynamic';
const ContestReport = dynamic(() => import('@/components/ContestReport/ContestReport'));

const ContestReportPages = () => {

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1 style={{textAlign: 'center'}}>Hung Nguyen</h1> */}
      <ContestReport/>
    </div>
  );
};

export default ContestReportPages;

