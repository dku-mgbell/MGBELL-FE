import HeartIcon from '@/assets/svg/HeartIcon';
import HomeIcon from '@/assets/svg/HomeIcon';
import OrderHistoryIcon from '@/assets/svg/OrderHistoryIcon';
import PersonIcon from '@/assets/svg/PersonIcon';
import PinIcon from '@/assets/svg/PinIcon';
import { READY_TO_DEPLOY } from '@/constant';

export const navigationTabList = [
  {
    id: 'main',
    forGuest: true,
    name: '메인',
    route: '/',
    icon: (active: boolean) => <HomeIcon active={active} />,
  },
  {
    id: 'favorites',
    forGuest: false,
    name: '즐겨찾기',
    route: '/favorites',
    icon: (active: boolean) => <HeartIcon active={active} />,
  },
  {
    id: 'map',
    forGuest: true,
    name: '내주변',
    route: '/map',
    icon: (active: boolean) => <PinIcon active={active} />,
    readyToDeploy: READY_TO_DEPLOY,
  },
  {
    id: 'order',
    forGuest: false,
    name: '주문내역',
    route: '/order',
    icon: (active: boolean) => <OrderHistoryIcon active={active} />,
    readyToDeploy: READY_TO_DEPLOY,
  },
  {
    id: 'mypage',
    forGuest: false,
    name: 'MY',
    route: '/mypage',
    icon: (active: boolean) => <PersonIcon active={active} />,
  },
];

export const mapButtonInfo = {
  id: 'map',
  route: '/map',
  icon: <PinIcon />,
};
