$(document).ready(()=>{
    $c = $('a').on('mouseover', function(){
        $(this).css('left', '-10px');
    });

    $('a').on('mouseout', function(){
        $(this).css('left', '-175px');
    });
});