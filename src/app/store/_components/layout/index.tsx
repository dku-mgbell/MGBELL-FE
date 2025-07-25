export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="full w-full left-0 flex flex-col h-screen ">{children}</div>
  );
}

export function Header() {
  return (
    <header className="flex w-full bg-primary p-5 items-center gap-5 h-[60px] fixed top-0">
      <p className="text-white font-bold text-h4 whitespace-nowrap">
        오늘도 마감벨과 함께 Zero Food Waste를 실천해주셔서 감사합니다.
      </p>
    </header>
  );
}

export function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex-1 bg-gray9 pt-[120px]">{children}</main>;
}
