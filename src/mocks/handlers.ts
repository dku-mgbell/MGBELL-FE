import { API_BASE_URL } from '@/constant';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${API_BASE_URL}post/1`, () => {
    return HttpResponse.json({
      storeId: 1,
      storeName: '김씨네 빵가게',
      bagName: '김씨네 맛좋은 랜덤빵',
      favorite: false,
      reviewCnt: 0,
      address: '경기 용인시 기흥구 죽전로15번길 7-18 1층',
      longitude: '127.1091074',
      latitude: '37.3213682',
      onSale: true,
      amount: 5,
      startAt: '18:00',
      endAt: '20:00',
      costPrice: 12900,
      salePrice: 6900,
      images: [],
    });
  }),
];
