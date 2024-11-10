import Link from 'next/link';
import { OrderState } from '@/types/order';
import * as styles from './styles.css';

export default function Aside({ state }: { state: OrderState }) {
  const tabContent = {
    REQUESTED: {
      name: '대기',
    },
    ACCEPTED: {
      name: '진행',
    },
    COMPLETED: {
      name: '완료',
    },
  };
  return (
    <div className={styles.container}>
      {Object.entries(tabContent).map(([tabId, tab]) => (
        <Link
          key={tabId}
          href={`/store/order?state=${tabId}`}
          className={styles.tab({
            active: state ? tabId === state : tabId === 'pending',
          })}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
