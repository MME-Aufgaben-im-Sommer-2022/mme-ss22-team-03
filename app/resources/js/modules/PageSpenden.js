import SpendenFormManager from "./SpendenFormManager.js";

var text = encodeURIComponent("Follow Jeep form Amazing JavaScript Tutorial");
var url= "https://medium.com/@jagathishsaravanan/";
var user_id = "jagathish1123";
var hash_tags = " JS,JavaScript, 100DaysOfCode, Programming";
var params = "menubar=no, toolbar=no, status=no, width=570, height=570"; //for window
var facebook = document.createElement('.facebookBtn');

let mySpendenHelper;


function init()
{
    mySpendenHelper = new SpendenFormManager();
  
}

facebook.addEventListener('click', function(ev){
    console.log("Hat geklappt");

    let shareUrl = 'http://www.facebook.com/sharer/sharer.php?u=${url}';
    window.open(shareUrl, "NewWindow", params);
});