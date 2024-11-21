const button = document.getElementById("startButton"),
  output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Attendi 3 secondi...";
  setTimeout(() => {
    output.textContent = "Operazione completata";
  }, 3000);
});