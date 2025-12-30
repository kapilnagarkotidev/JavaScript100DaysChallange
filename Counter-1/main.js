//Select the elements from .index.html//
let value = document.querySelector("input").value;
const add = document.querySelector(".incre");
const minus = document.querySelector(".decre");
const zero = document.querySelector(".reset-btn");

//function to increase the counter number.
function increase() {
  value.style.color = "green";
}

//function to decrease the counter number.
function decrease() {}

//function to reset the counter
function reset() {
  alert("Gu kha jatha");
}

zero.addEventListener("click", reset);
