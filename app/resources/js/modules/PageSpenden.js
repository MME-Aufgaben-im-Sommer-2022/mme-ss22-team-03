import SpendenFormManager from "./SpendenFormManager.js";

var text = encodeURIComponent("Follow Jeep form Amazing JavaScript Tutorial");
var url= "https://medium.com/@jagathishsaravanan/";
var user_id = "jagathish1123";
var hash_tags = " JS,JavaScript, 100DaysOfCode, Programming";
var params = "menubar=no, toolbar=no, status=no, width=570, height=570"; //for window

/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

href
'http://127.0.0.1:5502/app/Spenden.html'
*/

let mySpendenHelper;

const facebookBtn =document.querySelector(".facebookBtn");
const linkedInBtn = document.querySelector(".linkedInBtn");
const whatsAppBtn =document.querySelector(".whatsAppBtn");

/*
const instagramBtn =document.querySelector(".instagramBtn");
const mailBtn =document.querySelector(".mailBtn");
 whatsAppBtn.addEventListener("click", ()=> {
        console.log("Clicked");
    });
    facebookBtn.addEventListener("click", ()=> {
        console.log("Clicked");
    });
    linkedInBtn.addEventListener("click", ()=> {
        console.log("Clicked");
    });*/

function initShareBtn(){
    var postUrl = encodeURI(document.location.href);
    var postTitle = encodeURI("Hey, please check this out: ");

    facebookBtn.setAttribute(
        "href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
       
    linkedInBtn.setAttribute(
         "href",
         `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);

    whatsAppBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
        
    }
function init()
{
    mySpendenHelper = new SpendenFormManager();
    
    initShareBtn();
}

init();