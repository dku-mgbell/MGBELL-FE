import Link from 'next/link';
import { OrderState } from '@/types/order';
import * as styles from './styles.css';

export default function Aside({ state }: { state?: OrderState | '' }) {
  const tabContent = {
    '': {
      name: '전체',
    },
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

  const handleTabActive = (
    paramState: OrderState | '' | undefined,
    tabId: string,
  ) => {
    if (paramState) {
      if (paramState.length === 0) {
        return tabId === '';
      }
      return tabId === paramState;
    }
    return tabId === '';
  };

  return (
    <div className={styles.container}>
      {Object.entries(tabContent).map(([tabId, tab]) => (
        <Link
          key={tabId}
          href={`/store/order?state=${tabId}`}
          className={styles.tab({
            active: handleTabActive(state, tabId),
          })}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
