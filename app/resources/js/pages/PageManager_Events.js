import Happening from "../modules/Happening.js"
import { Event, Observable } from "../utils/Obervable.js";


function initManager(manager) {

    initControls(manager);
    initLists(manager);
}

function initControls(manager) {
    manager.controls = {
        happeningList: document.querySelector('.happeningList'),
        overViewList: document.querySelector('.overViewList'),
    }
}

function initLists(manager) {

    const template = document.querySelector('#happeningTemplate');
    manager.clone = template.content.cloneNode(true);
    manager.overViewElement = manager.clone.querySelector('.overViewElement')

    var tempDataList = manager.happeningList;
    manager.happeningList = [];

    tempDataList.forEach(happeningData => {
        var tempHappening = new Happening("Event", happeningData, tempDataList.indexOf(happeningData), manager.clone);

        let overViewClone = manager.overViewElement.cloneNode(true);
        overViewClone.querySelector('.overViewHeader').textContent = tempHappening.data.header;
        overViewClone.querySelector('.overViewSubheader').textContent = tempHappening.data.subheader;

        manager.controls.overViewList.append(overViewClone);
        manager.controls.happeningList.append(tempHappening.htmlData);
        manager.happeningList.push(tempHappening);
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