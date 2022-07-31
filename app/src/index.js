import MapManager from "../resources/js/modules/MapManager.js";

var mapManager;

var maxMapZoom = 19;

function init() {

    mapManager = new MapManager(maxMapZoom);

}

init();