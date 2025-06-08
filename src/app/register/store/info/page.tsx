'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import useSearchAddress from '@/hooks/useSearchAddress';

type StoreForm = z.infer<typeof schema>;

const schema = z.object({
  storeName: z.string().min(1, { message: '' }),
  address: z.string().min(1, { message: '' }),
  detailAddress: z.string().optional(),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<StoreForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { address, openAddressModal, coordData } = useSearchAddress({
    setValue,
  });

  const onSubmit: SubmitHandler<StoreForm> = (data) => {
    return {
      ...data,
      coord: [coordData?.addresses[0].x, coordData?.addresses[0].y],
    };
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
      <LabeledField label="매장 주소">
        <TextField
          name="address"
          placeholder="매장 주소 입력"
          register={register}
          errors={errors}
          value={address}
          onClick={openAddressModal}
          onKeyDown={openAddressModal}
        />
        <TextField
          name="detailAddress"
          placeholder="상세 주소 입력 (선택)"
          register={register}
          errors={errors}
        />
      </LabeledField>
    </FormLayout>
  );
}
