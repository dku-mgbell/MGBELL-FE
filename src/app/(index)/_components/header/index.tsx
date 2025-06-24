import SearchInput from '@/components/input/search';
import { StoreListSortType } from '@/types/store';
import SortNav from '../sort-nav';
import AddressEnterLink from './address-enter-link';
import HeaderContainer from './container';

export default function MainHeader({
  sortValue,
}: {
  sortValue: StoreListSortType;
}) {
  return (
    <HeaderContainer>
      <AddressEnterLink />
      <SearchInput placeholder="가게의 이름을 검색해보세요!" />
      <SortNav sortValue={sortValue} />
    </HeaderContainer>
  );
}
