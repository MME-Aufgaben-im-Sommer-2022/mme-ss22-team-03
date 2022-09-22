import Happening from "../modules/Happening.js"
import { Event, Observable } from "../utils/Obervable.js";


//TODO: 
// - Connect Event List to SQL

function initManager(manager) {

    initControls(manager);
    initEventList(manager);

    UpdateHappeningList(manager);
}

function initControls(manager) {

    manager.controls = {
        happeningList: document.querySelector('.happeningList'),
        overViewList: document.querySelector('.overViewList'),
    }

    const template = document.querySelector('#happeningTemplate');
    manager.clone = template.content.cloneNode(true);
    manager.overViewElement = manager.clone.querySelector('.overViewElement')
}

function initEventList(manager) {
    manager.happeningDataList.forEach(happeningData => {
        var newHappening = new Happening("Event", happeningData, manager.happeningDataList.length, manager.clone);
        manager.happeningList.push(newHappening);
    });

    console.log(manager.happeningList);
}

function UpdateHappeningList(manager) {

    manager.happeningList.forEach(happening => {

        let overViewClone = manager.overViewElement.cloneNode(true);
        overViewClone.querySelector('.overViewHeader').textContent = happening.data.header;
        overViewClone.querySelector('.overViewSubheader').textContent = happening.data.subheader;

        manager.controls.overViewList.append(overViewClone);
        manager.controls.happeningList.append(happening.htmlData);
    })
}

class PageManager_Events extends Observable {

    constructor(happeningDataList) {
        super();

        this.happeningList = [];
        this.happeningDataList = happeningDataList;

        initManager(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Events;