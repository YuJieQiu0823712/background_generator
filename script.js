// import { without } from 'lodash';
// console.log(without); not working because browser not recognize import

var _ = require('lodash'); 
console.log(_);
// Why Use Browserify?
// 1. Supports require() in the browser – Normally, require() works in Node.js, but not in the browser. Browserify makes it possible.
// 2. Bundles dependencies – If your JavaScript files use modules, Browserify packages them into one file.
// 3. Improves performance – By reducing multiple script requests into a single bundled file.
var array = [1,2,3,4,5]
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	return '#' + Math.floor(Math.random()*16777215).toString(16);
	//24-bit RGB color is 16777215 (which equals FFFFFF in hexadecimal).
	//Converts the integer to a hexadecimal string.
}

function setRandomGradient(){
	var random1 = getRandomColor();
	var random2 = getRandomColor();
	color1.value = random1;
	color2.value = random2;
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);