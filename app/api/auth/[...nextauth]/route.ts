// app/api/auth/[...nextauth]/route.ts
// next-auth의 API Route입니다.
//
// [...nextauth]는 "catch-all" 동적 라우트로,
// /api/auth/ 뒤에 오는 모든 경로를 이 파일이 처리합니다.
// 예시:
//   /api/auth/signin       → 로그인 페이지
//   /api/auth/signout      → 로그아웃 처리
//   /api/auth/callback/github → GitHub에서 돌아올 때 처리
//   /api/auth/session      → 현재 세션 정보 조회
//
// handlers에서 GET, POST를 꺼내서 export하면
// Next.js가 알아서 HTTP 메서드에 맞게 연결합니다.

import { handlers } from '@/auth';

export const { GET, POST } = handlers;
