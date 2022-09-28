import { Observable } from "../utils/Observable.js";
import FormReader from "../modules/FormReader.js";

function initManager(manager) {

    initControls(manager);
    initListeners(manager);
}

function initControls(manager) {

    manager.controls = {
        Test: document.getElementById("TEST"),
    };
}

function initListeners(manager) {
    manager.controls.Test.addEventListener("click", () => {
        manager.checkInputData();
    });
}

export default class PageManagerSpenden extends Observable {

    constructor(pageID) {
        super();

        this.myPageId = pageID;

        initManager(this);
    }

    checkInputData() {
        var myFormReader,
            inputData;

        myFormReader = new FormReader(this.myPageId);

        if (myFormReader.isValid) {
            inputData = myFormReader.getData();
            this.sendDonationData(inputData);
        } else {
            //TODO: Input missing -> Display message
            alert("PLEASE FILL OUT ALL INFORMATION");
        }
    }

    sendDonationData(data) {

        console.log(data);
        //TODO: Send Datat to Firebase database
        // var personData;
        // personData = myFormReader.getData();
    }
}