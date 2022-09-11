import MapManager from "../modules/MapManager.js";
import { Event, Observable } from "../utils/Obervable.js";
//import DataPageManager from "../utils/DataPageManager.js";


let myMapManager;


function initMapManager(manager) {

    var pastinaCoordList = [],
        surroundingCoordList = [];

  // TODO: Fetch Coordinates for Markers from SQL
  // MARKER: Sammelgebäude
  pastinaCoordList.push(43.624433);
  pastinaCoordList.push(11.884508);

  // MARKER: Yoga Raum
  pastinaCoordList.push(43.624621);
  pastinaCoordList.push(11.884387);

  // MARKER: Olivenfeld
  pastinaCoordList.push(43.623950);
  pastinaCoordList.push(11.884178);

  // MARKER: Party Hütte
  pastinaCoordList.push(43.624572);
  pastinaCoordList.push(11.884070);

  // MARKER: Willos Hütte
  pastinaCoordList.push(43.624171);
  pastinaCoordList.push(11.884773);

  // Initializing MapManager
  myMapManager = new MapManager(pastinaCoordList, surroundingCoordList, manager.maxMapZoom, manager.startZoom,
    manager.startCoordX, manager.startCoordY);
}

function initButtons(pageManager) {
  pageManager.controls = {
    zoomButtonPastina: document.getElementById('button_zoomPastina'),
    zoomButtonSurroundings: document.getElementById('button_zoomSurrounding'),
  }

}

function initEvents(pageManager) {
  pageManager.controls.zoomButtonPastina.addEventListener("click", pageManager
    .toggleMapState
    .bind(pageManager));
  pageManager.controls.zoomButtonSurroundings.addEventListener("click", pageManager
    .toggleMapState
    .bind(pageManager));
}

class PageManager_Map extends Observable {

  constructor() {
    super();

    this.maxMapZoom = 20,
    this.startZoom = 18;
    this.zoomState = 0;
    this.startCoordX = 43.624416,
    this.startCoordY = 11.884388;
    

    initMapManager(this);
    initButtons(this);
    initEvents(this);

    this.toggleMapState();
  }

  switchPage(page) {
    // DataPageManager.switchPage(page);
  }

  toggleMapState() // 0 = pastina, 1 = surroundings
  {
    console.log("Toggle ZoomState");

    switch (this.zoomState) {
      case 0:
        this.zoomState = 1;
        this.controls.zoomButtonPastina.setAttribute('id','active');
        this.controls.zoomButtonSurroundings.setAttribute('id','');
        myMapManager.flyTo(this.startCoordX, this.startCoordY, 18);
        break;
      case 1:
        this.zoomState = 0;
        this.controls.zoomButtonSurroundings.setAttribute('id','active');
        this.controls.zoomButtonPastina.setAttribute('id','');
        myMapManager.flyTo(this.startCoordX, this.startCoordY, 12);
        break;
    }
  }

}

export default PageManager_Map;