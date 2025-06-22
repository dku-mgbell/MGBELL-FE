import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout title="주문내역" previousPage="/order">
      {children}
    </HeaderLayout>
  );
}
