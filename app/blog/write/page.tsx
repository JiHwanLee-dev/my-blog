import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function WritePage() {
  const session = await auth();

  // 로그인 안 했으면 로그인 페이지로 강제 이동!
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>✍️ 새 글 작성</h1>
      <p style={{ color: '#666' }}>
        {session.user?.name} 님 환영해요!
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '600px' }}>
        <input
          name="title"
          placeholder="제목을 입력하세요"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '6px'
          }}
        />
        <textarea
          name="content"
          placeholder="내용을 입력하세요"
          rows={8}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          게시하기
        </button>
      </form>
    </main>
  );
}