$(document).ready(function(){
    
});
var slides = document.getElementsByClassName('myslide');
var currentIndex = 1;
var autoPlay = null,
    auto = true,
    pause = 7000;
function getNextIndex(){
    if(currentIndex > 3){
        currentIndex = 1;
        return currentIndex++;
    }
    return currentIndex++;
}

function getIndex(){
    return currentIndex;
}
nextFadeInSlide();
function nextFadeInSlide(){
    var x = getNextIndex();
    if(x === 1){
        $('.caption').fadeOut();
        $('.myslide:first-child').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(2)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
    }
    else if(x === 2){
        $('.caption').fadeOut();
        $('.myslide:nth-child(2)').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(3)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
    }
    else if(x === 3){
        $('.caption').fadeOut();
        $('.myslide:nth-child(3)').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(1)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
    }
    setTimeout(nextFadeInSlide, 8000);
};
//setInterval(nextFadeInSlide, 8000); This Or This.


function prevFadeInSlide(){
    var x = getIndex();
    if(x === 1){
        $('.caption').fadeOut();
        $('.myslide:nth-child(1)').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(3)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
        currentIndex = 3;
    }
    else if(x === 2){
        $('.caption').fadeOut();
        $('.myslide:nth-child(2)').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(1)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
        currentIndex = 1;
    }
    else if(x === 3){
        $('.caption').fadeOut();
        $('.myslide:nth-child(3)').removeClass('active').fadeOut(1000);
        $('.myslide:nth-child(2)').delay(2000).addClass('active').fadeIn(3000);
        $('.caption').delay(4000).fadeIn(1500);
        currentIndex = 2;
    }
    
};

function nextSlide(){
    nextFadeInSlide();
}
function prevSlide(){
    prevFadeInSlide();
}
