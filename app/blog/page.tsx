import Link from 'next/link';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  return res.json();
}

export default async function BlogList() {
  const posts = await getPosts();  // ← 서버에서 직접 fetch!

  return (
    <main style={{ padding: '20px' }}>
      <h1>📝 블로그 목록</h1>
      {posts.map((post: any) => (
        <div key={post.id} style={{
          margin: '16px 0',
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}>
          <h2>{post.title}</h2>
          <Link href={`/blog/${post.id}`}>자세히 보기 →</Link>
        </div>
      ))}
    </main>
  );
}