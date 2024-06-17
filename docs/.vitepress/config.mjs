import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cabbbage",
  titleTemplate: ':title | 开笔记', // 自定义标题后缀
  description: "一个又卷又菜的笔记App",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }], ['meta', { name: 'keywords', content: 'cabbbage,开笔记,笔记App,笔记软件' }]],
  lastUpdated: true, // 显示每个页面的最后更新时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/markdown-examples' },
      { text: '介绍', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '侧边栏',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
    }

    // 

  }
})
