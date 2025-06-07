import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';

export default function FormLayout({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-[20px] p-[20px] pb-[90px]"
    >
      {children}
      <div className="bg-white fixed bottom-0 pb-[20px] w-[calc(100%-40px)] left-1/2 -translate-x-1/2 max-w-[410px]">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}
