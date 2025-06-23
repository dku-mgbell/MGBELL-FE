'use client';

import { useDeleteAccount } from '@/hooks/query/user/useDeleteAccount';
import { useAuth } from '@/hooks/useAuth';
import useModal from '@/hooks/useModal';

export default function Footer() {
  const { logout } = useAuth();
  const { mutate: deleteAccount } = useDeleteAccount();
  const { open } = useModal();

  const handleLogout = () => {
    open({
      content: '로그아웃하시겠습니까?',
      confirmEvent: () => {
        logout();
      },
    });
  };

  const handleWithdraw = () => {
    open({
      content: '탈퇴하시겠습니까?',
      confirmEvent: () => {
        deleteAccount();
      },
    });
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
