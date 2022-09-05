import SpendenHelper from "../modules/SpendenHelper.js"

let mySpendenHelper;

function init()
{
    //mySpendenHelper = new SpendenHelper();
    console.log("created: " + mySpendenHelper)
}

// Switch between Steps
function switchPage(page) {
    Dage.navigate(page)
    //console.log(Dage.a);
}


init();