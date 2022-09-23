import { Observable } from "../utils/Observable.js";

function initManager(manager) {

    initControls(manager);
}

function initControls() {

    // manager.controls = {
    //     jetztSpenden: document.getElementsByName('jetztSpendenID')[0],
    // }

    // manager.controls.jetztSpenden.addEventListener("click", function (
    //     e) {
    //     manager.exampleFunction("value"); // -> call index.jetztSpenden();
    // });
}

class PageManager_Spenden extends Observable {

    constructor() {
        super();

        initManager(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Spenden;