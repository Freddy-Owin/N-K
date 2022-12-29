$(window).on("load", function(){

    $(".preloader").fadeOut(600);

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1)
        {
            slideIndex = 0;
        }
        else {
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();

    $(".fa-music").click(function(){
        if($(this).hasClass("pause")){
            $("#ysto")[0].play();
        }
        else {
            $("#ysto")[0].pause();
        }
        $(this).toggleClass("pause")
    })
})

$(document).ready(function(){

    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        }
        else {
            $(".header").removeClass("fixed");
        }
    });

    $.scrollIt({
        topOffset: -50,
    });
});

const wHeight = $(window).height();
$(".gallary-popup .gp-img").css("max-height", wHeight + "px");

let itemIndex = 0;
const totalGallaryItems = $(".gallary-item").length;

$(".gallary-item").click(function(){
    itemIndex = $(this).index();
    $(".gallary-popup").addClass("open");
    $(".gallary-popup .gp-img").hide();
    gpSlideShow()
})

$(".gp-controls .next").click(function(){
    if(itemIndex == totalGallaryItems-1){
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    $(".gallary-popup .gp-img").fadeOut(function(){
        gpSlideShow();
    })
    console.log(itemIndex);
})

$(".gp-controls .prev").click(function(){
    if(itemIndex == 0){
        itemIndex = totalGallaryItems-1;
    } else {
        itemIndex--;
    }
    $(".gallary-popup .gp-img").fadeOut(function(){
        gpSlideShow();
    })
    console.log(itemIndex);
})

function gpSlideShow(){
    const imgSrc = $(".gallary-item").eq(itemIndex).find("img").attr("data-large");
    $(".gallary-popup .gp-img").fadeIn().attr("src",imgSrc);
    $("gp-counter").text((itemIndex+1) + "/" + totalGallaryItems);
}

$(".gp-close").click(function(){
    $(".gallary-popup").removeClass("open");
})

$(".gallary-popup").click(function(event){
    if($(event.target).hasClass("open")){
        $(".gallary-popup").removeClass("open");
    }
})