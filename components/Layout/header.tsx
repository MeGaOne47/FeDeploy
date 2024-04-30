"use client"
import React from 'react';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Menu from 'antd/es/menu/menu';

const HeaderComponent: React.FC = () => {
  const menuItems = [
    {
      key: 'mail',
      icon: <MailOutlined />,
      label: 'Navigation One',
    },
    {
      key: 'app',
      icon: <AppstoreOutlined />,
      label: 'Navigation Two',
      disabled: true,
    },
    {
      key: 'SubMenu',
      icon: <SettingOutlined />,
      label: 'Navigation Three - Submenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];

  return (
    <Menu mode="horizontal" items={menuItems} />
  );
};

export default HeaderComponent;
