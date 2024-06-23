import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { Thoughts } from '../models/Thoughts.js'
import { noteService } from "../services/NoteService.js";


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
    }

    saveNotes() {
        event.preventDefault();
        const form = event.target
        const formData = getFormData(form)
        // @ts-ignore
        const textarea = form.writings
        // @ts-ignore
        const btnLabel = form.name
        const newBtnLabel = btnLabel.value
        const newDetails = textarea.value
        console.log(newBtnLabel + '✅ ✅ ✅', newDetails);
    }


    drawThoughtPad() {
        let activeHTML = Thoughts.prototype.DrawNotePad
        setHTML('active-NotPad', activeHTML)
    }
}
