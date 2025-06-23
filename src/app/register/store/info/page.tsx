'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import BottomSheet from '@/components/bottom-sheet/index';
import FormLayout from '@/components/layout/form-layout';
import LabeledField from '@/components/ui/labeled-field';
import { Selector } from '@/components/ui/select';
import TextField from '@/components/ui/text-field';
import { usePostStoreRegistration } from '@/hooks/query/store/usePostStoreRegistration';
import { phoneRegex } from '@/utils/regex';
import useSearchAddress from '@/hooks/useSearchAddress';
import ImageUploader from '../(components)/image-uploader';
import BankSelectSheet from './_components/bank-select-sheet';

type StoreForm = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, ''),
  address: z.string().min(1, ''),
  detailAddress: z.string().optional(),
  ownerName: z.string().min(1, ''),
  ownerPhone: z.string().regex(phoneRegex, ''),
  businessNumber: z.string().min(1, ''),
  bankAccount: z.string().min(1, ''),
  bankName: z.string().min(1, ''),
  images: z.array(z.instanceof(File)).min(1, ''),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<StoreForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { openAddressModal, coordData } = useSearchAddress({
    setValue,
  });
  const [isBankSelectSheetOpen, setIsBankSelectSheetOpen] = useState(false);
  const { mutate: postStoreRegistration } = usePostStoreRegistration();

  const onSubmit: SubmitHandler<StoreForm> = (data) => {
    const fullAddress = `${data.address} ${data.detailAddress}`;
    const request = { ...data };
    delete request.detailAddress;

    postStoreRegistration({
      ...request,
      address: fullAddress,
      latitude: Number(coordData?.addresses[0].x ?? 0),
      longitude: Number(coordData?.addresses[0].y ?? 0),
      storeImagesRegisters: data.images.map((image, index) => ({
        id: index + 1,
        key: image.name,
      })),
    });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <LabeledField
        label="매장 이름"
        description="체인점일 경우, 지점명까지 입력해주세요!"
      >
        <TextField
          name="name"
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
          readOnly
          className="cursor-pointer"
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
        <Selector
          placeholder={getValues('bankName') || '은행 선택'}
          onClick={() => setIsBankSelectSheetOpen(true)}
          isError={!!errors.bankName}
        />
        <TextField
          name="bankAccount"
          type="number"
          placeholder="계좌번호 입력"
          register={register}
          errors={errors}
        />
      </LabeledField>
      <LabeledField
        label="대표 이미지"
        description="최소 1장의 사진을 추가해주세요"
      >
        <ImageUploader
          setFiles={(files) =>
            setValue('images', files, { shouldValidate: files.length > 0 })
          }
          isError={!!errors.images}
        />
      </LabeledField>
      <BottomSheet
        isOpen={isBankSelectSheetOpen}
        setOpen={setIsBankSelectSheetOpen}
        height={500}
      >
        <BankSelectSheet
          value={getValues('bankName')}
          updateValue={(value) =>
            setValue('bankName', value, { shouldValidate: true })
          }
          setOpen={setIsBankSelectSheetOpen}
        />
      </BottomSheet>
    </FormLayout>
  );
}
