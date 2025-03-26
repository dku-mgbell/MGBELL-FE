'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchIcon from '@/assets/svg/SearchIcon';
import { styles } from './styles.css';

export default function SearchInput({
  placeholder,
  theme,
}: {
  placeholder: string;
  theme?: 'white' | 'lightGray';
}) {
  const route = useRouter();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      route.push(`${keyword.length > 0 ? `?search=${keyword}` : '?'}`);
    }, 500);
    return () => clearTimeout(handler);
  }, [keyword]);

  return (
    <div className={styles.searchInputContainer({ theme })}>
      <SearchIcon />
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
    </div>
  );
}
