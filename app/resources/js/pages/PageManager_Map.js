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

  manager.placeList.forEach(placeData => {
    placeData.marker = L.marker(placeData.coords, { icon: Icon })
  });
}

function initControls(manager) {

  manager.controls = {
    zoomButtonPastina: document.getElementsByName('button_zoomPastina')[0],
    zoomButtonSurroundings: document.getElementsByName(
      'button_zoomSurrounding')[0],
    overViewList: document.querySelector(".pastinaOverViewList"),
  }

  manager.controls.zoomButtonPastina.addEventListener("click", function (
    e) {
    manager.setMapState("pastina");
  });

  manager.controls.zoomButtonSurroundings.addEventListener("click", function (
    e) {
    manager.setMapState("surrounding");
  });

  document.getElementById("PlacesOverview").addEventListener("click", function (
    e) {
    manager.setActiveElement(e.target.id);
  });

  manager.placeList.forEach(place => {
    place.marker.addEventListener("click", function (
      e) {
      manager.setActiveElement(place.id);
    });
  });
}

function initPlaceOverview(manager) {
  
  const template = document.querySelector('#placeTemplate');
  manager.clone = template.content.cloneNode(true);
  manager.overViewElement = manager.clone.querySelector('.placeOverViewElement')


  manager.placeList.forEach(place => {
    let overViewClone = manager.overViewElement.cloneNode(true);
    overViewClone.textContent = place.name;
    overViewClone.id = place.id;

    manager.controls.overViewList.append(overViewClone);
  });

  // Set first Place of List to active Place
  Dage.update();
  manager.setMapState("pastina");
}


export default class PageManager_Map extends Observable {

  constructor(placeDataList) {
    super();

    this.maxMapZoom = 20,
      this.startZoom = 18;
    this.startCoords = [43.624416, 11.884388];

    this.placeList = placeDataList;

    initManager(this);
  }

  setActiveElement(id) {

    var tempOverViewList = this.controls.overViewList.getElementsByTagName('li');

    Array.from(tempOverViewList).forEach(place => {
      place.classList.remove('active');
      var newActivePlace = document.getElementById(id);
      if(newActivePlace != null)
      newActivePlace.classList.add('active');
    });

    var newPlace = this.placeList.find(x => x.id === id);
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
