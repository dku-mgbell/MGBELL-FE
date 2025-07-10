'use client';

import { useEffect, useState } from 'react';
import CameraOutlineIcon from '@/assets/svg/CameraOutlineIcon';
import CrossIcon from '@/assets/svg/CrossIcon';
import { cn } from '@/lib/utils';
import useModal from '@/hooks/useModal';

export default function ImageUploader({
  setFiles,
  isError,
}: {
  setFiles: (files: File[]) => void;
  isError: boolean;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const { open } = useModal();

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length + (e.target.files?.length ?? 0) > 3) {
      open({
        content: '최대 3장만 추가할 수 있습니다.',
      });
      return;
    }
    const files = Array.from(e.target.files || []);
    files.forEach((f) => {
      setImages((prev) => [...prev, URL.createObjectURL(f)]);
      setImageFiles((prev) => [...prev, f]);
    });
  };

  const handleImageDelete = (index: number) => {
    setImages(images.filter((_, idx) => idx !== index));
    setImageFiles(imageFiles.filter((_, idx) => idx !== index));
  };

  useEffect(() => {
    setFiles(imageFiles);
  }, [imageFiles]);

  return (
    <ul className="flex-wrap w-full flex gap-[10px]">
      {images.length < 3 && (
        <label
          className={cn(
            'cursor-pointer clickable w-[100px] h-[100px] flex flex-col justify-center items-center gap-[10px] border-gray7 border-[1px] rounded-[8px]',
            images.length === 0 && 'w-full flex-row h-fit py-[12px]',
            isError && 'border-error',
          )}
        >
          <input
            multiple
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={handleImageUploaded}
          />
          <CameraOutlineIcon />
          <p className="text-gray4">
            사진추가 {images.length === 0 && '(0/3)'}
          </p>
        </label>
      )}
      {images.length > 0 &&
        images.map((item, index) => (
          <div
            key={item}
            className="w-[100px] rounded-[8px] h-[100px] bg-cover bg-center flex justify-end"
            style={{ backgroundImage: `url('${item}')` }}
          >
            <button
              type="button"
              className="bg-white clickable rounded-[100%] w-[22px] h-[22px] flex justify-center items-center border-gray7 border-[1px] relative top-[-6px] right-[-6px]"
              onClick={() => handleImageDelete(index)}
            >
              <CrossIcon />
            </button>
          </div>
        ))}
    </ul>
  );
}
