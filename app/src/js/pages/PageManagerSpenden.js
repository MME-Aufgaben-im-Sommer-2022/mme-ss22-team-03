/* eslint-disable no-undef */
import { Observable } from "../utils/Observable.js";
import FormReader from "../modules/FormManager.js";
import FormManager from "../modules/FormManager.js";

let myFormManager;


function initManager(manager) {

    initControls(manager);
    initListeners(manager);

    myFormManager = new FormManager("spenden");
}

function initControls(manager) {

    manager.controls = {
        donateButton: document.getElementById("donateButton"),
    };
}

function initListeners(manager) {
    //  Event Listeners for Next Button
    manager.controls.donateButton.addEventListener("click", () => {
        manager.donateButtonClick();
    });
}

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

    sendDonationData(data) {

        console.log(data);
        //TODO: Send Datat to Firebase database
        // var personData;
        // personData = myFormReader.getData();
    }
}