let map = new Map([
    [ 1, 'fuck' ],
    [ 2, 'two' ],
    [ 3, 'three' ] // trailing comma is ignored
]);

var foo = map.get(1);

document.getElementById('main').innerHTML=foo;


var xhr = new XMLHttpRequest();
xhr.open('GET', encodeURI('//react.dev/wp-json/wp/v2/posts'));
xhr.onload = function() {
    if (xhr.status === 200) {
        var info = JSON.parse(xhr.responseText);
        console.log(info);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
