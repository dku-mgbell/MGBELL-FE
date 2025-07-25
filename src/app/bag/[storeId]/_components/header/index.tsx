import BackButton from '@/components/button/back-button';
import Container from './_components/container';
import FavoriteButton from './_components/favorite-button';

export default function Header() {
  return (
    <Container>
      <BackButton />
      <FavoriteButton />
    </Container>
  );
}
