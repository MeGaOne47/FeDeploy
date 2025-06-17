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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
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
          <h2 className="text-2xl font-semibold mb-4">Kỹ năng</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["ReactJS", "Next.js", "JavaScript, TypeScript", "HTML, CSS, Tailwind CSS", "Lavarel", "PHP"].map((skill, idx) => (
              <li key={idx} className="p-4 bg-slate-700 text-white rounded-lg shadow-md">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Kinh nghiệm */}
        <section ref={expRef} id="KinhNghiem" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Kinh nghiệm làm việc</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
                <h3 className="text-xl font-medium mb-2">{idx === 0 ? 'VIET JAPAN PARTNER CO., LTD' : 'Tham gia vào các dự án của CTY'}</h3>
                <p className="text-slate-200 mb-2">{idx === 0 ? 'Thực tập sinh Web Developer' : 'Web Developer'}</p>
                {idx === 0 && <p className="text-slate-200 mb-2">Thời gian: 04/2024 - 09/2024</p>}
                <ul className="list-disc list-inside text-slate-200 text-sm leading-relaxed">
                  {idx === 0 ? (
                    <>
                      <li>Phát triển các ứng dụng web bằng ReactJS và Next.js, Lavarel</li>
                      <li>Sử dụng Ant Design, NextUI và Tailwind CSS để thiết kế giao diện người dùng</li>
                      <li>Được học hỏi và sử dụng Lavarel(PHP)</li>
                      <li>Được học hỏi và sử dụng AWS</li>
                      <li>Làm việc với đội ngũ để tối ưu hiệu suất ứng dụng</li>
                      <li>Tham gia vào các buổi họp và review code cùng đồng nghiệp</li>
                    </>
                  ) : (
                    <>
                      <li>Tham gia vào dự án vjp-connect sử dụng Next.js, Typescript, Laravel</li>
                      <li>Tham gia dự án Horoscope (Japan) sử dụng Laravel (PHP)</li>
                      <li>Tham gia CMS (Japan) dùng ReactJS (NextUI), Typescript</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
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
                linkFE: 'https://github.com/MeGaOne47/DonationBlood_Next13_Client_Main',
                linkBE: 'https://github.com/MeGaOne47/nest-crud-app',
              },
              {
                title: 'Ứng dụng quản lý bán hàng',
                desc: 'Ứng dụng giúp người dùng bán và quản lý các mặt hàng sử dụng công nghệ PHP OOP.',
                linkFE: 'https://github.com/nguyentanhung/todolist',
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-700 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600 hover:shadow-xl">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-slate-200">{project.desc}</p>
                <a href={project.linkFE} className="text-blue-300 mt-4 inline-block" target="_blank">Xem trên GitHub FE</a>
                {project.linkBE && (
                  <>
                    <br />
                    <a href={project.linkBE} className="text-blue-300 mt-2 inline-block" target="_blank">Xem trên GitHub BE</a>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
