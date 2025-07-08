import { OwnerTabOrderStatus } from '@/types/owner';
import { Container, TabLink } from './components';

export default function Aside({ status }: { status?: OwnerTabOrderStatus }) {
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
    paramState: OwnerTabOrderStatus | undefined,
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
    <Container>
      {Object.entries(tabContent).map(([tabId, tab]) => (
        <TabLink
          key={tabId}
          href={`/store/order?status=${tabId}`}
          active={handleTabActive(status, tabId)}
        >
          {tab.name}
        </TabLink>
      ))}
    </Container>
  );
}
