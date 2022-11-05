if(!window.location.hash) {
    location.hash = '#home';
}
function pageDisabledAlert() {
    alert("This Page is a Work-In-Progress");
}

//f1 project github link button
const f1repoBtn = document.getElementById('f1repo');
f1repoBtn.addEventListener('click', () => {
    window.open('https://github.com/jshinde842/Formula-1-Standings-Predictions', '_blank')
});