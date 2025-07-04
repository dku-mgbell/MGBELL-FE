import { ChangeEvent } from 'react';
import ToggleSwitch from '@/components/toggle-switch/toggle-switch';
import { usePatchStoreOpen } from '@/hooks/query/owner/usePatchStoreOpen';

export function SaleOpenSwitch({
  goodsId,
  defaultValue,
}: {
  goodsId?: string;
  defaultValue?: boolean;
}) {
  const { mutate: patchStoreOpen } = usePatchStoreOpen();
  const handleStoreOpenSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    patchStoreOpen({
      goodsId: goodsId!,
      isOpen: e.target.checked,
    });
  };

  return (
    <ToggleSwitch
      value={defaultValue ?? false}
      onChange={handleStoreOpenSwitchChange}
    />
  );
}
