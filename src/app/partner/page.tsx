import Link from 'next/link';

export default function Page() {
  return (
    <div
      style={{
        backgroundColor: '#FECD67',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        style={{ width: '100%' }}
        src="https://blog.kakaocdn.net/dn/70zEl/btsLbNG94I7/OfpbmKjpqV7k5ouGkZzU9K/img.jpg"
      />
      <Link
        href="https://open.kakao.com/o/sSSi7V3g"
        rel="noopener noreferrer"
        target="_blank"
        style={{
          backgroundColor: '#2A2A2A',
          color: 'white',
          width: '80%',
          fontSize: '3.5vw',
          margin: '50px 0 150px 0',
          borderRadius: '10px',
          padding: '15px 0',
          textAlign: 'center',
        }}
      >
        입점문의
      </Link>
    </div>
  );
}