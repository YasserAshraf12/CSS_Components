$(document).ready(()=>{
    $('.dropdown').on("mouseover", function(){
        $('.ul').fadeIn(200);
    });
    
    $('.dropdown').on("mouseout", function(){
        $('.ul').fadeOut(200);
    });
});