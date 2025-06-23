'use client';

import { useState } from 'react';
import HeaderLayout from '@/components/layout/header-layout';
import { Button } from '@/components/ui/button';
import LabeledField from '@/components/ui/labeled-field';
import TextField from '@/components/ui/text-field';
import { usePostStoreApproval } from '@/hooks/query/bag/usePostStoreApproval';

export default function Page() {
  const { mutate: approve } = usePostStoreApproval();
  const [id, setId] = useState<number | undefined>(undefined);

  const handleApproveButtonClick = () => {
    if (id) {
      approve(id);
    }
  };

  return (
    <HeaderLayout title="가게 승인">
      <LabeledField label="가게 ID">
        <TextField value={id} onChange={(e) => setId(Number(e.target.value))} />
      </LabeledField>
      <Button disabled={!id} onClick={handleApproveButtonClick}>
        승인
      </Button>
    </HeaderLayout>
  );
}
