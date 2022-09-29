/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import PageManagerMap from "../js/pages/PageManagerMap.js";
import PageManagerEvents from "../js/pages/PageManagerEvents.js";
import PageManagerMitgliedschaft from "../js/pages/PageManagerMitgliedschaft.js";
import PageManagerSpenden from "../js/pages/PageManagerSpenden.js";
import NavBar from "../js/modules/NavBar.js";
import ButtonManager from "../js/modules/ButtonManager.js";

let myNavBar,
    myButtonManager,
    currentPage;

async function init() {
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

}

function sendRequestCall(event) {
    //currentPage.openRequest(event.data);
    console.log(event.data);
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
            currentPage = new PageManagerSpenden(pageID);
            break;
        case "Mitgliedschaft":
            currentPage = new PageManagerMitgliedschaft();
            break;
        case "Events":
            currentPage = new PageManagerEvents();
            break;
        case "Map":
            currentPage = new PageManagerMap();
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

init();