import PageManager_Map from "../js/pages/PageManager_Map.js";
import PageManager_Events from "../js/pages/PageManager_Events.js";
import PageManager_Mitgliedschaft from "../js/pages/PageManager_Mitgliedschaft.js";
import PageManager_Spenden from "../js/pages/PageManager_Spenden.js";
import NavBar from "../js/modules/NavBar.js";

let currentPage;
let myNavBar;

function init() {
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

    //  Setting default pageID to "notfound"
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
            currentPage = new PageManager_Spenden();
            break;
        case "Mitgliedschaft":
            currentPage = new PageManager_Mitgliedschaft();
            break;
        case "Events":
            currentPage = new PageManager_Events();
            break;
        case "Map":
            currentPage = new PageManager_Map();
            break;
        case "index":
            //console.log("INDEX PAGE INSTANTIATED");
            break;
        case "notfound":
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