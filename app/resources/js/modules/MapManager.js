var maxMapZoom = 19,
    currentCoordinateX = 43.624289,
    currentCoordinateY = 11.884090;

var map;

function initManager(map) {
    map = L.map('map').setView([43.624289, 11.884090], 17);

    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    //console.log("Finished Init Map Manager");
}

function initMarkers(map)
{
    var marker = L.marker([43.624289, 11.884090]).addTo(map);
}

function setZoomState(zoom)
{
    map.setZoom(zoom);
}

initManager();
initMarkers();


class MapManager extends Observable {

    constructor() {
        super();

        this.maxMapZoom = 19,
        this.currentCoordinateX = 43.624289,
        this.currentCoordinateY = 11.884090;

        this.map = L.map('map').setView([43.624289, 11.884090], 17);
        initManager(this.map);
        initMarkers(this.map);
    }

}


export default MapManager;