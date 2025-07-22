'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo/index.png';
import CrossIcon from '@/assets/svg/CrossIcon';
import { Button } from '@/components/ui/button';
import { useInstallGuideStore } from '@/hooks/stores/useInstallGuideStore';
import { handleInstallButtonClick } from '@/utils/handleInstallButtonClick';

export default function InstallationModal() {
  const { isModalOpen, setIsModalOpen } = useInstallGuideStore();

  if (!isModalOpen) return null;

  return (
    <>
      <div className="z-[99999] fixed top-0 left-1/2 transform -translate-x-1/2 max-w-[450px] w-full h-[100dvh] bg-gray1 opacity-20 z-[9999]">
        InstallationModal
      </div>
      <div className="z-[999999] w-full max-w-[450px] h-[230px] rounded-[16px] p-[20px] bg-white fixed bottom-[env(safe-area-inset-bottom)] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="clickable w-[24px] h-[24px] flex items-center justify-center self-end"
        >
          <CrossIcon size={14} />
        </button>
        <div className="flex flex-col gap-[24px] max-w-[265px] w-full items-center">
          <div className="flex items-center gap-[12px] ">
            <Image
              src={logo}
              alt="logo"
              width={57}
              height={57}
              className="rounded-[8px]"
            />
            <p className="text-b1 font-bold text-gray1">
              앱에서 마감 할인 소식을 <br />더 빠르게 알림으로 받아보세요!
            </p>
          </div>
          <div className="flex flex-col gap-[12px] w-full mb-[20px]">
            <Button className="rounded-full" onClick={handleInstallButtonClick}>
              편리한 앱에서 보기
            </Button>
            <button
              type="button"
              className="clickable underline text-b2 text-gray3"
              onClick={() => setIsModalOpen(false)}
            >
              괜찮아요. 웹으로 볼게요.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
