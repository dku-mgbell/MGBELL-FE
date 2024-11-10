import { UserAddressState } from '@/types/address';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AddressState = {
  addressState: UserAddressState;
  setAddressState: (state: UserAddressState) => void;
};

export const useAddressStateStore = create(
  persist<AddressState>(
    (set) => ({
      addressState: {},
      setAddressState: (state: UserAddressState) => {
        set({ addressState: state });
      },
    }),
    {
      name: 'address',
    },
  ),
);
