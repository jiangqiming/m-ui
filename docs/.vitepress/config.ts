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
      include: ['echarts', 'element-plus']
    },
    ssr: {
      noExternal: ['echarts', 'element-plus']
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/responsivepage' },
      { text: 'GitHub', link: 'https://github.com/jqkgg/m-ui' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '容器组件',
          items: [
            { text: 'ResponsivePage 响应式页面', link: '/components/responsivepage' },
            { text: 'ScrollBox 滚动容器', link: '/components/scrollbox' },
            { text: 'EllipsisText 文本省略', link: '/components/ellipsistext' },
          ]
        },
        {
          text: '图表组件',
          items: [
            { text: 'ChartBar 柱状图', link: '/components/barchart' },
            { text: 'ChartPie 饼图', link: '/components/piechart' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jqkgg/m-ui' }
    ]
  }
})

