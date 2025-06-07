import type { Meta, StoryObj } from '@storybook/nextjs';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';

type Props = React.ComponentProps<typeof LabeledField> & {
  children: React.ReactNode;
};

const meta: Meta<Props> = {
  title: 'Input/LabeledField',
  component: LabeledField,
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
    children: {
      control: {
        disable: true,
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: <TextField placeholder="이메일을 입력해주세요" />,
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '이메일',
    description: '이메일을 입력해주세요',
  },
};
