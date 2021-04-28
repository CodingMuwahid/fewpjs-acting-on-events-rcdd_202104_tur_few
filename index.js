// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight() {
  let leftNumbers = dodger.style.right.replace("px", "");
  let left = parseInt(rightNumbers, 10);
 
  if (left > 0) {
    dodger.style.right = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(ee) {
  if (ee.key === "ArrowRight") {
    moveDodgerRight();
  }
});