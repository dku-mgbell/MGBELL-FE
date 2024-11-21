import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import CameraIcon from '@/assets/svg/CameraIcon';
import * as styles from './styles.css';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function PhotoUploadButton({ ...props }: InputProps) {
  return (
    <label className={styles.button}>
      <input {...props} />
      <CameraIcon color="#929292" width={18} height={17} />
      <span className={styles.buttonContent}>사진 추가</span>
      <span className={styles.buttonMax}>최대 3장</span>
    </label>
  );
}
