interface ImpResponse {
  success: boolean;
  error_code: string;
  error_msg: string;
  imp_uid: string;
  merchant_uid: string;
}

interface ImpRequestParams {
  channelKey?: string;
  pg?: string;
  pay_method: string;
  escrow?: boolean;
  merchant_uid: string;
  name?: string;
  amount: number;
  buyer_name?: string;
  buyer_tel?: string;
  buyer_email?: string;
  buyer_addr?: string;
  buyer_postcode?: string;
  notice_url?: string;
  confirm_url?: string;
  currency?: string;
  locale?: string;
  m_redirect_url?: string;
  display?: {
    card_quota?: number[];
  };
}

interface IMP {
  init: (accountID: string) => void;
  request_pay: (
    params: ImpRequestParams,
    callback?: (response: ImpResponse) => void,
  ) => void;
}

interface Window {
  IMP?: IMP;
}
