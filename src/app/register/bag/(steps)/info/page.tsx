'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextField from '@/components/ui/text-field';
import TextArea from '@/components/ui/textarea';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { returnTimeOptions } from './_/returnTimeOptions';

const schema = z.object({
  description: z.string().min(1, { message: '' }),
  startTime: z.string().min(1, { message: '' }),
  endTime: z.string().min(1, { message: '' }),
  count: z.string().min(1, { message: '' }),
  costPrice: z.string().min(1, { message: '' }),
  discountRate: z.string().min(1, { message: '' }),
});

type RegisterBagFormFields = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<RegisterBagFormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const [finalPrice, setFinalPrice] = useState(0);
  const [costPrice, discountRate] = watch(['costPrice', 'discountRate']);

  const calculatePrice = (price?: number, discountPercentage?: string) => {
    if (!price || !discountPercentage) return 0;
    const discountNumber = Number(discountPercentage?.replace('%', ''));
    const result = Math.floor(((100 - discountNumber) / 100) * price - 100);
    if (result < 0) return 0;
    return result;
  };

  const onSubmit: SubmitHandler<RegisterBagFormFields> = (data) => {
    return data;
  };

  useEffect(() => {
    setFinalPrice(calculatePrice(Number(costPrice), discountRate));
  }, [costPrice, discountRate]);

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <LabeledField
        label="마감백 설명"
        description="마감백에 들어갈 음식을 설명해주세요!"
      >
        <TextArea
          name="description"
          placeholder="마감백 설명 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="판매 시간 설정">
        <div className="flex gap-[10px]">
          <Selector
            placeholder="시작 시간"
            options={returnTimeOptions('open', '16:00', getValues('endTime'))}
            setValue={(value) => {
              setValue('startTime', value, { shouldValidate: !!value });
            }}
            isError={!!errors.startTime}
          />
          <Selector
            placeholder="마감 시간"
            options={returnTimeOptions(
              'close',
              getValues('startTime'),
              '24:00',
            )}
            setValue={(value) => {
              setValue('endTime', value, { shouldValidate: !!value });
            }}
            isError={!!errors.endTime}
          />
        </div>
      </LabeledField>
      <LabeledField label="판매 개수 설정">
        <TextField
          name="count"
          placeholder="판매 개수 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="정가 입력">
        <TextField
          name="costPrice"
          type="number"
          placeholder="판매 상품의 정가 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="할인율 선택">
        <Selector
          placeholder="할인율 선택"
          options={['40%', '50%', '60%']}
          setValue={(value) => {
            setValue('discountRate', value, { shouldValidate: !!value });
          }}
          isError={!!errors.discountRate}
        />
      </LabeledField>
      <div className="flex justify-between bg-[#FFF8EB] py-[14px] px-[20px] rounded-[10px]">
        <p className="text-b1">판매가</p>
        <p className="text-h4 text-[#EF444D]">{commaizeNumber(finalPrice)}원</p>
      </div>
    </FormLayout>
  );
}
