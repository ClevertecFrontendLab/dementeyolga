import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Row, Breadcrumb, Button, Grid } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import s from './Header.module.scss';
import { geekblue } from '@ant-design/colors';
const { useBreakpoint } = Grid;

export const HeaderComponent: React.FC = () => {
    const screens = useBreakpoint();
    const currentBreakpoints = (() => {
        return Object.entries(screens)
            .filter((screen) => !!screen[1])
            .map((screen) => screen[0]);
    })();
    let shape =
        currentBreakpoints.length === 1 && currentBreakpoints.includes('xs') ? 'circle' : '';
    let type =
        currentBreakpoints.length === 1 && currentBreakpoints.includes('xs') ? 'button' : 'text';

    return (
        <Header className={s.header} style={{ backgroundColor: geekblue[0] }}>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row className={s.bottom}>
                <Title className={s.h1} style={{ color: 'currentcolor' }}>
                    Приветствуем тебя в CleverFit — приложении, <br /> которое поможет тебе добиться
                    своей мечты!
                </Title>

                <Button
                    className={s.settingsBtn}
                    type={type}
                    shape={shape}
                    icon={
                        currentBreakpoints.includes('lg') ||
                        (currentBreakpoints.length === 1 && currentBreakpoints.includes('xs')) ? (
                            <SettingOutlined />
                        ) : (
                            ''
                        )
                    }
                >
                    {currentBreakpoints.length === 1 && currentBreakpoints.includes('xs')
                        ? ''
                        : 'Настройки'}
                </Button>
            </Row>
        </Header>
    );
};
