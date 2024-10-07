import LoudSpeakerIcon from '@/assets/svg/LoudSpeakerIconsvg';
import { common } from '@/styles/common.css';
import ChevronDownIcon from '@/assets/svg/ChevronDownIcon';
import { qna } from '../qna';
import * as styles from './styles.css';

export default function Qna() {
  return (
    <div className={styles.questionList}>
      {qna.map(({ q: question, a: answer }) => (
        <label key={question} className={styles.collapse}>
          <input type="checkbox" className={common.hidden} />
          <div
            className={common.flexBox({
              direction: 'row',
              justify: 'between',
              align: 'center',
            })}
          >
            <div className={common.flexBox({ direction: 'row', gap: 10 })}>
              <LoudSpeakerIcon /> {question}
            </div>
            <ChevronDownIcon />
          </div>
          <p className={common.hidden}>{answer}</p>
        </label>
      ))}
    </div>
  );
}
