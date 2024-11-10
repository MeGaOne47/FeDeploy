"use client"
import React, { useMemo, useState } from 'react';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import Menu from 'antd/es/menu/menu';

const HeaderComponent: React.FC = () => {
  // const menuItems = useMemo(() => [
  //   {
  //     key: 'mail',
  //     icon: <MailOutlined />,
  //     label: 'Navigation One',
  //   },
  //   {
  //     key: 'app',
  //     icon: <AppstoreOutlined />,
  //     label: 'Navigation Two',
  //     disabled: true,
  //   },
  //   {
  //     key: 'SubMenu',
  //     icon: <SettingOutlined />,
  //     label: 'Navigation Three - Submenu',
  //     children: [
  //       {
  //         type: 'group',
  //         label: 'Item 1',
  //         children: [
  //           { label: 'Option 1', key: 'setting:1' },
  //           { label: 'Option 2', key: 'setting:2' },
  //         ],
  //       },
  //       {
  //         type: 'group',
  //         label: 'Item 2',
  //         children: [
  //           { label: 'Option 3', key: 'setting:3' },
  //           { label: 'Option 4', key: 'setting:4' },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     key: 'alipay',
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //   },
  // ], []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <Menu mode="horizontal" items={menuItems} />
    // <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
    //   <nav className="max-w-7xl mx-auto flex justify-between items-center">
    //     <div className="text-xl font-semibold">Nguyễn Tấn Hùng</div>
    //     <ul className="flex space-x-6">
    //       <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
    //       <li><a href="#GioiThieu" className="hover:text-gray-300">Giới thiệu</a></li>
    //       <li><a href="#KyNang" className="hover:text-gray-300">Kỹ năng</a></li>
    //       <li><a href="#KinhNghiem" className="hover:text-gray-300">Kinh nghiệm</a></li>
    //       <li><a href="#DuAn" className="hover:text-gray-300">Dự án</a></li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-lg sm:text-xl font-semibold">Nguyễn Tấn Hùng</div>
        <ul className="hidden sm:flex space-x-4 md:space-x-6">
          <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
          <li><a href="#GioiThieu" className="hover:text-gray-300">Giới thiệu</a></li>
          <li><a href="#KyNang" className="hover:text-gray-300">Kỹ năng</a></li>
          <li><a href="#KinhNghiem" className="hover:text-gray-300">Kinh nghiệm</a></li>
          <li><a href="#DuAn" className="hover:text-gray-300">Dự án</a></li>
        </ul>
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Mở menu" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="#ffff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="sm:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-4">
          <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
          <li><a href="#GioiThieu" className="hover:text-gray-300">Giới thiệu</a></li>
          <li><a href="#KyNang" className="hover:text-gray-300">Kỹ năng</a></li>
          <li><a href="#KinhNghiem" className="hover:text-gray-300">Kinh nghiệm</a></li>
          <li><a href="#DuAn" className="hover:text-gray-300">Dự án</a></li>
        </ul>
      )}
    </header>

  );
};

export default HeaderComponent;
