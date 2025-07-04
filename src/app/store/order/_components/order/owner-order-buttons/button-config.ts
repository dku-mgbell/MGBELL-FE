import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import { OwnerOrderAction } from '@/types/owner';

export const config: Record<
  OwnerOrderAction,
  { variant: VariantProps<typeof buttonVariants>['variant'] }
> = {
  approve: {
    variant: 'primary',
  },
  reject: {
    variant: 'primary-light',
  },
  completed: {
    variant: 'primary',
  },
  cancel: {
    variant: 'red',
  },
};
