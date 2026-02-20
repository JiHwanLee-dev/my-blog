// app/about/page.js → "/about" 경로에 해당하는 페이지입니다.
// app 폴더 안에 about 폴더를 만들고 page.js를 넣으면
// 자동으로 "내도메인/about" URL이 생성됩니다. (파일 기반 라우팅)

export default function About() {
  return (
    <main>
      <h1>소개 페이지</h1>
      <p>안녕하세요, 블로그 주인입니다!</p>
    </main>
  );
}