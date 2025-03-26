'use client';

import Link from 'next/link';
import LocationMarkerIcon from '@/assets/svg/LocationMarkerIcon';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import * as styles from './styles.css';

export default function AdressEnterLink() {
  const { addressState } = useAddressStateStore();

  return (
    <Link href="location" className={styles.location}>
      <LocationMarkerIcon />
      <span className={styles.locationText}>
        {addressState.address ? addressState.address : '위치를 입력해주세요'}
      </span>
    </Link>
  );
}
