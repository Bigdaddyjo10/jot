import { generateId } from "../utils/GenerateId.js";


export class Notes {
    constructor(data) {
        this.noteId = generateId
        this.name = data.name;
        this.writings = data.writings;
    }

    get drawOldNots() {
        return `
        <ul>
            <button>${this.name}</button>
            <p>${this.writings}</p>
        </ul>
        `
    }


    get drawNotePad() {
        return `
        <form onsubmit="app.NoteController.saveNotes()">
     <button class="btn btn-success mdi mdi-content-save my-1 d-flex justify-content-end" type="submit">Save</button>
     <textarea name="writings" id="" cols="30" rows="20"></textarea>
 </form>`
    }

}

