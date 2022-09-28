import Observable from "../utils/Observable.js";

function init(manager) {

    initInputFields(manager);

    manager.checkInput();
}

function initInputFields(manager) {

    manager.data = {
        inputPrename: document.querySelector('[name="TextinputPrename"]'),
        inputSurname: document.querySelector('[name="TextinputSurname"]'),
        inputStreet: document.querySelector('[name="TextinputStreet"]'),
        inputCity: document.querySelector('[name="TextinputCity"]'),
        inputEmail: document.querySelector('[name="TextinputEmail"]'),
    };

    if (manager.myPageID === "mitgliedschaft") {
        manager.data.inputMobile = document.querySelector('[name="TextinputEmail"]');
        manager.data.inputBirthday = document.querySelector('[name="TextinputEmail"]');
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

        if (this.myPageID === "mitgliedschaft") {
            if (this.data.inputMobile.value === "" || this.data.inputMobile.value === null || this.data.inputBirthday.value === "" || this.data.inputBirthday.value === null) {
                this.isValid = false;
            }
        }

        if (this.isValid) {
            FormData.prename = this.data.inputPrename.value;
            FormData.surname = this.data.inputSurname.value;
            FormData.street = this.data.inputStreet.value;
            FormData.city = this.data.inputCity.value;
            FormData.email = this.data.inputEmail.value;

            if (this.myPageID === "mitgliedschaft") {
                FormData.mobile = this.data.inputMobile.value;
                FormData.birthday = this.data.inputBirthday.value;
            }
        }
    }

    getData() {
        return this.FormData;
    }
}