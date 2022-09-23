
let happeningDataList,
    placeDataList;

function init() {

    initEventList();
    initPlaceList();
}

function initPlaceList() {

    var placeOG = {
        id: "OG",
        name: "Obergeschoss - Matratzenlager",
        zoomLevel: "pastina",
        coords: [43.624433, 11.884508],
        zoomVal: 20,
    },

        placeEG = {
            id: "EG",
            name: "Erdgeschoss - Zimmer, Küche, Bad",
            zoomLevel: "pastina",
            coords: [43.624433, 11.884508],
            zoomVal: 20,
        },

        placeOW = {
            id: "OW",
            name: "Obstwiese",
            zoomLevel: "pastina",
            coords: [43.623883, 11.884969],
            zoomVal: 20,
        },

        placeOP = {
            id: "OP",
            name: "Olivenplantagen",
            zoomLevel: "pastina",
            coords: [43.623950, 11.884178],
            zoomVal: 18,
        },

        placeYR = {
            id: "YR",
            name: "Yoga Raum",
            zoomLevel: "pastina",
            coords: [43.624621, 11.884387],
            zoomVal: 20,
        },

        placeH = {
            id: "H",
            name: "Hütte",
            zoomLevel: "pastina",
            coords: [43.624171, 11.884773],
            zoomVal: 20,
        },

        placeCA = {
            id: "CA",
            name: "Calbenzano",
            zoomLevel: "surrounding",
            coords: [43.614091, 11.865069],
            zoomVal: 12,
        },

        placePA = {
            id: "PA",
            name: "Pastina",
            zoomLevel: "surrounding",
            coords: [43.624416, 11.884388],
            zoomVal: 12,
        };

    placeDataList = [];

    placeDataList.push(placeOG);
    placeDataList.push(placeEG);
    placeDataList.push(placeOW);
    placeDataList.push(placeOP);
    placeDataList.push(placeYR);
    placeDataList.push(placeH);
    placeDataList.push(placeCA);
    placeDataList.push(placePA);
}

function initEventList() {

    var OlivenErnteData = {
        id: "OE",
        header: "Oliven Ernte",
        subheader: "24.10. - 06.11.2022",
        content: "Thema Olivenernte. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        imageSrc: "./src/images/event_page/IMG_event_olivenernte.png",
    },

        TraumWorkshopData = {
            header: "Trauma Workshop",
            subheader: "16.11. - 18.11.2022",
            content: "Thema Traum Workshop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            imageSrc: "./src/images/event_page/IMG_event_traumaworkshop.png",
        },

        PermakulturKursData = {
            header: "Permakultur Kurs",
            subheader: "25.11. - 02.12.2022",
            content: "Thema Landwirtschaft und Permakultur von Volker. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            imageSrc: "./src/images/event_page/IMG_event_permakultur.png",
        },
        PermakulturKursData2 = {
            header: "Permakultur Kurs",
            subheader: "25.11. - 02.12.2022",
            content: "Thema Landwirtschaft und Permakultur von Volker. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            imageSrc: "./src/images/event_page/IMG_event_permakultur.png",
        };

    happeningDataList = [];

    happeningDataList.push(OlivenErnteData);
    happeningDataList.push(TraumWorkshopData);
    happeningDataList.push(PermakulturKursData);
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