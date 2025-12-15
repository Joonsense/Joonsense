export const hero = {
  eyebrow: "AI Red Teaming for Physical & Agentic AI",
  title: "배포 전 행동 리스크를 증명 가능한 신뢰로 전환",
  subtitle:
    "로봇·에이전트형 AI를 실제 운영 환경 수준으로 스트레스 테스트하고, 증빙 가능한 결과물로 의사결정을 돕습니다.",
  primaryCta: "바로 상담하기",
  secondaryCta: "샘플 리포트 보기",
};

export const problems = {
  heading: "놓치기 쉬운 리스크, 운영 전에 드러내야 합니다",
  bullets: [
    "휴머노이드/모바일 로봇의 비정상 행동을 미리 발견해 현장 안전 비용을 줄입니다.",
    "Agentic AI의 잘못된 의사결정을 Release Gate(배포 게이트) 이전에 차단합니다.",
    "법률 자문이 아닌 기술적 행동 검증으로 보안팀·현업팀 간 언어를 통일합니다.",
  ],
};

export const testCategories = {
  heading: "What we test (우리가 테스트하는 것)",
  description: "물리 세계와 멀티스텝 에이전트의 행동을 실제 시나리오 기반으로 검증합니다.",
  categories: [
    {
      title: "Physical AI Safety",
      detail: "충돌/추락/접촉 안전, 실패 모드 전환, 물리 센서 오류 대응",
    },
    {
      title: "Agentic Decisioning",
      detail: "Goal Misalignment(목표 불일치)·Hallucination(환각)·Tool Misuse(툴 오남용)",
    },
    {
      title: "Autonomy Guardrails",
      detail: "권한 남용, 민감 데이터 접근, 비인가 행동 경로 차단",
    },
    {
      title: "Adversarial Robustness",
      detail: "프롬프트 인젝션, 시각/음성 교란, 노이즈·스푸핑 대응",
    },
    {
      title: "Integration Failures",
      detail: "API·PLC·센서퓨전 경계값, 타임아웃/재시도 전략 검증",
    },
    {
      title: "Operational Readiness",
      detail: "모니터링 시나리오, 알림·에스컬레이션, 롤백/Fail-safe(안전중지)",
    },
  ],
};

export const deliverables = {
  heading: "Deliverables (산출물)",
  intro: "기술 검증 결과를 바로 의사결정에 사용할 수 있도록 구조화했습니다.",
  items: [
    {
      title: "Scorecard (점수표)",
      description: "리스크 카테고리별 점수와 해석 가이드로 경영진 보고를 단순화.",
    },
    {
      title: "Heatmap (히트맵)",
      description: "자산·시나리오·심각도별 리스크 분포를 한눈에 시각화.",
    },
    {
      title: "Failure Path (실패 경로)",
      description: "행동 실패가 발생한 실제 경로와 환경 조건을 재현 가능하게 기록.",
    },
    {
      title: "Fix Guide (수정 가이드)",
      description: "모델·정책·오케스트레이션별 수정 제안과 우선순위를 제시.",
    },
    {
      title: "Evidence Pack (증빙 패키지)",
      description: "로그·동영상·테스트 스크립트와 함께 Release Gate(배포 게이트) 통과 근거 제공.",
    },
  ],
};

