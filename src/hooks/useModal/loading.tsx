import { ClipLoader } from 'react-spinners';
import useModal from '@/hooks/useModal/index';
import { colors } from '@/styles/constant';

export default function useLoadingModal() {
  const { open, close: closeLoading } = useModal();

  const openLoading = (message?: string) => {
    open({
      showButton: false,
      content: (
        <div className="flex flex-col items-center gap-[15px]">
          <ClipLoader color={colors.primary} />
          <p className="text-b1 text-gray1">{message ?? '로딩 중...'}</p>
        </div>
      ),
      className: 'w-[200px] h-[180px] justify-center items-center',
    });
  };

  return { openLoading, closeLoading };
}
