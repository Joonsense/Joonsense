"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitLead, type LeadFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const initialState: LeadFormState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "제출 중..." : "문의 보내기"}
    </Button>
  );
}

export function LeadForm({ concerns }: { concerns: string[] }) {
  const [state, formAction] = useFormState(submitLead, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">회사명</label>
          <input
            name="company"
            required
            className="input"
            placeholder="법인/팀 이름"
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">제품 유형</label>
          <select name="productType" required className="input">
            <option value="">선택하세요</option>
            <option value="Robot">로봇/휴머노이드</option>
            <option value="Agent">에이전트형 AI</option>
            <option value="LLM">LLM 앱/오케스트레이션</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">배포 단계</label>
          <select name="deploymentStage" required className="input">
            <option value="">선택하세요</option>
            <option value="Development">개발</option>
            <option value="PoC">PoC/파일럿</option>
            <option value="Production">상용/운영</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">희망 일정</label>
          <input
            name="timeline"
            required
            className="input"
            placeholder="예: 2주 내 리포트 필요"
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">우려사항 (복수 선택)</label>
          <Badge variant="outline">리스트 기반</Badge>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {concerns.map((item) => (
            <label
              key={item}
              className="flex items-start gap-2 rounded-lg border border-border/70 bg-background/60 p-3 text-sm"
            >
              <input
                type="checkbox"
                name="concerns"
                value={item}
                className="mt-1 h-4 w-4 rounded border-border"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">이메일</label>
          <input
            name="email"
            type="email"
            required
            className="input"
            placeholder="work@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-medium">메시지</label>
          <textarea
            name="message"
            required
            className="input min-h-[120px]"
            placeholder="시스템 구성, 테스트 희망 범위, 보안 요구사항 등을 남겨주세요"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border/60 bg-slate-950/60 p-4 text-sm text-muted-foreground">
        개인정보·민감정보 업로드 금지. 테스트용 더미 데이터나 추상화된 설명으로 공유해주세요.
      </div>

      <div className="space-y-3">
        <SubmitButton />
        {state.success && (
          <div className="rounded-lg border border-green-500/40 bg-green-500/10 p-4 text-sm text-foreground">
            Risk Snapshot(리스크 스냅샷) 미팅을 제안했습니다. 24시간 내 일정 확인 메일을 보내드립니다.
          </div>
        )}
        {!state.success && state.message && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
            {state.message}
          </div>
        )}
      </div>
    </form>
  );
}
