import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { Notes } from '../models/Notes.js'


export class NoteController {

    constructor() {
        const words = AppState.notes
        let listHTML = '';
        words.forEach((word) => listHTML += word)
        setHTML('oldNotes', listHTML)


    }


    drawOldNotes() {
        let df = AppState.activeNote
        df.drawOldNots
        console.log("Pizza");
    }

    saveNotes() {
        event.preventDefault();
        const form = event.target
        const wordData = getFormData(form)
        let jots = AppState.activeNote.writings
        jots = wordData
        console.log(jots);
    }
}