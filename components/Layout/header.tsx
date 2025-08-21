'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);

  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="bg-slate-900/80 backdrop-blur-md shadow-md sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-400 tracking-wide">
          Nguyễn Tấn Hùng
        </div>

        {/* Menu Desktop */}
        <ul className="hidden sm:flex items-center space-x-6 text-white font-medium">
          <li><a href="/" className="hover:text-indigo-400">Trang chủ</a></li>
          <li><a href="#GioiThieu" className="hover:text-indigo-400">Giới thiệu</a></li>
          <li><a href="#KyNang" className="hover:text-indigo-400">Kỹ năng</a></li>
          <li><a href="#KinhNghiem" className="hover:text-indigo-400">Kinh nghiệm</a></li>
          {/* <li><a href="#DuAn" className="hover:text-indigo-400">Dự án</a></li> */}
          <li>
            <a
              href="https://www.canva.com/design/DAGmiEMp1W8/ab-VXI9aGjuQrwkV1gaMrQ/view?utm_content=DAGmiEMp1W8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0683a3ec83#1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              CV của tôi
            </a>
          </li>
          {/* Nút Toggle Dark/Light */}
          <li>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 mt-1 hover:text-yellow-400 transition"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </li>
        </ul>

        {/* Button Mobile */}
        <div className="sm:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-white hover:text-yellow-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white hover:text-indigo-400 transition"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <ul
          ref={mobileMenuRef}
          className="sm:hidden flex flex-col space-y-4 px-6 py-4 bg-slate-900 text-white font-medium border-t border-slate-700"
        >
          <li><a href="/" className="hover:text-indigo-400">Trang chủ</a></li>
          <li><a href="#GioiThieu" className="hover:text-indigo-400">Giới thiệu</a></li>
          <li><a href="#KyNang" className="hover:text-indigo-400">Kỹ năng</a></li>
          <li><a href="#KinhNghiem" className="hover:text-indigo-400">Kinh nghiệm</a></li>
          {/* <li><a href="#DuAn" className="hover:text-indigo-400">Dự án</a></li> */}
          <li>
            <a
              href="https://www.canva.com/design/DAGmiEMp1W8/ab-VXI9aGjuQrwkV1gaMrQ/view?utm_content=DAGmiEMp1W8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0683a3ec83#1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              CV của tôi
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
