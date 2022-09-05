import { Event, Observable} from "../utils/Obervable.js";

function init(helper) {
    
    // Different Steps Manager
    Dage.update();

    initControls(helper);
    initEvents(helper);
}

function initControls(helper) {
    helper.controls = {
        next: document.querySelector(".buttonNext"),
    };

}

function initEvents(player) {
    helper.controls.next.addEventListener("click", helper.onNextClick
        .bind(helper));
}

class SpendenHelper extends Observable {

    constructor(el) {
        super();
        this.helper = this;
        init(this);
    }

    onNextClick()
    {
        console.log("click");
    }
}

export default SpendenHelper;