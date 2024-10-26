import HeartIcon from '@/assets/svg/HeartIcon';
import HomeIcon from '@/assets/svg/HomeIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import PersonIcon from '@/assets/svg/PersonIcon';
import PinIcon from '@/assets/svg/PinIcon';

export const navigationTabList = [
  {
    id: 'main',
    name: '메인',
    route: '/',
    icon: (active: boolean) => <HomeIcon active={active} />,
    margin: {},
  },
  {
    id: 'favorites',
    name: '즐겨찾기',
    route: '/favorites',
    icon: (active: boolean) => <HeartIcon active={active} />,
    margin: { marginLeft: '-70px' },
  },

  {
    id: 'order',
    name: '주문내역',
    route: '/order',
    icon: (active: boolean) => <PaperIcon active={active} />,
    margin: { marginRight: '-70px' },
  },
  {
    id: 'mypage',
    name: '마이페이지',
    route: '/mypage',
    icon: (active: boolean) => <PersonIcon active={active} />,
    margin: {},
  },
];

export const mapButtonInfo = {
  id: 'map',
  route: '/map',
  icon: <PinIcon />,
};
