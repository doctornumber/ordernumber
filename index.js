setInterval(function() {
    console.log("Called set Inrerval")
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var resStr = xmlHttp;
            console.log("EVo req: ", resStr);
            var myImageElement = document.getElementById('myImage');
            var div1 = document.getElementById('myDiv');
            var parsedJsonObjResp = JSON.parse(xmlHttp.response);
            var lastUpdated = new Date(parsedJsonObjResp.lastUpdated);
            myImageElement.src = "data:image/png;base64, " + parsedJsonObjResp.base64Str;
            div1.textContent = "Last updated: " + lastUpdated.toLocaleString();
        }
    }
    xmlHttp.open("GET", "http://127.0.0.1:8080/api/v1/queue", true);
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.setRequestHeader('Accept', '*/*')
    xmlHttp.send(null);
}, 5000);