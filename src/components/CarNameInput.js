import { $ } from '../utils/selector.js'

export default class CarNameInput {
  #app
  #props
  constructor(app, props) {
    this.#app = $(app)
    this.#props = props
    this.render()
    this.addEvent()
  }

  template() {
    return `
    <section class="d-flex justify-center mt-5">
      <form id="car-name-form">
        <fieldset>
        <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
        <p>
          5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
          예시) EAST, WEST, SOUTH, NORTH
        </p>
        <div class="d-flex">
          <input type="text" name="name" class="w-100 mr-2" placeholder="자동차 이름" />
          <button type="button" class="btn btn-cyan">확인</button>
        </div>
        </fieldset>
      </form>
    </section>
  `
  }

  addEvent() {
    const $form = this.#app.querySelector('#car-name-form')
    const $inputs = [...this.#app.querySelectorAll('input')]

    $form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('$inputs: ', $inputs, $inputs[0].value)
      console.log('e$form :', this.$form)
      const formData = new FormData($form).values()
      console.log('formData1: ', formData)
      console.log('formData2: ', formData.next().value)
      console.log('e: ', e, e.target, e.target.elements)
    })
  }

  render() {
    this.#app.insertAdjacentHTML('afterbegin', this.template())
  }
}

// constructor() {
//   super()
//   const $content = el(ProductInventory.#template)
//   this.$form = $content.querySelector('#product-form') as HTMLFormElement
//   this.$inputs = Array.from(this.$form.querySelectorAll('input')) as HTMLInputElement[]
//   this.$inventoryContainer = $content.querySelector(
//     '#product-inventory-container'
//   ) as HTMLTableElement
//   this.$form?.addEventListener('submit', this.onSubmit)
//   this.render($content)
// }
