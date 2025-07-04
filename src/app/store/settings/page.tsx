'use client';

import Footer from '@/app/mypage/(index)/_components/footer';
import UserProfile from '@/app/mypage/(index)/_components/user-profile';

export default function Page() {
  return (
    <div className="flex flex-col gap-[20px] p-[20px]">
      <div className="bg-white rounded-[10px] p-[20px]">
        <UserProfile />
      </div>
      <Footer />
    </div>
  );
}
