'use client';

import { ForwardedRef, forwardRef } from 'react';
import SearchIcon from '@/assets/svg/SearchIcon';
import { cn } from '@/lib/utils';

type SearchInputProps = React.ComponentProps<'input'> & {
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default forwardRef(function SearchInput(
  { className, onEnter, ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement | null>,
) {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return; // 한글 입력 시 조합 중인 상태에서는 이벤트 처리를 중단하여 이중 입력 방지
    if (e.key === 'Enter') {
      onEnter?.(e);
    }
  };

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
        onKeyDown={handleEnterKeyDown}
        {...props}
      />
    </div>
  );
});
