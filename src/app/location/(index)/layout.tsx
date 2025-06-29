import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout title="주소 설정" previousPage="/">
      {children}
    </HeaderLayout>
  );
}
