import { Observable } from "../utils/Observable.js";

function initManager(manager) {

    initControls(manager);
}

function initControls() {

    // manager.controls = {
    //     exampleButton: document.getElementsByName('exampleID')[0],
    // }

    // manager.controls.exampleButton.addEventListener("click", function (
    //     e) {
    //     manager.exampleFunction("value");
    // });
}

export default class PageManagerMitgliedschaft extends Observable {

    constructor() {
        super();

        initManager(this);
    }
}
