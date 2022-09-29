import Happening from "../modules/Happening.js";
import { Observable } from "../utils/Observable.js";
import FireBaseConnector from "../database/FireBaseConnector.js";

async function initManager(manager) {

    await initData(manager);

    initControls(manager);
    initEventList(manager);
    UpdateHappeningList(manager);
    initEventListeners(manager);
}

async function initData(manager) {

    var entryList,
        keyList;

    //  Fetch EventList
    try {
        let data = await FireBaseConnector.getData("data/pages/event/eventList");
        manager.happeningList = data;
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

    manager.lists = {
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
        overViewClone.querySelector(".overViewHeader").id = happening.data.header;
        overViewClone.querySelector(".overViewSubheader").textContent = happening.data.date;
        overViewClone.id = happening.data.header;

        manager.lists.overViewList.append(overViewClone);
        happening.htmlData.id = happening.data.header + "_Happening";
        manager.lists.happeningList.append(happening.htmlData);
    });
}

function initEventListeners(manager) {
    const overViewElList = document.querySelectorAll(".overViewElement");

    overViewElList.forEach(element => {
        element.addEventListener("click", function (e) {
            manager.scrollToEvent(e.target.id);
        });
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

    scrollToEvent(id) {
        var element = document.getElementById(id + "_Happening");

        element.scrollIntoView();
    }
}