"use client"
import Select_File_Upload from '@/components/Upload/Select_File_Upload';
import Button from 'antd/es/button';
import Link from 'next/link';

const UploadPage = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign: 'center'}}>Hung Nguyen</h1>
      <Select_File_Upload/>
      <Button 
        type='dashed'
        style={{ marginLeft: '10px' }}
       >
        <Link href="/">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default UploadPage;

