export type PageParams = { page: number; size: number };

export type PageResponse<TContent> = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: TContent[];
  number: number;
  sort: [
    {
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    },
  ];
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: [
      {
        direction: string;
        nullHandling: string;
        ascending: boolean;
        property: string;
        ignoreCase: boolean;
      },
    ];
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};

export interface ErrorResponse<ErrorCode = string | string[]> {
  response: {
    data: {
      code: ErrorCode;
      message: string[] | string;
      status: string;
      timestamp: string;
      trackingId: string;
    };
  };
}
