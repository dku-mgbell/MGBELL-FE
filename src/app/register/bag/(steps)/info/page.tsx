'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextField from '@/components/ui/text-field';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  description: z.string().min(1, { message: '' }),
  time: z.string().min(1, { message: '' }),
});

type RegisterBagFormFields = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBagFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterBagFormFields> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <LabeledField
        label="마감백 설명"
        description="마감백에 들어갈 음식을 설명해주세요!"
      >
        <TextField
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
            options={[
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
            ]}
          />
          <Selector
            placeholder="마감 시간"
            options={[
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '0:00',
            ]}
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
          placeholder="판매 상품의 정가 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="할인율 선택">
        <Selector placeholder="할인율 선택" options={['40%', '50%', '60%']} />
      </LabeledField>
      <div className="flex justify-between bg-[#FFF8EB] py-[14px] px-[20px] rounded-[10px]">
        <p className="text-b1">판매가</p>
        <p className="text-h4 text-[#EF444D]">3,900원</p>
      </div>
    </FormLayout>
  );
}
