export function getPickUpTimeofToday({ type }: { type: 'open' | 'close' }) {
  // 현재 한국 시간 기준 오늘 날짜
  const now = new Date();

  // 한국 시간 보정 (UTC -> KST)
  const offset = 9 * 60; // 분 단위
  const kstNow = new Date(now.getTime() + offset * 60000);

  // 날짜만 추출 (YYYY-MM-DD)
  const y = kstNow.getFullYear();
  const m = String(kstNow.getMonth() + 1).padStart(2, '0');
  const d = String(kstNow.getDate()).padStart(2, '0');

  if (type === 'open') return `${y}-${m}-${d}T08:00:00`;
  // 오늘 23:59:59 문자열 반환
  return `${y}-${m}-${d}T23:59:59`;
}
