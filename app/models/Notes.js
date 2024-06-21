import { generateId } from "../utils/GenerateId.js";
import { AppState } from "../AppState.js";

export class Notes {
    constructor(data) {
        this.noteId = generateId
        this.name = data.name;
        this.writings = data.writings;
    }
}