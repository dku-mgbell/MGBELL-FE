export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex fixed top-0 justify-end w-full max-w-[450px] z-[999] pt-[calc(12px+env(safe-area-inset-top))]">
      {children}
    </div>
  );
}
