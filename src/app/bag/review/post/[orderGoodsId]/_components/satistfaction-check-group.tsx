import { ControllerRenderProps } from 'react-hook-form';
import ChipCheckGroup, {
  ChipCheckGroupItem,
} from '@/components/ui/chip-check-group';
import { SatisfiedReasonName } from '@/types/review';

export default function SatistfactionCheckGroup({
  field,
}: {
  field: ControllerRenderProps<
    {
      rating: number;
      satisfactionReasons: string[];
      description: string;
    },
    'satisfactionReasons'
  >;
}) {
  return (
    <ChipCheckGroup>
      {Object.entries(SatisfiedReasonName).map(([key, label]) => (
        <ChipCheckGroupItem
          key={key}
          name={field.name}
          checked={
            Array.isArray(field.value) ? field.value.includes(key) : false
          }
          onCheckedChange={(checked) => {
            const currentValue = Array.isArray(field.value) ? field.value : [];
            return checked
              ? field.onChange([...currentValue, key])
              : field.onChange(currentValue.filter((value) => value !== key));
          }}
        >
          {label}
        </ChipCheckGroupItem>
      ))}
    </ChipCheckGroup>
  );
}
