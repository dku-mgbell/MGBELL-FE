import { colors } from '@/styles/constant';

export default function LikeIcon({
  off,
  width,
  height,
}: {
  off?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={off ? colors.black : '#EF444D'} />
      <path
        d="M12 19L11.13 18.2087C8.04 15.4093 6 13.5569 6 11.297C6 9.44469 7.452 8 9.3 8C10.344 8 11.346 8.48556 12 9.24687C12.654 8.48556 13.656 8 14.7 8C16.548 8 18 9.44469 18 11.297C18 13.5569 15.96 15.4093 12.87 18.2087L12 19Z"
        fill="white"
      />
    </svg>
  );
}
