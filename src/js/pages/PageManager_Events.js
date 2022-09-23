import Happening from "../modules/Happening.js";
import { Observable } from "../utils/Observable.js";

//TODO: 
// - Connect Event List to SQL

function initManager(manager) {

    initControls(manager);
    initEventList(manager);

    UpdateHappeningList(manager);
}

function initControls(manager) {

    manager.controls = {
        happeningList: document.querySelector(".happeningList"),
        overViewList: document.querySelector(".overViewList"),
    };

    const template = document.querySelector("#happeningTemplate");
    manager.clone = template.content.cloneNode(true);
    manager.overViewElement = manager.clone.querySelector(".overViewElement");
}

function initEventList(manager) {

    var tempDataList = manager.happeningList,
        newHappening;

    manager.happeningList = [];

    tempDataList.forEach(happeningData => {
        newHappening = new Happening("Event", happeningData, manager.happeningList.length, manager.clone);
        manager.happeningList.push(newHappening);
    });
}

function UpdateHappeningList(manager) {

    manager.happeningList.forEach(happening => {

        let overViewClone = manager.overViewElement.cloneNode(true);
        overViewClone.querySelector(".overViewHeader").textContent = happening.data.header;
        overViewClone.querySelector(".overViewSubheader").textContent = happening.data.subheader;

        manager.controls.overViewList.append(overViewClone);
        manager.controls.happeningList.append(happening.htmlData);
    });
}

class PageManager_Events extends Observable {

    constructor(happeningDataList) {
        super();

        this.happeningList = happeningDataList;

        initManager(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Events;