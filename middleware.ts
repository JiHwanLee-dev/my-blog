// middleware.ts
// Next.js 미들웨어: 모든 페이지 요청 전에 실행되는 함수입니다.
// 쉽게 말하면 "경비원" 역할입니다.
//
// 현재는 모든 요청을 그냥 통과시키고 있지만,
// 나중에 "로그인 안 한 사람은 특정 페이지 차단" 같은 기능을 추가할 수 있습니다.
//
// 예시: 로그인 안 하면 /blog 접근 차단하기
//   if (!session && request.nextUrl.pathname.startsWith('/blog')) {
//     return NextResponse.redirect(new URL('/api/auth/signin', request.url));
//   }

import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  // NextResponse.next()는 "통과시켜" 라는 뜻입니다.
  return NextResponse.next();
}

// matcher: 미들웨어가 실행될 경로를 지정합니다.
// 아래 설정은 API, 정적 파일, 이미지, 파비콘을 제외한 모든 경로에서 실행됩니다.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
