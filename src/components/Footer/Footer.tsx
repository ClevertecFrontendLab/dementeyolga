import React from 'react';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Row, Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Footer } from 'antd/lib/layout/layout';
import { geekblue } from '@ant-design/colors';
import s from './Footer.module.scss';
import './FooterOverride.scss';

interface FooterPropsInterface {
    contentAccentColor: string;
}

export const FooterComponent: React.FC<FooterPropsInterface> = ({ contentAccentColor }) => {
    return (
        <Footer className={s.footer}>
            <Row style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Button className={s.reviewsBtn} style={{ color: contentAccentColor }} type='link'>
                    Смотреть отзывы
                </Button>
                <Card
                    className={s.footerCard}
                    actions={[
                        <Button type='text' icon={<AndroidFilled />}>
                            Android OS
                        </Button>,
                        <Button type='text' icon={<AppleFilled />}>
                            Apple iOS
                        </Button>,
                    ]}
                >
                    <Meta
                        title={<span style={{ color: geekblue[5] }}>Скачать на телефон</span>}
                        description='Доступно в PRO-тарифе'
                    />
                </Card>
            </Row>
        </Footer>
    );
};
