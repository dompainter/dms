import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

(global).window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node')
}

enzyme.configure({ adapter: new Adapter() })
