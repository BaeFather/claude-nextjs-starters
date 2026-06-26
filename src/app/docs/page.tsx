import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/layout/container"

const stack = [
  { name: "Next.js 16", desc: "App Router 기반 풀스택 React 프레임워크" },
  { name: "TypeScript", desc: "정적 타입으로 안전한 개발 환경 제공" },
  { name: "Tailwind CSS v4", desc: "CSS 변수 + oklch 색공간 기반 유틸리티 스타일링" },
  { name: "shadcn/ui", desc: "radix-nova 스타일의 접근성 높은 UI 컴포넌트" },
  { name: "react-hook-form + zod", desc: "스키마 기반 폼 유효성 검증" },
  { name: "usehooks-ts", desc: "타입세이프 커스텀 훅 모음" },
  { name: "sonner", desc: "토스트 알림" },
  { name: "next-themes", desc: "라이트/다크/시스템 테마 전환" },
]

const patterns = [
  {
    title: "클래스 병합",
    code: `import { cn } from "@/lib/utils"\n\n<div className={cn("base-class", conditional && "extra-class")} />`,
  },
  {
    title: "폼 (react-hook-form + zod)",
    code: `const schema = z.object({ name: z.string().min(2) })\n\nconst form = useForm<z.infer<typeof schema>>({\n  resolver: zodResolver(schema),\n})`,
  },
  {
    title: "토스트 알림 (sonner)",
    code: `import { toast } from "sonner"\n\ntoast.success("저장되었습니다!")\ntoast.error("오류가 발생했습니다.")`,
  },
  {
    title: "사이트 설정 단일 소스",
    code: `// src/config/site.ts\n// 사이트명, 설명, URL, 네비 링크를 여기서만 수정`,
  },
]

export default function DocsPage() {
  return (
    <div className="py-16">
      <Container className="space-y-16">
        {/* 페이지 제목 */}
        <section className="space-y-2">
          <Badge variant="secondary">가이드</Badge>
          <h1 className="text-3xl font-bold tracking-tight">문서</h1>
          <p className="text-muted-foreground">
            Next.js 스타터킷의 기술 스택, 디렉터리 구조, 핵심 패턴을 안내합니다.
          </p>
        </section>

        <Separator />

        {/* 기술 스택 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">기술 스택</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((item) => (
              <Card key={item.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* 디렉터리 구조 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">디렉터리 구조</h2>
          <Card>
            <CardContent className="pt-6">
              <pre className="overflow-x-auto text-sm text-muted-foreground leading-relaxed">
{`src/
├─ app/
│  ├─ layout.tsx          # ThemeProvider + SiteHeader + SiteFooter
│  ├─ page.tsx            # 랜딩 페이지
│  ├─ examples/page.tsx   # 컴포넌트 쇼케이스
│  └─ docs/page.tsx       # 문서 (현재 페이지)
├─ components/
│  ├─ ui/                 # shadcn/ui 프리미티브
│  ├─ layout/             # container, site-header, site-footer
│  ├─ common/             # mode-toggle
│  └─ providers/          # theme-provider
├─ config/
│  └─ site.ts             # 사이트명·URL·네비 링크 단일 소스
├─ hooks/                 # 커스텀 훅 (usehooks-ts 우선)
└─ lib/
   └─ utils.ts            # cn() — clsx + tailwind-merge`}
              </pre>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 핵심 패턴 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">핵심 패턴</h2>
          <div className="space-y-4">
            {patterns.map((p) => (
              <Card key={p.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm leading-relaxed">
                    <code>{p.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* shadcn 컴포넌트 추가 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">shadcn 컴포넌트 추가</h2>
          <Card>
            <CardContent className="pt-6">
              <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code>npx shadcn@latest add &lt;component&gt;</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  )
}
