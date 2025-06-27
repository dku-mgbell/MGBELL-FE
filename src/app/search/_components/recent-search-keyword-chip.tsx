import Link from 'next/link';
import CrossIcon from '@/assets/svg/CrossIcon';
import Chip from '@/components/ui/chip';

export default function RecentSearchKeywordChip({
  value,
  onDelete,
}: {
  value: string;
  onDelete: () => void;
}) {
  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <Link href={`/search?keyword=${value}`} className="clickable">
      <Chip className="flex items-center gap-[2px]">
        {value}
        <button
          type="button"
          className="ml-[4px] clickable"
          onClick={handleDeleteButtonClick}
        >
          <CrossIcon />
        </button>
      </Chip>
    </Link>
  );
}
