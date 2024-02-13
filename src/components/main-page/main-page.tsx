import Icon, {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProfileOutlined,
    SettingOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { HeaderComponent } from '@components/Header/Header';
import { ExitIcon } from '@components/icons/ExitIcon';
import { Breadcrumb, Button, Card, Col, Layout, Menu, Row, Space } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styles from './main-page.module.scss';
import Title from 'antd/lib/typography/Title';
import { Footer } from 'antd/lib/layout/layout';
import Meta from 'antd/lib/card/Meta';

const { Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuItems, setMenuItems] = useState([
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
        {
            key: '5',
            icon: <ExitIcon />,
            label: 'Выйти',
        },
    ]);
    const [currentMenuItem, setCurrentMenuItem] = useState(['1']);

    return (
        <Layout>
            <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
                <div className='logo' />
                <Menu
                    theme='light'
                    mode='inline'
                    defaultSelectedKeys={currentMenuItem}
                    items={menuItems}
                />

                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: `trigger ${styles.trigger}`,
                    id: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
            </Sider>
            <Layout className={styles.siteLayout}>
                <HeaderComponent></HeaderComponent>
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Space direction='vertical' size='large'>
                        <Row style={{ width: '100%', maxWidth: 752 }}>
                            <Card>
                                <p>С CleverFit ты сможешь:</p>
                                <p>
                                    — планировать свои тренировки на календаре, выбирая тип
                                    и уровень нагрузки;
                                </p>
                                <p>
                                    — отслеживать свои достижения в разделе статистики, сравнивая
                                    свои результаты с нормами и рекордами;
                                </p>
                                <p>
                                    — создавать свой профиль, где ты можешь загружать свои фото,
                                    видео и отзывы о тренировках;
                                </p>
                                <p>
                                    — выполнять расписанные тренировки для разных частей тела,
                                    следуя подробным инструкциям и советам профессиональных
                                    тренеров.
                                </p>
                                 
                            </Card>
                        </Row>

                        <Space direction='vertical' size='middle'>
                            <Row style={{ width: '100%', maxWidth: 752 }}>
                                <Card>
                                    <Title level={4}>
                                        CleverFit — это не просто приложение, а твой личный помощник
                                        в мире фитнеса. Не откладывай на завтра — начни
                                        тренироваться уже сегодня!
                                    </Title>
                                </Card>
                            </Row>

                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card
                                        title='Расписать тренировки'
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button type='link' icon={<HeartFilled />} block>
                                                Тренировки
                                            </Button>,
                                        ]}
                                    ></Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        title='Назначить календарь'
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button type='link' icon={<CalendarOutlined />} block>
                                                Календарь
                                            </Button>,
                                        ]}
                                    ></Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        title='Заполнить профиль'
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button type='link' icon={<IdcardOutlined />} block>
                                                Профиль
                                            </Button>,
                                            <Button type='link' icon={<IdcardOutlined />} block>
                                                Профиль
                                            </Button>,
                                        ]}
                                    ></Card>
                                </Col>
                            </Row>
                        </Space>
                    </Space>
                    <Footer>
                        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Button type='link'>Смотреть отзывы</Button>
                            <Card
                                actions={[
                                    <Button type='text' icon={<AndroidFilled />}>
                                        Android OS
                                    </Button>,
                                    <Button type='text' icon={<AppleFilled />}>
                                        Android OS
                                    </Button>,
                                ]}
                            >
                                <Meta
                                    title='Скачать на телефон '
                                    description='Доступно в PRO-тарифе'
                                />
                            </Card>
                        </Row>
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
};
