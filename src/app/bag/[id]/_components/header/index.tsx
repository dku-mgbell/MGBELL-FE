import BackButton from '@/components/button/back-button';
import Container from './_components/container';
import FavoriteButton from './_components/favorite-button';

interface Props {
  bagId: number;
}

export default function Header({ bagId }: Props) {
  return (
    <Container>
      <BackButton />
      <FavoriteButton bagId={bagId} />
    </Container>
  );
}
