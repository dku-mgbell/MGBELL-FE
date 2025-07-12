import Link from 'next/link';
import SearchInput from '@/components/input/search';
import { useMapStore } from '../_stores/useMapStore';

export default function StoreSearchInput() {
  const { selectedStore } = useMapStore();

  if (selectedStore) {
    return null;
  }

  return (
    <div className="w-full max-w-[450px] absolute -translate-x-1/2 left-1/2 top-[20px]  z-[999] px-[20px]">
      <Link href="/search" className="w-full">
        <SearchInput
          placeholder="가게의 이름을 검색해보세요!"
          className="border-[1px] border-gray7"
        />
      </Link>
    </div>
  );
}
