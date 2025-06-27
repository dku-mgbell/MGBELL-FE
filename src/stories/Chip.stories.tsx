import type { Meta, StoryObj } from '@storybook/nextjs';

import Chip from '@/components/ui/chip';

const meta = {
  title: 'Text/Chip',
  component: Chip,
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
    variant: {
      control: 'select',
      options: ['default', 'primary'],
    },
  },
  args: {
    children: '친절한 사장님',
    variant: 'default' as 'default' | 'primary',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