export const packages = {
  heading: "Packages",
  description: "프로덕트 단계와 리스크 민감도에 맞춘 3가지 옵션.",
  tiers: [
    {
      name: "Starter",
      price: "$8,500",
      detail: "단일 로봇/에이전트, 8개 시나리오, 2주 납기",
      features: [
        "기본 행동 스트레스 테스트",
        "Scorecard·Heatmap 제공",
        "1회 Retest(재테스트) 포함",
      ],
      highlight: false,
    },
    {
      name: "Core",
      price: "$14,000",
      detail: "다중 에이전트/로봇, 15개 시나리오, 3주 납기",
      features: [
        "Adversarial·Integration 집중 검증",
        "Evidence Pack·Failure Path 포함",
        "2회 Retest + 대응 워크숍",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "Custom",
      detail: "고위험 환경, 확장된 시나리오, 온사이트 옵션",
      features: [
        "보안팀/운영팀 합동 세션",
        "연속 모니터링 및 Subscription(구독) 연계",
        "Executive-ready Report(경영진용 리포트)",
      ],
      highlight: false,
    },
  ],
};

export const process = {
  heading: "Process",
  steps: [
    {
      title: "Scoping",
      detail: "시스템 범위, 안전 임계치, 성공·실패 기준 정의",
    },
    {
      title: "Threat & Scenario Modeling",
      detail: "물리/에이전트형 위협 모델링과 테스트 스크립트 설계",
    },
    {
      title: "Execution",
      detail: "현장 조건을 모사한 스트레스 테스트와 로그 수집",
    },
    {
      title: "Analysis",
      detail: "리스크 분포 Heatmap과 Failure Path 재현 검증",
    },
    {
      title: "Guidance",
      detail: "Fix Guide(수정 가이드)와 Release Gate(배포 게이트) 추천 기준 제공",
    },
    {
      title: "Retest Loop",
      detail: "수정 후 재테스트와 Evidence Pack 업데이트",
    },
  ],
};

export const trust = {
  heading: "Trust",
  items: [
    {
      title: "Certificate (증서)",
      description: "테스트 완료 후 Verified Behavior Test Certificate(검증 완료 증서) 발급",
    },
    {
      title: "Retest Policy (재테스트 정책)",
      description: "변경 발생 시 신속한 재검증과 업데이트된 Evidence Pack 제공",
    },
    {
      title: "Security Posture (보안 운영 원칙)",
      description: "데이터 최소 수집, 격리된 테스트 환경, 접근 통제 로그를 준수",
    },
  ],
};

export const faq = {
  heading: "FAQ",
  items: [
    {
      question: "법률 자문이나 규제 인증을 제공하나요?",
      answer: "아니요. 우리는 기술적 행동 검증과 증빙 자료만을 제공합니다. 법적 보장은 하지 않습니다.",
    },
    {
      question: "물리 로봇 하드웨어를 직접 다루나요?",
      answer: "가능한 경우 온사이트로 테스트하지만, 원격 시뮬레이션·로깅 기반도 지원합니다.",
    },
    {
      question: "에이전트형 AI의 외부 API 호출도 검증하나요?",
      answer: "네, API·도구 호출 경계조건, Rate Limit(요청 제한), 예외 처리까지 점검합니다.",
    },
    {
      question: "Retest는 어떻게 이루어지나요?",
      answer: "수정 사항 반영 후 동일/확장 시나리오로 재실행하고 Evidence Pack을 갱신합니다.",
    },
    {
      question: "보고서는 어느 수준까지 제공되나요?",
      answer: "Scorecard, Heatmap, Failure Path, Fix Guide, Evidence Pack을 포함한 Executive-ready Report를 제공합니다.",
    },
    {
      question: "스타트업 초기 단계도 적합한가요?",
      answer: "Starter 패키지는 단일 로봇/에이전트와 핵심 시나리오에 집중해 초기 출시 리스크를 줄입니다.",
    },
    {
      question: "테스트 기간은 얼마나 걸리나요?",
      answer: "패키지에 따라 2~4주이며, 사전 정의된 시나리오 수와 온사이트 여부에 따라 달라집니다.",
    },
    {
      question: "데이터 보안은 어떻게 보장하나요?",
      answer: "격리된 테스트 환경과 최소 데이터 수집 원칙을 따르며 접근 로그를 공유합니다.",
    },
    {
      question: "커스텀 시나리오를 추가할 수 있나요?",
      answer: "네. 고위험 산업이나 특정 규제 환경에 맞춰 추가 설계가 가능합니다.",
    },
    {
      question: "정기 Subscription(구독) 형태도 가능한가요?",
      answer: "Continuous Retest Subscription을 통해 월간/분기 재테스트와 업데이트된 증빙을 제공합니다.",
    },
  ],
};

export const finalCta = {
  heading: "배포 전, 신뢰를 먼저 확보하세요",
  subheading: "지금 상담하면 샘플 Evidence Pack(증빙 패키지)과 테스트 시나리오 제안을 함께 드립니다.",
  primaryCta: "프로젝트 상담",
  secondaryCta: "리포트 샘플 받기",
};

export const servicesPage = {
  hero: {
    title: "5가지 서비스, 한 번에 비교하고 선택",
    subtitle:
      "배포 전 행동 리스크 스트레스 테스트부터 정기 Retest(재테스트) Subscription(구독)까지, 목적별로 묶인 패키지를 제공합니다.",
    primaryCta: "상담 문의",
    secondaryCta: "서비스별 상세 보기",
  },
  note: "가격은 범위 기준이며, 실제 금액은 시스템 범위와 온사이트 여부에 따라 조정됩니다.",
  items: [
    {
      slug: "ai-red-teaming-core",
      name: "AI Red Teaming Core",
      tagline: "Physical AI·Agentic AI 행동 리스크를 증빙 중심으로 검증",
      priceRange: "700만~1,400만",
      duration: "3~4주",
      recommended: "로봇/에이전트 상용 배포 전에 리스크를 선제적으로 발견하고 싶은 팀",
      deliverables: [
        "Scorecard(점수표)",
        "Heatmap(히트맵)",
        "Failure Path(실패 경로)",
        "Fix Guide(수정 가이드)",
        "Evidence Pack(증빙 패키지)",
      ],
      includes: [
        "Adversarial·Integration 시나리오 15~20개 실행",
        "온사이트 또는 시뮬레이션 기반 테스트",
        "Retest(재테스트) 1회 포함",
      ],
      excludes: [
        "법률 자문/규제 인증",
        "물리 하드웨어 수리·패치",
        "모델 재학습 대행",
      ],
    },
    {
      slug: "pre-deployment-release-gate",
      name: "Pre-Deployment Release Gate",
      tagline: "배포 전 Release Gate(배포 게이트) 기준 정의와 통과 검증",
      priceRange: "600만~1,200만",
      duration: "2~3주",
      recommended: "배포 전 통과 기준을 명확히 하고, 경영진 보고까지 한번에 처리해야 하는 팀",
      deliverables: [
        "Release Gate 기준서",
        "Scorecard(점수표)",
        "Evidence Pack(증빙 패키지)",
        "Executive-ready Report(경영진용 리포트) 요약 슬라이드",
      ],
      includes: [
        "Gate 기준 수립 워크숍",
        "자동화 체크리스트/테스트 스크립트 실행",
        "경영진 보고용 요약 정리",
      ],
      excludes: [
        "실시간 모니터링 구축",
        "법적 인증 문서 발급",
        "장기 운영 컨설팅",
      ],
    },
    {
      slug: "trust-evidence-pack",
      name: "Trust Evidence Pack",
      tagline: "투자자·고객 설득용 Evidence Pack(증빙 패키지) 단일 납품",
      priceRange: "400만~900만",
      duration: "1~2주",
      recommended: "이미 테스트한 결과를 재구성해 신뢰 증빙 자료로 만들고 싶은 팀",
      deliverables: [
        "Evidence Pack(증빙 패키지)",
        "로그·동영상 클립·테스트 스크립트",
        "요약 리포트",
      ],
      includes: [
        "핵심 시나리오 8~12개 선정 및 실행",
        "재현 가능한 기록 및 캡처 수집",
        "보안 검토 메모",
      ],
      excludes: [
        "심층 위협 모델링",
        "장기 지원/운영",
        "법적 보장 문구",
      ],
    },
    {
      slug: "incident-readiness-package",
      name: "Incident Readiness Package",
      tagline: "운영 중 사고 대비 런북과 테이블탑 시뮬레이션 포함",
      priceRange: "500만~1,000만",
      duration: "1~2주",
      recommended: "운영 단계에서 사고 대응 프로토콜을 빠르게 갖춰야 하는 팀",
      deliverables: [
        "Incident Runbook(대응 런북)",
        "알림·에스컬레이션 맵",
        "테이블탑 시뮬레이션 결과",
        "Evidence Pack 업데이트",
      ],
      includes: [
        "Failure Path(실패 경로) 기반 대응 플로우 설계",
        "연습 시나리오 5~8개 진행",
        "포스트모텀 템플릿 제공",
      ],
      excludes: [
        "SOC 구축/24·7 온콜",
        "법률/규제 대응 대행",
        "데이터 호스팅",
      ],
    },
    {
      slug: "continuous-retest-subscription",
      name: "Continuous Retest Subscription",
      tagline: "월간/분기 Retest(재테스트)와 증빙 갱신을 묶은 구독",
      priceRange: "월 250만~450만",
      duration: "월 단위",
      recommended: "모델/정책 업데이트가 잦고 지속적 증빙이 필요한 팀",
      deliverables: [
        "월간 Retest 리포트",
        "증빙 업데이트",
        "추세 Heatmap(히트맵)",
        "이슈 알림 및 월간 요약 콜",
      ],
      includes: [
        "월/분기 주기 Retest 실행",
        "시나리오·체크리스트 지속 업데이트",
        "경영진 요약 콜",
      ],
      excludes: [
        "무제한 테스트",
        "온사이트 상주",
        "데이터 호스팅/보관",
      ],
    },
  ],
};

export const contact = {
  heading: "Contact",
  heroTitle: "Risk Snapshot(리스크 스냅샷) 미팅으로 시작하세요",
  heroSubtitle:
    "배포 전 행동 리스크를 정리하고 우선순위를 제시합니다. 증빙 가능한 범위부터 짧게 점검하세요.",
  leadBullets: [
    "Physical AI·Agentic AI 전용 체크리스트로 바로 스코핑",
    "Evidence Pack(증빙 패키지) 샘플과 연계 일정 제안",
    "법률·규제 보장은 없으며, 기술적 행동 검증에 집중",
  ],
  concerns: [
    "Physical AI Safety: 충돌/접촉 위험", 
    "Agentic AI Goal Misalignment(목표 불일치)",
    "Tool Misuse(툴 오남용)·권한 남용",
    "Prompt Injection/Adversarial 공격 노출",
    "Integration Failure(통합 실패)·API/PLC 경계조건",
    "Monitoring & Retest Loop 필요",
  ],
  privacyNote: "민감정보·개인정보는 제출하지 마세요. 테스트용 더미 데이터나 추상화된 설명만 수집합니다.",
};
