import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/nextjs';
import type { VariantProps } from 'class-variance-authority';

import KakaoIcon from '@/assets/svg/social/kakao';
import { Button, buttonVariants } from '@/components/ui/button';

// Button의 정확한 타입 정의
type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const meta: Meta<ButtonProps> = {
  title: 'Example/Button',
  component: Button,
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
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary-outline', 'gray-outline'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['full', 'fit'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: fn(),
    children: '확인',
    variant: 'primary',
    size: 'full',
    disabled: false,
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '확인',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[500px] justify-center">
      <Button variant="primary">primary</Button>
      <Button variant="secondary-outline">secondary-outline</Button>
      <Button variant="gray-outline">gray-outline</Button>
    </div>
  ),
};

export const Customized: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[500px] justify-center">
      <Button className="bg-[#FFE200] text-gray1 relative">
        <KakaoIcon className="absolute left-[20px]" />
        카카오로 로그인하기
      </Button>
    </div>
  ),
};
