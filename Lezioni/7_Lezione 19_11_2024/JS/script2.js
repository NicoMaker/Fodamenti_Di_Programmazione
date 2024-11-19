const colors = [
  "#ff5733",
  "#333f57",
  "#33357ff",
  "#ff333ff",
  "#ffff33",
  "#ff5733",
  "#33fff7",
];
function changebackroundcolor() {
  const randomcolor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomcolor;
}

document
  .getElementById("colorButton")
  .addEventListener("click", changebackroundcolor);
