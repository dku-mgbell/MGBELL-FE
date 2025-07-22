import InstallationBar from './installation-bar.tsx';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-[450px] relative flex flex-col min-h-[100dvh] mx-auto has-[.full]:max-w-[100dvw]"
      style={{
        boxShadow: '0.2px 4px 4px 2px #00000010',
      }}
    >
      <InstallationBar />
      <div className="flex flex-col relative">{children}</div>
    </div>
  );
}
