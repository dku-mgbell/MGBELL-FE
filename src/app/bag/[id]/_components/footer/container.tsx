export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex fixed max-w-[450px] bottom-0 left-1/2 -translate-x-1/2 p-[10px_1.2rem] pb-[calc(10px+env(safe-area-inset-bottom))] bg-white gap-[10px] w-full">
      {children}
    </div>
  );
}
