function initManager(manager) {

  manager.map = L.map('map').setView(manager.startCoords, manager.currentZoom);

  L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: manager.maxMapZoom,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(manager.map);
}

//TODO: Differate between Pastina Markes and Surrounding Markers
function initMarkers(manager, placeList) {

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

  for (var i = 0; i < placeList.length; i += 1) {
    var marker = L.marker(placeList[i].coords, { icon: Icon }).addTo(manager.map);
    manager.PastinaMarkerList.push(marker);
  }
}


class MapManager {

  constructor(placeList, maxZoom, startZoom,
    startCoords) {

    this.placeList = placeList;

    this.maxMapZoom = maxZoom,
      this.currentZoom = startZoom;
    this.startCoords = startCoords,

    this.PastinaMarkerList = [];

    //this.map = L.map('map').setView([43.624289, 11.884090], 17);

    initManager(this);
    initMarkers(this, this.placeList);
  }

  setZoomState(zoom) {
    this.map.setZoom(zoom);
  }

  flyTo(coords, zoom) {
    this.map.flyTo(coords, zoom);
  }

}

export default MapManager;