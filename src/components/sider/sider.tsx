import React, { Dispatch, SetStateAction } from 'react';
import s from './Sider.module.scss';
import Sider from 'antd/lib/layout/Sider';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Grid, Menu, MenuTheme } from 'antd';
import logoShort from './../../assets/img/logo-short.svg';
import logoWide from './../../assets/img/logo-wide.svg';
import { ExitIcon } from '@components/icons/ExitIcon';
import { grey } from '@ant-design/colors';

interface SiderPropsInterface {
    items: MenuItemInterface[];
    collapsed: boolean;
    theme: MenuTheme;
    iconsColor: string;
    width: number;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
    setSiderWidth: Dispatch<SetStateAction<number>>;
    currentBreakpoints: string[];
}

interface MenuItemInterface {
    key: string;
    label: string;
    icon: React.ReactNode;
}

export const SiderComponent: React.FC<SiderPropsInterface> = ({
    items,
    theme,
    collapsed,
    setCollapsed,
    currentBreakpoints,
}) => {
    return (
        <Sider
            className={`${s.sider} ${collapsed ? s.collapsed : ''}`}
            style={{
                backgroundColor: '#ffffff',
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className={s.logo}>
                <img src={collapsed ? logoShort : logoWide} alt='' />
            </div>

            <Menu className={s.menu} theme={theme} mode='inline' selectable={false}>
                {items.map((el) => (
                    <Menu.Item className={s.menuItem} key={el.key} icon={el.icon}>
                        {collapsed ? '' : el.label}
                    </Menu.Item>
                ))}
            </Menu>

            <Menu className={s.exitBtnWrapper} theme={theme} mode='inline' selectable={false}>
                <Menu.Item className={s.exitBtn} key={1} icon={<ExitIcon color={grey[13]} />}>
                    Выход
                </Menu.Item>
            </Menu>

            <Button
                type='text'
                data-test-id={
                    currentBreakpoints.includes('sm') ? 'sider-switch' : 'sider-switch-mobile'
                }
                className={`trigger ${s.trigger}`}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
            ></Button>
        </Sider>
    );
};
