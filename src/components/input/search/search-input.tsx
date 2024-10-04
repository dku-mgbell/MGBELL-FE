import SearchIcon from '@/assets/svg/SearchIcon';
import { styles } from './styles.css';

export default function SearchInput({
  placeholder,
  theme,
}: {
  placeholder: string;
  theme?: 'white' | 'lightGray';
}) {
  return (
    <div className={styles.searchInputContainer({ theme })}>
      <SearchIcon />
      <input className={styles.searchInput} placeholder={placeholder} />
    </div>
  );
}
