import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Row, Breadcrumb, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import s from './Header.module.scss';
import { geekblue } from '@ant-design/colors';

export const HeaderComponent: React.FC = () => {
    return (
        <Header className={s.header} style={{ backgroundColor: geekblue[0] }}>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row>
                <Title>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                <Button type='text' icon={<SettingOutlined />}>
                    Настройки
                </Button>
            </Row>
        </Header>
    );
};
