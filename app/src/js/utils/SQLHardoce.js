
let happeningDataList,
    placeDataList;


function init() {

    initEventList();
    initPlaceList();
}

function initPlaceList() {

    placeDataList = [];

    var placeOG = {
        id: "OG",
        name: "Obergeschoss - Matratzenlager",
        zoomLevel: "pastina",
        coords: [43.624433, 11.884508],
        zoomVal: 20,
    }
    placeDataList.push(placeOG);

    var placeEG = {
        id: "EG",
        name: "Erdgeschoss - Zimmer, Küche, Bad",
        zoomLevel: "pastina",
        coords: [43.624433, 11.884508],
        zoomVal: 20,
    }
    placeDataList.push(placeEG);

    var placeOW = {
        id: "OW",
        name: "Obstwiese",
        zoomLevel: "pastina",
        coords: [43.623883, 11.884969],
        zoomVal: 20,
    }
    placeDataList.push(placeOW);

    var placeOP = {
        id: "OP",
        name: "Olivenplantagen",
        zoomLevel: "pastina",
        coords: [43.623950, 11.884178],
        zoomVal: 18,
    }
    placeDataList.push(placeOP);

    var placeYR = {
        id: "YR",
        name: "Yoga Raum",
        zoomLevel: "pastina",
        coords: [43.624621, 11.884387],
        zoomVal: 20,
    }
    placeDataList.push(placeYR);

    var placeH = {
        id: "H",
        name: "Hütte",
        zoomLevel: "pastina",
        coords: [43.624171, 11.884773],
        zoomVal: 20,
    }
    placeDataList.push(placeH);

    var placeCA = {
        id: "CA",
        name: "Calbenzano",
        zoomLevel: "surrounding",
        coords: [43.614091, 11.865069],
        zoomVal: 12,
    }
    placeDataList.push(placeCA);

    var placePA = {
        id: "PA",
        name: "Pastina",
        zoomLevel: "surrounding",
        coords: [43.624416, 11.884388],
        zoomVal: 12,
    }
    placeDataList.push(placePA);
}


function initEventList() {

    happeningDataList = [];

    var OlivenErnteData = {
        header: "Oliven Ernte",
        subheader: "24.10. - 06.11.2022",
        content: "Thema Olivenernte. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./src/images/event_page/IMG_event_olivenernte.png",
    }
    happeningDataList.push(OlivenErnteData);

    var TraumWorkshopData = {
        header: "Trauma Workshop",
        subheader: "16.11. - 18.11.2022",
        content: "Thema Traum Workshop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./src/images/event_page/IMG_event_traumaworkshop.png",
    }
    happeningDataList.push(TraumWorkshopData);


    var PermakulturKursData = {
        header: "Permakultur Kurs",
        subheader: "25.11. - 02.12.2022",
        content: "Thema Landwirtschaft und Permakultur von Volker. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./src/images/event_page/IMG_event_permakultur.png",
    }
    happeningDataList.push(PermakulturKursData);
    
    var PermakulturKursData2 = {
        header: "Permakultur Kurs",
        subheader: "25.11. - 02.12.2022",
        content: "Thema Landwirtschaft und Permakultur von Volker. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./src/images/event_page/IMG_event_permakultur.png",
    }
    happeningDataList.push(PermakulturKursData2);
}

function getHappeningDataList() {
    return happeningDataList;
}

function getPlaceDataList() {
    return placeDataList;
}

init();

export { getHappeningDataList, getPlaceDataList };