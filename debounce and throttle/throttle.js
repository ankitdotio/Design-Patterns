const input = document.querySelector("input");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    let now = Date.now();

    if (now - timer > 0) {
      func(...args);
      timer = Date.now();
    }
  };
}

input.addEventListener(
  "input",
  throttle(function () {
    console.log("throttling...");
  }, 2000),
);
