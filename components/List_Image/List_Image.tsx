'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_DOMAIN } from '../../app/constants';
import Link from 'next/link';
import message from 'antd/es/message';
import List from 'antd/es/list';
import Button from 'antd/es/button';
import { Modal } from 'antd';

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

    // const handleDelete = async (filename: any) => {
    //     try {
    //     await axios.delete(`${SERVER_DOMAIN}/delete/${filename}`);
    //     message.success('File deleted successfully');
    //     fetchFiles();
    //     } catch (error) {
    //     message.error('Failed to delete file');
    //     }
    // };

    const handleDelete = async (filename: any) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xóa file này không?',
            content: 'Hành động này không thể hoàn tác',
            okText: 'Xóa',
            cancelText: 'Hủy',
            onOk: async () => {
                try {
                    await axios.delete(`${SERVER_DOMAIN}/delete/${filename}`);
                    message.success('File đã xóa thành công');
                    fetchFiles();
                } catch (error) {
                    message.error('Không thể xóa file');
                }
            },
        });
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
                            >
                                <a href={`${SERVER_DOMAIN}/view/${item}`}>View</a>
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