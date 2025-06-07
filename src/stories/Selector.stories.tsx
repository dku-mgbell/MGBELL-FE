import type { Meta, StoryObj } from '@storybook/nextjs';
import { Selector } from '@/components/ui/select';

type SelectorProps = React.ComponentProps<typeof Selector>;

const meta: Meta<SelectorProps> = {
  title: 'Input/Selector',
  component: Selector,
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
    placeholder: {
      control: {
        type: 'text',
      },
    },
    options: {
      control: {},
    },
  },
  args: {
    placeholder: '은행 선택',
    options: ['국민', '신한', '하나'],
  },
} satisfies Meta<SelectorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: '은행 선택',
    options: ['국민', '신한', '하나'],
  },
};
