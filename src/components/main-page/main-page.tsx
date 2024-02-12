import React, { useState } from 'react';
import Layout from 'antd/lib/layout/layout';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

import './main-page.module.scss';
import { Menu } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='demo-logo-vertical' />
                <Menu
                    theme='light'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <CalendarOutlined />,
                            label: 'Календарь',
                        },
                        {
                            key: '2',
                            icon: <HeartFilled />,
                            label: 'Тренировки',
                        },
                        {
                            key: '3',
                            icon: <TrophyFilled />,
                            label: 'Достижения',
                        },
                        {
                            key: '4',
                            icon: <IdcardOutlined />>,
                            label: 'Профиль',
                        },
                    ]}
                />
            </Sider>
            <Sider trigger={null} collapsible collapsed={collapsed}></Sider>
            <Header>Header</Header>
        </Layout>
    );
};
