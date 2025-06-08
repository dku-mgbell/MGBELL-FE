import { ReactNode } from 'react';
import CheckIcon from '@/assets/svg/CheckIcon';

export default function SuccessLayout({
  title,
  message,
  theme,
}: {
  title: ReactNode;
  message?: string | ReactNode;
  theme?: 'primary' | 'secondary';
}) {
  return (
    <div className="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[10px]">
      <CheckIcon theme={theme ?? 'primary'} />
      <h2 className="text-center text-[24px] font-bold">{title}</h2>
      <p className="text-b2 text-gray3">{message}</p>
    </div>
  );
}
