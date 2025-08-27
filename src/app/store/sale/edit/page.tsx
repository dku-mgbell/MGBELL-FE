'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import Counter from '@/components/ui/counter';
import { Form, FormField } from '@/components/ui/form';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextField from '@/components/ui/text-field';
import TextArea from '@/components/ui/textarea';
import TimePicker from '@/components/ui/time-picker';
import usePatchBag from '@/hooks/query/bag/usePatchBag';
import { useGetOwnerStoreInfo } from '@/hooks/query/owner/useGetOwnerStoreInfo';
import { calculateSalePrice } from '@/utils/calculateSalePrice';
import { getOrderFullDateByTime } from '@/utils/getOrderFullDateByTime';
import { getPickUpTimeofToday } from '@/utils/getPickUpTimeofToday';
import useModal from '@/hooks/useModal';
import { colors } from '@/styles/constant';

const formSchema = z.object({
  description: z.string().min(1, { message: '' }),
  startTime: z.string().min(1, { message: '' }),
  endTime: z.string().min(1, { message: '' }),
  quantity: z.number().min(0, { message: '' }),
  originalPrice: z.coerce.number().min(0, { message: '' }),
  discount: z.number().min(1, { message: '' }),
});

export type BagEditFormSchema = z.infer<typeof formSchema>;

export default function Page() {
  const { data, isLoading } = useGetOwnerStoreInfo();
  const [finalPrice, setFinalPrice] = useState(0);
  const { mutate: patchBag } = usePatchBag();
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  }) as any;
  const {
    formState: { errors },
  } = form;

  const [originalPrice, discount] = form.watch(['originalPrice', 'discount']);
  const { open } = useModal();

  function onSubmit(values: BagEditFormSchema) {
    if (finalPrice < 300) {
      open({
        title: '판매가 설정 오류',
        description: '판매가는 300원 이상이어야 합니다.',
      });
      return;
    }

    open({
      title: '판매 정보를 수정하시겠습니까?',
      description: '수정 완료시 판매 정보가 바로 반영됩니다.',
      confirmEvent: () => {
        patchBag({
          goodsId: data!.data.data.goodsList[0].goodsId!,
          ...values,
          salePrice: finalPrice,
          startTime: getOrderFullDateByTime({
            time: values.startTime,
            isStore: true,
          }),
          endTime: getOrderFullDateByTime({
            time: values.endTime,
            isStore: true,
          }),
        });
      },
    });
  }

  useEffect(() => {
    if (data) {
      const goodsInfo = data.data.data.goodsList[0];
      form.setValue('description', goodsInfo.description);
      form.setValue('quantity', goodsInfo.stockQuantity);
      form.setValue('originalPrice', goodsInfo.originPrice);
      form.setValue('discount', goodsInfo.discount);
      form.setValue('startTime', goodsInfo.startTime);
      form.setValue('endTime', goodsInfo.endTime);
    }
  }, [data]);

  useEffect(() => {
    setFinalPrice(calculateSalePrice(originalPrice, `${discount}%`));
  }, [originalPrice, discount]);

  if (isLoading) {
    return <ClipLoader className="absolute-center" color={colors.primary} />;
  }

  return (
    <Form {...form}>
      <FormLayout
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-[32px] bg-white m-[20px] p-[20px] pb-[150px] rounded-[10px] full"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <LabeledField
              label="마감백 설명"
              description="마감백에 들어갈 음식을 설명해주세요!"
            >
              <TextArea
                placeholder="마감백 설명 입력"
                errors={errors}
                {...field}
              />
            </LabeledField>
          )}
        />

        <LabeledField label="판매 시간 설정">
          <div className="flex gap-[10px]">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <TimePicker
                  placeholder="시작 시간"
                  minTime={getPickUpTimeofToday({ type: 'open' })}
                  maxTime={getPickUpTimeofToday({ type: 'close' })}
                  value={field.value}
                  onChange={(value) => {
                    if (value) {
                      field.onChange(value);
                      form.trigger('endTime');
                    }
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <TimePicker
                  placeholder="종료 시간"
                  minTime={form.getValues('startTime')}
                  maxTime={getPickUpTimeofToday({ type: 'close' })}
                  value={field.value}
                  onChange={(value) => {
                    if (value) {
                      field.onChange(value);
                      form.trigger('startTime');
                    }
                  }}
                />
              )}
            />
          </div>
        </LabeledField>
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <LabeledField label="판매 수량 설정">
              <Counter
                defaultValue={field.value}
                minCount={1}
                setValue={(value) => {
                  field.onChange(Number(value));
                }}
              />
            </LabeledField>
          )}
        />
        <FormField
          control={form.control}
          name="originalPrice"
          render={({ field }) => (
            <LabeledField label="정가 입력">
              <TextField
                type="number"
                placeholder="정가 입력"
                errors={errors}
                {...field}
              />
            </LabeledField>
          )}
        />
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <LabeledField label="할인율 설정">
              <Selector
                placeholder={`${form.getValues('discount')}%`}
                options={['40%', '50%', '60%']}
                setValue={(value) => {
                  field.onChange(Number(value.replace('%', '')));
                }}
                isError={!!form.formState.errors.discount}
              />
            </LabeledField>
          )}
        />
        <div className="flex justify-between bg-[#FFF8EB] py-[14px] px-[20px] rounded-[10px]">
          <p className="text-b1">판매가</p>
          <p className="text-h4 text-[#EF444D]">
            {finalPrice.toLocaleString()}원
          </p>
        </div>
      </FormLayout>
    </Form>
  );
}
