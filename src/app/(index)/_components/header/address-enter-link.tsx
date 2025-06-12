'use client';

import Link from 'next/link';
import LocationMarkerIcon from '@/assets/svg/LocationMarkerIcon';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';

export default function AddressEnterLink() {
  const { addressState } = useAddressStateStore();

  return (
    <Link
      href="location"
      className="flex items-center gap-[8px] whitespace-nowrap overflow-hidden text-ellipsis line-clamp-1 max-w-full"
    >
      <LocationMarkerIcon />
      <span className="text-b1 font-bold text-white flex-1 line-clamp-1 text-ellipsis whitespace-nowrap overflow-hidden">
        {addressState.address ? addressState.address : '위치를 입력해주세요'}
      </span>
    </Link>
  );
}
