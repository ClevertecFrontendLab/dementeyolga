import React from 'react';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Row, Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Footer } from 'antd/lib/layout/layout';
import s from './Footer.module.scss';

export const FooterComponent: React.FC = () => {
    return (
        <Footer className={s.footer}>
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
                    <Meta title='Скачать на телефон ' description='Доступно в PRO-тарифе' />
                </Card>
            </Row>
        </Footer>
    );
};
