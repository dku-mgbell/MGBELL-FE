'use client';

import { StoreListSortType } from '@/types/store';
import SortNavButton from './button';
import { buttonConfig } from './button-config';
import SortWrapper from './wrapper';

export default function SortNav({
  sortValue,
}: {
  sortValue: StoreListSortType;
}) {
  return (
    <SortWrapper>
      {buttonConfig.map(({ name, sortValue: value }) => (
        <SortNavButton
          key={name}
          name={name}
          buttonValue={value}
          currentSortValue={sortValue}
        />
      ))}
    </SortWrapper>
  );
}
