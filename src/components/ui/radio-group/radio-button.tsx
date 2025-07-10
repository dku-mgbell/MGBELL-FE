import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import CheckIconOutline from '@/assets/svg/CheckIconOutline';
import { cn } from '@/lib/utils';

interface RadioButtonProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  children?: React.ReactNode;
  buttonStyle?: RadioButtonStyle;
  className?: string;
}

function Indicator({ children, className, ...props }: RadioButtonProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0',
        'transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        {children}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

function Circle({ ...props }: RadioButtonProps) {
  return (
    <Indicator
      className={cn(
        'cursor-pointer size-4 border-input text-primary  rounded-full border shadow-xs ',
        'data-[state=checked]:border-primary',
      )}
      {...props}
    >
      <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2" />
    </Indicator>
  );
}

function Check({ ...props }: RadioButtonProps) {
  return (
    <div className="relative w-[40px] h-[40px] flex items-center justify-center">
      <CheckIconOutline
        className="absolute z-[999]"
        color="#BDBDBD"
        borderType="thin"
      />
      <Indicator
        className={cn(
          'absolute top-0',
          'w-[40px] h-[40px] border-input text-primary rounded-full shadow-xs',
          'data-[state=checked]:bg-primary',
          'bg-gray8',
        )}
        {...props}
      >
        <CheckIconOutline
          className="absolute z-[999]"
          color="#212121"
          borderType="thin"
        />
      </Indicator>
    </div>
  );
}

const Button = {
  circle: Circle,
  check: Check,
  // eslint-disable-next-line react/jsx-no-useless-fragment
  text: () => <></>,
};

export type RadioButtonStyle = keyof typeof Button;

export default function RadioButton({
  buttonStyle = 'circle',
  ...props
}: RadioButtonProps) {
  const ButtonComponent = Button[buttonStyle];
  return <ButtonComponent {...props} />;
}
