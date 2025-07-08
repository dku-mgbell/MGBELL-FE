'use client';

import HeartOutlineIcon from '@/assets/svg/HeartOutlineIcon';
import { useGetStoreFavorite } from '@/hooks/query/favorite/useGetStoreFavorite';
import { usePatchStoreFavorite } from '@/hooks/query/favorite/usePatchStoreFavorite';
import { useAuth } from '@/hooks/useAuth';
import { useStoreDetailStore } from '../../../_stores/useStoreDetailStore';

export default function FavoriteButton() {
  const { storeId, isStoreDetailFetched } = useStoreDetailStore();
  const { mutate: patchFavorite } = usePatchStoreFavorite();
  const { isLoggedIn } = useAuth();
  const { data: isFavorite } = useGetStoreFavorite(storeId!);

  const handleFavoriteButtonClick = () => {
    patchFavorite({
      storeId: storeId!,
      type: isFavorite ? 'delete' : 'post',
    });
  };

  return (
    isStoreDetailFetched &&
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
