


function init() {


    // Different Steps Manager
    Dage.update();

    Dage.setPageActive("page1");

    // switchPage("page_map")
}

// Switch between Steps
function switchPage(page) {
    Dage.navigate(page)
    //console.log(Dage.a);
}

init();