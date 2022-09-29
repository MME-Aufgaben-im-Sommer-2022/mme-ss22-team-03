import Happening from "../modules/Happening.js";
import { Observable } from "../utils/Observable.js";
import FireBaseConnector from "../database/FireBaseConnector.js";

async function initManager(manager) {

    await initData(manager);

    initControls(manager);
    initEventList(manager);

    UpdateHappeningList(manager);
}

async function initData(manager) {

    var entryList,
        keyList;

    //  Fetch EventList
    try {
        let data = await FireBaseConnector.getData("data/pages/event/eventList");
        manager.happeningList = data;
        console.log(manager.happeningList);
    } catch (error) {
        console.error(error);
    }

    entryList = Object.values(manager.happeningList);
    keyList = Object.keys(manager.happeningList);

    manager.happeningList = [];

    keyList.forEach(key => {
        let idx = keyList.indexOf(key),
            newEvent = {
                id: key,
                header: entryList[idx].header,
                date: entryList[idx].date,
                imageSrc: entryList[idx].imageSrc,
                content: entryList[idx].content,
            };
        manager.happeningList.push(newEvent);
    });
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
        overViewClone.querySelector(".overViewSubheader").textContent = happening.data.date;

        manager.controls.overViewList.append(overViewClone);
        manager.controls.happeningList.append(happening.htmlData);
    });
}

export default class PageManagerEvents extends Observable {

    constructor() {
        super();

        this.happeningList = [];

        initManager(this);
    }

    openRequest(id) {
        console.log(id);
        //TODO: Fetch correct Happening and call openRequest
    }
}