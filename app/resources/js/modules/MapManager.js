function initManager(manager) {

  manager.map = L.map('map').setView([manager.currentCoordinateX, manager
    .currentCoordinateY
  ], manager.currentZoom);

  L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: manager.maxMapZoom,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(manager.map);

  console.log("Finished Init Map Manager");
}

//TODO: Differate between Pastina Markes and Surrounding Markers
function initMarkers(manager, markerCoordList) {

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

  for (var i = 0; i < markerCoordList.length; i += 2) {
    var marker = L.marker([markerCoordList[i], markerCoordList[i +
      1]], { icon: Icon }).addTo(manager.map);
    manager.PastinaMarkerList.push(marker);
  }

  console.log(marker.getLatLng());
}


class MapManager {

  constructor(pastinaCoordList, surroundingCoordList, maxZoom, startZoom,
    startCoordX, startCoordY) {

    this.pastinaCoordList = pastinaCoordList;
    this.surroundingCoordList = surroundingCoordList;

    this.maxMapZoom = maxZoom,
      this.currentZoom = startZoom;
    this.currentCoordinateX = startCoordX,
      this.currentCoordinateY = startCoordY;

    this.PastinaMarkerList = [];

    //this.map = L.map('map').setView([43.624289, 11.884090], 17);

    initManager(this);
    initMarkers(this, pastinaCoordList);
  }

  setZoomState(zoom) {
    this.map.setZoom(zoom);
  }

  flyTo(coordX, coordY, zoom) {
    this.map.flyTo([coordX, coordY], zoom);
  }

}

export default MapManager;