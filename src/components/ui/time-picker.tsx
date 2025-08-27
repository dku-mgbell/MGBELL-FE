import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function TimePicker({
  minTime,
  maxTime,
  value,
  onChange,
  placeholder,
}: {
  minTime: string;
  maxTime: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopTimePicker
        minTime={dayjs(minTime).add(1, 'minute')}
        maxTime={dayjs(maxTime)}
        minutesStep={10}
        skipDisabled
        label={placeholder}
        value={value ? dayjs(value) : null}
        ampm={false}
        className="rounded-full border-none"
        sx={{
          '& .MuiPickersInputBase-root': {
            borderRadius: '10px',
            '& .MuiPickersOutlinedInput-notchedOutline': {
              border: '1px solid #00000033',
            },
          },
        }}
        onChange={(v) => {
          onChange(dayjs(v).format());
        }}
        onAccept={(v) => {
          onChange(dayjs(v).format());
        }}
      />
    </LocalizationProvider>
  );
}
