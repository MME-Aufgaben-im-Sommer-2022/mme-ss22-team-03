import { Event, Observable } from "../utils/Observable.js";


function init(manager) {
    initControls(manager);
    initEvents(manager);

    Dage.update();
    manager.switchPage("step1");
}

function initControls(manager) {
    manager.controls = {
        next: document.querySelector(".buttonNext"),
        goUp: document.querySelector(".buttonGoUp"),
    };
}

function initEvents(manager) {
    manager.controls.next.addEventListener("click", manager.onNextClick
        .bind(manager));
    manager.controls.goUp.addEventListener("click", manager.onGoUpClick
        .bind(manager));
}

class PageManager_Spenden extends Observable {

    constructor() {
        super();

        this.currentPage = "none";

        init(this);
    }

    onNextClick() {

        switch (this.currentPage) {
            case "step1":
                this.switchPage("step2");
                break;
            case "step2":
                this.switchPage("step3")
                break;
            case "step3":
                this.switchPage("step4")
                break;
            case "none":
                this.switchPage("none")
                break;
            default:
                break;

        }
    }

    switchPage(step) {

        this.currentPage = step;
        Dage.update();
        Dage.navigate(step);
        console.log("navigating to page: " + this.currentPage);

    }

    onGoUpClick() {
        console.log("go up");
    }
}

export default PageManager_Spenden;