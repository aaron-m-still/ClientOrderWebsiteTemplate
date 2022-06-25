$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$( window ).on( "load", function() {
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 5) $('.navbar-fixed-top').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.navbar-fixed-top').stop().animate({
            "top": '-70',
            "opacity": '0'
        });
    }
});

var stillHidden = true;
function myFunction() {
    if (stillHidden == true) {
        document.getElementById("hiddenEvents1").style.display = "block";
        document.getElementById("hiddenEvents2").style.display = "block";
        document.getElementById("hiddenEvents3").style.display = "block";
        stillHidden = false;
        document.getElementById("showAllButton").value = "Show Less";
        document.getElementById("showAllButton1").value = "Translated Less";
    } else if (stillHidden == false) {
        document.getElementById("hiddenEvents1").style.display = "none";
        document.getElementById("hiddenEvents2").style.display = "none";
        document.getElementById("hiddenEvents3").style.display = "none";
        stillHidden = true;
        document.getElementById("showAllButton").value = "Show All";
        document.getElementById("showAllButton1").value = "Translated All";
        
    }
}