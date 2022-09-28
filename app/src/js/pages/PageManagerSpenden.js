import { Observable } from "../utils/Observable.js";
import FormReader from "../modules/FormReader.js";

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

export default class PageManagerSpenden extends Observable {

    constructor() {
        super();

        initManager(this);
    }

    checkInputData() {
        var myFormReader,
            inputData;

        myFormReader = new FormReader();

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