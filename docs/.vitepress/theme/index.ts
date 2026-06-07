import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import DemoBlock from './DemoBlock.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import CollapseDemo from '../components/CollapseDemo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('ButtonDemo', ButtonDemo)
    app.component('CollapseDemo', CollapseDemo)
  },
} satisfies Theme
