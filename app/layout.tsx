import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts에서 폰트를 자동으로 최적화해서 불러옵니다.
// variable은 CSS 변수 이름 → globals.css에서 --font-geist-sans 로 사용됩니다.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 이 metadata 객체가 브라우저 탭 제목과 검색엔진(SEO)에 사용됩니다.
// title → 탭 제목, description → 구글 검색 결과 설명
export const metadata: Metadata = {
  title: "나의 블로그",
  description: "Next.js로 만든 나만의 블로그",
};

// RootLayout: 모든 페이지를 감싸는 최상위 레이아웃 컴포넌트입니다.
// Next.js App Router에서 layout.tsx는 필수 파일이며, 모든 페이지에 공통으로 적용됩니다.
// children → 현재 라우트에 해당하는 page.tsx 내용이 여기에 들어옵니다.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* body에 폰트 CSS 변수를 클래스로 주입합니다 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 각 페이지의 실제 내용이 여기에 렌더링됩니다 */}
        {children}
      </body>
    </html>
  );
}
