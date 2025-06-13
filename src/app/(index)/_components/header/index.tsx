import SearchInput from '@/components/input/search/search-input';
import SortNav from '../sort-nav';
import AddressEnterLink from './address-enter-link';
import HeaderContainer from './container';

export default function MainHeader({ sortValue }: { sortValue: string }) {
  return (
    <HeaderContainer>
      <AddressEnterLink />
      <SearchInput placeholder="가게의 이름을 검색해보세요!" />
      <SortNav sortValue={sortValue} />
    </HeaderContainer>
  );
}
