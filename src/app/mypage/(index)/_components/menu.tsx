'use client';

// import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { useNotReadyModal } from '@/hooks/useModal/not-ready';

export default function Menu() {
  // const router = useRouter();
  const { openNotReadyModal } = useNotReadyModal();

  const menuList = [
    {
      title: '리뷰관리',
      onClick: () => {
        openNotReadyModal();
        // router.push('/mypage/review');
      },
    },
    {
      title: '고객센터',
      onClick: () => {
        window.open('https://pf.kakao.com/_UmqJn', '_blank');
      },
    },
  ];
  return (
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
  );
}
