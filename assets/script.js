// js file 






/// call cat api 
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function (data) {
    document.getElementById("id").innerHTML = data[0]["id"];
    document.getElementById("url").innerHTML = data[0]["url"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
});

////////dog api

function ajax_get(url2, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url2, true);
    xmlhttp.send();
}

ajax_get('https://dog.ceo/api/breeds/image/random', function (data) {
    document.getElementById("dogid").innerHTML = data2["dog"];
    document.getElementById("dogurl").innerHTML = data2["dog"];

    var html = '<img src="' + data + '">';
    document.getElementById("dogimage").innerHTML = html;
});
