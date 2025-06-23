'use client';

import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import Loader from '@/components/loader/loader';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextArea from '@/components/ui/textarea';
import { usePostBagOrder } from '@/hooks/query/order/usePostBagOrder';
import { useGetStoreDetailWithBag } from '@/hooks/query/store/useGetStoreDetailWithBag';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { format24HourTime } from '@/utils/format24HourTime';
import { format24HourTimeToFullDate } from '@/utils/format24HourTimeToFullDate';
import { returnTimeOptions } from '@/utils/returnTimeOptions';
import useModal from '@/hooks/useModal';
import OrderDetailTable, { OrderData } from '@/components/order-detail-table';

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
  const { mutate: postOrder } = usePostBagOrder(totalPrice);
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
  const memo = watch('memo');
  const [formattedStartTime, formattedEndTime] = useMemo(() => {
    if (!data) return [];
    return [data.startTime, data.endTime].map((time) => format24HourTime(time));
  }, [data]);

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
      픽업시간: pickupTime,
      요청사항: memo,
    }));
  }, [pickupTime, memo]);

  const handleOrderButtonClick = (form: OrderForm) => {
    if (!data?.goodsId) return;

    open({
      content: '주문하시겠습니까?',
      confirmEvent: () => {
        postOrder({
          goodsId: data.goodsId,
          pickupTime: format24HourTimeToFullDate(form.pickupTime),
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
        <Selector
          placeholder={pickupTime || '픽업시간을 선택해주세요'}
          options={returnTimeOptions(
            'pickUp',
            formattedStartTime,
            formattedEndTime,
          )}
          setValue={(value) =>
            setValue('pickupTime', value, { shouldValidate: true })
          }
          isError={!!errors.pickupTime}
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
