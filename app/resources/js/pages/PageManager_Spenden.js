import { Event, Observable } from "../utils/Obervable.js";


function initManager(manager) {

    initControls(manager);
}

function initControls(manager) {

}

class PageManager_Spenden extends Observable {

    constructor() {
        super();

        initManager(this);
    }
}

export default PageManager_Spenden;