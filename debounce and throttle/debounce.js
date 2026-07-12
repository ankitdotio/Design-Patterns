const input = document.querySelector("input");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearInterval(timer);
    let timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(function () {
    console.log("debounce...");
  }, delay),
);
