"use client"
import { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { RcFile } from 'antd/lib/upload/interface'; // Thêm dòng này để import RcFile
import { SERVER_DOMAIN } from '../constants';
import Link from 'next/link';

const UploadPage = () => {
  const [file, setFile] = useState<RcFile | null>(null); // Sửa đổi kiểu của file thành RcFile | null

  const handleUpload = async () => {
    if (!file) {
      message.error('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`${SERVER_DOMAIN}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      message.success('File uploaded successfully');
    } catch (error) {
      console.error(error);
      message.error('Failed to upload file');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload File</h1>
      <Upload
        accept=".png,.jpeg,.jpg"
        beforeUpload={(file) => {
          setFile(file); // Sửa đổi thành setFile(file) thay vì setFile(file.name)
          return false;
        }}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        style={{ marginTop: '10px' }}
        onClick={handleUpload}
      >
        Upload
      </Button>
      <Link href="/">Home</Link>
    </div>
  );
};

export default UploadPage;
