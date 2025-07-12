import { BagPatchRequest, BagRegistrationRequest } from '@/types/bag';
import { WIP_API_BASE_URL } from '@/constant';
import { API } from '.';

export const Bag = {
  async postRegistration(data: BagRegistrationRequest) {
    const response = await API.post(`${WIP_API_BASE_URL}/goods`, data);
    return response.data;
  },
  async patch(data: BagPatchRequest) {
    const response = await API.patch(`${WIP_API_BASE_URL}/goods`, {
      ...data,
      name: 'null',
    });
    return response.data;
  },
};
