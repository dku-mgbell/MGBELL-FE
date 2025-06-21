import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout title="주문내역">
      <div className="pb-[calc(env(safe-area-inset-bottom)+70px)]">
        {children}
      </div>
    </HeaderLayout>
  );
}
