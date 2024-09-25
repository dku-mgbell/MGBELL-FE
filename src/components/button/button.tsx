import { button } from './styles.css';

export default function Button({
  value,
  theme,
  size,
}: {
  value: string;
  theme?: 'primary' | 'secondary';
  size?: 'full' | 'fit';
}) {
  return (
    <button className={button({ color: theme, size: size })} type="button">
      {value}
    </button>
  );
}
