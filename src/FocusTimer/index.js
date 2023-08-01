import state from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start(min, seg) {
  state.minutes = min
  state.seconds = seg

  timer.updateDisplay()
  events.registerControls()
  events.setMinutes()
}
