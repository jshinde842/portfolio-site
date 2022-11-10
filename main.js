if(!window.location.hash) {
    location.hash = '#home';
}
function pageDisabledAlert() {
    alert("This page is still under construction and cannot be accessed.");
}

function mobileDropdownFunction() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    return false;
}

var sWidth = screen.width;
var s = document.getElementById("smallFlipboard");
var l = document.getElementById("largeFlipboard");
if (sWidth < 1153) {
    s.width = "300";
    s.height = "600";
    l.width = "0";
    l.height = "0";
} else {
    s.width = "0";
    s.height = "0";
    l.width = "970";
    l.height = "250";
}