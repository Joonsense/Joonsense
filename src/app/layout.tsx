import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Red Teaming | Physical & Agentic AI Stress Test",
  description:
    "Physical AI와 Agentic AI를 위한 기술적 행동 스트레스 테스트 및 신뢰 증빙 랜딩페이지.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
