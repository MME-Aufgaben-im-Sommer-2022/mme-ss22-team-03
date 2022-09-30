import { Event, Observable } from "../utils/Observable.js";

const postTitle = ("Hi schau dir mal die coole Seite an :D ");

 let postUrl = document.location.href;

function init(manager) {

    initButtonList(manager);
    initListeners(manager);
}

function initButtonList(manager) {
    manager.buttonHTMLList = document.querySelectorAll(".button");
    console.log(manager.buttonHTMLList);
}

function initListeners(manager) {
    manager.buttonHTMLList.forEach(button => {
        button.addEventListener("click", (e) => {
            manager.buttonClick(e.target.id, e.target.name);
        });
    });
}

class ButtonManager extends Observable {
    constructor() {
        super();

        init(this);
    }

    buttonClick(id, name) {
        let event;

        console.log(id);
        switch (id) {
            case "donate":
                // eslint-disable-next-line no-case-declarations
                event = new Event("donateClicked", "Spenden");
                break;
            case "participate":
                break;
            case "switchPage":
                event = new Event("switchPage", name);
                break;
            case "request":
                event = new Event(id, name);
                break;
            case "scroll":
                event = new Event(id, name);
                break;
            case "share":
                this.shareButton(name);
                break;
            default:
                break;
        }

        this.notifyAll(event);
    }

    shareButton(name) {
        console.log(name);
        switch(name) {
            
            case "whatsapp":
                
                window.location = "https://wa.me/?text=${postTitle} ${postUrl}";
                //TODO: hier auf eine url verweisen -> weiterleiten
                break;
            case "mailBtn":
                window.location = "https://plus.google.com/share?url=[post-url]";
                break;
            case "facebook":
                window.location = "https://www.facebook.com/sharer.php?u=[post-url]";
                break;
            case "linkedInBtn":
                window.location = "https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]";
                break;
            case "instagram":
                window.location = "https://ig.me/m/";
                break;
            default:
                break;
        }
    }
}

export default ButtonManager;