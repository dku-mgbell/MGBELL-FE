import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout title="회원가입" previousPage="/login">
      {children}
    </HeaderLayout>
  );
}
