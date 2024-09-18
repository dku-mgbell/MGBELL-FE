import FilterIcon from './assets/svg/FilterIcon';
import LocationMarkerIcon from './assets/svg/LocationMarkerIcon';
import SearchIcon from './assets/svg/SearchIcon';
import { styles } from './styles.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.location}>
          <LocationMarkerIcon />
          위치를 설정해주세요!
        </div>
        <div className={styles.search}>
          <div className={styles.searchInputContainer}>
            <SearchIcon />
            <input
              className={styles.searchInput}
              placeholder="당신의 맛집을 찾아보세요!"
            />
          </div>
          <button type="button" className={styles.filterButton}>
            <FilterIcon />
          </button>
        </div>
      </header>
    </section>
  );
}
