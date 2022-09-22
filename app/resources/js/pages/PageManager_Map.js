import MapManager from "../modules/MapManager.js";
import { Event, Observable } from "../utils/Obervable.js";
//import DataPageManager from "../utils/DataPageManager.js";

let myMapManager;

function initManager(manager) {

  initPlaceList(manager);
  initControls(manager);

  //console.log("Marker List: " + manager.MarkerList);

  // Initializing MapManager
  myMapManager = new MapManager(manager.MarkerList, manager
    .maxMapZoom, manager.startZoom,
    manager.startCoords);

  initPlaceOverview(manager);
}

function initPlaceList(manager) {

  manager.overViewList = document.getElementsByName("overViewEL");

  var Icon = L.icon({
    iconUrl: './resources/images/map_page/marker.png',

    iconSize: [35, 50], // size of the icon
    iconAnchor: [17.5,
      50
    ], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -
      76
    ] // point from which the popup should open relative to the iconAnchor
  });

  //TODO: Connect Places to SQL

  var placeOG = {
    id: "OG",
    zoomLevel: "pastina",
    coords: [43.624433, 11.884508],
    zoomVal: 20,
    marker: L.marker([43.624433, 11.884508], { icon: Icon }),
  }
  manager.MarkerList.push(placeOG);

  var placeEG = {
    id: "EG",
    zoomLevel: "pastina",
    coords: [43.624433, 11.884508],
    zoomVal: 20,
    marker: L.marker([43.624433, 11.884508], { icon: Icon }),
  }
  manager.MarkerList.push(placeEG);

  var placeOW = {
    id: "OW",
    zoomLevel: "pastina",
    coords: [43.623883, 11.884969],
    zoomVal: 20,
    marker: L.marker([43.623883, 11.884969], { icon: Icon }),
  }
  manager.MarkerList.push(placeOW);

  var placeOP = {
    id: "OP",
    zoomLevel: "pastina",
    coords: [43.623950, 11.884178],
    zoomVal: 18,
    marker: L.marker([43.623950, 11.884178], { icon: Icon }),
  }
  manager.MarkerList.push(placeOP);

  var placeYR = {
    id: "YR",
    zoomLevel: "pastina",
    coords: [43.624621, 11.884387],
    zoomVal: 20,
    marker: L.marker([43.624621, 11.884387], { icon: Icon }),
  }
  manager.MarkerList.push(placeYR);

  var placeH = {
    id: "H",
    zoomLevel: "pastina",
    coords: [43.624171, 11.884773],
    zoomVal: 20,
    marker: L.marker([43.624171, 11.884773], { icon: Icon }),
  }
  manager.MarkerList.push(placeH);

  var placeCA = {
    id: "CA",
    zoomLevel: "surrounding",
    coords: [43.614091, 11.865069],
    zoomVal: 12,
    marker: L.marker([43.614091, 11.865069], { icon: Icon }),
  }
  manager.MarkerList.push(placeCA);

  var placePA = {
    id: "PA",
    zoomLevel: "surrounding",
    coords: [43.624416, 11.884388],
    zoomVal: 12,
    marker: L.marker([43.624416, 11.884388], { icon: Icon }),
  }
  manager.MarkerList.push(placePA);
}

function initControls(pageManager) {

  pageManager.controls = {
    zoomButtonPastina: document.getElementsByName('button_zoomPastina')[0],
    zoomButtonSurroundings: document.getElementsByName(
      'button_zoomSurrounding')[0],
  }

  pageManager.controls.zoomButtonPastina.addEventListener("click", function (
    e) {
    pageManager.setMapState("pastina");
  });

  pageManager.controls.zoomButtonSurroundings.addEventListener("click", function (
    e) {
    pageManager.setMapState("surrounding");
  });

  document.getElementById("PlacesOverview").addEventListener("click", function (
    e) {
    pageManager.setActiveElement(e.target.id);
  });

  pageManager.MarkerList.forEach(element => {
    element.marker.addEventListener("click", function (
      e) {
      pageManager.setActiveElement(element.id);
    });
  });
}

function initPlaceOverview(pageManager) {
  // Set first Place of List to active Place
  Dage.update();
  pageManager.setMapState("pastina");
}


export default class PageManager_Map extends Observable {

  constructor() {
    super();

    // TODO: Hardcoded Values have to be connected to SQL
    this.maxMapZoom = 20,
      this.startZoom = 18;
    this.startCoords = [43.624416, 11.884388];

    this.MarkerList = [];

    initManager(this);
  }

  setActiveElement(id) {
    this.overViewList.forEach(element => {
      element.classList.remove('active');
      document.getElementById(id).classList.add('active');
    });

    var newPlace = this.MarkerList.find(x => x.id === id);
    if (newPlace != undefined)
      myMapManager.flyTo(newPlace.coords, newPlace.zoomVal);

    //TODO: Set correct Marker color when active
    Dage.navigate(id);
  }

  setMapState(newZoomState) // pastina / surroundings
  {

    myMapManager.hideMarkers();
    myMapManager.showMarkers(newZoomState);


    switch (newZoomState) {
      case "pastina":
        this.controls.zoomButtonPastina.classList.add('active');
        this.controls.zoomButtonSurroundings.classList.remove('active');
        myMapManager.flyTo(this.startCoords, 18);
        break;
      case "surrounding":
        this.controls.zoomButtonSurroundings.classList.add('active');
        this.controls.zoomButtonPastina.classList.remove('active');
        myMapManager.flyTo(this.startCoords, 12);
        break;
    }
  }
}
