import { Event, Observable } from "../utils/Obervable.js";


//TODO: 
// - Add Event List Manager
// - Connect Event List to SQL

function initManager(manager) {

    initControls(manager);
}

function initControls(manager) {

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