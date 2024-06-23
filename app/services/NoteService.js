import { AppState } from "../AppState.js";
import { Thoughts } from "../models/Thoughts.js";
import { saveState } from "../utils/Store.js";


class NoteService {
    createNotes(dataThought) {

        const thought = AppState.Thought
        const newThoughts = new Thoughts(dataThought)
        thought.push(newThoughts) // 💂 Thoughts!!!!!!!!!
        this.saveThoughts()
        console.log(newThoughts + '📇📇');

    }

    saveThoughts() {
        saveState('Thought', AppState.Thought)
        console.log('saving');
    }
}
export const noteService = new NoteService()