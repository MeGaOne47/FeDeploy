'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_DOMAIN } from '../../app/constants';
import Link from 'next/link';
import message from 'antd/es/message';
import List from 'antd/es/list';
import Button from 'antd/es/button';

function List_Image() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
        const response = await axios.get(`${SERVER_DOMAIN}/list`);
        setFiles(response.data);
        } catch (error) {
        message.error('Failed to fetch files');
        }
    };

    const handleDelete = async (filename: any) => {
        try {
        await axios.delete(`${SERVER_DOMAIN}/delete/${filename}`);
        message.success('File deleted successfully');
        fetchFiles();
        } catch (error) {
        message.error('Failed to delete file');
        }
    };

    const handleView = async (filename: any) => {
        try {
        await axios.get(`${SERVER_DOMAIN}/view/${filename}`);
        message.success('File view successfully');
        fetchFiles();
        } catch (error) {
        message.error('Failed to view file');
        }
    };

    return(
        <>
            <div
                style={{
                    width: '100%',
                    marginBottom: '10px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <h2>File List</h2>
                    <Button style={{marginBottom: '10px'}} type="dashed">
                        <Link href="/UploadPage" color='red'>
                        Upload Image
                        </Link>
                    </Button>
                </div>
                <List
                    style={{
                        width: '50%',
                        margin: 'auto',
                        border: '1px solid #ccc',
                    }}
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
                            </Button>,
                            <Button
                                type="primary"
                                onClick={() => handleView(item)}
                            >
                                View
                            </Button>
                            ]}
                            
                        >
                            <List.Item.Meta
                                title={<a href={`${SERVER_DOMAIN}/download/${item}`}>{item}</a>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
export default List_Image;