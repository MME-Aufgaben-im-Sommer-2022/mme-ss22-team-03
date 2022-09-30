/* eslint-disable no-undef */
import { Observable } from "../utils/Observable.js";
import FormReader from "../modules/FormManager.js";

function initManager(manager) {

    initControls(manager);
    initListeners(manager);
}

function initControls(manager) {

    manager.controls = {
        NextButton: document.querySelector(".SFHeader_Btn"),
        Step1: document.querySelector("[id='step1Text']"),
        Step2: document.querySelector("[id='step2Text']"),
        Step3: document.querySelector("[id='step3Text']"),

        donateButton: document.getElementById("donateButton"),

        Test: document.getElementById("TEST"),
    };
}

function initListeners(manager) {

    //  Event Listeners for Next Button
    manager.controls.NextButton.addEventListener("click", () => {
        manager.nextButtonClick();
    });

    //  Event Listeners for Next Button
    manager.controls.donateButton.addEventListener("click", () => {
        manager.donateButtonClick();
    });

    //  Event Listeners for Step Buttons
    manager.controls.Step1.addEventListener("click", () => {
        manager.stepButtonClick("step1");
    });
    manager.controls.Step2.addEventListener("click", () => {
        manager.stepButtonClick("step2");
    });

    manager.controls.Step3.addEventListener("click", () => {
        manager.stepButtonClick("step3");
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
                if (this.checkInputData()) {
                    this.switchFormStep("step3");
                }
                break;
            default:
                break;
        }
    }

    stepButtonClick(step) {

        if (step === "step3" && !this.checkInputData()) {
            return;
        }
        this.switchFormStep(step);
    }

    donateButtonClick() {
        var element = document.getElementById("SpendenFormHolder");
        element.scrollIntoView();
    }

    switchFormStep(step) {

        // var tempStepList = document.querySelectorAll(".SFHeader_StepDiv");

        // Array.from(tempStepList).forEach(element => {
        //     element.classList.remove("active");
        //     if (element.id === step + "Text") {
        //         element.classList.add("active");
        //     }
        // });

        this.currentFormStep = step;
        Dage.update();
        Dage.navigate(step);
    }

    checkInputData() {
        var myFormReader,
            inputData,
            goOn = false;

        myFormReader = new FormReader(this.myPageId);

        if (myFormReader.isValid) {
            inputData = myFormReader.getData();
            this.sendDonationData(inputData);
            goOn = true;
        } else {
            //TODO: Input missing -> Display message
            // eslint-disable-next-line no-alert
            alert("PLEASE FILL OUT ALL INFORMATION");
        }

        return goOn;
    }

    sendDonationData(data) {

        console.log(data);
        //TODO: Send Datat to Firebase database
        // var personData;
        // personData = myFormReader.getData();
    }
}