import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'M-UI',
  description: '一个基于 Vue3 的组件库',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/jiangqiming/m-ui' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiangqiming/m-ui' }
    ]
  }
})

