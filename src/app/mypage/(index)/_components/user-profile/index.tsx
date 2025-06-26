import Image from 'next/image';
import ProfileImage from '@/assets/images/user/profile.webp';
import UserProfileText from './user-profile-text';

export default async function UserProfile() {
  return (
    <div className="flex flex-col justify-center items-center gap-[14px]">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden bg-primary/20">
        <Image
          src={ProfileImage.src}
          width={150}
          height={150}
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-[4px] items-center">
        <UserProfileText />
      </div>
    </div>
  );
}
