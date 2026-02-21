// auth.ts
// next-auth의 핵심 설정 파일입니다.
// 여기서 로그인 방식(provider)을 정하고, 인증에 필요한 함수들을 내보냅니다.

import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

// NextAuth()에 설정을 넘기면, 인증에 필요한 함수들을 반환합니다.
// - handlers: API Route에서 로그인/로그아웃 요청을 처리하는 핸들러
// - signIn: 로그인 실행 함수 (GitHub 로그인 페이지로 이동시킴)
// - signOut: 로그아웃 실행 함수 (세션을 삭제함)
// - auth: 현재 로그인 상태(세션)를 확인하는 함수
//
// providers에 GitHub을 넣으면 .env.local에서
// AUTH_GITHUB_ID, AUTH_GITHUB_SECRET을 자동으로 읽어옵니다.
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
});
