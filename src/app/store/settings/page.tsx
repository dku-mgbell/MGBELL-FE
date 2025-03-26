'use client';

// import { useRouter } from 'next/navigation';
import LogoutIcon from '@/assets/svg/LogoutIcon';
import MenuButton from '@/components/button/menu-button/menu-button';
import { useGetMyStoreInfo } from '@/hooks/query/store/useGetMyStoreInfo';
import { common } from '@/styles/common.css';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
// import ReviewIcon from '@/assets/svg/ReviewIcon';
import * as styles from './styles.css';

export default function Page() {
  const { open } = useModal();
  const { logout } = useAuth();
  // const route = useRouter();
  const { data, isLoading } = useGetMyStoreInfo();

  const menuButtonContent = {
    logout: {
      name: '로그아웃',
      icon: LogoutIcon,
      event: () => {
        open({
          content: '로그아웃 하시겠습니까?',
          confirmEvent: () => {
            logout();
          },
        });
      },
    },
    // changeStroe: {
    //   name: '매장 정보 변경',
    //   icon: ReviewIcon,
    //   event: () => {
    //     route.push('/store/settings/store');
    //   },
    // },
  };

  if (isLoading) return <> </>;
  return (
    <div className={styles.container}>
      <div className={common.box}>
        <p
          className={styles.storeActiveText({
            active: data?.status === 'ACTIVE',
          })}
        >
          {data?.status === 'ACTIVE' ? '승인된 매장' : '미승인 매장'}
        </p>
        {data?.storeName} 님 환영합니다!
      </div>
      {Object.entries(menuButtonContent).map(([id, button]) => (
        <MenuButton
          key={id}
          name={button.name}
          icon={button.icon}
          style={{
            backgroundColor: '#fff',
          }}
          event={button.event}
          shadow
        />
      ))}
    </div>
  );
}
