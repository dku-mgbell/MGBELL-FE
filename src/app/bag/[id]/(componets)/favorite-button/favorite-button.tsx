import LikeIcon from '@/assets/svg/LikeIcon';

export default function FavoriteButton({ isActive }: { isActive: boolean }) {
  /* TODO API 연결 */
  return (
    <button type="button">
      <LikeIcon width={39} height={39} off={!isActive} />
    </button>
  );
}
