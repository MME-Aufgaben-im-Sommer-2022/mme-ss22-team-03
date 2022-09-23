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

class PageManager_Mitgliedschaft extends Observable {

    constructor() {
        super();

        initManager(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Mitgliedschaft;