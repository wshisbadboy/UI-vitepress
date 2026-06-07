import Button from './components/Button/Button.vue'
import { Collapse, CollapseItem } from './components/Collapse'
import Alert from './components/Alert/Alert.vue'
import { Message } from './components/Message'

export { Button, Collapse, CollapseItem, Alert, Message }

const components = [Button, Collapse, CollapseItem, Alert, Message]

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default { install }
export { install }
