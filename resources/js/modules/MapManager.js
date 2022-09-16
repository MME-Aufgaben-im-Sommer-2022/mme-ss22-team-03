function initManager(manager) {

  manager.map = L.map('map').setView(manager.startCoords, manager.currentZoom);

  L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: manager.maxMapZoom,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(manager.map);
}

//TODO: Differate between Pastina Markes and Surrounding Markers
function initMarkers(manager) {

  for (var i = 0; i < manager.MarkerList.length; i += 1) {
    manager.MarkerList[i].marker.addTo(manager.map);
  }
}


class MapManager {

  constructor(MarkerList, maxZoom, startZoom,
    startCoords) {

    this.maxMapZoom = maxZoom;
    this.currentZoom = startZoom;
    this.startCoords = startCoords;

    this.MarkerList = MarkerList;

    initManager(this);
    initMarkers(this, this.placeList);
  }

  setZoomState(zoom) {
    this.map.setZoom(zoom);
  }

  flyTo(coords, zoom) {
    this.map.flyTo(coords, zoom);
  }

  hideMarkers() {

    this.MarkerList.forEach(marker => {
        this.map.removeLayer(marker.marker);
    });
    console.log("Hide all Markers");
  }

  showMarkers(zoomLevel) {

    this.MarkerList.forEach(marker => {
      if (marker.zoomLevel == zoomLevel) {
        // this.map.addLayer(marker.marker);
        console.log(marker.marker);
        marker.marker.addTo(this.map);
      }
    });
    console.log("Show all " + zoomLevel + " Markers");

  }

}

export default MapManager;