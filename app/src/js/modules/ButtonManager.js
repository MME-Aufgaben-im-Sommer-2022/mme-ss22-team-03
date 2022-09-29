import { Event, Observable } from "../utils/Observable.js";

function init(manager) {

    initButtonList(manager);
    initListeners(manager);
}

function initButtonList(manager) {
    manager.buttonHTMLList = document.querySelectorAll(".button");
    manager.buttonUp = document.querySelector(".buttonUp");
}

function initListeners(manager) {
    manager.buttonHTMLList.forEach(button => {
        button.addEventListener("click", (e) => {
            manager.buttonClick(e.target.id, e.target.name);
        });
    });

    if (manager.buttonUp !== null && manager.buttonUp !== undefined) {
        manager.buttonUp.addEventListener("click", (e) => {
            manager.scrollUp();
        });
    }

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

    scrollUp() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}

export default ButtonManager;