import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Counter from '@/components/ui/counter';

type Props = React.ComponentProps<typeof Counter>;

const meta: Meta<Props> = {
  title: 'Input/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] flex justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: {
        disable: true,
      },
    },
    maxCount: {
      control: {
        type: 'number',
      },
    },
    minCount: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  render: (args) => {
    function CounterWrapper() {
      const setValue = useState(0)[1];

      return (
        <Counter
          defaultValue={args.defaultValue}
          setValue={setValue}
          maxCount={args.maxCount}
          minCount={args.minCount}
        />
      );
    }

    return <CounterWrapper />;
  },
};
