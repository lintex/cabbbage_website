---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cabbbage"
  text: "开笔记"
  tagline: 一个又卷又菜的笔记App
  image:
    src: /cabbbage.png
    alt: cabbbage
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 功能介绍
      link: /introduction
    - theme: alt
      text: 更新日志
      link: /changelog

features:
  - icon: 📝
    title: 快捷操作
    details: 人性化设计，可以快速添加笔记，第一时间记录你的想法...
  - icon: 🔐
    title: 数据安全
    details: 数据本地存储，保护隐私，安全，速度快
  - icon: 🗂️
    title: 卡片关联
    details: 以卡片形式组织数据，支持双链、超级标签，导出精美图片
  - icon: 🛠️
    title: 独特个性功能
    details: 马拉松助手、配速计算器、尺子、课程表、单词本、各种功能无限扩展...
---

<style>
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>