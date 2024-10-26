export default function HeartIcon({ active }: { active?: boolean }) {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0588 19L8.60029 17.6332C3.42 12.7978 0 9.59836 0 5.69482C0 2.49537 2.43424 0 5.53235 0C7.28259 0 8.96241 0.838692 10.0588 2.15368C11.1552 0.838692 12.8351 0 14.5853 0C17.6834 0 20.1176 2.49537 20.1176 5.69482C20.1176 9.59836 16.6976 12.7978 11.5174 17.6332L10.0588 19Z"
        fill={active ? '#FFB51F' : '#A5A5A5'}
      />
    </svg>
  );
}
