import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import * as styles from './styles.css';

export default function MenuButton({
  event,
  name,
  icon: Icon,
  iconColor,
}: {
  event: () => void;
  name: string;
  icon: React.ComponentType<{ color?: string }>;
  iconColor?: string;
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
        <Icon color={iconColor} />
        {name}
      </span>
      <ChevronRightIcon />
    </button>
  );
}
