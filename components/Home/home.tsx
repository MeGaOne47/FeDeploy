'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import About from '../About/about';
import SnowEffect from '../SnowEffect/SnowEffect';

gsap.registerPlugin(ScrollTrigger);

export default function HomeIndex() {
  const avatarRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref: React.RefObject<HTMLElement>, delay = 0) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%', // khi phần tử bắt đầu hiện ra khoảng 80% từ dưới lên
              toggleActions: 'play reverse play reverse',
              once: false,
            },
          }
        );
      }
    };

    animateSection(avatarRef);
    animateSection(skillsRef, 0.1);
    animateSection(expRef, 0.2);
    animateSection(projectRef, 0.3);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 dark:text-white relative overflow-hidden transition-colors duration-500">
      <SnowEffect />
      <main className="max-w-7xl mx-auto p-6">
        {/* Avatar + Giới thiệu */}
        <section
          ref={avatarRef}
          className="flex items-center justify-center mt-10 space-x-6"
        >
          <Image
            src="https://be-deploy.vercel.app/view/bqUDplfbEyqCOCwLOdJV_65df3162143f9_cvtpl.jpg"
            alt="Avatar của Nguyễn Tấn Hùng"
            className="w-32 h-32 rounded-full shadow-lg"
            width={500}
            height={300}
            priority
          />
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-2">
              Chào mừng đến với Portfolio của tôi!
            </h1>
            <p className="text-xl">
              Tôi là Nguyễn Tấn Hùng, một lập trình viên Web Developer.
            </p>
          </div>
        </section>

        {/* About section */}
        <About />

        {/* Kỹ năng */}
        <section ref={skillsRef} id="KyNang" className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Kỹ năng</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Ngôn ngữ lập trình */}
            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">Ngôn ngữ lập trình</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['JavaScript', 'TypeScript', 'PHP'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>

            {/* Frontend */}
            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">Frontend</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['ReactJS', 'Next.js', 'Tailwind CSS', 'Ant Design', 'SCSS'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>

            {/* Backend */}
            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">Backend</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['Node.js', 'NestJS', 'Laravel (PHP)'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>

            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">Cơ sở dữ liệu & Công cụ</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['MongoDB', 'MySQL', 'Git', 'Figma', 'Postman', 'Vercel'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>

            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">Thư viện & Animation</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['GSAP', 'Frame-Motion'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>
            <fieldset className="border border-slate-600 rounded-lg p-4">
              <legend className="text-lg font-semibold text-indigo-400 px-2">State & Form Management</legend>
              <ul className="grid grid-cols-2 gap-3 mt-2">
                {['React Query', 'Zustand', 'Redux', 'React Hook Form', 'Custom Hooks'].map((skill, idx) => (
                  <li key={idx} className="bg-slate-700 text-white px-3 py-2 rounded shadow-md text-sm text-center">
                    {skill}
                  </li>
                ))}
              </ul>
            </fieldset>



          </div>
        </section>

        {/* Kinh nghiệm */}
        <section ref={expRef} id="KinhNghiem" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Kinh nghiệm làm việc</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

            {/* SANTNS */}
            <div className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">SANTNS - E-commerce Platform</h3>
              <p className="text-slate-200 mb-2">Vị trí: Fullstack Developer | 11/2024 – 05/2025</p>
              <p className="text-sm text-slate-200 mb-2">SANTNS là một nền tảng thương mại điện tử cho phép người dùng mua sắm nhiều loại sản phẩm thuộc các danh mục khác nhau như thời trang, điện tử, đồ gia dụng và nhiều hơn nữa.
                Phần backend của hệ thống đã được xây dựng sẵn để xử lý logic nghiệp vụ và xử lý dữ liệu.</p>
              <ul className="list-disc list-inside text-slate-200 text-sm leading-relaxed">
                <li>Xây dựng giao diện người dùng responsive bằng Next.js</li>
                <li>Tích hợp API để hiển thị dữ liệu sản phẩm theo thời gian thực</li>
                <li>Sửa lỗi UI, tối ưu hiệu suất và trải nghiệm người dùng</li>
                <li>Phối hợp với backend và thiết kế để đảm bảo tích hợp mượt mà</li>
                <li>Stack: ReactJS, Next.js, Tailwind CSS, Ant Design, MongoDB, Node.js</li>
              </ul>
            </div>

            {/* Gao Huu Co TNS */}
            <div className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Gạo Hữu Cơ TNS</h3>
              <p className="text-slate-200 mb-2">Vị trí: Fullstack Developer | 10/2023 – 02/2024</p>
              <p className="text-sm text-slate-200 mb-2">Trang web này được thiết kế để hiển thị các sản phẩm gạo hữu cơ và thông tin đại lý.
                Người dùng có thể duyệt danh sách sản phẩm, tìm kiếm các loại gạo cụ thể và xem thông tin tổng quan về các đại lý.</p>
              <ul className="list-disc list-inside text-slate-200 text-sm leading-relaxed">
                <li>Phát triển trang web giới thiệu sản phẩm gạo và đại lý</li>
                <li>Xây dựng chức năng tìm kiếm gạo và hiển thị chi tiết sản phẩm</li>
                <li>Thiết kế và dựng UI đại lý và sản phẩm tối ưu mọi thiết bị</li>
                <li>Stack: ReactJS, Next.js, Tailwind CSS, Ant Design, Node.js, MongoDB</li>
              </ul>
            </div>

            {/* Viet Japan Connect */}
            <div className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Sekatsuku</h3>
              <p className="text-slate-200 mb-2">Vị trí: Front-End Developer | 06/2024 – 09/2024</p>
              <p className="text-sm text-slate-200 mb-2">Trang web này kết nối các đối tác từ Việt Nam và Nhật Bản.
                Trang web sẽ cập nhật thông tin về các công ty Việt Nam và Nhật Bản thuộc nhiều lĩnh vực khác nhau để kết nối và hợp tác kinh doanh.</p>
              <ul className="list-disc list-inside text-slate-200 text-sm leading-relaxed">
                <li>Thiết kế giao diện quản lý cuộc gọi và danh sách cuộc gọi</li>
                <li>Map API lịch sử cuộc gọi, lời nhắc và phân quyền người dùng</li>
                <li>Stack: ReactJS, Next.js, TailwindCSS, NextUI, MySQL</li>
              </ul>
            </div>

            {/* Sekatsuku */}
            <div className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
              <h3 className="text-xl font-medium mb-2">Viet Japan Connect</h3>
              <p className="text-slate-200 mb-2">Vị trí: Fullstack Developer | 03/2024 – 06/2024</p>
              <p className="text-sm text-slate-200 mb-2">Trang web này đại diện cho hệ thống telesale, nơi người dùng có thể thực hiện và quản lý số lượng lớn danh sách cuộc gọi.
                Hệ thống tổ chức các nhóm quản lý cuộc gọi và người dùng dịch vụ để kiểm soát toàn bộ thông tin liên quan đến cuộc gọi.</p>
              <ul className="list-disc list-inside text-slate-200 text-sm leading-relaxed">
                <li>Thiết kế UI bài viết và map API kết nối với doanh nghiệp</li>
                <li>Tự động hóa chuyển ngôn ngữ (đa ngôn ngữ) cho form nhập</li>
                <li>Stack: ReactJS, Next.js, SCSS, Ant Design, Node.js, MySQL</li>
              </ul>
            </div>

          </div>
        </section>


        {/* Dự án học tập */}
        <section ref={projectRef} id="DuAn" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Dự án học tập</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Ứng dụng quản lý hiến máu',
                desc: 'Một trang web vì cộng đồng người hiến máu sử dụng công nghệ NextJs, Nestjs.',
                // linkFE: 'https://github.com/MeGaOne47/DonationBlood_Next13_Client_Main',
                // linkBE: 'https://github.com/MeGaOne47/nest-crud-app',
              },
              {
                title: 'Ứng dụng quản lý bán hàng',
                desc: 'Ứng dụng giúp người dùng bán và quản lý các mặt hàng sử dụng công nghệ PHP OOP.',
                // linkFE: 'https://github.com/nguyentanhung/todolist',
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-slate-200">{project.desc}</p>
                {/* <a href={project.linkFE} className="text-blue-300 mt-4 inline-block" target="_blank">Xem trên GitHub FE</a>
                {project.linkBE && (
                  <>
                    <br />
                    <a href={project.linkBE} className="text-blue-300 mt-2 inline-block" target="_blank">Xem trên GitHub BE</a>
                  </>
                )} */}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
