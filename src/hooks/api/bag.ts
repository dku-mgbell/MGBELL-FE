import { BagRegistrationRequest } from '@/types/bag';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Bag = {
  async postRegistration(data: BagRegistrationRequest) {
    const response = await API.post(`${WIP_API_BASE_URL}/goods`, data);
    return response.data;
  },
};
