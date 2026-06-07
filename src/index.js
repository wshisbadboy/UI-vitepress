import Button from './components/Button/Button.vue'
import { Collapse, CollapseItem } from './components/Collapse'

export { Button, Collapse, CollapseItem }

const components = [Button, Collapse, CollapseItem]

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default { install }
export { install }
