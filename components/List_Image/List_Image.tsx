'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'antd/es/button';
import List from 'antd/es/list';
import Modal from 'antd/es/modal';
import Spin from 'antd/es/spin';
import message from 'antd/es/message';
import { buildServerAssetUrl, SERVER_DOMAIN } from '@/app/site-config';

export default function ListImage() {
  const [files, setFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  useEffect(() => {
    void fetchFiles();
  }, []);

  async function fetchFiles() {
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_DOMAIN}/list`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }

      const data = (await response.json()) as string[];
      setFiles(data);
    } catch (error) {
      message.error('Khong the lay danh sach file');
    } finally {
      setIsLoading(false);
    }
  }

  function handleDelete(filename: string) {
    Modal.confirm({
      title: 'Ban co chac chan muon xoa file nay khong?',
      content: 'Hanh dong nay khong the hoan tac.',
      okText: 'Xoa',
      cancelText: 'Huy',
      onOk: async () => {
        try {
          setDeletingFile(filename);

          const response = await fetch(
            `${SERVER_DOMAIN}/delete/${encodeURIComponent(filename)}`,
            {
              method: 'DELETE',
            },
          );

          if (!response.ok) {
            throw new Error('Delete failed');
          }

          message.success('Da xoa file thanh cong');
          await fetchFiles();
        } catch (error) {
          message.error('Khong the xoa file');
        } finally {
          setDeletingFile(null);
        }
      },
    });
  }

  return (
    <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            Upload Manager
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
            File List
          </h1>
        </div>

        <Button type="primary">
          <Link href="/UploadPage">Upload image</Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex min-h-48 items-center justify-center">
          <Spin size="large" tip="Dang tai danh sach file..." />
        </div>
      ) : (
        <List
          bordered
          locale={{ emptyText: 'Chua co file nao.' }}
          dataSource={files}
          renderItem={(item) => (
            <List.Item className="flex flex-col gap-4 !px-4 !py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <a
                  href={buildServerAssetUrl(`/download/${encodeURIComponent(item)}`)}
                  className="break-all text-sm font-medium text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300"
                >
                  {item}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  danger
                  type="default"
                  loading={deletingFile === item}
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </Button>
                <Button type="primary" href={buildServerAssetUrl(`/view/${encodeURIComponent(item)}`)}>
                  View
                </Button>
              </div>
            </List.Item>
          )}
        />
      )}
    </section>
  );
}
