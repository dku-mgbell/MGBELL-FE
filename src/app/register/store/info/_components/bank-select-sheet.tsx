import { financialInstitutionIcon } from '@/assets/svg/bank/index';

export default function BankSelectSheet({
  value,
  updateValue,
  setOpen,
}: {
  value: string;
  updateValue: (value: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleInputchage = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
    setOpen(false);
  };
  return (
    <div className="flex flex-col gap-[20px] py-[12px] px-[20px]">
      <p className="text-h5">은행을 선택해주세요</p>
      <div className="grid grid-cols-3 gap-[7px]">
        {Object.entries(financialInstitutionIcon).map(([key, content]) => (
          <label
            key={key}
            className="clickable cursor-pointer flex flex-col items-center gap-[5px] rounded-[10px] border-[1px] border-gray11 bg-gray9 px-[11px] py-[9px] has-[:checked]:border-[2px] has-[:checked]:border-primary has-[:checked]:bg-primary/10"
          >
            <input
              type="radio"
              name="bank"
              className="hidden"
              onChange={handleInputchage}
              value={content.name}
              checked={value === content.name}
            />
            <div className="h-[48px] w-[48px]">{content.icon()}</div>
            <p className="text-center text-body2">{content.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
