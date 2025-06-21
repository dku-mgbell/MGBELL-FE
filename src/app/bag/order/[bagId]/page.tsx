'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import Loader from '@/components/loader/loader';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextArea from '@/components/ui/textarea';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { usePostBagOrder } from '@/hooks/query/order/usePostBagOrder';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { returnTimeOptions } from '@/utils/returnTimeOptions';
import useModal from '@/hooks/useModal';
import OrderDetailTable, { OrderData } from '@/components/order-detail-table';

const schema = z.object({
  pickupTime: z.string().min(1, { message: '' }),
  request: z.string(),
});

type OrderForm = z.infer<typeof schema>;

export default function Page() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useGetBagDetail({
    isLoggedIn: true,
    id: Number(searchParams.get('bagId')),
  });
  const { bagAmount } = useBagOrderState();
  const {
    mutate: postOrder,
    isPending,
    isSuccess,
  } = usePostBagOrder(isLoading ? 0 : (data!.salePrice! * bagAmount ?? 100));
  const { open } = useModal();
  const [price, setPrice] = useState(0);
  const [orderData, setOrderData] = useState<OrderData>();
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
  const request = watch('request');

  useEffect(() => {
    if (data) {
      setPrice(data.salePrice! * bagAmount);
    }
    setOrderData({
      가게: data.storeName,
      픽업장소: data.address,
      // 결제수단: '현장결제',
      수량: bagAmount,
      결제금액: `${commaizeNumber(data.salePrice! * bagAmount)}원`,
      픽업시간: null,
      요청사항: null,
    });
  }, [data, bagAmount]);

  useEffect(() => {
    setOrderData((prev) => ({
      ...prev,
      픽업시간: pickupTime,
      요청사항: request,
    }));
  }, [pickupTime, request]);

  const handleOrderButtonClick = (form: OrderForm) => {
    open({
      content: '주문하시겠습니까?',
      confirmEvent: () =>
        postOrder({
          storeId: data!.storeId,
          pickupTime: form.pickupTime,
          request: form.request,
          amount: bagAmount,
          payment: 'SPOT',
        }),
    });
  };

  if (isLoading || isPending || isSuccess) return <Loader />;

  return (
    <FormLayout
      onSubmit={handleSubmit(handleOrderButtonClick)}
      submitButtonText={`${commaizeNumber(price)}원 · 주문하기`}
    >
      <LabeledField label="픽업시간 설정">
        <Selector
          placeholder={watch('pickupTime') || '픽업시간을 선택해주세요'}
          options={returnTimeOptions('pickUp', data?.startAt, data?.endAt)}
          setValue={(value) =>
            setValue('pickupTime', value, { shouldValidate: true })
          }
          isError={!!errors.pickupTime}
        />
      </LabeledField>
      <LabeledField label="요청사항">
        <TextArea
          name="request"
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
