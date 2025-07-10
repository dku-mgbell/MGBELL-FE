'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormLayout from '@/components/layout/form-layout';
import { Form, FormField } from '@/components/ui/form';
import LabeledField from '@/components/ui/labeled-field';
import TextArea from '@/components/ui/textarea';
import { usePostReview } from '@/hooks/query/user/review/usePostReview';
import {
  ReviewScore,
  SatisFactionReason,
  UserReviewUploadRequest,
} from '@/types/review';
import useModal from '@/hooks/useModal';
import ImageUploader from '@/components/image-uploader';
import SatistfactionCheckGroup from './_components/satistfaction-check-group';
import ScoreRadioGroup from './_components/score-radio-group';

const formSchema = z.object({
  rating: z.number().min(1, { message: '' }),
  satisfactionReasons: z.array(z.string()),
  description: z.string().min(1, { message: '' }),
});

export type UserReviewFormSchema = z.infer<typeof formSchema>;

export default function Page({
  params: { orderGoodsId },
}: {
  params: { orderGoodsId: string };
}) {
  const form = useForm<UserReviewFormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      rating: undefined,
      satisfactionReasons: [],
      description: '',
    },
  });
  const [files, setFiles] = useState<File[]>([]);
  const { mutate: postReview } = usePostReview();
  const { open } = useModal();

  function onSubmit(values: UserReviewFormSchema) {
    const request: UserReviewUploadRequest = {
      description: values.description,
      rating: values.rating as ReviewScore,
      satisfactionReasons: values.satisfactionReasons as SatisFactionReason[],
      orderGoodsId: Number(orderGoodsId),
      reviewImageRegisters: files.map((file, index) => ({
        id: index,
        key: file.name,
      })),
      images: files,
    };
    open({
      title: '리뷰를 업로드할까요?',
      description: '리뷰 업로드 후 수정이 불가능해요',
      confirmEvent: () => {
        postReview(request);
      },
    });
  }

  return (
    <Form {...form}>
      <FormLayout onSubmit={form.handleSubmit(onSubmit)} className="gap-[32px]">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <LabeledField
              label="서비스는 어떠셨나요?"
              description="서비스 이용에 대한 만족도를 선택해주세요"
              isError={!!form.formState.errors.rating?.message}
            >
              <ScoreRadioGroup field={field} />
            </LabeledField>
          )}
        />
        <FormField
          control={form.control}
          name="satisfactionReasons"
          render={({ field }) => (
            <LabeledField label="이런 점이 만족스러웠어요!">
              <SatistfactionCheckGroup field={field} />
            </LabeledField>
          )}
        />
        <LabeledField label="따뜻한 구매후기를 알려주세요!">
          <FormField
            control={form.control}
            name="description"
            render={() => (
              <>
                <TextArea
                  name="description"
                  variant="outline"
                  placeholder="구매후기를 작성해주세요!"
                  className="h-[120px]"
                  register={form.register}
                  errors={form.formState.errors}
                />
                <ImageUploader setFiles={setFiles} isError={false} />
              </>
            )}
          />
        </LabeledField>
      </FormLayout>
    </Form>
  );
}
