import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
