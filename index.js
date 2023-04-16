// Your code here

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""));
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""));
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
