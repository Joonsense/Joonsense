# AI Red Teaming Landing Page (Next.js)

고신뢰 B2B 랜딩페이지(Physical AI/Agentic AI 대상 Red Teaming)를 Next.js(App Router) + TypeScript + Tailwind + shadcn/ui 스타일 컴포넌트로 구현했습니다.

## 구조
- `src/app/page.tsx`: 홈 랜딩 페이지(섹션 순서 고정: Hero → Problem → What we test → Deliverables → Packages → Process → Trust → FAQ → Final CTA)
- `src/content/copy.ts`: 모든 하드코딩 카피를 분리한 상수 모음
- `src/components/sections/*`: 섹션별 프레젠테이션 컴포넌트
- `src/components/ui/*`: shadcn/ui 스타일의 버튼, 카드, 배지, 아코디언, 탭, 구분선, 다이얼로그 등 기본 UI
- `src/app/globals.css`: Tailwind 설정 및 글로벌 스타일

## 실행 방법
```bash
npm install
npm run dev
```
`http://localhost:3000`에서 확인할 수 있습니다. 빌드는 `npm run build`, 린트는 `npm run lint`를 사용합니다.
