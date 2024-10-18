export interface MapMarker {
  address: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Coordinate {
  latitude: string;
  longitude: string;
}

export interface GeoCodeResponse {
  status: string;
  meta: {
    totalCount: number;
    page: number;
    count: number;
  };
  addresses: [
    {
      roadAddress: string;
      jibunAddress: string;
      englishAddress: string;
      addressElements: [
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
        {
          types: string[];
          longName: string;
          shortName: string;
          code: string;
        },
      ];
      x: string;
      y: string;
      distance: number;
    },
  ];
  errorMessage: string;
}
