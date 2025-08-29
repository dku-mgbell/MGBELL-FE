'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout';
import { Button } from '@/components/ui/button';
import { usePatchStoreImages } from '@/hooks/query/store/usePatchStoreImages';
import ImageUploader from '@/components/image-uploader';

export default function Page() {
  const [files, setFiles] = useState<File[]>([]);
  const { id } = useParams();
  const { mutate: patchStoreImages } = usePatchStoreImages(id as string);
  const router = useRouter();
  return (
    <HeaderLayout
      title="이미지 수정"
      className="flex flex-col gap-4"
      previousButtonClickEvent={() => {
        router.back();
      }}
    >
      <ImageUploader setFiles={setFiles} isError={false} />
      <Button
        onClick={() =>
          patchStoreImages({
            storeId: id as string,
            images: files.map((f, i) => ({ id: i, key: f.name })),
            files,
          })
        }
      >
        이미지 수정
      </Button>
    </HeaderLayout>
  );
}
