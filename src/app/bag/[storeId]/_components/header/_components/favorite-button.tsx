'use client';

import HeartOutlineIcon from '@/assets/svg/HeartOutlineIcon';
import { usePostFavorite } from '@/hooks/query/favorite/usePostFavorite';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useGetBagDetailStore } from '../../../_stores/useGetBagDetailStore';

interface Props {
  bagId: number;
}

export default function FavoriteButton({ bagId }: Props) {
  const { bagDetail, isBagDetailFetched } = useGetBagDetailStore();
  const { mutate: postFavorite } = usePostFavorite();
  const { isLoggedIn } = useAuthStore();
  const isFavorite = bagDetail?.id !== bagId ? false : bagDetail.favorite;

  const handleFavoriteButtonClick = () => {
    postFavorite({
      storeId: bagDetail!.storeId,
      status: !bagDetail!.favorite,
    });
  };

  return (
    isBagDetailFetched &&
    isLoggedIn && (
      <button
        type="button"
        onClick={handleFavoriteButtonClick}
        className="clickable mr-[15px]"
      >
        <HeartOutlineIcon filled={isFavorite} />
      </button>
    )
  );
}
