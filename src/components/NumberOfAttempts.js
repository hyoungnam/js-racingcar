import { $ } from '../utils/selector.js'

export default class NumberOfAttemts {
  #app
  #props
  constructor(app, props) {
    this.#app = app
    this.#props = props
    this.render()
  }
  template() {
    return `<fieldset>
    <p>시도할 횟수를 입력해주세요.</p>
    <div class="d-flex">
      <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
      <button type="button" class="btn btn-cyan">확인</button>
    </div>
  </fieldset>`
  }
  bindEvent() {}
  render() {
    console.log('NumberOfAttempts, render(): ', this.#app)
    this.#app.insertAdjacentHTML('afterbegin', this.template())
  }
}
