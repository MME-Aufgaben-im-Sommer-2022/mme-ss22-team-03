import PageManager_Map from "../js/pages/PageManager_Map.js";
import PageManager_Events from "../js/pages/PageManager_Events.js";
import NavBar from "../js/modules/NavBar.js";

let currentPage;
let myNavBar;

function init() {
    //initPageManager("Uber_uns");

    initNavBar();
}

function initNavBar() {
    myNavBar = new NavBar();

    myNavBar.addEventListener("pageClicked", switchPage);
 }

function switchPage(event) {

    var pageID = event.data;

    
    var newPageString = pageID + ".html";
    window.location.replace(newPageString);
    console.log("switched to page: " + pageID);

    initPageManager(pageID);
}

function initPageManager(pageID) {

    switch (pageID) {
        case "Uber_uns":
            break;
        case "Spenden":
            break;
        case "Mitgliedschaft":
            break;
        case "Events":
            currentPage = new PageManager_Events();
            break;
        case "Map":
            currentPage = new PageManager_Map();
            break;
        case "index":
            console.log("INDEX PAGE INSTANTIATED");
            break;
    }
}

init();