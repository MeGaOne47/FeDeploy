"use client"
import dynamic from 'next/dynamic';
const Select_File_Upload = dynamic(() => import('@/components/Upload/Select_File_Upload'));

const UploadPage = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign: 'center'}}>Hung Nguyen</h1>
      <Select_File_Upload/>
    </div>
  );
};

export default UploadPage;

