import { API } from '.';

export const SignUp = {
  async postMail(email: string) {
    const response = await API.post('/email/sendCode', { email });
    return response.data;
  },
  async verifyCode(data: { email: string; token: string }) {
    const response = await API.post('/email/verifyCode', data);
    return response.data;
  },
};
