import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function FormLayout({
  children,
  onSubmit,
  submitButtonText = '등록',
  className,
}: {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  submitButtonText?: string;
  className?: string;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'flex flex-col gap-[20px] py-[20px] pb-[90px] group',
        className,
      )}
    >
      {children}
      <div
        className={cn(
          'bg-white fixed bottom-0 pb-[20px] w-[calc(100%-40px)] left-1/2 -translate-x-1/2',
          'max-w-[410px] group-[.full]:max-w-full',
        )}
      >
        <Button type="submit">{submitButtonText}</Button>
      </div>
    </form>
  );
}
