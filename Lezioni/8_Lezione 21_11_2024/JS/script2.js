let counter = 0,
  interval;

document.getElementById("startTimer").addEventListener(`click`, () => {
  interval = setInterval(() => {
    counter++;
    document.getElementById("Timer").textContent = counter;
  }, 1000);
});

document.getElementById("stopTimer").addEventListener(`click`, () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("resetTimer").addEventListener(`click`, () => {
  counter = 0;
  document.getElementById("Timer").textContent = counter;
});
