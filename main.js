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

const s = document.getElementById("smallFlipboard");
const l = document.getElementById("largeFlipboard");
if (screen.width < 1153) {
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