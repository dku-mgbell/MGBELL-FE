import ChevronDownIcon from '../assets/svg/ChevronDownIcon';
import { styles } from '../styles/storeListStyles.css';

export default function StoreList() {
  return (
    <main className={styles.main}>
      <section className={styles.filterContainer}>
        <div className={styles.sortContainer}>
          <span>정렬 :</span>
          <button type="button" className={styles.sortButton}>
            새로 생긴 가게 순 <ChevronDownIcon />
          </button>
        </div>
        <div>
          <span>예약불가 가게제외</span>
        </div>
      </section>
    </main>
  );
}
