import { useUserHistoryStore } from '@/hooks/stores/useUserHistoryStore';
import RecentSearchKeywordChip from '../recent-search-keyword-chip';

export default function RecentKeywordList() {
  const { searchKeywordHistory, deleteSearchKeywordHistory } =
    useUserHistoryStore();

  return (
    <ul className="flex flex-wrap gap-[8px] min-h-[84px] h-[84px] overflow-hidden">
      {searchKeywordHistory.map((value) => (
        <RecentSearchKeywordChip
          key={value}
          value={value}
          onDelete={() => deleteSearchKeywordHistory(value)}
        />
      ))}
    </ul>
  );
}
