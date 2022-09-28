import { Event, Observable } from "../utils/Obervable.js";

function init(manager) {
    initControls(manager);
    initEvents(manager);

    manager.setFrequencyButtons(manager.FormData.frequency);

    Dage.update();
    manager.switchPage("step1");
}

function initControls(manager) {
    manager.controls = {
        next: document.querySelector(".buttonNext"),
        goUp: document.querySelector(".buttonGoUp"),

        btn_monatlich: document.querySelector('[name="monatlich"]'),
        btn_halbjährlich: document.querySelector('[name="halbjährlich"]'),
        btn_jährlich: document.querySelector('[name="jährlich"]'),
        btn_eimalig: document.querySelector('[name="einmalig"]'),
    };

}

function initEvents(manager) {
    manager.controls.next.addEventListener("click", manager.checkInput
        .bind(manager));
    manager.controls.goUp.addEventListener("click", manager.onGoUpClick
        .bind(manager));

    manager.controls.btn_eimalig.addEventListener("click", function () {
        manager.setFrequencyButtons(1);
    }, false);
    manager.controls.btn_monatlich.addEventListener("click", function () {
        manager.setFrequencyButtons(2);
    }, false);
    manager.controls.btn_halbjährlich.addEventListener("click", function () {
        manager.setFrequencyButtons(3);
    }, false);
    manager.controls.btn_jährlich.addEventListener("click", function () {
        manager.setFrequencyButtons(4);
    }, false);



}

class SpendenFormManager extends Observable {

    constructor() {
        super();
        this.currentPage = "none";

        this.FormData = {
            amount: 0,
            frequency: 2,  //1 = einmalig, 2 = monatlich, 3 = halbjährig, 4 = jährlich
            prename: "",
            surname: "",
            street: "",
            plz: "",
            email: "",
        }
        init(this);
    }

    onGoUpClick() {
        console.log("go up");
        // TODO: Page Scroll Up function
    }


    checkInput() {

        var isValid = false;

        switch (this.currentPage) {
            case "step1":
                if (this.data.input_amount.value == "" || this.data.input_amount.value == null) {
                    isValid = false;
                } else
                    isValid = true;
                break;
            case "step2":
                if (this.data.inputPrename.value == "" || this.data.inputPrename.value == null || this.data.inputSurname.value == "" || this.data.inputSurname.value == null || this.data.inputStreet.value == "" || this.data.inputStreet.value == null || this.data.inputStreet.value == "" || this.data.inputStreet.value == null || this.data.input_plz.value == "" || this.data.input_plz.value == null || this.data.inputEmail.value == "" || this.data.inputEmail.value == null) {
                    isValid = false;
                } else
                    isValid = true;
                break;
            case "none":
                break;
            default:
                break;
        }

        if (!isValid) {
            // TODO: Message, that Input is missing fancier
            console.log("Input is missing!");
            alert("PLEASE FILL OUT ALL INFORMATION");
            return;

        } else
            this.submitPage();
    }


    submitPage() {
        switch (this.currentPage) {
            case "step1":

                FormData.amount = this.data.input_amount.value;

                this.switchPage("step2");
                console.log("amount: " + FormData.amount + " | frequency: " + FormData.frequency);

                break;
            case "step2":

                FormData.prename = this.data.inputPrename.value;
                FormData.surname = this.data.inputSurname.value;
                FormData.street = this.data.inputStreet.value;
                FormData.plz = this.data.input_plz.value;
                FormData.city = this.data.inputCity.value;
                FormData.email = this.data.inputEmail.value;

                this.switchPage("step3");
                console.log("prename: " + FormData.prename + " | surname: " + FormData.surname + " | street: " + FormData.street + " | plz: " + FormData.plz + " | city: " + FormData.city + FormData.surname + " | email: " + FormData.email);

                break;
            case "step3":
                //TODO: Online Payment Plugin
                break;
            case "none":
                this.switchPage("none");
                break;
            default:
                break;
        }
    }

    switchPage(step) {

        this.currentPage = step;
        Dage.update();
        Dage.navigate(step);
        // console.log("navigating to page: " + this.currentPage);

    }

    setFrequencyButtons(newFrequency) {

        FormData.frequency = newFrequency;

        this.controls.btn_eimalig.classList.remove("active");
        this.controls.btn_monatlich.classList.remove("active");
        this.controls.btn_halbjährlich.classList.remove("active");
        this.controls.btn_jährlich.classList.remove("active");

        switch (FormData.frequency) {          //1 = einmalig, 2 = monatlich, 3 = halbjährig, 4 = jährlich
            case 1:
                this.controls.btn_eimalig.classList.add("active");
                break;
            case 2:
                this.controls.btn_monatlich.classList.add("active");
                break;
            case 3:
                this.controls.btn_halbjährlich.classList.add("active");
                break;
            case 4:
                this.controls.btn_jährlich.classList.add("active");
                break;
        }
    }
}

export default SpendenFormManager;