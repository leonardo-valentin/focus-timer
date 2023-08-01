import state from "./state.js"
import * as el from "./elements.js"
import * as actions from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export let pauseTime

export function countDown() {
  pauseTime = setTimeout(() => {
    if (state.isRunning == false) {
      // clearTimeout(pauseTime)
      return
    }

    let seconds = Number(el.seconds.textContent)
    let minutes = Number(el.minutes.textContent)

    seconds--
    if (seconds < 0) {
      minutes--
      seconds = 59
    }
    if (minutes < 0) {
      actions.reset()
      kitchenTimer.play()
      return
    }

    updateDisplay(minutes, seconds)
    countDown()
    // setTimeout(countDown, 1000)
  }, 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
