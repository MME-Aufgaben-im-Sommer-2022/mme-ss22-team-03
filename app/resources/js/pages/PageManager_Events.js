import Happening from "../modules/Happening.js"
import { Event, Observable } from "../utils/Obervable.js";


//TODO: 
// - Connect Event List to SQL

function initManager(manager) {

    initControls(manager);
    initEventList(manager);
}

function initControls(manager) {

    // manager.controls = {
    //     exampleButton: document.getElementsByName('exampleID')[0],
    // }

    // manager.controls.exampleButton.addEventListener("click", function (
    //     e) {
    //         manager.exampleFunction("value");
    //   });
}

function initEventList(manager) {
    //TODO: Fetch Event Data from SQL -> Hardcoded first

    var ExampleHappeningData = {
        header: "Oliven Ernte",
        subheader: "Test Subheader",
        content: "Test Content",
        image: "Test Image URL",
    }
    var ExampleHappening = new Happening("Event", ExampleHappeningData);
    manager.eventList.push(ExampleHappening);



    var ExampleHappeningData2 = {
        header: "Test Header2",
        subheader: "Test Subheader2",
        content: "Test Content2",
        image: "Test Image URL2",
    }
    var ExampleHappening2 = new Happening("Event", ExampleHappeningData2);
    manager.eventList.push(ExampleHappening2);

    //console.log(manager.eventList);
}

class PageManager_Events extends Observable {

    constructor() {
        super();

        this.eventList = [];

        initManager(this);
        initEventList(this);
    }

    exampleFunction() {
        console.log("example");
    }
}

export default PageManager_Events;