/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import MapManager from "../modules/MapManager.js";
import { Observable } from "../utils/Observable.js";

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
  var Icon = L.icon({
    iconUrl: "./src/images/map_page/marker.png",

    iconSize: [35, 50], // size of the icon
    iconAnchor: [17.5,
      50,
    ], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -
      76,
    ], // point from which the popup should open relative to the iconAnchor
  });

  manager.placeList.forEach(placeData => {
    placeData.marker = L.marker(placeData.coords, { icon: Icon });
    if (placeData.zoomLevel === "pastina") { manager.pastinaMarkerList.push(placeData); }
    else { manager.surroundingMarkerList.push(placeData); }
  });

  manager.placeList = manager.pastinaMarkerList;
}

function initControls(manager) {

  manager.controls = {
    zoomButtonPastina: document.getElementsByName("button_zoomPastina")[0],
    zoomButtonSurroundings: document.getElementsByName(
      "button_zoomSurrounding")[0],
    overViewList: document.querySelector(".overViewList"),
    contentList: document.querySelector(".contentList"),
  };

  const template = document.querySelector("#placeTemplate");
  manager.clone = template.content.cloneNode(true);
  manager.overViewElement = manager.clone.querySelector("[name=\"placeOverViewElement\"]");
  manager.overViewContentElement = manager.clone.querySelector(".placeContentElement");

  manager.controls.zoomButtonPastina.addEventListener("click", () => {
    manager.setMapState("pastina");
  });

  manager.controls.zoomButtonSurroundings.addEventListener("click", () => {
    manager.setMapState("surrounding");
  });

  document.getElementById("PlacesOverview").addEventListener("click", (e) => {
    manager.setActiveElement(e.target.id);
  });

  manager.placeList.forEach(element => {
    element.marker.addEventListener("click", () => {
      manager.setActiveElement(element.id);
    });
  });
}

function initPlaceOverview(manager) {

  manager.placeList.forEach(place => {

    let overViewClone = manager.overViewElement.cloneNode(true);
    // overViewContentClone = manager.overViewContentElement.cloneNode(true);

    overViewClone.textContent = place.name;
    overViewClone.id = place.id;
    manager.controls.overViewList.append(overViewClone);

    //TODO: Fetch Images from SQL
    // place.imageList.forEach(image => {
    //   overViewContentClone.append(image);
    // });
    // manager.controls.contentList.append(overViewContentClone);
  });

  // Set first Place of List to active Place
  Dage.update();
  manager.setMapState("pastina");
}

export default class PageManagerMap extends Observable {

  constructor(placeDataList) {
    super();

    this.maxMapZoom = 20,
      this.startZoom = 18;
    this.startCoords = [43.624416, 11.884388];

    this.placeList = placeDataList;
    this.pastinaMarkerList = [];
    this.surroundingMarkerList = [];

    initManager(this);
  }

  setActiveElement(id) {
    var newPlace,
      tempOverViewList;

    if (id === null || id === undefined || id === "") {
      return;
    }

    tempOverViewList = document.getElementsByName("placeOverViewElement");

    Array.from(tempOverViewList).forEach(element => {
      element.classList.remove("active");
      document.getElementById(id).classList.add("active");
    });

    newPlace = this.placeList.find(x => x.id === id);
    if (newPlace !== undefined) { myMapManager.flyTo(newPlace.coords, newPlace.zoomVal); }

    //TODO: Set correct Marker color when active
    Dage.navigate(id);
  }

  setMapState(newZoomState) // pastina / surroundings
  {

    myMapManager.hideMarkers();
    myMapManager.showMarkers(newZoomState);

    switch (newZoomState) {
      case "pastina":
        this.placeList = this.pastinaMarkerList;
        this.controls.zoomButtonPastina.classList.add("active");
        this.controls.zoomButtonSurroundings.classList.remove("active");
        myMapManager.flyTo(this.startCoords, 18);
        break;
      case "surrounding":
        this.placeList = this.surroundingMarkerList;
        this.controls.zoomButtonSurroundings.classList.add("active");
        this.controls.zoomButtonPastina.classList.remove("active");
        myMapManager.flyTo(this.startCoords, 12);
        break;
      default:
        break;
    }
  }
}
