
import { NoteController } from "./controllers/NoteController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [NoteController],
    view: ``
  },
  {
    path: '',
    view: ''
  }
])