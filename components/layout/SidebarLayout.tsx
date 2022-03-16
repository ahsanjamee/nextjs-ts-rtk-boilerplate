import React, { useState } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import {
    LeftOutlined,
    RightOutlined,
    UserOutlined,
    LoginOutlined,
    DatabaseOutlined,
    BankOutlined,
    DashboardOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
    const { Sider } = Layout;
    const router = useRouter();

    const [collapsed, setCollapsed] = useState(false);

    const menu = [
        {
            key: '1',
            icon: <DashboardOutlined />,
            title: 'Dashboard',
            path: '/dashboard',
        },
        {
            key: '2',
            icon: <UserOutlined />,
            title: 'Profile',
            path: '/profile',
        },
        {
            key: '3',
            icon: <BankOutlined />,
            title: 'Company',
            path: '/company',
        },
        {
            key: '4',
            icon: <DatabaseOutlined />,
            title: 'Buildings',
            path: '/buildings',
        },
        {
            key: '5',
            icon: <LoginOutlined />,
            title: 'Logout',
            path: '/login',
        },
    ];

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const handleLogout = () => console.log('logout');

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    className="logo"
                    style={{
                        height: '32px',
                        margin: '18px 26px',
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                    }}
                >
                    {collapsed ? 'E' : 'Exit App'}
                </div>
                <div className="sidebar-toggler" onClick={toggle}>
                    {collapsed ? <RightOutlined /> : <LeftOutlined />}
                </div>
                <Menu theme="dark" mode="inline">
                    {menu.map((item) => (
                        <Menu.Item
                            key={item.key}
                            icon={item.icon}
                            onClick={item.title === 'Logout' ? handleLogout : undefined}
                            className={
                                router.pathname === item.path ? 'ant-menu-item-selected' : ''
                            }
                        >
                            <Link href={item.path}>{item.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <PageHeader className="site-page-header" title={title} />
                {children}
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;
