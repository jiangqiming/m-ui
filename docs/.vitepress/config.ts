import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import type { Plugin } from 'vite'

// 插件：在 SSR 环境中定义 self 全局变量
const ssrSelfPolyfill = (): Plugin => {
  return {
    name: 'ssr-self-polyfill',
    buildStart() {
      // 在 Node.js 环境中定义 self 全局变量
      if (typeof global !== 'undefined' && typeof globalThis !== 'undefined') {
        if (!global.self) {
          global.self = globalThis
        }
      }
    },
    config() {
      return {
        define: {
          'self': 'globalThis'
        }
      }
    }
  }
}

export default defineConfig({
  title: 'M-UI',
  description: '一个基于 Vue3 的组件库',
  base: '/m-ui/',
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      ssrSelfPolyfill(),
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
            { text: 'ChartBar3D 3D柱状图', link: '/components/bar3dchart' },
            { text: 'ChartPie 饼图', link: '/components/piechart' },
            { text: 'ChartPie3D 3D饼图', link: '/components/piechart3d' },
            { text: 'ChartLine 折线图', link: '/components/linechart' },
            { text: 'ChartMapCq 重庆地图', link: '/components/mapcq' },
            { text: 'ChartMapCq3D 重庆3D地图', link: '/components/mapcq3d' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jqkgg/m-ui' }
    ]
  }
})

