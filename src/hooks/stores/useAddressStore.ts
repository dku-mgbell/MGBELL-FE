import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserAddressState } from '@/types/address';

type AddressState = {
  userAddress: UserAddressState;
  setUserAddress: (state: UserAddressState) => void;
  userAddressList: UserAddressState[];
  addUserAddress: (address: UserAddressState) => void;
  deleteUserAddress: (addressName: string) => void;
};

export const useAddressStateStore = create(
  persist<AddressState>(
    (set) => ({
      userAddress: {},
      setUserAddress: (state: UserAddressState) => {
        set({ userAddress: state });
      },
      userAddressList: [],
      addUserAddress: (address: UserAddressState) => {
        set((state) => ({
          userAddressList: [...state.userAddressList, address],
        }));
      },
      deleteUserAddress: (addressName: string) => {
        set((state) => ({
          userAddressList: state.userAddressList.filter(
            (address) => address.addressName !== addressName,
          ),
        }));
      },
    }),
    {
      name: 'address',
    },
  ),
);
