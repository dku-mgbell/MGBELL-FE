import LikeIcon from '@/assets/svg/LikeIcon';
import { usePostFavorite } from '@/hooks/query/favorite/usePostFavorite';

export default function FavoriteButton({
  isActive,
  storeId,
}: {
  isActive: boolean;
  storeId: number;
}) {
  const { mutate: postFavorite } = usePostFavorite();

  return (
    <button
      type="button"
      onClick={() => postFavorite({ storeId, status: !isActive })}
    >
      <LikeIcon width={39} height={39} off={!isActive} />
    </button>
  );
}
