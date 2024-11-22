import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "amvstrm's docs",
  description: "A website for weebo...",
  lastUpdated: true,
  sitemap: { hostname: "https://docs.amvstr.me" },
  markdown: {
    image: {
      lazyLoading: true,
    }
  },
  
  themeConfig: {
    logo: "/amv-icon.svg",
    siteTitle: "amvstrm's docs",
    search: {
      provider: 'local'
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentations", link: "/docs" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/docs/index" }],
      },
      {
        text: "Guide",
        items: [
          { text: "Configuration", link: "/docs/guide/configuration" },
          { text: "Vercel", link: "/docs/guide/vercel" },
          { text: "Railway", link: "/docs/guide/railway" },
          { text: "Deta Space", link: "/docs/guide/deta" },
          { text: "Render", link: "/docs/guide/render" },
          { text: "Docker", link: "/docs/guide/docker" },
        ],
      },
      {
        text: "Help",
        items: [
          { text: "Bookmark", link: "/docs/help/bookmark" },
          { text: "Video Player", link: "/docs/help/video-player" },
        ],
      },
      {
        text: "API Docs",
        items: [
          { text: "Introduction", link: "/docs/api/introduction" },
          { text: "Usage", link: "/docs/api/usage" },
          { text: "Deploy a backend", link: "/docs/api/deploy" },
        ],
      },
      {
        text: "Projects",
        link: "/projects",
      },
      {
        text: "FAQs",
        link: "/faq",
      },
      {
        text: "License",
        link: "/license",
      },
      {
        text: "Legality",
        link: "/legality",
      },
      {
        text: "Credits",
        link: "/credit",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/amvstrm" }],
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "© amvstrm Cambodia",
    },
  },
});
