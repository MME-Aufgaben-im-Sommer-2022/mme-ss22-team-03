import { Observable } from "../utils/Observable.js";
import FormReader from "../modules/FormReader.js";

function initManager(manager) {

    initControls(manager);
    initListeners(manager);
}

function initControls(manager) {

    manager.controls = {
        NextButton: document.querySelector(".SFHeader_Btn"),
        Step1: document.querySelector("[id='Step1']"),
        Step2: document.querySelector("[id='Step2']"),
        Step3: document.querySelector("[id='Step3']"),

        Test: document.getElementById("TEST"),
    };
}

function initListeners(manager) {

    //  Event Listeners for Next Button
    manager.controls.NextButton.addEventListener("click", () => {
        manager.nextButtonClick();
    });

    //  Event Listeners for Step Buttons
    manager.controls.Step1.addEventListener("click", () => {
        manager.switchFormStep("step1");
    });
    manager.controls.Step2.addEventListener("click", () => {
        manager.switchFormStep("step2");
    });

    manager.controls.Step3.addEventListener("click", () => {
        manager.switchFormStep("step3");
    });


    manager.controls.Test.addEventListener("click", () => {
        manager.checkInputData();
    });
}

export default class PageManagerSpenden extends Observable {

    constructor(pageID) {
        super();

        this.myPageId = pageID;

        this.currentFormStep = "";

        initManager(this);
        this.switchFormStep("step1");
    }

    nextButtonClick() {
        switch (this.currentFormStep) {
            case "step1":
                this.switchFormStep("step2");
                break;
            case "step2":
                this.switchFormStep("step3");
                break;
            default:
                break;
        }
    }

    switchFormStep(step) {
        this.currentFormStep = step;
        Dage.update();
        Dage.navigate(step);
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