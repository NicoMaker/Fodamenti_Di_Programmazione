let counter = 0;
let interval;

document.getElementById('startTimer').addEventListener('click', () => {
    interval = setInterval(() => {
        counter++;
        document.getElementById('timer').textContent = counter;
    }, 1000);
});

document.getElementById('stopTimer').addEventListener('click', () => {
    clearInterval(interval);
});

