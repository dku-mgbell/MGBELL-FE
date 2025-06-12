'use client';

import SortNavButton from './button';
import { buttonConfig } from './button-config';
import SortWrapper from './wrapper';

export default function SortNav({ sortValue }: { sortValue: string }) {
  return (
    <SortWrapper>
      {buttonConfig.map(({ name, sortValue: value }, index) => (
        <SortNavButton
          key={name}
          name={name}
          value={value}
          sortValue={sortValue}
          index={index}
        />
      ))}
    </SortWrapper>
  );
}
