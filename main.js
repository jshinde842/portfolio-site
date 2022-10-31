function toggle() {
    // Declare variable menu
    let menu = document.getElementById("side-menu");
  
    // toggle code
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }
  }
  
  document.getElementById("ham-button").addEventListener("click",toggle);