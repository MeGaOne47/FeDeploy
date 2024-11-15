'use client';
import React from 'react';
import { FacebookOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-orange-700 text-center py-5 relative bottom-0 left-0 w-full">
      <div className="text-white mb-2">&copy; 2024 Nguyễn Tấn Hùng. All rights reserved.</div>
      <div className="text-white">
        <a href="https://www.facebook.com/profile.php?id=100028399301933" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 mx-2">
          <FacebookOutlined />
        </a>{" | "}
        <a href="https://github.com/MeGaOne47" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 mx-2">
          <GithubOutlined />
        </a>{" | "}
        <a href="https://www.youtube.com/channel/UC2lPzjPXjeV2HoRPI2IJuiQ" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 mx-2">
          <YoutubeOutlined />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
