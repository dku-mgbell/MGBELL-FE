import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { VariantProps } from 'class-variance-authority';
import TextField, { textFieldVariants } from '@/components/ui/text-field';

type TextFieldProps = React.ComponentProps<'input'> &
  VariantProps<typeof textFieldVariants>;

const meta: Meta<TextFieldProps> = {
  title: 'Example/TextField',
  component: TextField,
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
    type: {
      control: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'error'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: fn(),
    disabled: false,
  },
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: '텍스트 입력',
    type: 'text',
  },
};
