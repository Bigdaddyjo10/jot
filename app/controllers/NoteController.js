import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { Thoughts } from '../models/Thoughts.js'


export class NoteController {

    constructor() {
        const words = AppState.Thought
        let listHTML = '';
        words.forEach((word) => listHTML += word.DrawOldNots)
        setHTML('oldNotes', listHTML)
        AppState.on('activeThoughts', this.drawThoughtPad)
    }


    drawOldNotes() {
        let oldThoughts = AppState.activeThoughts
        oldThoughts.DrawOldNots
        console.log("Scooby Doo");
    }

    saveNotes() {
        event.preventDefault();
        const form = event.target
        const formData = getFormData(form)

        console.log(formData);
        console.log("Garfield🙀🙀");
    }

    drawThoughtPad() {
        // const activeThoughts = AppState.Thought
        let activeHTML = Thoughts.prototype.DrawNotePad
        setHTML('active-NotPad', activeHTML)
        console.log("Pizza");
    }
}
