import { Event, Observable } from "../utils/Obervable.js";
import ProgressBar from "../modules/ProgressBar.js";


function initManager(manager) {

    initControls(manager);
    initProgressBar(manager);
}

function initControls(manager) {


    // manager.controls.jetztSpenden.addEventListener("click", function (
    //     e) {
    //     manager.exampleFunction("value"); // -> call index.jetztSpenden();
    // });
}

function initProgressBar(manager) {
    manager.ProgressBar = new ProgressBar(500, 100);
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