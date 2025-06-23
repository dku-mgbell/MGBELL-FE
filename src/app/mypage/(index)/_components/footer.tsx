'use client';

export default function Footer() {
  const handleLogout = () => {
    // 로그아웃 처리
  };

  const handleWithdraw = () => {
    // 회원탈퇴 처리
  };
  return (
    <div className="flex justify-center gap-[20px] items-center">
      <button
        type="button"
        onClick={handleLogout}
        className="clickable text-b2 text-gray4"
      >
        로그아웃
      </button>
      <hr className="w-[0.5px] h-[18px] bg-gray4" />
      <button
        type="button"
        onClick={handleWithdraw}
        className="clickable text-b2 text-gray4"
      >
        회원탈퇴
      </button>
    </div>
  );
}
