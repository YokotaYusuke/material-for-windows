const btn = document.querySelector("#btn");

function changeColor() {
  this.style.color = "blue";
}

function changeBgColor() {
  this.style.backgroundColor = "green"
}

// btn.removeEventListener("click", test);
btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeBgColor);
btn.removeEventListener("click", changeBgColor);