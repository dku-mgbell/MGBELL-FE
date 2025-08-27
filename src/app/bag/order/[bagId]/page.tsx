'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import Loader from '@/components/loader/loader';
import LabeledField from '@/components/ui/labeled-field';
import TextArea from '@/components/ui/textarea';
import TimePicker from '@/components/ui/time-picker';
import { usePostBagOrder } from '@/hooks/query/order/usePostBagOrder';
import { useGetStoreDetailWithBag } from '@/hooks/query/store/useGetStoreDetailWithBag';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { getMinPickUpTime } from '@/utils/getMinPickUpTime';
import { getOrderFullDateByTime } from '@/utils/getOrderFullDateByTime';
import { getPickUpTimeofToday } from '@/utils/getPickUpTimeofToday';
import OrderDetailTable, { OrderData } from '@/components/order-detail-table';
import useModal from '@/hooks/useModal';
import { useUserPaymentStore } from '../_stores/useUserPaymentStore';

const schema = z.object({
  pickupTime: z.string().min(1, { message: '' }),
  memo: z.string(),
});

type OrderForm = z.infer<typeof schema>;

export default function Page() {
  const searchParams = useSearchParams();
  const storeId = searchParams.get('storeId');
  const { bagAmount } = useBagOrderState();
  const { data, isLoading: isStoreDetailLoading } = useGetStoreDetailWithBag(
    storeId ?? '',
  );
  const totalPrice =
    isStoreDetailLoading || !data?.salePrice ? 0 : data.salePrice * bagAmount;
  const { mutate: postOrder } = usePostBagOrder();
  const { open } = useModal();
  const [price, setPrice] = useState(0);
  const [orderData, setOrderData] = useState<OrderData>();
  const { userPaymentStore, setUserPaymentStore } = useUserPaymentStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<OrderForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const pickupTime = watch('pickupTime');
  const memo = watch('memo');

  useEffect(() => {
    if (data?.salePrice) {
      setPrice(data.salePrice * bagAmount);
    }
    setOrderData({
      가게: data?.storeName ?? '',
      픽업장소: data?.address ?? '',
      수량: bagAmount,
      결제금액: `${commaizeNumber((data?.salePrice ?? 0) * bagAmount)}원`,
      픽업시간: null,
      요청사항: null,
    });
  }, [data, bagAmount]);

  useEffect(() => {
    setOrderData((prev) => ({
      ...prev,
      픽업시간: pickupTime ? pickupTime.split('+')[0].replace('T', ' ') : '',
      요청사항: memo,
    }));
  }, [pickupTime, memo]);

  const handleOrderButtonClick = (form: OrderForm) => {
    if (!data?.goodsId) return;

    open({
      title: '주문을 진행하시겠어요?',
      description: '선택하신 상품으로 주문을 진행할게요.',
      confirmButtonText: '주문하기',
      confirmEvent: () => {
        setUserPaymentStore({
          ...userPaymentStore,
          name: data.storeName,
          amount: totalPrice,
        });

        postOrder({
          goodsId: data.goodsId,
          pickupTime: getOrderFullDateByTime({
            time: form.pickupTime,
          }),
          memo: form.memo,
          quantity: bagAmount,
          totalPrice,
        });
      },
    });
  };

  if (isStoreDetailLoading) return <Loader />;

  return (
    <FormLayout
      onSubmit={handleSubmit(handleOrderButtonClick)}
      submitButtonText={`${commaizeNumber(price)}원 · 주문하기`}
    >
      <LabeledField label="픽업시간 설정">
        <TimePicker
          placeholder="픽업시간을 선택해주세요"
          minTime={getMinPickUpTime(data!.startTime, data!.endTime)}
          maxTime={data?.endTime ?? getPickUpTimeofToday({ type: 'close' })}
          value={pickupTime}
          onChange={(value) => {
            if (value) {
              const selectedDate = new Date(value);
              let dueDate = selectedDate;
              if (selectedDate < new Date()) {
                dueDate = new Date(dueDate);
                dueDate.setDate(dueDate.getDate() + 1);
              }
              const duePickUpTime = `${dueDate.getFullYear()}-${String(dueDate.getMonth() + 1).padStart(2, '0')}-${String(dueDate.getDate()).padStart(2, '0')}T${value.split('T')[1]}`;
              setValue('pickupTime', duePickUpTime, {
                shouldValidate: true,
              });
            }
          }}
        />
      </LabeledField>
      <LabeledField label="요청사항">
        <TextArea
          name="memo"
          placeholder="가게 사장님에게 전달할 요청사항을 50자 이내로 작성해주세요 (선택)"
          maxLength={50}
          register={register}
          errors={errors}
          className="h-[100px]"
        />
      </LabeledField>
      <LabeledField label="주문상세">
        <OrderDetailTable data={orderData} />
      </LabeledField>
    </FormLayout>
  );
}
