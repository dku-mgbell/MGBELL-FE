import { ChangeEvent } from 'react';
import Image from 'next/image';
import CheckIconOutline from '@/assets/svg/CheckIconOutline';
import { cn } from '@/lib/utils';

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className={cn(
        'clickable w-[50%] overflow-hidden flex flex-col',
        'items-center gap-[5px]',
        'rounded-[10px] p-[12px] pb-[20px] border-[2px] border-gray8 cursor-pointer',
        'has-[input:checked]:border-[2px] has-[input:checked]:border-primary has-[input:checked]:bg-[#FFF8EB]',
        'has-[input:checked]:[&>div:first-child]:bg-primary has-[input:checked]:[&>div:first-child]:border-gray7',
      )}
    >
      {children}
    </label>
  );
}

function CheckBoxIcon() {
  return (
    <div className="flex self-start items-center justify-center w-[18px] h-[18px] border-[1px] rounded-[2px] border-gray6">
      <CheckIconOutline />
    </div>
  );
}

function Character({ image, label }: { image: string; label: string }) {
  return (
    <div className="mb-[8px]">
      <Image alt={label} src={image} width={80} height={95} />
    </div>
  );
}

function LabelText({
  label,
  description,
}: {
  label: string;
  description: React.ReactNode;
}) {
  return (
    <div>
      <strong className="text-b1">{label}</strong>
      <p className="text-b3 text-center">{description}</p>
    </div>
  );
}

function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="radio"
      name="user-type"
      value={value}
      onChange={onChange}
      className="hidden"
    />
  );
}

export const UserButton = {
  Label,
  CheckBoxIcon,
  Character,
  LabelText,
  Input,
};
