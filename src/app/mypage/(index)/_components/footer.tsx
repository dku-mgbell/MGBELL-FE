'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';
import { useUserAccountInfoStore } from '../_stores/useUserAccountInfoStore';

export default function Footer() {
  const { logout } = useAuth();
  const { open } = useModal();
  const router = useRouter();
  const { userAccountInfo } = useUserAccountInfoStore();

  const handleLogout = () => {
    open({
      content: '로그아웃하시겠습니까?',
      confirmEvent: () => {
        logout();
      },
    });
  };

  const handleWithdraw = () => {
    router.push(`/delete/${userAccountInfo?.providerType}`);
  };

  return (
    <div className="flex justify-center gap-[20px] items-center">
      <button
        type="button"
        onClick={handleLogout}
        className="clickable text-b2 text-gray4"
      >
        로그아웃
      </button>
      <hr className="w-[0.5px] h-[18px] bg-gray4" />
      <button
        type="button"
        onClick={handleWithdraw}
        className="clickable text-b2 text-gray4"
      >
        회원탈퇴
      </button>
    </div>
  );
}
