import { ControllerRenderProps } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group/index';
import { ReviewScoreName } from '@/types/review';

export default function ScoreRadioGroup({
  field,
}: {
  field: ControllerRenderProps<
    {
      rating: number;
      satisfactionReasons: string[];
      description: string;
    },
    'rating'
  >;
}) {
  return (
    <RadioGroup
      name={field.name}
      className="flex justify-evenly"
      value={field.value?.toString() ?? ''}
      onValueChange={(value) => field.onChange(Number(value))}
    >
      {Object.entries(ReviewScoreName).map(([key, value]) => (
        <RadioGroupItem
          key={key}
          value={key}
          buttonStyle="check"
          className="flex-col gap-[8px]"
          textClassName="text-b2 text-gray4 font-bold"
        >
          {value}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
}
