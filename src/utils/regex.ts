const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^[0-9]+$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

export const isValidEmail = (value: string): boolean => {
  return emailRegex.test(value);
};

export const isNumeric = (input: string): boolean => {
  return numberRegex.test(input);
};

export const isValidPassword = (input: string): boolean => {
  return passwordRegex.test(input);
};

export const isValidPhoneNumber = (input: string): boolean => {
  const phoneRegex = /^010[0-9]{8}$/;
  return phoneRegex.test(input);
};

export const isValidNickname = (input: string): boolean => {
  const nicknameRegex =
    /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}\s?[a-z0-9가-힣]{0,7}$/;
  return nicknameRegex.test(input);
};
