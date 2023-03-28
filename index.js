var countEl = document.getElementById("count-el");
var count = 0;
var saveEl = document.getElementById("save-el");

function increment() {
  count = count + 1;
  countEl.innerHTML = count;
}

function save() {
  var countStr = count + " -  ";
  saveEl.innerHTML += countStr;
  count = 0;
  countEl.textContent = 0;

  console.log(count);
}
