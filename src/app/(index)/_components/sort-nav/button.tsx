import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function SortNavButton({
  name,
  value,
  sortValue,
  index,
}: {
  name: string;
  value: string;
  sortValue: string;
  index: number;
}) {
  const route = useRouter();

  return (
    <label
      key={name}
      className={cn(
        'clickable border-[1px] border-gray7',
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
        value={value}
        checked={sortValue ? sortValue === value : index === 0}
        className="hidden"
        onChange={() => route.push(`?sort=${value}`)}
      />
      {name}
    </label>
  );
}
