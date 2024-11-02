import { FavoriteRegistration } from '@/types/favorite';
import { API } from '.';

export const Favorite = {
  async register(data: FavoriteRegistration) {
    const response = await API.post('/favorite', data);
    return response.data;
  },
};
