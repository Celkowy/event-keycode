const key = document.querySelector('.event-key')
const keyCode = document.querySelector('.event-keyCode')
const code = document.querySelector('.event-code')
const wrapper = document.querySelector('.wrapper')
const bigKeycode = document.querySelector('.keycode')
bigKeycode.style.display = 'none'

window.addEventListener('keydown', event => {
  bigKeycode.style.display = 'block'
  const press = (document.querySelector('.press').style.display = 'none')
  bigKeycode.innerHTML = event.keyCode

  wrapper.innerHTML = `
  <div class="event-key flex">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>
  <div class="event-keyCode flex">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="event-code flex">
    ${event.code}
    <small>event.code</small>
  </div>`
})
