'use client'
import { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { RcFile } from 'antd/lib/upload/interface'; // Thêm dòng này để import RcFile
import { SERVER_DOMAIN } from '../../app/constants';
import message from "antd/es/message";
import Upload from "antd/es/upload";
import Button from "antd/es/button";
import Link from "next/link";

function Select_File_Upload() {
    const [file, setFile] = useState<RcFile | null>(null);

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
        message.error('Failed to upload file');
        }
    };

    const beforeUpload = (file: RcFile) => {
        setFile(file);
        return false;
    };

    return(
        <>
            <div style={{
                margin: 'auto',
                textAlign: 'center'
            }}>
                <h2>Upload File</h2>
                <Upload
                    accept=".png,.jpeg,.jpg"
                    beforeUpload={beforeUpload}
                >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>

                <Button
                    type="primary"
                    style={{ marginTop: '10px' }}
                    onClick={handleUpload}
                    disabled={!file}
                >
                    Upload
                </Button>

                <Button 
                    type='dashed'
                    style={{ marginLeft: '10px' }}
                >
                    <Link href="/">
                    Home
                    </Link>
                </Button>
            </div>
        </>
    )
}
export default Select_File_Upload;