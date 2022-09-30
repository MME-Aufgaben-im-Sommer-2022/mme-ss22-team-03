/* eslint-disable no-undef */
/* eslint-disable no-alert */
import Observable from "../utils/Observable.js";
import FireBaseConnector from "../database/FireBaseConnector.js";

function init(manager) {

    initHTML(manager);
    initControls(manager);
    initListeners(manager);
    initInputFields(manager);

    Dage.update();
    Dage.navigate("step1");
}

function initHTML(manager) {

    const template = document.querySelector("#formTemplate");
    manager.clone = template.content.cloneNode(true);
    manager.formElement = manager.clone.querySelector("#Form");

    //  Fill Template Information with data
    let FormClone = manager.formElement.cloneNode(true);
    // ProgressBarClone.querySelector("#progressBarHeader").textContent = manager.percentage + "% unseres Ziels erreicht";
    // ProgressBarClone.querySelector("#progressCurrentValue").textContent = manager.current + " EUR gespendet";
    // ProgressBarClone.querySelector("#progressGoal").textContent = "Ziel: " + manager.aim + " EUR";

    //  Give ProgressGroup the Template HTML
    document.getElementById("FormHolder").append(FormClone);
}

function initControls(manager) {

    manager.controls = {
        NextButton: document.querySelector("[id='btn_next']"),
        Step1: document.querySelector("[id='step1Text']"),
        Step2: document.querySelector("[id='step2Text']"),
    };

    if (manager.currentPageID === "spenden") {
        manager.controls.Step3 = document.querySelector("[id='step3Text']");
    }
}

function initListeners(manager) {

    //  Event Listeners for Next Button
    manager.controls.NextButton.addEventListener("click", () => {
        manager.stepButtonClick("nextStep");
    });

    //  Event Listeners for Step Buttons
    manager.controls.Step1.addEventListener("click", () => {
        manager.stepButtonClick("step1");
    });
    manager.controls.Step2.addEventListener("click", () => {
        manager.stepButtonClick("step2");
    });
    if (manager.currentPageID === "spenden") {
        manager.controls.Step3.addEventListener("click", () => {
            manager.stepButtonClick("step3");
        });
    }
}

function initInputFields(manager) {

    manager.data = {
        inputPrename: document.querySelector("[name=\"input_prename\"]"),
        inputSurname: document.querySelector("[name=\"input_surname\"]"),
        inputStreet: document.querySelector("[name=\"input_street\"]"),
        inputCity: document.querySelector("[name=\"input_city\"]"),
        inputEmail: document.querySelector("[name=\"input_email\"]"),
    };

    if (manager.currentPageID === "mitgliedschaft") {
        manager.data.inputMobile = document.querySelector("[name=\"input_mobile\"]");
        manager.data.inputBirthday = document.querySelector("[name=\"input_birthday\"]");
    }
}

export default class FormManager extends Observable {

    constructor(pageID) {
        super();

        this.pageID = pageID;
        this.isValid = false;

        this.FormData = {
            prename: "",
            surname: "",
            street: "",
            city: "",
            email: "",

            mobile: "",
            birthday: "",
        };

        init(this);
    }

    async stepButtonClick(step) {

        this.readInput();

        if (step === "nextStep" && this.pageID === "mitgliedschaft") {
            FireBaseConnector.sendRequestData(this.FormData, "membership");
        } else if (step === "nextStep" && this.pageID === "spenden") {
            FireBaseConnector.sendRequestData(this.FormData, "donation");
        } else {
            this.switchFormStep(step);
        }

        // switch (step) {
        //     case "step1":
        //         this.switchFormStep(step);
        //         break;
        //     case "step3":
        //     case "step2":
        //     case "nextStep":
        //         if (this.currentPageID === "mitgliedschaft" && this.checkInputData("membership")) {
        //             this.switchFormStep("step2");
        //         } else if (this.currentPageID === "spenden" && this.checkInputData("donation")) {
        //             this.switchFormStep("step3");
        //         }
        //         break;
        //     default:
        //         break;
        // }
    }

    switchFormStep(step) {

        var tempStepList = document.querySelectorAll("._membership_StepDiv"),
            idString = step + "Text";

        Array.from(tempStepList).forEach(element => {
            element.classList.remove("active");
            if (element.id === idString) {
                element.classList.add("active");
            }
        });

        this.currentFormStep = step;
        Dage.update();
        Dage.navigate(step);
    }

    readInput() {

        if (this.data.inputPrename.value === "" || this.data.inputPrename.value === null || this.data.inputSurname.value === "" || this.data.inputSurname.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputEmail.value === "" || this.data.inputEmail.value === null) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }

        if (this.currentPageID === "mitgliedschaft") {
            if (this.data.inputMobile.value === "" || this.data.inputMobile.value === null || this.data.inputBirthday.value === "" || this.data.inputBirthday.value === null) {
                this.isValid = false;
            }
        }

        if (this.isValid) {
            this.FormData.prename = this.data.inputPrename.value;
            this.FormData.surname = this.data.inputSurname.value;
            this.FormData.street = this.data.inputStreet.value;
            this.FormData.city = this.data.inputCity.value;
            this.FormData.email = this.data.inputEmail.value;

            if (this.currentPageID === "mitgliedschaft") {
                this.FormData.mobile = this.data.inputMobile.value;
                this.FormData.birthday = this.data.inputBirthday.value;
            }
        }
    }

    getData() {
        return this.FormData;
    }
}
