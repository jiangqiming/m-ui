import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  title: 'M-UI',
  description: '一个基于 Vue3 的组件库',
  base: '/m-ui/',
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: false,
        vueTemplate: true
      })
    ],
    resolve: {
      alias: {
        '@jqkgg/m-ui': resolve(__dirname, '../../src/index.ts')
      }
    },
    optimizeDeps: {
      include: ['echarts']
    },
    ssr: {
      noExternal: ['echarts']
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/jqkgg/m-ui' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'ChartBar 柱状图', link: '/components/barchart' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jqkgg/m-ui' }
    ]
  }
})

