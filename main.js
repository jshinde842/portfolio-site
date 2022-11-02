if(!window.location.hash) {
    location.hash = '#home';
}
function pageDisabledAlert() {
    alert("This Page is a Work-In-Progress");
  }
document.getElementById("disabled").onclick = function(){alert("This Page is a Work-In-Progress");};