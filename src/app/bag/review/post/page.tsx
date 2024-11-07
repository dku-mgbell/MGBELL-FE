'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Textarea from '@/components/input/textarea/textarea';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { ReviewScore, SatisfiedReason, UserReviewUpload } from '@/types/review';
import { usePostReviewByUser } from '@/hooks/query/review/usePostReviewByUser';
import ReviewScoreSelector from './(components)/review-score-selector/review-score-selector';
import SatisfiedReasonSelector from './(components)/satisfied-reason-selector/satisfied-reason-selector';
import * as styles from './styles.css';
import PhotoUpload from './(components)/photo-upload/photo-upload';

export default function Page() {
  const params = useSearchParams();
  const orderId = Number(params.get('orderId'));
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [reviewUpload, setReviewUpload] = useState<UserReviewUpload>({
    orderId,
  });
  const [satisfiedReasons, setSatisfiedReansons] =
    useState<SatisfiedReason[]>();
  const { mutate: postReview } = usePostReviewByUser();
  const handleReviewUpload = () => {
    postReview({ ...reviewUpload, satisfiedReasons, file: imageFiles });
  };

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
                <SatisfiedReasonSelector
                  checkedList={reviewUpload.satisfiedReasons}
                  updateValue={setSatisfiedReansons}
                />
              }
            />
            <QuestionContainer
              title="따뜻한 구매 후기를 알려주세요."
              content={
                <div style={{ marginTop: 15 }}>
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
                </div>
              }
            />
            <PhotoUpload updateImageFiles={setImageFiles} />
          </div>
        </StepsLayout>
      </HeaderLayout>
    </Suspense>
  );
}
