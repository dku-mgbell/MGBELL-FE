'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { usePatchStoreImages } from '@/hooks/query/store/usePatchStoreImages';
import ImageUploader from '@/components/image-uploader';

export default function Page() {
  const [files, setFiles] = useState<File[]>([]);
  const { id } = useParams();
  const { mutate: patchStoreImages } = usePatchStoreImages(id as string);
  const router = useRouter();
  return (
    <div className="w-[calc(100%-40px)] bg-white p-[20px] m-[20px] flex flex-col gap-[20px]">
      <ImageUploader setFiles={setFiles} isError={false} />
      <div className="flex justify-end gap-[10px]">
        <Button
          className="flex-1"
          variant="gray-outline"
          onClick={() => router.back()}
        >
          취소
        </Button>
        <Button
          className="flex-1"
          onClick={() =>
            patchStoreImages({
              storeId: id as string,
              images: files.map((f, i) => ({ id: i, key: f.name })),
              files,
            })
          }
        >
          변경하기
        </Button>
      </div>
    </div>
  );
}
