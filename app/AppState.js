import { Thoughts } from './models/Thoughts.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  Thought = [
    new Thoughts({
      name: 'Leg Day',
      writings: 'Push yourself, because no one else is going to do it for you The pain you feel today will be the strength you feel tomorrow.'
    }),
    new Thoughts({
      name: 'Chest Day',
      writings: "Success isn't always about greatness.It's about consistency. Consistent hard work gains success Don't limit your challenges.Challenge your limits."
    }),
    new Thoughts({
      name: 'Back Day',
      writings: "It's not about having time; it's about making time he only bad workout is the one that didn't happen"
    })
  ]
  /** @type {Thoughts} */
  activeThoughts = null
}

export const AppState = createObservableProxy(new ObservableAppState())