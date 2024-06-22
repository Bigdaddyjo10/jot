import { Notes } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  notes = [
    new Notes({
      name: 'Leg Day',
      writings: 'Push yourself, because no one else is going to do it for you The pain you feel today will be the strength you feel tomorrow.'
    }),
    new Notes({
      name: 'Chest Day',
      writings: "Success isn't always about greatness.It's about consistency. Consistent hard work gains success Don't limit your challenges.Challenge your limits."
    }),
    new Notes({
      name: 'Back Day',
      writings: "It's not about having time; it's about making time he only bad workout is the one that didn't happen"
    })
  ]
  /** @type {Notes} */
  activeThoughts = null
}

export const AppState = createObservableProxy(new ObservableAppState())