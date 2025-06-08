import ChevronDownIcon from '@/assets/svg/ChevronDownIcon';
import LoudSpeakerIcon from '@/assets/svg/LoudSpeakerIcon';
import { cn } from '@/lib/utils';
import { qna } from '../qna';

function QuestionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <label
      key={question}
      className={cn(
        'bg-gray9 flex flex-col cursor-pointer clickable rounded-[10px] p-[15px] transition-all duration-300 ease-in-out group',
      )}
    >
      <input type="checkbox" className="hidden" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-[10px] items-center">
          <LoudSpeakerIcon />
          <span>{question}</span>
        </div>
        <ChevronDownIcon className="group-has-[input:checked]:rotate-180 transition-transform duration-500 ease-in-out" />
      </div>
      <div className="max-h-0 group-has-[input:checked]:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
        <p className="text-b1 text-gray2 p-[10px] pb-0">{answer}</p>
      </div>
    </label>
  );
}

export default function Qna() {
  return (
    <div className="flex flex-col gap-[15px]">
      {qna.map(({ q: question, a: answer }) => (
        <QuestionItem key={question} question={question} answer={answer} />
      ))}
    </div>
  );
}
