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
        subheader: "24.10. - 06.11.2022",
        content: "Thema Olivenernte. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./resources/images/event_page/IMG_event_olivenernte.png",
    }
    var OlivenErnteEvent = new Happening("Event", OlivenErnteData, manager.happeningList.length,  manager.clone);
    manager.happeningList.push(OlivenErnteEvent);

    var TraumWorkshopData = {
        header: "Trauma Workshop",
        subheader: "16.11. - 18.11.2022",
        content: "Thema Traum Workshop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./resources/images/event_page/IMG_event_traumaworkshop.png",
    }
    var TraumWorkshopEvent = new Happening("Event", TraumWorkshopData, manager.happeningList.length, manager.clone);
    manager.happeningList.push(TraumWorkshopEvent);


    var PermakulturKursData = {
        header: "Permakultur Kurs",
        subheader: "25.11. - 02.12.2022",
        content: "Thema Landwirtschaft und Permakultur von Volker. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./resources/images/event_page/IMG_event_permakultur.png",
    }
    var PermakulturKursEvent = new Happening("Event", PermakulturKursData, manager.happeningList.length, manager.clone);
    manager.happeningList.push(PermakulturKursEvent);
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