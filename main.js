var first, second;
var x = 0;
var created = false;

function attepmt() {

    if (x == 0) {

    for (var i = 0; i < 4; i++) {
	x = document.createElement('div');
	x.id = i;
    var y = document.createTextNode(i);
    x.appendChild(y);
    var z = document.getElementById("ContDivs");
    z.appendChild(x);
    x = 1;
    } 

}
}


function reset() {
    var container = document.getElementById("ContDivs");
    container.outerHTML = '<div id="ContDivs"></div>';
    x = 0;
}