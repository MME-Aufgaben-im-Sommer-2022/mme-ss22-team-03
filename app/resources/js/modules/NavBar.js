import { Event, Observable } from "../utils/Observable.js";

/**
   * This function initializes every other init function
   * @param {NavBar} navigationBar
   */
function initListeners(navigationBar) {

    //  Gets List of all Page Text Objects
    navigationBar.navBarList = document.getElementsByName("navBarPage");

    //  Adds EventListener to all Page Text in Navigation Bar
    navigationBar.navBarList.forEach(element => {
        element.addEventListener('click', function () { navigationBar.pageClicked(element.id) })
    });
}


/**
 * This is the class for the Navigaiton-Bar, which extends from Observable and controls all the Page click events
   */
class NavBar extends Observable {

    constructor() {
        super();

        this.navBarList = [];

        initListeners(this);
    }

    // Function for Page-Click-Event
    pageClicked(pageID) {
        //console.log("click from " + pageID)
        let event = new Event("pageClicked", pageID);
        this.notifyAll(event);
    }
}

export default NavBar;