'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { zodResolver } from '@hookform/resolvers/zod';

type StoreForm = z.infer<typeof schema>;

const schema = z.object({
  storeName: z.string().min(1, { message: '' }),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoreForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<StoreForm> = (data) => {
    return data;
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <LabeledField
        label="매장 이름"
        description="체인점일 경우, 지점명까지 입력해주세요!"
      >
        <TextField
          placeholder="매장 이름 입력"
          register={register}
          name="storeName"
          errors={errors}
        />
      </LabeledField>
    </FormLayout>
  );
}
