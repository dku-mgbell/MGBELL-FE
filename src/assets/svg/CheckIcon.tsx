import { colors } from '@/styles/constant';

export default function CheckIcon({
  theme,
  size,
}: {
  theme: 'primary' | 'secondary';
  size?: number;
}) {
  return (
    <svg
      width={size ?? 50}
      height={size ?? 50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="25"
        fill={theme === 'primary' ? colors.primary : colors.secondary}
      />
      <path
        d="M14.5156 25.9305L22.513 33.3127L38.5077 18.5483"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
