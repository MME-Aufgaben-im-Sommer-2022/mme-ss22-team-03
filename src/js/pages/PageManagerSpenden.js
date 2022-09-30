/* eslint-disable no-undef */
import { Observable } from "../utils/Observable.js";
import FormManager from "../modules/FormManager.js";

function initManager(manager) {

    // initControls(manager);
    // initListeners(manager);

    manager.myFormManager = new FormManager("spenden");
}

// function initControls(manager) {

//     manager.controls = {
//         donateButton: document.getElementById("donateButton"),
//     };
// }

// function initListeners(manager) {
//     //  Event Listeners for Next Button
//     manager.controls.donateButton.addEventListener("click", () => {
//         //     manager.donateButtonClick();
//         // });
//     }

export default class PageManagerSpenden extends Observable {

    constructor(pageID) {
        super();

        this.myPageId = pageID;

        this.currentFormStep = "";

        initManager(this);
    }

    donateButtonClick() {
        var element = document.getElementById("SpendenFormHolder");
        element.scrollIntoView();
    }
}