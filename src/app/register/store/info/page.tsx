'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { phoneRegex } from '@/utils/regex';
import { zodResolver } from '@hookform/resolvers/zod';
import useSearchAddress from '@/hooks/useSearchAddress';

type StoreForm = z.infer<typeof schema>;

const schema = z.object({
  storeName: z.string().min(1, ''),
  address: z.string().min(1, ''),
  detailAddress: z.string().optional(),
  ownerName: z.string().min(1, ''),
  ownerPhone: z.string().regex(phoneRegex, ''),
  businessNumber: z.string().min(1, ''),
  accountNumber: z.string().min(1, ''),
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
  const { openAddressModal, coordData } = useSearchAddress({
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
          name="storeName"
          placeholder="매장 이름 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="매장 주소">
        <TextField
          name="address"
          placeholder="매장 주소 입력"
          register={register}
          errors={errors}
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
      <LabeledField label="대표님 정보">
        <TextField
          name="ownerName"
          placeholder="대표님 성함 입력"
          register={register}
          errors={errors}
        />
        <TextField
          name="ownerPhone"
          type="number"
          placeholder="대표님 연락처 입력 (숫자만 입력)"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="사업자 등록 번호">
        <TextField
          name="businessNumber"
          type="number"
          placeholder="사업자 등록 번호 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="계좌 등록">
        <TextField
          name="accountNumber"
          type="number"
          placeholder="계좌번호 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
    </FormLayout>
  );
}
