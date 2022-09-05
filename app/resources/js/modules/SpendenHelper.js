import { Event, Observable } from "../utils/Obervable.js";

function init(helper) {
    initControls(helper);
    initEvents(helper);

    Dage.update();
    helper.switchPage("step1");
}

function initControls(helper) {
    helper.controls = {
        next: document.querySelector(".buttonNext"),
        goUp: document.querySelector(".buttonGoUp"),
    };
}

function initEvents(helper) {
    helper.controls.next.addEventListener("click", helper.onNextClick
        .bind(helper));
        helper.controls.goUp.addEventListener("click", helper.onGoUpClick
            .bind(helper));
}

class SpendenHelper extends Observable {

    constructor(el) {
        super();
        this.helper = this;
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

    onGoUpClick()
    {
        console.log("go up");
    }
}

export default SpendenHelper;