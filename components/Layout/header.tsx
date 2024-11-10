"use client"
import React, { useMemo } from 'react';
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

  return (
    // <Menu mode="horizontal" items={menuItems} />
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Nguyễn Tấn Hùng</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
          <li><a href="#GioiThieu" className="hover:text-gray-300">Giới thiệu</a></li>
          <li><a href="#KyNang" className="hover:text-gray-300">Kỹ năng</a></li>
          <li><a href="#KinhNghiem" className="hover:text-gray-300">Kinh nghiệm</a></li>
          <li><a href="#DuAn" className="hover:text-gray-300">Dự án</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
