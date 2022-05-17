$(document).ready(()=>{
    $('.accordion1').click(function (){
        if($('.panel1').css('display') == 'none'){
            $('.accordion1 span').html("&minus;");
            $('.panel1').slideDown("slow");
        }
        else{
            $('.accordion1 span').html("&plus;");
            $('.panel1').slideUp("slow");
        }
    });
    $('.accordion2').click(function (){
        if($('.panel2').css('display') == 'none'){
            $('.accordion2 span').html("&minus;");
            $('.panel2').slideDown("slow");
        }
        else{
            $('.accordion2 span').html("&plus;");
            $('.panel2').slideUp("slow");
        }
    });
    $('.accordion3').click(function (){
        if($('.panel3').css('display') == 'none'){
            $('.accordion3 span').html("&minus;");
            $('.panel3').slideDown("slow");
        }
        else{
            $('.accordion3 span').html("&plus;");
            $('.panel3').slideUp("slow");
        }
    });
});