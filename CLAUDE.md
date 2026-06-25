# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 커밋 메시지 규칙

커밋 메시지는 반드시 한국어로 작성한다. Conventional Commits 접두사(feat:, fix:, docs:, chore: 등) 사용 가능.

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

새 shadcn 컴포넌트 추가:
```bash
npx shadcn@latest add <component>
```

## 아키텍처 개요

Next.js 16 App Router 기반 마케팅/콘텐츠형 스타터킷. 헤더 + 콘텐츠 + 푸터 레이아웃.

### 디렉터리 구조

```
src/
├─ app/
│  ├─ layout.tsx          # ThemeProvider + SiteHeader + main + SiteFooter + Toaster
│  ├─ page.tsx            # 컴포넌트 쇼케이스 (개발 참고용)
│  └─ globals.css         # Tailwind v4 + 디자인 토큰 (CSS 변수)
├─ components/
│  ├─ ui/                 # shadcn/ui 프리미티브 + 복합 컴포넌트 (자동 생성, 수동 수정 가능)
│  ├─ layout/             # container, site-header, site-footer
│  ├─ common/             # mode-toggle (다크모드 토글)
│  └─ providers/          # theme-provider (next-themes 래퍼)
├─ config/
│  └─ site.ts             # 사이트명/설명/URL/네비 링크 — 단일 소스 관리
├─ hooks/                 # 커스텀 훅 (usehooks-ts 우선 활용 후 여기에 추가)
└─ lib/
   └─ utils.ts            # cn() — clsx + tailwind-merge
```

### 컴포넌트 계층

| 계층 | 경로 | 설명 |
|------|------|------|
| Atoms | `components/ui/` | button, input, label, badge, avatar, separator, skeleton |
| Molecules | `components/ui/` | card, form, dialog, dropdown-menu, sheet, sonner |
| Common | `components/common/`, `components/providers/` | mode-toggle, theme-provider |
| Layout | `components/layout/` | container, site-header, site-footer |

### 핵심 패턴

**클래스 병합**: 항상 `cn()` (`src/lib/utils.ts`) 사용
```ts
import { cn } from "@/lib/utils"
```

**shadcn 컴포넌트 패턴**: `cva` + `data-slot` + `asChild`/Radix `Slot` (기존 `button.tsx` 참조)

**공통 훅**: 직접 구현 전 `usehooks-ts` 우선 확인
```ts
import { useMediaQuery, useLocalStorage, useDebounceValue } from "usehooks-ts"
```

**폼**: `react-hook-form` + `zod` + `@hookform/resolvers`
```ts
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
})
```

**토스트**: `sonner`
```ts
import { toast } from "sonner"
toast.success("성공!")
```

**사이트 정보**: 네비 링크·이름·설명은 `src/config/site.ts`에서만 수정

### 스타일링

- Tailwind CSS v4 (`@import "tailwindcss"`) + `tw-animate-css` + `shadcn/tailwind.css`
- CSS 변수 기반 디자인 토큰 (`globals.css`의 `:root` / `.dark` 블록), oklch 색공간
- 다크모드: `.dark` 클래스 방식 (`next-themes`의 `attribute="class"`)
- 폰트: `--font-geist-sans` → CSS 변수 `--font-sans`로 연결됨

### 주요 설정

- React Compiler 활성화 (`next.config.ts`)
- shadcn 설정: `components.json` (style: `radix-nova`, iconLibrary: `lucide`)
- 다크모드: `layout.tsx`의 `ThemeProvider`에서 `defaultTheme="system"` 설정
