var body = document.querySelector("body");
var input1 = document.querySelector(".give1");
var input2 = document.querySelector(".give2");
var backWhole = document.getElementById("whole");

//creating function to adjust the Background picker
function adjustback(){
    backWhole.style.background = "linear-gradient(to right, "  + input1.value + ", " + input2.value +")";
    CSS.textContent = backWhole.style.background + ";";
}

//Adding css mark for getting the ouput color formation


//adding event for input1 to change the background 
input1.addEventListener("input", adjustback);

//adding event to input2 for changing the background 
input2.addEventListener("input", adjustback);

