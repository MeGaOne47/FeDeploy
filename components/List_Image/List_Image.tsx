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

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>File List</h2>
                <Button style={styles.uploadButton} type="dashed">
                    <Link href="/UploadPage" color="red">
                        Upload Image
                    </Link>
                </Button>
            </div>
            <List
                style={styles.list}
                bordered
                dataSource={files}
                renderItem={(item) => (
                    <List.Item
                        style={styles.listItem}
                        actions={[
                            <Button type="dashed" danger onClick={() => handleDelete(item)}>
                                Delete
                            </Button>,
                            <Button type="primary">
                                <a href={`${SERVER_DOMAIN}/view/${item}`}>View</a>
                            </Button>,
                        ]}
                    >
                        <List.Item.Meta title={<a href={`${SERVER_DOMAIN}/download/${item}`}>{item}</a>} />
                    </List.Item>
                )}
            />
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        padding: '0 10px',
    },
    header: {
        width: '100%',
        textAlign: 'center',
        marginBottom: '10px',
    },
    uploadButton: {
        marginBottom: '10px',
    },
    list: {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        border: '1px solid #ccc',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column', // Đặt flexDirection để hàng và nút không tràn
    },
};

// Responsive styles
const responsiveStyles = `
    @media (max-width: 768px) {
        .list-item {
            flex-direction: column;
            align-items: center;
        }
        .list-item .ant-btn {
            margin: 5px 0;
        }
        .list-meta-title {
            font-size: 14px;
            overflow-wrap: break-word; // Đảm bảo không tràn ra khỏi màn hình
        }
    }
`;

export default List_Image;