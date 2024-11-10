'use client';

import HeaderLayout from '@/components/layout/header-layout/header-layout';
import { useRouter } from 'next/navigation';
import ReviewIcon from '@/assets/svg/ReviewIcon';
import FileWithdrawalIcon from '@/assets/svg/FileWithdrawalIcon';
import LogoutIcon from '@/assets/svg/LogoutIcon';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useDeleteAccount } from '@/hooks/query/user/useDeleteAccount';
import { colors } from '@/styles/constant';
import * as styles from './styles.css';
import MenuButton from '../(components)/menu-button/menu-button';

export default function Page() {
  const route = useRouter();
  const { logout } = useAuth();
  const { open } = useModal();
  const { mutate: deleteAccount } = useDeleteAccount();

  const buttonData = {
    accountSettings: {
      name: '계정관리',
      event: () => {
        route.push('/mypage/settings/account');
      },
      icon: ReviewIcon,
      color: colors.primary,
    },
    deleteAccount: {
      name: '회원탈퇴',
      event: () => {
        open({
          content: '탈퇴하시겠습니까?',
          confirmEvent: () => {
            deleteAccount();
          },
        });
      },
      icon: FileWithdrawalIcon,
      color: '',
    },
    logout: {
      name: '로그아웃',
      event: () => {
        open({
          content: '로그아웃 하시겠습니까?',
          confirmEvent: () => {
            logout();
          },
        });
      },
      icon: LogoutIcon,
      color: '',
    },
  };

  return (
    <HeaderLayout title="환경설정" previousPageLink="/mypage">
      <div className={styles.container}>
        {Object.entries(buttonData).map(([key, button]) => (
          <MenuButton
            key={key}
            event={button.event}
            name={button.name}
            icon={button.icon}
            iconColor={button.color}
          />
        ))}
      </div>
    </HeaderLayout>
  );
}
