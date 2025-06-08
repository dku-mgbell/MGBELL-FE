import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';

export default function PreviousButton({
  previousButtonClickEvent,
}: {
  previousButtonClickEvent?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={previousButtonClickEvent}
      className="cursor-pointer flex items-center"
    >
      <ChevronLeftIcon />
    </button>
  );
}
