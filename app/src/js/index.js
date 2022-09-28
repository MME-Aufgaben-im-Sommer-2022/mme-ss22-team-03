/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import PageManagerMap from "../js/pages/PageManagerMap.js";
import PageManagerEvents from "../js/pages/PageManagerEvents.js";
import PageManagerMitgliedschaft from "../js/pages/PageManagerMitgliedschaft.js";
import PageManagerSpenden from "../js/pages/PageManagerSpenden.js";
import NavBar from "../js/modules/NavBar.js";
import { getHappeningDataList, getPlaceDataList } from "../js/utils/SQLHardoce.js";
import ButtonManager from "../js/modules/ButtonManager.js";

let myNavBar,
    myButtonManager,
    currentPage;

function init() {
    initNavBar();
    initButtonManager();
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
   * Function for Instantiating NavBar
   */
function initButtonManager() {
    myButtonManager = new ButtonManager();

    myButtonManager.addEventListener("switchPage", switchPage);
    myButtonManager.addEventListener("request", sendRequestCall);
    myButtonManager.addEventListener("scroll", scroll);
    myButtonManager.addEventListener("share", shareButtonClick);
}

function sendRequestCall(event) {
    //currentPage.openRequest(event.data);
    console.log(event.data);
}

function scroll(event) {
    console.log("Scroll " + event.data);
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // if (event.data === "Up") {
    //     document.body.scrollTop = document.documentElement.scrollTop = 0;
    // } else if (event.data === "Down") {
    //     //TODO: Scroll to specific Element
    //     document.body.scrollTop = document.documentElement.scrollTop = 0;
    // }
}

/**
   * Function for Instantiating PageManager from Current Page
   */
function initPage() {

    var pageID = "notfound";

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
    console.log("test");
    window.location.replace(newPageString);
}

function shareButtonClick(event) {
    console.log(event.data);

    let postUrl = encodeURI(document.location.href);
    const postTitle = encodeURI("Hi everyone, please check this out: ");

    switch (event.data) {
        case "whatsapp":
            break;
        case "telegram":
            break;
        default:
            break;
    }

    //TODO: Share function with href

}
init();