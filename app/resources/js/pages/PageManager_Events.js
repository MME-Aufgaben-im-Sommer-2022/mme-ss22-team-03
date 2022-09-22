import Happening from "../modules/module_event.js"
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

    //TODO: Fetch Event Data from SQL -> Hardcoded first

    var OlivenErnteData = {
        header: "Oliven Ernte",
        subheader: "xx.xx.xxxx - xx.xx.xxxx",
        content: "Hallo das ist ein Test Content",
        imageSrc: "./resources/images/event_page/IMG_event_olivenernte.png",
    }
    var OlivenErnteEvent = new Happening("Event", OlivenErnteData, manager.happeningList.length,  manager.clone);
    manager.happeningList.push(OlivenErnteEvent);


    var ExampleHappeningData2 = {
        header: "Test Header2",
        subheader: "Test Subheader2",
        content: "Test Content2",
        imageSrc: "./resources/images/event_page/IMG_event_permakultur.png",
    }
    var ExampleHappening2 = new Happening("Event", ExampleHappeningData2, manager.happeningList.length, manager.clone);
    manager.happeningList.push(ExampleHappening2);


    var ExampleHappeningData2 = {
        header: "Test Header2",
        subheader: "Test Subheader2",
        content: "Test Content2",
        imageSrc: "./resources/images/event_page/IMG_event_permakultur.png",
    }
    var ExampleHappening3 = new Happening("Event", ExampleHappeningData2, manager.happeningList.length, manager.clone);
    manager.happeningList.push(ExampleHappening3);
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

    constructor() {
        super();

        this.happeningList = [];

        initManager(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Events;