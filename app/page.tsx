// app/page.tsx → 웹사이트의 루트 경로("/")에 해당하는 페이지입니다.
// 파일 이름이 page.tsx이면 Next.js가 자동으로 해당 경로의 페이지로 인식합니다.

export default function Home() {
  // 컴포넌트는 반드시 JSX(HTML과 유사한 문법)를 반환해야 합니다.
  return (
    <div className="">
      <main className="">
        <h1>나의 블로그 🎉</h1>
        <p>Next.js로 만든 첫 페이지!</p>
      </main>
    </div>
  );
}
