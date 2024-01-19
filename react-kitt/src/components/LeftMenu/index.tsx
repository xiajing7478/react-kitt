import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DesktopOutlined,
  // FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/page1',
    icon: <PieChartOutlined />,
    label: '栏目1',
  },
  {
    key: '/page2',
    icon: <DesktopOutlined />,
    label: '栏目2',
  },
  {
    key: '/page3',
    icon: <TeamOutlined />,
    children: [
      {
        key: '/page3/user',
        label: '栏目3-1',
      },
      {
        key: '/page3/2',
        label: '栏目3-2',
      },
      {
        key: '/page3/3',
        label: '栏目3-3',
      },
    ],
    label: '栏目3',
  },
  {
    key: '/page4',
    icon: <UserOutlined />,
    children: [
      {
        key: '/page4/1',
        label: '栏目4-1',
      },
      {
        key: '/page4/2',
        label: '栏目4-2',
      },
      {
        key: '/page4/3',
        label: '栏目4-3',
      },
    ],
    label: '栏目4',
  },
];

const LeftMenu: React.FC = () => {
  const navigate = useNavigate();
  const loaction = useLocation();
  const defaultSelectedKeys = loaction.pathname;
  // console.log('loaction', loaction);
  // console.log('items', items);
  let firstKeys: string = '';

  const findKey = (obj: { key: string }) => {
    return obj['key'] === defaultSelectedKeys;
  };

  for (let i = 0; i < items.length; i++) {
    if (items[i]!['children'] && items[i]!['children'].find(findKey)) {
      firstKeys = items[i]!.key as string;
      break;
    }
  }

  const [openKeys, setOpenKeys] = useState<string[]>([firstKeys]);
  const menuClick = (e: { key: string }) => {
    console.log('menuClick', e.key);
    // 编程使导航
    navigate(e.key);
  };

  const handleOpenChange = (keys: string[]) => {
    // keys 是当前展开的 SubMenu 菜单项 key 数组
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[defaultSelectedKeys]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  );
};

export default LeftMenu;
