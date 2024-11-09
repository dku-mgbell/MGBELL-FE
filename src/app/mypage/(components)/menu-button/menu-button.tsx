import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import * as styles from './styles.css';

export default function MenuButton({
  event,
  name,
  icon: Icon,
}: {
  event: () => void;
  name: string;
  icon: React.ComponentType;
}) {
  return (
    <button
      className={styles.menuButton}
      type="button"
      onClick={() => {
        event();
      }}
    >
      <span className={styles.menuButtonIconText}>
        <Icon />
        {name}
      </span>
      <ChevronRightIcon />
    </button>
  );
}
