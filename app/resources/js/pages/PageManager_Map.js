import MapManager from "../modules/MapManager.js";
import { Event, Observable } from "../utils/Obervable.js";
//import DataPageManager from "../utils/DataPageManager.js";

let myMapManager;

function initManager(manager) {

  initPlaceList(manager);
  initControls(manager);
  
  // Initializing MapManager
  myMapManager = new MapManager(manager.placeList, manager
    .maxMapZoom, manager.startZoom,
    manager.startCoords);

    
  initPlaceOverview(manager);
}

function initPlaceList(manager) {

    manager.overViewList = document.getElementsByName("overViewEL");

    manager.placeList = [];

  //TODO: Connect Places to SQL

  var placeOG = {
    id: "OG",
    zoomLevel: "Pastina",
    coords: [43.624433, 11.884508],
    zoomVal: 20,
  }
  manager.placeList.push(placeOG);

  var placeEG = {
    id: "EG",
    zoomLevel: "Pastina",
    coords: [43.624433, 11.884508],
    zoomVal: 20,
  }
  manager.placeList.push(placeEG);

  var placeOW = {
    id: "OW",
    zoomLevel: "Pastina",
    coords: [43.623883, 11.884969],
    zoomVal: 20,
  }
  manager.placeList.push(placeOW);

  var placeOP = {
    id: "OP",
    zoomLevel: "Pastina",
    coords: [43.623950, 11.884178],
    zoomVal: 18,
  }
  manager.placeList.push(placeOP);

  var placeYR = {
    id: "YR",
    zoomLevel: "Pastina",
    coords: [43.624621, 11.884387],
    zoomVal: 20,
  }
  manager.placeList.push(placeYR);

  var placeH = {
    id: "H",
    zoomLevel: "Pastina",
    coords: [43.624171, 11.884773],
    zoomVal: 20,
  }
  manager.placeList.push(placeH);
}


function initControls(pageManager) {

  pageManager.controls = {
    zoomButtonPastina: document.getElementsByName('button_zoomPastina')[0],
    zoomButtonSurroundings: document.getElementsByName(
      'button_zoomSurrounding')[0],
  }

  console.log()

  pageManager.controls.zoomButtonPastina.addEventListener("click", pageManager
    .toggleMapState
    .bind(pageManager));
  pageManager.controls.zoomButtonSurroundings.addEventListener("click",
    pageManager
    .toggleMapState
    .bind(pageManager));

  document.getElementById("PlacesOverview").addEventListener("click", function(
    e) {
    pageManager.setActiveElement(e.target.id);
  });
}

function initPlaceOverview(pageManager) {

  // Set first Place of List to active Place
  Dage.update();

  var firstPlaceID = pageManager.placeList[0].id;
  pageManager.setActiveElement(firstPlaceID);
}


class PageManager_Map extends Observable {

  constructor() {
    super();

    // TODO: Hardcoded Values have to be connected to SQL
    this.maxMapZoom = 20,
      this.startZoom = 18;
    this.startCoords = [43.624416, 11.884388];

    initManager(this);

    // Set Zoom State to "Pastina"
    this.zoomState = 0;
    this.toggleMapState();
  }

  setActiveElement(id) {
    this.overViewList.forEach(element => {
      element.classList.remove('active');
      document.getElementById(id).classList.add('active');
    });

    var newPlace = this.placeList.find(x => x.id === id);
    myMapManager.flyTo(newPlace.coords, newPlace.zoomVal);

    //TODO: Set correct Marker color when active
    Dage.navigate(id);
  }

  toggleMapState() // 0 = pastina, 1 = surroundings
  {
    switch (this.zoomState) {
      case 0:
        this.zoomState = 1;
        this.controls.zoomButtonPastina.classList.add('active');
        this.controls.zoomButtonSurroundings.classList.remove('active');
        myMapManager.flyTo(this.startCoords, 18);
        break;
      case 1:
        this.zoomState = 0;
        this.controls.zoomButtonSurroundings.classList.add('active');
        this.controls.zoomButtonPastina.classList.remove('active');
        myMapManager.flyTo(this.startCoords, 12);
        break;
    }
  }

}

export default PageManager_Map;