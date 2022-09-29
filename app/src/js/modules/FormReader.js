import Observable from "../utils/Observable.js";

function init(manager) {

    initInputFields(manager);

    manager.readInput();
}

function initInputFields(manager) {

    manager.data = {
        inputPrename: document.querySelector("[name=\"inputPrename\"]"),
        inputSurname: document.querySelector("[name=\"inputSurname\"]"),
        inputStreet: document.querySelector("[name=\"inputStreet\"]"),
        inputCity: document.querySelector("[name=\"inputCity\"]"),
        inputEmail: document.querySelector("[name=\"inputEmail\"]"),
    };

    if (manager.myPageID === "Mitgliedschaft") {
        manager.data.inputMobile = document.querySelector("[name=\"inputMobile\"]");
        manager.data.inputBirthday = document.querySelector("[name=\"inputBirthday\"]");
    }
}

export default class FormReader extends Observable {

    constructor(pageID) {
        super();

        this.myPageID = pageID;
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

    readInput() {

        if (this.data.inputPrename.value === "" || this.data.inputPrename.value === null || this.data.inputSurname.value === "" || this.data.inputSurname.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputStreet.value === "" || this.data.inputStreet.value === null || this.data.inputEmail.value === "" || this.data.inputEmail.value === null) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }

        if (this.myPageID === "Mitgliedschaft") {
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

            if (this.myPageID === "Mitgliedschaft") {
                this.FormData.mobile = this.data.inputMobile.value;
                this.FormData.birthday = this.data.inputBirthday.value;
            }
        }
    }

    getData() {
        return this.FormData;
    }
}