'use client';

import Link from 'next/link';
import LocationMarkerIcon from '@/assets/svg/LocationMarkerIcon';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import { colors } from '@/styles/constant';

export default function AddressEnterLink() {
  const { userAddress } = useAddressStateStore();

  return (
    <Link
      href="location"
      className="flex items-center gap-[8px] whitespace-nowrap overflow-hidden text-ellipsis line-clamp-1 max-w-full"
    >
      <LocationMarkerIcon color={colors.gray1} />
      <span className="text-b1 font-bold text-gray1 flex-1 line-clamp-1 text-ellipsis whitespace-nowrap overflow-hidden">
        {userAddress.address ?? '위치를 입력해주세요'}
      </span>
    </Link>
  );
}
