
function initManager(manager) {

    manager.map = L.map('map').setView([manager.currentCoordinateX, manager.currentCoordinateY], manager.currentZoom);

    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: manager.maxMapZoom,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(manager.map);

    console.log("Finished Init Map Manager");
}

function initMarkers(manager)
{

    var Icon = L.icon({
        iconUrl: './resources/images/map_page/marker.png',
    
        iconSize:     [45, 60], // size of the icon
        iconAnchor:   [22, 60], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });


    for (var i = 0; i < manager.markers.length; i+=2) {
        var marker = L.marker([manager.markers[i], manager.markers[i+1]], {icon: Icon}).addTo(manager.map);
    } 
}

function setZoomState(zoom)
{
    map.setZoom(zoom);
}


class MapManager {

    constructor(coords, maxZoom, startZoom, startCoordX, startCoordY) {

        this.markers = coords;


        this.maxMapZoom = maxZoom,
        this.currentZoom = startZoom;
        this.currentCoordinateX = startCoordX,
        this.currentCoordinateY = startCoordY;

        //this.map = L.map('map').setView([43.624289, 11.884090], 17);

        initManager(this);
        initMarkers(this);
    }

}

export default MapManager;