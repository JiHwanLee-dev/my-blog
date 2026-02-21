import posts from '../../data/posts';

// Next.js 15부터 params는 Promise로 바뀌었습니다.
// 그래서 반드시 async 함수로 선언하고, await로 params를 받아야 합니다.
// (Next.js 14 이하에서는 그냥 { params } 로 바로 사용 가능했는데 15부터 변경됨)
export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  // await로 params를 풀어서 id를 꺼냅니다.
  const { id } = await params;

  // posts 배열에서 URL의 id와 일치하는 포스트를 찾습니다.
  // params.id는 문자열(string)이므로 Number()로 숫자 변환 후 비교합니다.
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1>포스트를 찾을 수 없어요 😢</h1>;
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}