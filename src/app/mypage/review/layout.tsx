import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout title="리뷰 관리" previousPage="/mypage">
      {children}
    </HeaderLayout>
  );
}
