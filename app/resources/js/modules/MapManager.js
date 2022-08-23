var maxMapZoom = 19,
    currentCoordinateX = 43.624289,
    currentCoordinateY = 11.884090;

var map;

function initManager() {
    map = L.map('map').setView([43.624289, 11.884090], 17);

    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    //console.log("Finished Init Map Manager");
}

function setZoomState(zoom)
{
    map.setZoom(zoom);
}

initManager();