import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu, Typography } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styles from './main-page.module.scss';
import exitIconPath from './../../assets/img/exit.svg';

const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const ExitIcon: React.FC = () => <img src={exitIconPath}></img>;

    return (
        <Layout>
            <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
                <div className='logo' />
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
                            icon: <IdcardOutlined />,
                            label: 'Профиль',
                        },
                    ]}
                />

                {/* <Menu.Item key='1' icon={<CalendarOutlined />}>
                    Календарь
                </Menu.Item> */}

                <Button className={styles.button} type='text' icon={<ExitIcon></ExitIcon>}>
                    Выйти
                </Button>

                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: `trigger ${styles.trigger}`,
                    id: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
            </Sider>
            <Layout className={styles.siteLayout}>
                <Header className='site-layout-background' style={{ padding: 0 }}>
                    <Typography.Title editable level={1} style={{ margin: 0 }}>
                        h1. Ant Design
                    </Typography.Title>
                </Header>
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
