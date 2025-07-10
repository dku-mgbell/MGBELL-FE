export default function CheckIconOutline({
  className,
  color,
  width,
  height,
  borderType = 'thick',
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  borderType?: 'thin' | 'thick';
}) {
  if (borderType === 'thick') {
    return (
      <svg
        className={className}
        width={width ?? 14}
        height={height ?? 10}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0408 0.292893C13.4313 0.683417 13.4313 1.31658 13.0408 1.70711L5.70743 9.04044C5.31691 9.43096 4.68374 9.43096 4.29322 9.04044L0.959885 5.70711C0.569361 5.31658 0.569361 4.68342 0.959885 4.29289C1.35041 3.90237 1.98357 3.90237 2.3741 4.29289L5.00033 6.91912L11.6266 0.292893C12.0171 -0.0976311 12.6502 -0.0976311 13.0408 0.292893Z"
          fill={color ?? 'white'}
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width={width ?? 18}
      height={height ?? 13}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1L6 12L1 7"
        stroke={color ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
