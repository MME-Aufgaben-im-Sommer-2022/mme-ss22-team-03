import Observable from "../utils/Observable.js";

function init(manager) {

    initHTML(manager);
    initControls(manager);
    initListeners(manager);
    initInputFields(manager);

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

function initHTML(manager) {

    const template = document.querySelector("#formTemplate");
    manager.clone = template.content.cloneNode(true);
    if (manager.currentPageID === "mitgliedschaft") {
        manager.formElement = manager.clone.querySelector("#membershipForm");
    } else {
        manager.formElement = manager.clone.querySelector("#spendenForm");
    }


    //  Fill Template Information with data
    let FormClone = manager.formElement.cloneNode(true);
    // ProgressBarClone.querySelector("#progressBarHeader").textContent = manager.percentage + "% unseres Ziels erreicht";
    // ProgressBarClone.querySelector("#progressCurrentValue").textContent = manager.current + " EUR gespendet";
    // ProgressBarClone.querySelector("#progressGoal").textContent = "Ziel: " + manager.aim + " EUR";

    //  Give ProgressGroup the Template HTML
    document.getElementById("FormHolder").append(FormClone);
}

export default class FormManager extends Observable {

    constructor(pageID) {
        super();

        this.currentPageID = pageID;
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

    stepButtonClick(step) {

        console.log("Step Button Click: " + step);
        switch (step) {
            case "step1":

                break;
            case "step2":
                break;
            case "step3":
                break;
            case "nextStep":
                break;
            default:
                break;
        }
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

    readInput() {

        if (this.data.inputPrename.value === "" || this.data.inputPrename.value === null || this.data.inputSurname.value === "" || this.data.inputSurname.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputEmail.value === "" || this.data.inputEmail.value === null) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }

        if (this.currentPageID === "Mitgliedschaft") {
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

            if (this.currentPageID === "Mitgliedschaft") {
                this.FormData.mobile = this.data.inputMobile.value;
                this.FormData.birthday = this.data.inputBirthday.value;
            }
        }
    }

    getData() {
        return this.FormData;
    }
}
