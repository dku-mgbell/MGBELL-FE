import { ClipLoader } from 'react-spinners';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Modal from '@/components/modal/index';
import { colors } from '@/styles/constant';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] h-[300px] p-[30px] flex justify-center items-center bg-gray9">
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
    content: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    title: '알림이 신청되었어요!',
    description: '매장의 마감백이 오픈되면 알려드릴게요',
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

export const Loading: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Modal
      showButton={false}
      content={
        <div className="flex flex-col items-center gap-[15px]">
          <ClipLoader color={colors.primary} />
          <p className="text-b1 text-gray1">로딩 중...</p>
        </div>
      }
      className="w-[200px] h-[180px] justify-center items-center"
    />
  ),
};
