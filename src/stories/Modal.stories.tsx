import type { Meta, StoryObj } from '@storybook/nextjs';
import Modal from '@/components/modal/modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-full h-[300px] p-[30px] flex justify-center items-center bg-gray9">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    confirmEvent: {
      control: {
        type: 'boolean',
      },
    },
    visible: {
      control: {
        disable: true,
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    title: '주문 확인',
    description: '주문하시겠습니까?',
    confirmEvent: () => {
      alert('confirm');
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Modal {...args} />,
};
