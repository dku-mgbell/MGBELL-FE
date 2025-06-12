export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-[450px] flex flex-col min-h-[100dvh] mx-auto"
      style={{
        boxShadow: '0.2px 4px 4px 2px #00000010',
      }}
    >
      {children}
    </div>
  );
}
