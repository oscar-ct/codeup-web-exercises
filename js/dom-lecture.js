// var dc = document.getElementById("dc");
// var showMe = dc.innerText;
// alert(showMe);

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + " Animated Universe";
dc.innerText += " rocks!";


marvel.setAttribute("class", "hotpink");
dc.setAttribute("class", "hotpink")

var hotPinks = document.getElementsByClassName("hotpink");
// hotPinks[0].style.color = "hotpink"

for (var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color = "blue"
}

// var reds = document.getElementsByTagName("p")
// reds[2].style.color = "red"


var submitButton = document.querySelector("#colorSubmission");
// var submitButton = document.getElementById("colorSubmission");

// submitButton.onclick = function (){
//     var colorInput = document.querySelector("#colorPreference")
//     var userInput = colorInput.value;
//     alert(userInput)
//
// }

submitButton.onclick = function (){
    var colorInput = document.getElementById("colorPreference")
    var userInput = colorInput.value;
    var paragraphs = document.getElementsByTagName("p")
    for (var i = 0; paragraphs.length; i++) {
        paragraphs[i].style.color = userInput;
    }

}




var theHulk = document.getElementById("hulk")

var hulkState = theHulk.getAttribute("data-state");

theHulk.innerText += " is in " + hulkState + " state"


var hulkStrength = theHulk.dataset.strength;

theHulk.innerText += ". His strength is " + hulkStrength




var transformHulk = document.getElementById("transformHulk");

transformHulk.onclick = function () {
    var hulk = document.getElementById("hulk");
    var hulkState = hulk.dataset.state;
    if (hulkState === "hulk") {
        hulk.dataset.state = "Bruce Banner";

    } else {
        hulk.dataset.state = "hulk"
    }
    hulk.innerText = "The hulk is in " + hulk.dataset.state + " state";
}
