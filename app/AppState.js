import { Notes } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  notes = [
    new Notes({
      name: 'Leg Day',
      writings: 'First we will start with lightweight leg press, 4-6 set of 15-25 reps'
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())