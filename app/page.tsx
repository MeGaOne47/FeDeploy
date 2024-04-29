"use client"
import { useEffect, useState } from 'react';
import { List, Button, message } from 'antd';
import axios from 'axios';
import { SERVER_DOMAIN } from './constants';
import Link from 'antd/es/typography/Link';

const Home = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get(`${SERVER_DOMAIN}/list`);
      setFiles(response.data);
    } catch (error) {
      console.error(error);
      message.error('Failed to fetch files');
    }
  };

  const handleDelete = async (filename: any) => {
    try {
      await axios.delete(`${SERVER_DOMAIN}/delete/${filename}`);
      message.success('File deleted successfully');
      fetchFiles();
    } catch (error) {
      console.error(error);
      message.error('Failed to delete file');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hung Nguyen</h1>
      <h2>File List</h2>
      <Link href="/UploadPage" color='red'>Upload Image</Link>
      <List
        bordered
        dataSource={files}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => handleDelete(item)}
              >
                Delete
              </Button>
            ]}
          >
            {/* <List.Item.Meta
              title={<a href={`${SERVER_DOMAIN}/download/${item}`}>{item}</a>}
            /> */}
            <List.Item.Meta
              title={
                <a 
                  href={`${SERVER_DOMAIN}/download/${item}`} 
                  download={`${item}.png`}
                >
                  {item}
                </a>
              }
            />

          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
