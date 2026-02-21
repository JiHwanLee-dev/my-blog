// app/component/AuthButton.tsx
// 로그인/로그아웃 버튼 컴포넌트입니다.
// 서버 컴포넌트로, 서버에서 세션을 확인한 후
// 로그인 상태에 따라 다른 UI를 보여줍니다.
//
// 'use client'가 없는 서버 컴포넌트인데 버튼이 동작하는 이유:
// → <form>의 action에 'use server'(서버 액션)를 사용하기 때문입니다.
// → 버튼 클릭 시 브라우저가 form을 제출하고, 서버에서 signIn/signOut이 실행됩니다.
// → JS 없이 HTML의 기본 form 제출 방식으로 동작하는 것입니다.

import { auth, signIn, signOut } from '@/auth';

export default async function AuthButton() {
  // auth()로 현재 로그인 세션을 확인합니다.
  // 로그인 되어 있으면 session에 사용자 정보가 들어있고,
  // 로그인 안 되어 있으면 null입니다.
  const session = await auth();

  // 로그인 된 상태: 프로필 이미지 + 이름 + 로그아웃 버튼
  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* session.user에서 GitHub 프로필 정보를 가져옵니다 */}
        <img
          src={session.user?.image ?? ''}
          alt="프로필"
          width={32}
          height={32}
          style={{ borderRadius: '50%' }}
        />
        <span style={{ color: 'white' }}>{session.user?.name}</span>
        {/* 'use server': 이 함수는 서버에서 실행됩니다 (Server Action) */}
        {/* form 제출 → 서버에서 signOut() 실행 → 세션 삭제 → 로그아웃 */}
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button type="submit" style={{
            padding: '6px 12px',
            backgroundColor: '#ff4757',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            로그아웃
          </button>
        </form>
      </div>
    );
  }

  // 로그인 안 된 상태: GitHub 로그인 버튼
  // signIn('github') → GitHub OAuth 페이지로 이동시킵니다.
  return (
    <form action={async () => {
      'use server';
      await signIn('github');
    }}>
      <button type="submit" style={{
        padding: '6px 12px',
        backgroundColor: '#24292e',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        🐙 GitHub로 로그인
      </button>
    </form>
  );
}
