import { useEffect, useState } from 'react';
import { TextSkeleton } from '@/components/ui/skeleton';

export default function Text({
  value,
  height,
  className,
  width = 100,
}: {
  width?: number;
  value?: string | number | React.ReactNode;
  height: number;
  className: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !value) {
    return (
      <TextSkeleton
        className={className}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }

  return (
    <p className={className} style={{ height: `${height}px` }}>
      {value}
    </p>
  );
}
