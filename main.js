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


var width = 0;
flipboard = document.getElementById('flipboard');
width = flipboard.getBoundingClientRect().width ? flipboard.getBoundingClientRect().width : flipboard.offsetWidth;
if (width > 800) {
    flipboard.innerHTML = '<iframe width="100%" frameborder="0" height="600px" marginheight="0" marginwidth="0" scrolling="no" src="https://flipboard.com/section/the-internet-of-things-bn8l9H"></iframe>'
}