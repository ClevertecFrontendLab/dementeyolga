import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { HeaderComponent } from '@components/Header/Header';
import { SiderComponent } from '@components/Sider/Sider';
import { Button, Card, Col, Layout, Row, Space } from 'antd';
import React, { useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { geekblue } from '@ant-design/colors';
import { FooterComponent } from '@components/Footer/Footer';
import 'antd/dist/antd.less';
import Meta from 'antd/lib/card/Meta';
import s from './MainPage.module.scss';
import './MainPageOverride.scss';

const { Content } = Layout;

export const MainPage: React.FC = () => {
    const [iconsColor, setIconsColor] = useState(geekblue[8]);
    const [contentAccentColor, setContentAccentColor] = useState(geekblue[5]);
    const [siderWidth, setSiderWidth] = useState(208);
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
    ]);

    return (
        <Layout className={s.siteLayout}>
            <SiderComponent
                collapsed={collapsed}
                theme='light'
                items={menuItems}
                setCollapsed={setCollapsed}
                width={siderWidth}
                setSiderWidth={setSiderWidth}
                iconsColor={iconsColor}
            ></SiderComponent>

            <Layout className={`${s.mainLayout}  ${collapsed ? s.siderCollapsed : ''}`}>
                <HeaderComponent></HeaderComponent>
                <Content
                    className={`site-layout-background ${s.content}`}
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Space direction='vertical' size='large'>
                        <Row style={{ width: '100%', maxWidth: 752 }}>
                            <Card style={{ color: iconsColor }} className={s.benefits}>
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
                                    <Title level={4} className={s.h4}>
                                        CleverFit — это не просто приложение, а твой личный помощник
                                        в мире фитнеса. Не откладывай на завтра — начни
                                        тренироваться уже сегодня!
                                    </Title>
                                </Card>
                            </Row>

                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button
                                                className={s.cardButton}
                                                style={{ color: contentAccentColor }}
                                                type='link'
                                                icon={<HeartFilled />}
                                                block
                                            >
                                                Тренировки
                                            </Button>,
                                        ]}
                                    >
                                        <Meta title='Расписать тренировки' />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button
                                                className={s.cardButton}
                                                style={{ color: contentAccentColor }}
                                                type='link'
                                                icon={<CalendarOutlined />}
                                                block
                                            >
                                                Календарь
                                            </Button>,
                                        ]}
                                    >
                                        <Meta title='Назначить календарь' />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        style={{ textAlign: 'center' }}
                                        bordered={false}
                                        actions={[
                                            <Button
                                                className={s.cardButton}
                                                style={{ color: contentAccentColor }}
                                                type='link'
                                                icon={<IdcardOutlined />}
                                                block
                                            >
                                                Профиль
                                            </Button>,
                                        ]}
                                    >
                                        <Meta title='Заполнить профиль' />
                                    </Card>
                                </Col>
                            </Row>
                        </Space>
                    </Space>
                </Content>
                <FooterComponent contentAccentColor={contentAccentColor}></FooterComponent>
            </Layout>
        </Layout>
    );
};
