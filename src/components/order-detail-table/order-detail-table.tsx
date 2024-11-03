import * as styles from './styles.css';

export default function OrderDetailTable({
  orderData,
}: {
  orderData: Record<string, string | number>;
}) {
  return (
    <div className={styles.orderTable}>
      {Object.entries(orderData).map(([key, value]) => (
        <div key={key} className={styles.tableRow}>
          <p className={styles.tableKey}>{key}</p>
          <p className={styles.tableValue}>{value}</p>
        </div>
      ))}
    </div>
  );
}
