'use client';

import { useAuth } from '@/hooks/useAuth';

export default function Page() {
  const { logout } = useAuth();
  return (
    <button
      type="button"
      onClick={logout}
      style={{ position: 'absolute', right: 0, zIndex: 99999 }}
    >
      로그아웃
    </button>
  );
}
