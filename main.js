document.addEventListener('DOMContentLoaded', function(){
    let formEl = document.getElementById('XHRform')
    let og = document.querySelector('#XHRpost')
    let og1 = document.querySelector('#XHRget')
    let og2 = document.querySelector('#XHRput')
    let og3 = document.querySelector('#XHRdelete')

    
    og.addEventListener('click', (evt)=>{
        const FD = new FormData(formEl)
        const XHR = new XMLHttpRequest()

        XHR.addEventListener("load", (event) => {
            console.log(typeof event.target.responseText)
            var textPost = event.target.responseText
            document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(textPost), null, 4)
        });

        XHR.addEventListener("error", (event) => {
            alert('Oops! Something went wrong.');
        });
        XHR.open("POST", "https://httpbin.org/post");
        XHR.send(FD);
    })
    og1.addEventListener('click', (evt)=>{
        const FD = new FormData(formEl)
        const XHR = new XMLHttpRequest()

        XHR.addEventListener("load", (event) => {
            console.log(typeof event.target.responseText)
            var textPost = event.target.responseText
            document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(textPost), null, 4)
        });

        XHR.addEventListener("error", (event) => {
            alert('Oops! Something went wrong.');
        });
        XHR.open("GET", "https://httpbin.org/get");
        XHR.send(FD);
    })
    og2.addEventListener('click', (evt)=>{
        const FD = new FormData(formEl)
        const XHR = new XMLHttpRequest()

        XHR.addEventListener("load", (event) => {
            console.log(typeof event.target.responseText)
            var textPost = event.target.responseText
            document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(textPost), null, 4)
        });

        XHR.addEventListener("error", (event) => {
            alert('Oops! Something went wrong.');
        });
        XHR.open("PUT", "https://httpbin.org/put");
        XHR.send(FD);
    })
    og3.addEventListener('click', (evt)=>{
        const FD = new FormData(formEl)
        const XHR = new XMLHttpRequest()

        XHR.addEventListener("load", (event) => {
            console.log(typeof event.target.responseText)
            var textPost = event.target.responseText
            document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(textPost), null, 4)
        });

        XHR.addEventListener("error", (event) => {
            alert('Oops! Something went wrong.');
        });
        XHR.open("DELETE", "https://httpbin.org/delete");
        XHR.send(FD);
    })
});