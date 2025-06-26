import { ClipLoader } from 'react-spinners';
import useModal from '@/hooks/useModal/index';
import { colors } from '@/styles/constant';

export default function useLoadingModal() {
  const { open, close } = useModal();

  const openLoading = () => {
    open({
      showButton: false,
      content: (
        <div className="flex flex-col items-center gap-[15px]">
          <ClipLoader color={colors.primary} />
          <p className="text-b1 text-gray1">로딩 중...</p>
        </div>
      ),
      className: 'w-[200px] h-[180px] justify-center items-center',
    });
  };

  const closeLoading = () => {
    close();
  };

  return { openLoading, closeLoading };
}
