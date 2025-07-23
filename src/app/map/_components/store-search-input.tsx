import Link from 'next/link';
import SearchInput from '@/components/input/search';
import { useMapStore } from '../_stores/useMapStore';

export default function StoreSearchInput() {
  const { selectedStore } = useMapStore();

  if (selectedStore) {
    return null;
  }

  return (
    <div className="w-full max-w-[450px] absolute -translate-x-1/2 left-1/2 top-[calc(env(safe-area-inset-top)+20px)] z-[999] px-[20px]">
      <Link href="/search" className="w-full">
        <SearchInput
          placeholder="마감백 운영 가게 검색"
          className="border-[1px] border-gray7"
          readOnly
        />
      </Link>
    </div>
  );
}
