import { Checkbox } from '@/components/ui/checkbox';

export default function AgreementItem({
  label,
  isChecked,
  onChange,
  moreContentUrl,
}: {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  moreContentUrl?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="clickable flex items-center gap-[16px] font-bold">
        <Checkbox checked={isChecked} onCheckedChange={onChange} />
        {label}
      </label>
      {moreContentUrl && (
        <button
          type="button"
          className="text-gray4 font-regular text-b2"
          onClick={() => {
            window.open(moreContentUrl, '_blank');
          }}
        >
          내용보기
        </button>
      )}
    </div>
  );
}
