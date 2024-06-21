import { Notes } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  notes = [
    new Notes({
      name: 'Leg Day',
      writings: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah'
    }),
    new Notes({
      name: 'chest day',
      writings: 'blah blah blah blah blah blah blah blah'
    }),
    new Notes({
      name: 'back day',
      writings: 'blah blah blah blah blah blah blah blah blah blah blah blah blah'
    })
  ]
  /** @type {Notes} */
  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())