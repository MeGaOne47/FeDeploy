'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);

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
          <li>
            <a href="/" className="hover:text-indigo-400 transition duration-200">Trang chủ</a>
          </li>
          <li>
            <a href="#GioiThieu" className="hover:text-indigo-400 transition duration-200">Giới thiệu</a>
          </li>
          <li>
            <a href="#KyNang" className="hover:text-indigo-400 transition duration-200">Kỹ năng</a>
          </li>
          <li>
            <a href="#KinhNghiem" className="hover:text-indigo-400 transition duration-200">Kinh nghiệm</a>
          </li>
          <li>
            <a href="#DuAn" className="hover:text-indigo-400 transition duration-200">Dự án</a>
          </li>
          <li>
            <a
              href="https://www.topcv.vn/xem-cv/VAECA1MAB1cFCQcCUQ9UXVcDAgQBAQYOWgNUBA825a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition duration-200"
            >
              CV của tôi
            </a>
          </li>
        </ul>

        {/* Button Mobile */}
        <div className="sm:hidden">
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
          <li><a href="#DuAn" className="hover:text-indigo-400">Dự án</a></li>
          <li>
            <a
              href="https://www.topcv.vn/xem-cv/VAECA1MAB1cFCQcCUQ9UXVcDAgQBAQYOWgNUBA825a"
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
