import PageManager_Map from "../js/pages/PageManager_Map.js";
import PageManager_Events from "../js/pages/PageManager_Events.js";

let myPageManager_Map,
    myPageManager_Events;

function init()
{
    initPageManagers();
}

function initPageManagers() {
   // myPageManager_Map = new PageManager_Map();
    myPageManager_Events = new PageManager_Events();
}

function jetztSpenden() {
    // Switch to Page Spenden
    // Scroll down
}

function test()
{
    console.log("click");
}

init();