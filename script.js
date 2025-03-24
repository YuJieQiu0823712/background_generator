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