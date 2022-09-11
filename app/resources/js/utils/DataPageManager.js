
function init() {
    console.log("Dage Version: " + Dage.ver);
    Dage.update();
}

function switchPage(page) {
    Dage.navigate(page)
    console.log("Switched to DataPage: " + page);
}

init();


//export default DataPageManager;
