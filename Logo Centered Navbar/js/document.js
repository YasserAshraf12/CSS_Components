$(document).ready(()=>{
    $('#search, #searchId').mouseover(()=>{
        $('#searchId').animate({
            width: '220px',
            padding: '20px'
        }, 50);
    });
    $('#search').mouseleave(()=>{
        $('#searchId').animate({
            width: '0',
            padding: '0',
        }, 50);
    });
});