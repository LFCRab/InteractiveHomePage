const last = ["future", "now", "range"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === last.length) {
    count = 0;
  }
  currentText = last[count];
  letter = currentText.slice(0, ++index);

  const word = document.querySelector(".lastWord");

  word.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
})();
