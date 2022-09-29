/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import PageManagerMap from "../js/pages/PageManagerMap.js";
import PageManagerEvents from "../js/pages/PageManagerEvents.js";
import PageManagerMitgliedschaft from "../js/pages/PageManagerMitgliedschaft.js";
import PageManagerSpenden from "../js/pages/PageManagerSpenden.js";
import NavBar from "../js/modules/NavBar.js";
import { getHappeningDataList, getPlaceDataList } from "../js/utils/SQLHardoce.js";
import FireBaseConnector from "./database/FireBaseConnector.js";

let myNavBar;

async function init() {

    // FireBaseConnector.sendTestData();
    // var requestData = {
    //     type: "membership",
    //     id: "Huber_Samuel",

    //     data: {
    //         Prename: "Samuel",
    //         Surname: "Huber",
    //         Street: "Mozartstrasse 90",
    //         City: "Pfaffenhofen a. d. Ilm",
    //         Email: "hubsamu@hotmail.de",
    //     },
    // };
    // FireBaseConnector.sendRequestDataTest(requestData);

    // try {
    //     let data = await FireBaseConnector.getData("data/pages/map/initData");
    //     console.log(data);
    // } catch (error) {
    //     console.error(error);
    // }

    initNavBar();
    initPage();
}

/**
   * Function for Instantiating NavBar
   */
function initNavBar() {

    myNavBar = new NavBar();

    // Adding EventListener for switching the page
    myNavBar.addEventListener("pageClicked", switchPage);
}

/**
   * Function for Instantiating PageManager from Current Page
   */
function initPage() {

    var currentPage,
        pageID = "notfound";

    //  Gets the current active page by class="active"
    myNavBar.navBarList.forEach(element => {
        if (element.classList.contains("active")) {
            pageID = element.id;
        }
    });

    // Sets currentPage Object to new instantiated PageManager
    switch (pageID) {
        case "Uber_uns":
            break;
        case "Spenden":
            currentPage = new PageManagerSpenden();
            break;
        case "Mitgliedschaft":
            currentPage = new PageManagerMitgliedschaft();
            break;
        case "Events":
            currentPage = new PageManagerEvents(getHappeningDataList());
            break;
        case "Map":
            currentPage = new PageManagerMap(getPlaceDataList());
            break;
        case "index":
            //console.log("INDEX PAGE INSTANTIATED");
            break;
        case "notfound":
            break;
        default:
            break;
    }
}

/**
   * This function switches the current shown .HTML to the new Page
   * @param {Event} event
   */
function switchPage(event) {
    var newPageString = event.data + ".html";
    window.location.replace(newPageString);
}

init();