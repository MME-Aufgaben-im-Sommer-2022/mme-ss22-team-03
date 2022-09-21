import { Event, Observable } from "../utils/Obervable.js";

function initListeners(navBar) {

    let navBarList = document.getElementsByName("navBarPage");

    navBarList.forEach(element => {
        element.addEventListener('click', function () { navBar.pageClicked(element.id) })
    });
}


class NavBar extends Observable {

    constructor() {
        super();
        initListeners(this);
    }

    pageClicked(pageID) {
        console.log("click from " + pageID)
        let event = new Event("pageClicked", pageID);
        this.notifyAll(event);
    }
}

export default NavBar;