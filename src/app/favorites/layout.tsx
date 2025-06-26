import HeaderLayout from '@/components/layout/header-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout
      title="즐겨찾기"
      style={{ paddingRight: '0px', paddingLeft: '0px' }}
    >
      {children}
    </HeaderLayout>
  );
}
