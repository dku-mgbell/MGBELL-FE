import Link from 'next/link';
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
      <div className="px-[20px] pb-[16px] gap-[8px] flex flex-col">
        <AddressEnterLink />
        <Link href="/search">
          <SearchInput placeholder="가게명을 검색해보세요!" readOnly />
        </Link>
      </div>
      <SortNav sortValue={sortValue} />
    </HeaderContainer>
  );
}
