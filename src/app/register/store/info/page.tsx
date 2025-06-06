'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { useRegisterStore } from '@/hooks/query/store/useRegisterStore';
import { zodResolver } from '@hookform/resolvers/zod';

type RegisterStoreFormFields = z.infer<typeof schema>;

const schema = z.object({
  storeName: z.string().min(1, { message: '' }),
  address: z.string().min(1, { message: '' }),
  ownerName: z.string().min(1, { message: '' }),
  ownerPhone: z.string().min(1, { message: '' }),
  businessRegiNum: z.string().min(1, { message: '' }),
  bankName: z.string().min(1, { message: '' }),
  accountNumber: z.string().min(1, { message: '' }),
  storeImages: z.array(z.instanceof(File)),
});

export default function Page() {
  const { mutate } = useRegisterStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterStoreFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterStoreFormFields> = (data) => {
    mutate({
      storeName: data.storeName,
      ownerName: data.ownerName,
      contact: data.ownerPhone,
      businessRegiNum: data.businessRegiNum,
      address: data.address,
      longitude: '',
      latitude: '',
      storeType: null,
      images: data.storeImages,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px] p-[20px] pb-[90px]"
    >
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
          placeholder="대표님 연락처 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="사업자 등록 번호">
        <TextField
          name="businessRegiNum"
          placeholder="사업자 등록 번호 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="은행 정보">
        <TextField
          name="bankName"
          placeholder="은행 선택"
          register={register}
          errors={errors}
        />
        <TextField
          name="accountNumber"
          placeholder="계좌번호 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField label="대표 이미지">
        <TextField
          name="storeImages"
          placeholder="대표 이미지 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <div className="bg-white fixed bottom-0 pb-[20px] w-[calc(100%-40px)] left-1/2 -translate-x-1/2 max-w-[410px]">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}
