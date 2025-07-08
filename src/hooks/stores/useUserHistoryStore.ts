import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StoreDetailWithBag, StoreListItemResponse } from '@/types/store';

interface UserHistoryStore {
  searchKeywordHistory: string[];
  addSearchKeywordHistory: (value: string) => void;
  deleteSearchKeywordHistory: (value: string) => void;
  recentViewedStoreList: StoreListItemResponse[];
  addRecentViewedStoreList: (value: StoreDetailWithBag) => void;
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
      recentViewedStoreList: [],
      addRecentViewedStoreList: (storeDetail) =>
        set((state) => {
          const data: StoreListItemResponse = {
            storeId: storeDetail.storeId,
            storeName: storeDetail.storeName,
            ImageUrl: storeDetail.images,
            goodsName: storeDetail.goodsId,
            startTime: storeDetail.startTime,
            endTime: storeDetail.endTime,
            originPrice: storeDetail.originalPrice,
            discount: storeDetail.discount,
            salePrice: storeDetail.salePrice,
            quantity: storeDetail.quantity,
            distance: null,
            saleStatus: storeDetail.saleStatus,
          };
          return {
            recentViewedStoreList: [
              data,
              ...state.recentViewedStoreList.filter(
                (v) => v.storeId !== data.storeId,
              ),
            ],
          };
        }),
    }),
    {
      name: 'user-history-storage',
    },
  ),
);
