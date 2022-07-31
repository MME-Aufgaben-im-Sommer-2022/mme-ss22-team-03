
function init() 
{
   //console.log("Dage Version: " + Dage.ver);
   
   Dage.update();
   

   switchPage("page_landing")
}

function switchPage(page)
{
    Dage.navigate(page)
    //console.log(Dage.a);
}


init();