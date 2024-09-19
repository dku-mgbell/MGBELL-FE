import { useRouter } from 'next/navigation';
import { MainPageView, MainPageViewKR } from '@/types/pageView';
import { viewButton } from './styles.css';

export function ViewChangeButton({
  id,
  viewType,
}: {
  id: MainPageView;
  viewType: MainPageView;
}) {
  const route = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        route.push(`?viewType=${id}`);
      }}
      className={viewButton({
        color: viewType === id ? id : id === 'list' && !viewType && id,
      })}
    >
      {MainPageViewKR[id]}
    </button>
  );
}
