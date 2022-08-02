
function init() {
    //console.log("Dage Version: " + Dage.ver);
    Dage.update();

    Dage.setPageActive("navigation-bar");

    switchPage("page_landing")
}

function switchPage(page) {
    Dage.navigate(page)
    //console.log(Dage.a);
}

init();

