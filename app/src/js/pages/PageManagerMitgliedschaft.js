import { Observable } from "../utils/Observable.js";
import FormManager from "../modules/FormManager.js";

let myFormManager = new FormManager("mitgliedschaft");

export default class PageManagerMitgliedschaft extends Observable {

    constructor() {
        super();

        //initManager();
    }

    sendMembershipRequest() {
        var data;

        data = myFormManager.getData();

        console.log(data);
    }
}
