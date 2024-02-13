import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { HeaderComponent } from '@components/Header/Header';
import { SiderComponent } from '@components/Sider/Sider';
import { ExitIcon } from '@components/icons/ExitIcon';
import { Button, Card, Col, Layout, Row, Space } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.less';
import s from './MainPage.module.scss';
import Title from 'antd/lib/typography/Title';
import { Footer } from 'antd/lib/layout/layout';
import Meta from 'antd/lib/card/Meta';
import { geekblue } from '@ant-design/colors';
import { FooterComponent } from '@components/Footer/Footer';

const { Content } = Layout;

export const MainPage: React.FC = () => {
    const [iconsColor, setIconsColor] = useState(geekblue[9]);
    const [collapsed, setCollapsed] = useState(false);
    const [menuItems, setMenuItems] = useState([
        {
            key: '1',
            icon: <CalendarOutlined style={{ color: iconsColor }} />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled style={{ color: iconsColor }} />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <TrophyFilled style={{ color: iconsColor }} />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: <IdcardOutlined style={{ color: iconsColor }} />,
            label: 'Профиль',
        },
        {
            key: '5',
            icon: <ExitIcon color={iconsColor} />,
            label: 'Выйти',
        },
    ]);
    const [selectedItems, setSelectedItems] = useState(['1']);

    return (
        <Layout className={s.siteLayout}>
            <SiderComponent
                collapsed={collapsed}
                theme='light'
                items={menuItems}
                selectedItems={selectedItems}
                setCollapsed={setCollapsed}
            ></SiderComponent>

            <Layout className={s.mainLayout}>
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
                            <Card style={{ color: geekblue[9] }} className={s.benefits}>
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
                </Content>
                <FooterComponent></FooterComponent>
            </Layout>
        </Layout>
    );
};
