function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[13px] border-t border-[#D9D9D9] pt-[21px]">
      {children}
    </div>
  );
}

export function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-[10px]">{children}</div>;
}

export function Key({ children }: { children: React.ReactNode }) {
  return <div className="text-[#AEAEAE] w-[90px]">{children}</div>;
}

export function Value({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#5A5A5A] flex-1 line-break-anywhere">{children}</div>
  );
}

export const Table = {
  Body,
  Row,
  Key,
  Value,
};
