import Link from 'next/link';
import posts from '../data/posts';

export default function BlogList() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>📝 블로그 목록</h1>
      {posts.map((post) => (
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
