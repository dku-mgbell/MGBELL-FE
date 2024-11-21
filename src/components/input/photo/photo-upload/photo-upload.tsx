import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CrossIcon from '@/assets/svg/CrossIcon';
import { common } from '@/styles/common.css';
import AddIcon from '@/assets/svg/AddIcon';
import PhotoUploadButton from '../photo-upload-button/photo-upload-button';
import * as styles from './styles.css';
import { styles as imageStyles } from './styles-image.css';

export default function PhotoUpload({
  updateImageFiles,
}: {
  updateImageFiles: Dispatch<SetStateAction<File[] | undefined>>;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [images]);

  useEffect(() => {
    updateImageFiles(imageFiles);
  }, [imageFiles]);

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 3 || images.length + files.length > 3) {
      setError(true);
      return;
    }
    files.forEach((f) => {
      setImages((prev) => {
        return [...prev, URL.createObjectURL(f)];
      });
      setImageFiles((prev) => [...prev, f]);
    });
  };

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>최대 3장까지 업로드 가능합니다.</p>}
      {images.length === 0 && (
        <PhotoUploadButton
          multiple
          type="file"
          className={common.hidden}
          accept="image/png, image/jpeg"
          onChange={handleImageUploaded}
        />
      )}
      <div className={imageStyles.container}>
        {images.length >= 1 && images.length < 3 && (
          <label
            className={imageStyles.uploadInputLabel({
              size: 'fit',
            })}
          >
            <input
              multiple
              type="file"
              className={common.hidden}
              accept="image/png, image/jpeg"
              onChange={handleImageUploaded}
            />
            <div className={imageStyles.iconContainer}>
              <AddIcon />
              <br />
              사진 업로드
            </div>
          </label>
        )}
        {images.length > 0 &&
          images.map((item, index) => (
            <div
              key={item}
              className={imageStyles.imageContainer}
              style={{ backgroundImage: `url('${item}')` }}
            >
              <button
                type="button"
                className={imageStyles.deleteButton}
                onClick={() => {
                  setImages(images.filter((_, idx) => idx !== index));
                  setImageFiles(imageFiles.filter((_, idx) => idx !== index));
                }}
              >
                <CrossIcon />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
