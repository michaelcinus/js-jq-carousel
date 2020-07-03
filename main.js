$(document).ready(function() {
    var nextButton = $("next");
    var prevButton = $("prev");

    //CLICK freccia sinistra
    prevButton.click(prevImg);

    //CLICK freccia destra
    nextButton.click(nextImg);


});

//FUCTION 
function nextImg(){
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");

    var iActive = $(".slider-wrapper i.active");
    iActive.removeClass("active");

    if (imgActive.hasClass("last") == true) {
        $(".slider-wrapper img-first").addClass("active");
        $(".slider-wrapper i-first").addClass("active");
    } else {
        imgActive.next().addClass("active");
        iActive.next().addClass("active");
    }
}

function prevImg(){
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");

    var iActive = $(".slider-wrapper i.active");
    iActive.removeClass("active");

    if (imgActive.hasClass("first") == true) {
        $(".slider-wrapper img-last").addClass("active");
        $(".slider-wrapper i-last").addClass("active");
    } else {
        imgActive.prev().addClass("active");
        iActive.prev().addClass("active");
    }
}