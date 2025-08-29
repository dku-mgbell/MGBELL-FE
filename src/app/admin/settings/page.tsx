'use client';

import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import HeaderLayout from '@/components/layout/header-layout';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

export default function Page() {
  const router = useRouter();
  const { logout } = useAuth();
  const { open } = useModal();

  const menuList = [
    {
      title: '로그아웃',
      onClick: () => {
        open({
          title: '로그아웃',
          description: '로그아웃하시겠습니까?',
          confirmEvent: () => {
            logout();
            router.push('/login');
          },
        });
      },
    },
  ];
  return (
    <HeaderLayout title="설정">
      <div className="flex flex-col justify-between items-center bg-gray10 rounded-[10px] px-[20px]">
        {menuList.map((menu) => (
          <button
            key={menu.title}
            type="button"
            onClick={menu.onClick}
            className="w-full h-[50px] flex items-center justify-between clickable"
          >
            <p className="text-b1">{menu.title}</p>
            <ChevronRightIcon color="#000" />
          </button>
        ))}
      </div>
    </HeaderLayout>
  );
}
