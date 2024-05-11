import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Sheet AI",
  description:
    "Generate the Excel formulas in seconds.",
  url: "https://www.sheetai.top",
  ogImage: "https://www.sheetai.top/og.jpg",
  metadataBase: new URL("https://www.sheetai.top"),
  keywords: ["SmartExcel", "ChatGPT", "Excel formulas", "Excel AI", "文心一言", "智谱"],
  authors: [
    {
      name: "hafung",
      url: "https://hafung.top",
    }
  ],
  creator: '@hafung',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", // todo
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/smartexcel",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
