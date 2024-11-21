const button = document.getElementById("startButton"),
      output = document.getElementById("output");

button.addEventListener("click", () => {
  let countdown = 3;

  for (let i = countdown; i > 0; i--) {
    setTimeout(() => {
      output.textContent = `Attendi ${i} ${i === 1 ? 'secondo' : 'secondi'}...`;
    }, (countdown - i) * 1000);
  }

  setTimeout(() => {
    output.textContent = "Operazione completata";
  }, countdown * 1000);
});
