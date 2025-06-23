export interface LabeledFieldProps {
  children: React.ReactNode;
  label: React.ReactNode;
  description?: string;
}

export default function LabeledField({
  children,
  label,
  description,
}: LabeledFieldProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="flex flex-col gap-[4px]">
        <p className="text-h5 text-gray1">{label}</p>
        {description && <p className="text-b2 text-gray4">{description}</p>}
      </div>
      {children}
    </div>
  );
}
