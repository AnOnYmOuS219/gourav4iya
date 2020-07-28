$(document).ready(function () {
    showSlides()
    $(".three-line-button").hover(function () {
        $(".three-line1").animate({ "width": "1.6em" }, "slow")
        $(".three-line3").animate({ "width": "1.6em", "margin-left": "0em" }, "slow")
    }, function () {
        $(".three-line1").animate({ "width": "0.8em" }, "slow")
        $(".three-line3").animate({ "width": "0.8em", "margin-left": "0.8em" }, "slow")
    })
})
var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function openNav() {
    document.getElementById("customSideNav").style.width = "100vw";
}
function closeNav() {
    document.getElementById("customSideNav").style.width = "0";
}