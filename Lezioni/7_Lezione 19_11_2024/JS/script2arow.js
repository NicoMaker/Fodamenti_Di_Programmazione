const colors = [
    "#ff5733",
    "#333f57",
    "#33357ff",
    "#ff333ff",
    "#ffff33",
    "#ff5733",
    "#33fff7",
  ],
  changebackroundcolor = () =>
    (document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]);

document
  .getElementById("colorButton")
  .addEventListener("click", changebackroundcolor);
