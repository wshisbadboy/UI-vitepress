import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import DemoBlock from './DemoBlock.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import CollapseDemo from '../components/CollapseDemo.vue'
import AlertDemo from '../components/AlertDemo.vue'
import MessageDemo from '../components/MessageDemo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('ButtonDemo', ButtonDemo)
    app.component('CollapseDemo', CollapseDemo)
    app.component('AlertDemo', AlertDemo)
    app.component('MessageDemo', MessageDemo)
  },
} satisfies Theme
