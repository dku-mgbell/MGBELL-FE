import ListIcon from '@/assets/svg/ListIcon';
import Button from '@/components/button/text-button/button';
import * as styles from './styles.css';

export default function ListShowButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className={styles.listShowButton}
      onClick={onClick}
      padding={false}
      value={
        <div className={styles.buttonContainer}>
          <ListIcon />
          리스트 보기
        </div>
      }
      theme="secondary"
      size="fit"
      rounded="lg"
      shadow
    />
  );
}
