'use client';
import React, { useEffect, useRef } from 'react';
import { FacebookOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons';
import gsap from 'gsap';

const FooterComponent: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-6 w-full bg-gray-100 text-gray-800 dark:bg-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="text-center text-sm sm:text-base mb-3">
        &copy; 2024 <span className="font-semibold">Nguyễn Tấn Hùng</span>. All rights reserved.
      </div>

      <div className="flex justify-center space-x-6 text-xl">
        <a
          href="https://www.facebook.com/profile.php?id=100028399301933"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-blue-500"
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://github.com/MeGaOne47"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-black dark:hover:text-gray-300"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2lPzjPXjeV2HoRPI2IJuiQ"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-red-500"
        >
          <YoutubeOutlined />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
