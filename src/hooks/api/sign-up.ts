import { API } from '.';

export const SignUp = {
  async postMail(email: string) {
    const response = await API.post('/email/sendCode', { email });
    return response.data;
  },
};
