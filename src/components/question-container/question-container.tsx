import { ReactNode } from 'react';

export default function QuestionContainer({
  title,
  desc,
  content,
  contentMarginTop,
}: {
  title: string | ReactNode;
  desc?: string | ReactNode;
  content: ReactNode;
  contentMarginTop?: number;
}) {
  return (
    <div className="flex flex-col gap-[5px] w-full">
      <strong className="text-h5">{title}</strong>
      {desc && <p className="text-b1 text-gray6">{desc}</p>}
      <div style={{ marginTop: contentMarginTop ?? 8 }}>{content}</div>
    </div>
  );
}
