var body = document.querySelector("body");
var input1 = document.getElementById("give1");
var input2 = document.getElementById("give2");
var backWhole = document.getElementById("whole");



//creating function to adjust the Background picker
function adjustback(){
    backWhole.style.background = "linear-gradient(to right, "  + input1.value + ", " + input2.value +")";
    CSS.textContent = backWhole.style.background + ";";
}

//adding event for input1 to change the background 
input1.addEventListener("input", adjustback);

//adding event to input2 for changing the background 
input2.addEventListener("input", adjustback);

//Adding css mark for getting the ouput color formation
function printValue1(){
	var main = input1.value;
	document.getElementById("valuePrint1").innerHTML = "The value is :" + main;
}

function printValue2(){
	var button = input2.value;
	document.getElementById("check").innerHTML = "The value is :" + button;
	
}

function getLinear(){
    document.getElementById("myText").innerHTML = "linear-gradient(to right," + input1.value + "," + input2.value;

}

