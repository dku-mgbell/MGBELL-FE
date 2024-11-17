import { CSSProperties, ReactNode } from 'react';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import * as styles from './styles.css';

export default function MenuButton({
  event,
  name,
  icon: Icon,
  iconColor,
  style,
  shadow,
  button,
}: {
  event?: () => void;
  name: string;
  icon?: React.ComponentType<{ color?: string }>;
  iconColor?: string;
  style?: CSSProperties;
  shadow?: boolean;
  button?: ReactNode;
}) {
  return (
    <button
      className={styles.menuButton({ shadow, event: !!event })}
      type="button"
      onClick={() => {
        if (event) event();
      }}
      style={style}
    >
      <span className={styles.menuButtonIconText}>
        {Icon && <Icon color={iconColor} />}
        {name}
      </span>
      {button || <ChevronRightIcon />}
    </button>
  );
}
