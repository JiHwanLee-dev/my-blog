// app/component/Navbar.tsx
// 모든 페이지 상단에 표시되는 네비게이션 바 컴포넌트입니다.
// layout.tsx에서 import해서 사용하므로, 모든 페이지에 자동으로 표시됩니다.

// next/link의 Link 컴포넌트: <a> 태그 대신 사용합니다.
// 일반 <a> 태그는 페이지 전체를 새로 로딩하지만,
// Link는 필요한 부분만 업데이트하는 클라이언트 사이드 네비게이션을 지원합니다. (더 빠름)
import Link from 'next/link';
import AuthButton from './AuthButton';

export default function Navbar() {
  return (
    // nav: 시맨틱 HTML 태그로, 네비게이션 메뉴임을 브라우저/검색엔진에 알려줍니다.
    <nav style={{ 
      display: 'flex',          // 링크들을 가로로 나열
      gap: '20px',              // 링크 사이 간격
      padding: '16px',          // 내부 여백
      backgroundColor: '#333'   // 어두운 배경색
    }}>
      {/* href: 이동할 경로 지정 / style: 흰색 텍스트, 링크 밑줄 제거 */}
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
        🏠 홈
      </Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
        👤 소개
      </Link>
      <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>
        📝 블로그
      </Link>
      <Link href="/blog/write" style={{ color: 'white', textDecoration: 'none' }}>
        📝 새 글 작성
      </Link>
      <AuthButton />
    </nav>
  );
}