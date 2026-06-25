export const siteConfig = {
  name: "My App",
  description: "모던 Next.js 스타터킷",
  url: "https://example.com",
  nav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
    { title: "블로그", href: "/blog" },
    { title: "문의", href: "/contact" },
  ],
  links: {
    github: "https://github.com",
  },
} as const

export type SiteConfig = typeof siteConfig
