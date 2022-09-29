/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import MapManager from "../modules/MapManager.js";
import { Observable } from "../utils/Observable.js";
import FireBaseConnector from "../database/FireBaseConnector.js";

let myMapManager;

async function initManager(manager) {

  await initData(manager);

  initIcons(manager);
  initPlaceLists(manager);
  initControls(manager);
  initMapManager(manager);
  initPlaceOverview(manager);
}

async function initData(manager) {

  //  Fetch Data for MapManager
  try {
    let data = await FireBaseConnector.getData("data/pages/map/mapData");
    manager.mapData = data;
  } catch (error) {
    console.error(error);
  }

  //  Fetch Data for Marker Icon
  try {
    let iconData = await FireBaseConnector.getData("data/pages/map/iconData");
    manager.iconData = iconData;
  } catch (error) {
    console.error(error);
  }

  //  Fetch Marker List for PlaceList
  try {
    let markerList = await FireBaseConnector.getData("data/pages/map/MarkerList");
    manager.allPlaceList = markerList;
  } catch (error) {
    console.error(error);
  }
}

function initIcons(manager) {

  manager.activeIcon = L.icon({
    iconUrl: "./src/images/map_page/marker.png",

    iconSize: [manager.iconData.iconSizeX, manager.iconData.iconSizeY], // size of the icon
    iconAnchor: [manager.iconData.iconAnchorX,
    manager.iconData.iconAnchorY,
    ], // point of the icon which will correspond to marker's location
    popupAnchor: [manager.iconData.popupAnchorX, -
      manager.iconData.popupAnchorY,
    ], // point from which the popup should open relative to the iconAnchor
  });

  manager.normalIcon = L.icon({
    iconUrl: "./src/images/map_page/marker.png",

    iconSize: [manager.iconData.iconSizeX, manager.iconData.iconSizeY], // size of the icon
    iconAnchor: [manager.iconData.iconAnchorX,
    manager.iconData.iconAnchorY,
    ], // point of the icon which will correspond to marker's location
    popupAnchor: [manager.iconData.popupAnchorX, -
      manager.iconData.popupAnchorY,
    ], // point from which the popup should open relative to the iconAnchor
  });
}

function initPlaceLists(manager) {

  var entryList,
    keyList;


  entryList = Object.values(manager.allPlaceList);
  keyList = Object.keys(manager.allPlaceList);

  manager.allPlaceList = [];

  keyList.forEach(key => {
    let idx = keyList.indexOf(key),
      tempPlace = {
        id: key,
        name: entryList[idx].name,
        coords: entryList[idx].coords,
        zoomLevel: entryList[idx].zoomLevel,
        zoomVal: entryList[idx].zoomVal,
        marker: L.marker([entryList[idx].coords.x, entryList[idx].coords.y], { icon: manager.normalIcon }),
      };
    manager.allPlaceList.push(tempPlace);
  });
}

function initMapManager(manager) {

  // Initializing MapManager
  myMapManager = new MapManager(manager.allPlaceList, manager.mapData
    .maxZoom, manager.mapData.startZoom,
    manager.mapData.centerCoords);
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

  manager.allPlaceList.forEach(element => {
    element.marker.addEventListener("click", () => {
      manager.setActiveElement(element.id);
    });
  });
}

function initPlaceOverview(manager) {

  manager.allPlaceList.forEach(place => {

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

  constructor() {
    super();

    this.allPlaceList = [];
    this.pastinaMarkerList = [];
    this.surroundingMarkerList = [];

    initManager(this);
  }

  setActiveElement(id) {
    var newActivePlace;

    if (id === null || id === undefined || id === "") {
      return;
    } else if (id === "PA") {
      this.setMapState("pastina");
      return;
    }

    Array.from(document.getElementsByName("placeOverViewElement")).forEach(element => {
      element.classList.remove("active");
      document.getElementById(id).classList.add("active");
    });

    newActivePlace = this.shownPlaceList.find(x => x.id === id);
    if (newActivePlace !== undefined) { myMapManager.flyTo([newActivePlace.coords.x, newActivePlace.coords.y], newActivePlace.zoomVal); }

    console.log(newActivePlace.marker);
    //TODO: Set correct Marker color when active
    Dage.navigate(id);
  }

  setMapState(newZoomState) // pastina / surroundings
  {
    var coords = [this.mapData.centerCoords[0], this.mapData.centerCoords[1]];

    myMapManager.hideMarkers();
    myMapManager.showMarkers(newZoomState);

    this.shownPlaceList = [];

    this.allPlaceList.forEach(place => {
      if (place.zoomLevel === newZoomState) {
        this.shownPlaceList.push(place);
      }
    });

    switch (newZoomState) {
      case "pastina":
        this.controls.zoomButtonPastina.classList.add("active");
        this.controls.zoomButtonSurroundings.classList.remove("active");
        myMapManager.flyTo(coords, this.mapData.mapStatePastinaZoom);
        break;
      case "surrounding":
        this.controls.zoomButtonSurroundings.classList.add("active");
        this.controls.zoomButtonPastina.classList.remove("active");
        myMapManager.flyTo(coords, this.mapData.mapStateSurroundingZoom);
        break;
      default:
        break;
    }
  }
}
