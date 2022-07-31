

function initManager(MapManager) {
    var map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: MapManager.maxZoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    console.log("Finished Init Map Manager");
}


class MapManager {

    constructor(maxZoom) {

        this.maxZoom = maxZoom;
        initManager(this);
    }
}


export default MapManager;