import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cabbbage",
  titleTemplate: ':title | 开笔记', // 自定义标题后缀
  description: "一个又卷又菜的笔记App",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }], ['meta', { name: 'keywords', content: 'cabbbage,开笔记,笔记App,笔记软件' }]],
  lastUpdated: true, // 显示每个页面的最后更新时间
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '介绍', link: '/introduction' },
      { text: '更新日志', link: '/changelog' },
    ],

    sidebar: [
      {
        text: '侧边栏',
        items: [
          { text: '下载地址', link: '/download' },
          { text: '功能介绍', link: '/introduction' },
          { text: '更新日志', link: '/changelog' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lintex/cabbbage' }
    ],

    search: {
      provider: 'local'
    },

    // sidebar 不显示时才会显示 footer
    footer: {
      message: '再菜也要用❤️卷',
      copyright: 'Copyright © 2024 lintex'
    },

    // 
    editLink: {
      pattern: 'https://github.com/lintex/cabbbage_website/edit/main/docs/:path'
    }
  }
})
