import { OwnerImage, UserImage } from '@/assets/images/sign-up/image';

export const buttonConfig = {
  user: {
    value: 'USER',
    label: '일반 사용자',
    description: (
      <>
        상품을 저렴하게 <br /> 구입하고 싶어요!
      </>
    ),
    image: UserImage.src,
  },
  owner: {
    value: 'OWNER',
    label: '자영업자',
    description: (
      <>
        남은 음식을 <br /> 판매하고 싶어요!
      </>
    ),
    image: OwnerImage.src,
  },
};
