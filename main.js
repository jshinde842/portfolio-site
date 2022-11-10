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

const sF = document.getElementById("smallFlipboard");
const lF = document.getElementById("largeFlipboard");
console.log("test")
console.log(screen.width)
if (screen.width < 1153) {
    sF.width = "300";
    sF.height = "600";
    lF.width = "0";
    lF.height = "0";
    console.log("small")
} else {
    sF.width = "0";
    sF.height = "0";
    lF.width = "970";
    lF.height = "250";
    console.log("large")
}