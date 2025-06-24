'use client';

import SearchIcon from '@/assets/svg/SearchIcon';

export default function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center flex-1 gap-[9px] py-[10px] px-[15px] rounded-[10px] h-fit bg-white">
      <SearchIcon />
      <input
        className="w-full bg-transparent text-[14px] font-medium text-gray4 placeholder:text-gray4"
        placeholder={placeholder}
      />
    </div>
  );
}
