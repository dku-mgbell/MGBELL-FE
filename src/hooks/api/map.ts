import { GeoCodeResponse } from '@/types/map';

export const Map = {
  async getCoord(address: string): Promise<GeoCodeResponse> {
    const response = await fetch(
      `/api/getCoord/${encodeURIComponent(address)}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates');
    }

    const data = await response.json();
    return data;
  },
};
