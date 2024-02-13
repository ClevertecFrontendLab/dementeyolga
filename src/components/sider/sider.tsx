import React, { Dispatch, SetStateAction } from 'react';
import s from './Sider.module.scss';
import Sider from 'antd/lib/layout/Sider';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, MenuTheme } from 'antd';

interface SiderPropsInterface {
    selectedItems: string[];
    items: MenuItemInterface[];
    collapsed: boolean;
    theme: MenuTheme;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

interface MenuItemInterface {
    key: string;
    label: string;
    icon: React.ReactNode;
}

export const SiderComponent: React.FC<SiderPropsInterface> = ({
    items,
    selectedItems,
    theme,
    collapsed,
    setCollapsed,
}) => {
    return (
        <Sider
            className={s.sider}
            style={{ backgroundColor: '#ffffff' }}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className='logo' />
            <Menu theme={theme} mode='inline' defaultSelectedKeys={selectedItems} items={items} />

            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: `trigger ${s.trigger}`,
                id: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
        </Sider>
    );
};
