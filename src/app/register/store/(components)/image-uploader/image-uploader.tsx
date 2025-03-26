'use client';

import { useState } from 'react';
import AddIcon from '@/assets/svg/AddIcon';
import CrossIcon from '@/assets/svg/CrossIcon';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function ImageUploader() {
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((f, index) => {
      setImages((prev) => {
        return index === 0
          ? [URL.createObjectURL(f)]
          : [...prev, URL.createObjectURL(f)];
      });
      setImageFiles(() => {
        if (imageFiles) {
          return [...imageFiles, f];
        }
        return [f];
      });
    });
  };

  return (
    <div className={styles.container}>
      <ul className={styles.imageList}>
        <label
          className={styles.uploadInputLabel({
            size: `${images.length ? 'fit' : 'full'}`,
          })}
        >
          <input
            multiple
            type="file"
            className={common.hidden}
            accept="image/png, image/jpeg"
            onChange={handleImageUploaded}
          />
          <div className={styles.iconContainer}>
            <AddIcon />
            <br />
            사진 업로드
          </div>
        </label>
        {images.length > 0 &&
          images.map((item, index) => (
            <div
              key={item}
              className={styles.imageContainer}
              style={{ backgroundImage: `url('${item}')` }}
            >
              <button
                type="button"
                className={styles.deleteButton}
                onClick={() =>
                  setImages(images.filter((_, idx) => idx !== index))
                }
              >
                <CrossIcon />
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}
