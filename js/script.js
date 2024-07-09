var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello World");
var newBefore = document.createTextNode("I am before");
newDiv.appendChild(newContent);
newDiv.className = "new-class";
var container = document.getElementById("container");
container.appendChild(newDiv);

var canvas = document.getElementById("canvas");
var con = canvas.getContext("2d");
con.fillStyle = "#FF0000";
con.fillRect(0, 0, 150, 75);
