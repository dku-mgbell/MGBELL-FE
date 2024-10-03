import { storeList } from '@/mocks/storeList';
import ChevronDownIcon from '../../assets/svg/ChevronDownIcon';
import { styles } from '../../styles/storeListStyles.css';

export default function StoreList() {
  return (
    <main className={styles.main}>
      <section className={styles.filterContainer}>
        <div className={styles.sortContainer}>
          <span>정렬 :</span>
          <button type="button">
            새로 생긴 가게 순 <ChevronDownIcon />
          </button>
        </div>
        <div>
          <span>예약불가 가게제외</span>
        </div>
      </section>
      <section className={styles.storeContainer}>
        {storeList.map(
          ({
            id,
            isNew,
            remain,
            isLike,
            thumbnail,
            openTime,
            closeTime,
            rate,
            distance,
            originalPrice,
            salePrice,
            storeName,
            bagName,
          }) => (
            <li key={id}>
              <div style={{ backgroundImage: `url('${thumbnail}')` }}>
                <div>
                  {isNew} {remain} {isLike}
                </div>
                <p>{storeName}</p>
              </div>
              <div>
                <div>
                  <p>{bagName}</p>
                  <p>
                    {openTime} ~ {closeTime}
                  </p>
                  <p>
                    {rate} | {distance}km
                  </p>
                </div>
                <div>
                  <p>{originalPrice}</p>
                  <p>{salePrice}</p>
                </div>
              </div>
            </li>
          ),
        )}
      </section>
    </main>
  );
}
