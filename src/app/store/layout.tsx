import { ReactNode } from 'react';
import { Container, Header, Main } from './_components/layout';
import Navigation from './_components/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Navigation />
    </Container>
  );
}
