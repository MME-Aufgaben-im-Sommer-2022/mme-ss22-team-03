import { Event, Observable } from "../utils/Observable.js";

function init(manager) {

    initButtonList(manager);
    initListeners(manager);
}

function initButtonList(manager) {
    manager.buttonHTMLList = document.querySelectorAll(".button");
}

function initListeners(manager) {
    manager.buttonHTMLList.forEach(button => {
        button.addEventListener("click", (e) => {
            manager.buttonClick(e.target.id, e.target.name);
        });
    });
}

class ButtonManager extends Observable {
    constructor() {
        super();

        init(this);
    }

    buttonClick(id, name) {
        let event;

        switch (id) {
            case "donate":
                // eslint-disable-next-line no-case-declarations
                event = new Event("donateClicked", "Spenden");
                break;
            case "participate":
                break;
            case "switchPage":
                event = new Event("switchPage", name);
                break;
            case "request":
                event = new Event(id, name);
                break;
            case "scroll":
                event = new Event(id, name);
                break;
            default:
                break;
        }

        this.notifyAll(event);
    }
}

export default ButtonManager;