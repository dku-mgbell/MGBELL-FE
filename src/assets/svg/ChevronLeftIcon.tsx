export default function ChevronLeftIcon({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width ?? 12}
      height={height ?? 20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3766 19C10.5347 19 10.6966 18.9396 10.8179 18.8223C11.0607 18.5877 11.0607 18.2039 10.8179 17.9693L2.50975 9.94047L10.6966 2.02893C10.9393 1.79435 10.9393 1.4105 10.6966 1.17593C10.4538 0.941356 10.0566 0.941356 9.8139 1.17593L1.18205 9.51397C0.939316 9.74854 0.939316 10.1324 1.18205 10.367L9.93159 18.8223C10.0566 18.9431 10.2148 19 10.3766 19Z"
        fill="black"
        stroke="black"
      />
    </svg>
  );
}
