'use client';

import HeartIcon from '@/assets/svg/HeartIcon';
import HomeIcon from '@/assets/svg/HomeIcon';
import OrderHistoryIcon from '@/assets/svg/OrderHistoryIcon';
import PersonIcon from '@/assets/svg/PersonIcon';
import PinIcon from '@/assets/svg/PinIcon';

export const navigationTabList = [
  {
    id: 'main',
    forGuest: true,
    name: '메인',
    route: '/',
    icon: (active: boolean) => <HomeIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'favorites',
    forGuest: false,
    name: '즐겨찾기',
    route: '/favorites',
    icon: (active: boolean) => <HeartIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'map',
    forGuest: true,
    name: '내주변',
    route: '/map',
    icon: (active: boolean) => <PinIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'order',
    forGuest: false,
    name: '주문내역',
    route: '/order',
    icon: (active: boolean) => <OrderHistoryIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'mypage',
    forGuest: false,
    name: 'MY',
    route: '/mypage',
    icon: (active: boolean) => <PersonIcon active={active} />,
    readyToDeploy: true,
  },
];

export const adminNavigationTabList = [
  {
    id: 'list',
    forGuest: false,
    name: '가게 목록',
    route: '/admin/store/list',
    icon: (active: boolean) => <HomeIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'approve',
    forGuest: false,
    name: '가게 승인',
    route: '/admin/store/approve',
    icon: (active: boolean) => <OrderHistoryIcon active={active} />,
    readyToDeploy: true,
  },
  {
    id: 'settings',
    forGuest: false,
    name: '설정',
    route: '/admin/settings',
    icon: (active: boolean) => <PersonIcon active={active} />,
    readyToDeploy: true,
  },
];

export const mapButtonInfo = {
  id: 'map',
  route: '/map',
  icon: <PinIcon />,
  readyToDeploy: true,
};
