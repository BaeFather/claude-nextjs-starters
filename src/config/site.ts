export const siteConfig = {
  name: "My App",
  description: "모던 Next.js 스타터킷",
  url: "https://example.com",
  nav: [
    { title: "홈", href: "/" },
    { title: "예제", href: "/examples" },
    { title: "문서", href: "/docs" },
  ],
  links: {
    github: "https://github.com",
  },
} as const

export type SiteConfig = typeof siteConfig
