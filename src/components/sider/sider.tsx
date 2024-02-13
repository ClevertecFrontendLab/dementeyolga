import React, { Dispatch, SetStateAction } from 'react';
import s from './Sider.module.scss';
import Sider from 'antd/lib/layout/Sider';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, MenuTheme, Row, Space } from 'antd';
import logoShort from './../../assets/img/logo-short.svg';
import logoWide from './../../assets/img/logo-wide.svg';
import { ExitIcon } from '@components/icons/ExitIcon';

interface SiderPropsInterface {
    selectedItems: string[];
    items: MenuItemInterface[];
    collapsed: boolean;
    theme: MenuTheme;
    iconsColor: string;
    width: number;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
    setSiderWidth: Dispatch<SetStateAction<number>>;
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
    iconsColor,
    width,
    setCollapsed,
    setSiderWidth,
}) => {
    return (
        <Sider
            className={s.sider}
            style={{ backgroundColor: '#ffffff', width: width + 'px' }}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className={s.logo}>
                <img src={collapsed ? logoShort : logoWide} alt='' />
            </div>
            <Menu theme={theme} mode='inline' defaultSelectedKeys={selectedItems} items={items} />

            <Menu
                className={s.exitBtn}
                theme={theme}
                mode='inline'
                selectable={false}
                items={[
                    {
                        key: '1',
                        icon: <ExitIcon color={iconsColor} />,
                        label: 'Выход',
                    },
                ]}
            />

            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: `trigger ${s.trigger}`,
                id: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
        </Sider>
    );
};
