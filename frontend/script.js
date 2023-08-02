// script.js
function animateCounter(target, duration) {
  const start = 0;
  const stepTime = Math.abs(Math.floor(duration / (target - start)));
  let current = start;
  const counter = document.getElementById('counter');

  const timer = setInterval(function() {
    current += 1;
    counter.textContent = current;
    if (current === target) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Call the animation function when the page loads
window.onload = function() {
  animateCounter(160, 3000); // Change the second parameter (2000) to control the duration of the animation (in milliseconds)
};
