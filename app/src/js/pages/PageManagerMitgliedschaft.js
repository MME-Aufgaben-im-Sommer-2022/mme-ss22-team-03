import { Observable } from "../utils/Observable.js";
import FormManager from "../modules/FormManager.js";

function initManager(manager) {
    manager.myFormManager = new FormManager("mitgliedschaft");
}

export default class PageManagerMitgliedschaft extends Observable {

    constructor() {
        super();

        initManager(this);
    }
}
