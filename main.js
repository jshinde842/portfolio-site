
if(!window.location.hash) {
    location.hash = '#home';
}
function pageDisabledAlert() {
    alert("This page is still under construction and cannot be accessed.");
}

function repoDisabledAlert() {
    alert("This is a private repository. Please contact me for access.");
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
