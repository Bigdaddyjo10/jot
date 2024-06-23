import { generateId } from "../utils/GenerateId.js";


export class Thoughts {
    constructor(data) {
        this.noteId = generateId
        this.name = data.name;
        this.writings = data.writings;
    }

    get DrawOldNots() {
        return `
        <button class="btn btn-danger my-2">${this.name} <i class="mdi mdi-arrow-right"></i></button>
        `
    }

    get DrawNotePad() {
        return `
        <form onsubmit="app.NoteController.saveNotes()">
    <button class="btn btn-success mdi mdi-content-save my-1 d-flex justify-content-end" type="submit">Save</button>
    <div class="mb-3">
        <label for="" class="form-label text-light">Title</label>
        <input
            type="text"
            class="form-control"
            name="name"
            id="name"
        />
        <small id="helpId" class="form-text text-mute text-light">Thought?</small>
    </div>
    <textarea name="writings" id="writings" cols="30" rows="20"></textarea>
</form>`
    }

}

