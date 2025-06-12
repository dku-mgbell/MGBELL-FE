export default function Footer() {
  const businessInfo = {
    상호명: '마감벨',
    대표자명: '김강민',
    사업자등록번호: '515-62-00946',
    '사업장 주소': '경기도 용인시 수지구 푸른솔로 4-5(죽전동)',
  };

  return (
    <footer>
      {Object.entries(businessInfo).map(([key, value]) => (
        <div key={key} className="flex gap-[4px] ">
          <span className="text-b3 text-gray3">{key}</span>
          <span className="text-b3 text-gray5">{value}</span>
        </div>
      ))}
    </footer>
  );
}
