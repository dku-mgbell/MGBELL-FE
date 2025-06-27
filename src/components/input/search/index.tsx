import { ForwardedRef, forwardRef } from 'react';
import SearchIcon from '@/assets/svg/SearchIcon';
import { cn } from '@/lib/utils';

export default forwardRef(function SearchInput(
  {
    placeholder,
    className,
  }: {
    placeholder: string;
    className?: string;
  },
  ref: ForwardedRef<HTMLInputElement | null>,
) {
  return (
    <div
      className={cn(
        'flex items-center flex-1 gap-[9px] py-[10px] px-[15px] rounded-[10px] h-fit bg-white',
        className,
      )}
    >
      <SearchIcon />
      <input
        ref={ref}
        className="w-full bg-transparent text-[14px] font-medium text-gray4 placeholder:text-gray4"
        placeholder={placeholder}
      />
    </div>
  );
});
