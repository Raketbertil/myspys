$(document).ready(function(){
    
    //opens left menu
    $("#dropdown").click(function(){        
        $("#menu").animate({
            left: "0px"
        }, 200);
        
        $("#content").animate({
            left: "300px"
        }, 200);
        
    });
    
    //closes left menu
    $("#icon-close").click(function(){
       
        $("#menu").animate({
            left: "-300px"
        }, 200);
        
        $("#content").animate({
            left: "0px"
        }, 200);
        
    });
});