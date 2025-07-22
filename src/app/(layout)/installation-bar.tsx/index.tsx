'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/assets/images/logo/index.png';
import CrossIcon from '@/assets/svg/CrossIcon';
import { Button } from '@/components/ui/button';
import { useInstallGuideStore } from '@/hooks/stores/useInstallGuideStore';
import { cn } from '@/lib/utils';
import { handleInstallButtonClick } from '@/utils/handleInstallButtonClick';

export default function InstallationBar() {
  const { isBarShown, setIsBarShown, isModalOpen } = useInstallGuideStore();
  const pathname = usePathname();

  const handleCloseButtonClick = () => {
    setIsBarShown(false);
  };

  if (!isBarShown) return null;

  if (pathname === '/' && isModalOpen) return null;

  return (
    <div
      className={cn(
        'fixed top-0 z-[99999] w-full bg-white h-[70px] max-w-[450px] right-1/2 translate-x-1/2',
        'px-[12px] py-[15px] flex items-center justify-between',
        'flex justify-between',
      )}
    >
      <div className="flex items-center gap-[12px]">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="rounded-[8px]"
        />
        <div>
          <p className="text-b2 font-bold">마감벨</p>
          <p className="text-b3 text-gray4">
            최대 60% 우리 동네 마감 할인 서비스
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
        <Button
          size="fit"
          className="px-[16px] py-[4px] rounded-full text-b2"
          onClick={handleInstallButtonClick}
        >
          다운로드
        </Button>
        <button
          type="button"
          onClick={handleCloseButtonClick}
          className="clickable w-[24px] h-[24px] flex items-center justify-center"
        >
          <CrossIcon size={14} />
        </button>
      </div>
    </div>
  );
}
