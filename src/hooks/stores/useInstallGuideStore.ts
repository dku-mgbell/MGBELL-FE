import { create } from 'zustand';

export const useInstallGuideStore = create<InstallGuideStore>((set) => ({
  isModalOpen: true,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
  isBarShown: true,
  setIsBarShown: (isBarShown) => set({ isBarShown }),
}));

interface InstallGuideStore {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isBarShown: boolean;
  setIsBarShown: (isBarShown: boolean) => void;
}
