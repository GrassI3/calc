let n = [];
let result;
function rando() {
  n.push(Math.floor(Math.random() * 9) + 1);
  document.getElementById("view").textContent = n;
}
for (let i = 1; i <= 9; i++) {
  document.getElementById(`Random${i}`).onclick = rando;
}
function updateView() {
  n = [];
  n[0] = result;
  document.getElementById("view").textContent = result;
}
document.getElementById("add").onclick = () => {
  result = n.reduce((p, c) => p + c);
  updateView();
};
document.getElementById("sub").onclick = () => {
  result = n.reduce((p, c) => p - c);
  updateView();
};
document.getElementById("mult").onclick = () => {
  result = n.reduce((p, c) => p * c);
  updateView();
};
document.getElementById("div").onclick = () => {
  result = n.reduce((p, c) => p / c);
  updateView();
};
document.getElementById("clear").onclick = () => {
  n = [];
  document.getElementById("view").textContent = "-";
};
