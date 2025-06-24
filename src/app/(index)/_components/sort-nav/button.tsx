import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { StoreListSortType } from '@/types/store';

export default function SortNavButton({
  name,
  buttonValue,
  currentSortValue,
}: {
  name: string;
  buttonValue: StoreListSortType;
  currentSortValue: StoreListSortType;
}) {
  const route = useRouter();
  const handleNavButtonClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (currentSortValue === buttonValue) {
      e.preventDefault();
      route.push('/');
      return;
    }
    route.push(`?sort=${buttonValue}`);
  };

  return (
    <label
      key={name}
      className={cn(
        'clickable flex-1 text-center border-[1px] border-gray7 max-w-[90px]',
        'rounded-[20px] px-2.5 py-[8px] font-bold text-gray4',
        'has-[input:checked]:border-primary has-[input:checked]:bg-primary has-[input:checked]:text-white',
        'text-xs whitespace-nowrap',
        'transition-all duration-300',
        'inline-block w-fit',
      )}
    >
      <input
        type="radio"
        name="sort"
        value={buttonValue}
        checked={currentSortValue === buttonValue}
        className="hidden"
        onClick={handleNavButtonClick}
      />
      {name}
    </label>
  );
}
