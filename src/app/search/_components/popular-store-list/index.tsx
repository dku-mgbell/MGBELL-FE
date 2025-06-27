import { useGetStoreList } from '@/hooks/query/store/useGetStoreList';
import PopularStoreListItem from './list-item';

export default function PopularStoreList() {
  const { data: storeList } = useGetStoreList({
    page: 0,
    size: 4,
    sortType: 'RATING_DESC',
  });

  return (
    <ul className="grid grid-cols-2 gap-[10px] gap-y-[16px] ">
      {storeList?.map((content) => {
        return <PopularStoreListItem key={content.storeId} content={content} />;
      })}
    </ul>
  );
}
