import MapManager from "../modules/MapManager.js";
import { Event, Observable} from "../utils/Obervable.js";
//import DataPageManager from "../utils/DataPageManager.js";


let myMapManager;


function initMapManager(manager)
{
    var coords = [];

    // TODO: Fetch Coordinates for Markers from SQL
    // MARKER: Sammelgebäude
    coords.push(43.624433);
    coords.push(11.884508);
    
    // MARKER: Yoga Raum
    coords.push(43.624621);
    coords.push(11.884387);
    
    // MARKER: Olivenfeld
    coords.push(43.623950);
    coords.push(11.884178);
    
    // MARKER: Party Hütte
    coords.push(43.624572);
    coords.push(11.884070);
    
    // MARKER: Willos Hütte
    coords.push(43.624171);
    coords.push(11.884773);

    // Initializing MapManager
    myMapManager = new MapManager(coords, manager.maxMapZoom, manager.startZoom, manager.startCoordX, manager.startCoordY);
}

function initButtons(pageManager) {
    pageManager.controls = {
        zoomButtonPastina: document.getElementById('button_zoomPastina'),
        zoomButtonSurroundings: document.getElementById('button_zoomSurrounding'),
    }

}

function initListeners(pageManager) {

}

class PageManager_Map extends Observable {

    constructor() {
        super();

        this.maxMapZoom = 20,
        this.startZoom = 19;
        this.startCoordX = 43.624289,
        this.startCoordY = 11.884090;

        initMapManager(this);
        initButtons(this);
        initListeners(this);
    }

    switchPage(page)
    {
       // DataPageManager.switchPage(page);
    }

}

export default PageManager_Map;