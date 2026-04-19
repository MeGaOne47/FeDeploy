'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload/interface';
import Button from 'antd/es/button';
import Upload from 'antd/es/upload';
import message from 'antd/es/message';
import { SERVER_DOMAIN } from '@/app/site-config';

const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg'];

export default function SelectFileUpload() {
  const [file, setFile] = useState<RcFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  async function handleUpload() {
    if (!file) {
      message.error('Vui long chon file truoc khi upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsUploading(true);

      const response = await fetch(`${SERVER_DOMAIN}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      message.success('Upload file thanh cong');
      setFile(null);
    } catch (error) {
      message.error('Upload file that bai');
    } finally {
      setIsUploading(false);
    }
  }

  function beforeUpload(nextFile: RcFile) {
    if (!ACCEPTED_FILE_TYPES.includes(nextFile.type)) {
      message.error('Chi ho tro file PNG hoac JPG');
      return false;
    }

    setFile(nextFile);
    return false;
  }

  return (
    <section className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
        Upload
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
        Upload image
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        Ho tro file <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <Upload
          accept=".png,.jpeg,.jpg"
          beforeUpload={beforeUpload}
          fileList={file ? [file] : []}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Select file</Button>
        </Upload>

        <p className="min-h-6 text-sm text-slate-500 dark:text-slate-400">
          {file ? `Da chon: ${file.name}` : 'Chua chon file nao'}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            type="primary"
            loading={isUploading}
            disabled={!file}
            onClick={() => void handleUpload()}
          >
            Upload
          </Button>
          <Button>
            <Link href="/ListImg">View files</Link>
          </Button>
          <Button type="dashed">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
