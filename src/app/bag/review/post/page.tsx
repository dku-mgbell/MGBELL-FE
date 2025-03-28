'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Textarea from '@/components/input/textarea/textarea';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import Loader from '@/components/loader/loader';
import QuestionContainer from '@/components/question-container/question-container';
import { usePostReviewByUser } from '@/hooks/query/review/usePostReviewByUser';
import { ReviewScore, SatisfiedReason, UserReviewUpload } from '@/types/review';
import useModal from '@/hooks/useModal';
import PhotoUpload from '../../../../components/input/photo/photo-upload/photo-upload';
import ReviewScoreSelector from './(components)/review-score-selector/review-score-selector';
import SatisfiedReasonSelector from './(components)/satisfied-reason-selector/satisfied-reason-selector';
import * as styles from './styles.css';

export default function Page() {
  const params = useSearchParams();
  const orderId = Number(params.get('orderId'));
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [reviewUpload, setReviewUpload] = useState<UserReviewUpload>({
    orderId,
  });
  const [satisfiedReasons, setSatisfiedReansons] =
    useState<SatisfiedReason[]>();
  const { mutate: postReview, isPending, isSuccess } = usePostReviewByUser();
  const { open } = useModal();

  const handleReviewUpload = () => {
    open({
      content: '리뷰를 등록하시겠습니까?',
      confirmEvent: () => {
        postReview({
          ...reviewUpload,
          satisfiedReasons,
          file: imageFiles,
        });
      },
    });
  };

  if (isPending || isSuccess) return <Loader />;

  return (
    <Suspense>
      <HeaderLayout title="리뷰 작성" previousPageLink="/order">
        <StepsLayout
          onNextStep={handleReviewUpload}
          buttonContent="등록"
          isNextStepAllowed={!!reviewUpload.reviewScore}
        >
          <div className={styles.container}>
            <QuestionContainer
              title="서비스는 어떠셨나요?"
              desc="아래 카테고리를 눌러 평가해주세요."
              content={
                <ReviewScoreSelector
                  checked={reviewUpload.reviewScore}
                  onChange={(e) => {
                    setReviewUpload({
                      ...reviewUpload,
                      reviewScore: e.target.value as ReviewScore,
                    });
                  }}
                />
              }
            />
            <QuestionContainer
              title={
                <>
                  어떤 점이 만족스러웠나요?
                  <span className={styles.primaryText}>(최대 3개)</span>
                </>
              }
              content={
                <SatisfiedReasonSelector updateValue={setSatisfiedReansons} />
              }
            />
            <QuestionContainer
              title="따뜻한 구매 후기를 알려주세요."
              content={
                <Textarea
                  maxLength={100}
                  placeholder="구매 후기를 작성해주세요."
                  value={reviewUpload.content}
                  onChange={(e) => {
                    setReviewUpload({
                      ...reviewUpload,
                      content: e.target.value,
                    });
                  }}
                />
              }
            />
            <PhotoUpload updateImageFiles={setImageFiles} />
          </div>
        </StepsLayout>
      </HeaderLayout>
    </Suspense>
  );
}
