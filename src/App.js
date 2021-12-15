import CarNameInput from './components/CarNameInput.js'
import NumberOfAttemts from './components/NumberOfAttempts.js'
import Store from './core/Store.js'
import { $ } from './utils/selector.js'

export default class App {
  #store
  #appState
  constructor(store) {
    this.#store = store
    this.init()
  }
  init = () => {
    this.#store.registerObserver({
      key: 'CarNameInput',
      component: new CarNameInput('#app'),
    })
  }
  getAppState = () => {}
  
  updateViews = (keys) => {
    this.#store.notifyObservers(keys)
  }
}
