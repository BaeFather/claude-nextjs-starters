import Link from "next/link"
import { Layers, Palette, Shield, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"

const coreStack = [
  {
    icon: Zap,
    name: "Next.js 16",
    desc: "App Router 기반 풀스택 프레임워크",
  },
  {
    icon: Shield,
    name: "TypeScript",
    desc: "엄격한 타입으로 안전한 코드 작성",
  },
  {
    icon: Palette,
    name: "Tailwind CSS v4",
    desc: "CSS 변수 기반 유틸리티 스타일링",
  },
  {
    icon: Layers,
    name: "shadcn/ui",
    desc: "접근성 높은 UI 컴포넌트 라이브러리",
  },
]

const features = [
  {
    title: "🎨 shadcn/ui",
    description: "radix-nova 스타일의 접근성 높은 UI 컴포넌트가 기본 설치되어 있습니다.",
    badge: "UI",
  },
  {
    title: "🌙 다크모드",
    description: "next-themes 기반으로 라이트/다크/시스템 테마를 즉시 전환할 수 있습니다.",
    badge: "UX",
  },
  {
    title: "✅ 폼 유효성 검증",
    description: "react-hook-form + zod 스키마 기반 폼이 사전 구성되어 있습니다.",
    badge: "DX",
  },
  {
    title: "💨 Tailwind CSS v4",
    description: "CSS 변수 기반 디자인 토큰과 oklch 색공간으로 일관된 스타일링을 지원합니다.",
    badge: "스타일",
  },
  {
    title: "🔷 TypeScript",
    description: "엄격한 타입 설정으로 안전하고 예측 가능한 코드를 작성할 수 있습니다.",
    badge: "타입",
  },
  {
    title: "⚡ React Compiler",
    description: "Next.js 16 + React Compiler로 자동 메모이제이션 최적화가 적용됩니다.",
    badge: "성능",
  },
  {
    title: "🪝 usehooks-ts",
    description: "useLocalStorage, useDebounceValue 등 타입세이프 커스텀 훅이 바로 사용 가능합니다.",
    badge: "훅",
  },
  {
    title: "🔔 토스트 알림",
    description: "Sonner 기반의 간결하고 세련된 토스트 알림 시스템이 내장되어 있습니다.",
    badge: "알림",
  },
  {
    title: "📱 반응형 레이아웃",
    description: "모바일·데스크톱을 모두 지원하는 헤더·콘텐츠·푸터 레이아웃이 사전 구성되어 있습니다.",
    badge: "레이아웃",
  },
]

export default function Home() {
  return (
    <div className="py-16">
      <Container className="space-y-16">
        {/* 섹션 1 — 히어로 */}
        <section className="space-y-8 text-center">
          <Badge variant="secondary">Next.js 스타터킷</Badge>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            모던 웹 개발의 시작점
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            검증된 기술 스택으로 즉시 프로덕션에 투입할 수 있는 Next.js 스타터킷입니다.
            <br />
            반복적인 초기 설정 없이 핵심 기능 개발에 집중하세요.
          </p>

          {/* 핵심 기술 4종 */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {coreStack.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="flex flex-col items-center gap-2 py-4 text-center">
                <Icon className="size-7 text-muted-foreground" />
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 섹션 2 — 포함된 기능 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">주요 기능</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{f.title}</CardTitle>
                    <Badge variant="secondary">{f.badge}</Badge>
                  </div>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* 섹션 3 — 시작하기 */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">지금 바로 시작하세요</h2>
            <p className="text-muted-foreground">
              예제로 컴포넌트를 확인하고, 문서에서 사용 방법을 알아보세요.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/examples">예제 보기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">문서 보기</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
}
