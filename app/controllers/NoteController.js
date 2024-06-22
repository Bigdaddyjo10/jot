import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { Notes } from '../models/Notes.js'


export class NoteController {

    constructor() {
        const words = AppState.notes
        let listHTML = '';

        words.forEach((word) => listHTML += word.drawOldNots)
        setHTML('oldNotes', listHTML)

        // AppState.on('activeThoughts', this.drawThoughtPad)

    }


    drawOldNotes() {
        let oldThoughts = AppState.activeThoughts
        oldThoughts.drawOldNots
        console.log("Scooby Doo");
    }

    saveNotes() {
        // event.preventDefault();
        // const form = event.target
        // const wordData = getFormData(form)
        // let jots = AppState.activeThoughts.writings
        // jots = wordData
        // console.log(jots);
        console.log("Garfield🙀🙀");
    }

    drawThoughtPad() {
        const activeThoughts = AppState.activeThoughts
        let activeHTML = activeThoughts.drawNotePad
        setHTML('active-NotPad', activeHTML)
        console.log("Pizza");
    }
}
// drawActiveCaseFile() {
//     const activeCaseFile = AppState.activeCaseFile
//     let activeHTML = activeCaseFile.ActiveTemplate
//     setHTML('active-case-file', activeHTML)
// }