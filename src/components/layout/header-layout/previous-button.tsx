import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';

export default function PreviousButton({
  onClick,
  width,
  height,
}: {
  onClick?: () => void;
  width?: number;
  height?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer flex items-center"
    >
      <ChevronLeftIcon width={width} height={height} />
    </button>
  );
}
