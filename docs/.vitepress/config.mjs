import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cabbbage",
  titleTemplate: ':title | 开笔记', // 自定义标题后缀
  description: "一个又卷又菜的笔记App",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }], ['meta', { name: 'keywords', content: 'cabbbage,开笔记,笔记App,笔记软件' }]],

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
        items: [
          { text: '下载地址', link: '/download' },
          { text: '功能介绍', link: '/introduction' },
          { text: '更新日志', link: '/changelog' },
          { text: '赞助打赏', link: '/donate' },
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

    // lastUpdated: true,
    // editLink: true,


    editLink: {
      pattern: 'https://github.com/lintex/cabbbage_website/edit/main/docs/:path',
      text: '编辑本页面'
    },
    lastUpdated: {
      text: '更新于',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
  }
})
