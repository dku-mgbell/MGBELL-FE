import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserHistoryStore {
  searchKeywordHistory: string[];
  addSearchKeywordHistory: (value: string) => void;
  deleteSearchKeywordHistory: (value: string) => void;
}

export const useUserHistoryStore = create<UserHistoryStore>()(
  persist(
    (set) => ({
      searchKeywordHistory: [],
      addSearchKeywordHistory: (value) =>
        set((state) => ({
          searchKeywordHistory: [
            value,
            ...state.searchKeywordHistory.filter(
              (keyword) => keyword !== value,
            ),
          ].slice(0, 10),
        })),
      deleteSearchKeywordHistory: (value) =>
        set((state) => ({
          searchKeywordHistory: state.searchKeywordHistory.filter(
            (v) => v !== value,
          ),
        })),
    }),
    {
      name: 'search-history-storage',
    },
  ),
);
