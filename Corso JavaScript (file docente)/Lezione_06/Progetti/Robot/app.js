// app.js

// Variabili di stato per la posizione del robot
let position = { x: 0, y: 0 };
const gridSize = 5; // Impostiamo una griglia 5x5

// Funzione per creare la griglia e posizionare il robot
function createGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = ''; // Pulisce la griglia

    // Crea 25 celle (5x5) e inserisce la classe "robot" nella cella corretta
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Calcolo delle coordinate (x, y) per la cella corrente
        const x = i % gridSize;
        const y = Math.floor(i / gridSize);

        if (x === position.x && y === position.y) {
            const robot = document.createElement("div");
            robot.id = "robot"; // Aggiunge il robot nella cella corretta
            cell.appendChild(robot);
        }

        grid.appendChild(cell);
    }
}

// Funzione per aggiornare la posizione del robot
function updatePosition() {
    const status = document.getElementById("status");
    status.textContent = `Posizione robot: (${position.x}, ${position.y})`;

    createGrid(); // Ricrea la griglia con la nuova posizione del robot
}

// Funzione di movimento
function move(direction) {
    switch (direction) {
        case 'nord':
            if (position.y > 0) position.y -= 1;
            break;
        case 'sud':
            if (position.y < gridSize - 1) position.y += 1;
            break;
        case 'est':
            if (position.x < gridSize - 1) position.x += 1;
            break;
        case 'ovest':
            if (position.x > 0) position.x -= 1;
            break;
        default:
            alert("Direzione non valida");
            return;
    }

    // Controlla se il robot è uscito dai limiti
    if (position.x < 0 || position.x >= gridSize || position.y < 0 || position.y >= gridSize) {
        alert("Il robot è uscito dai limiti del giardino!");
    } else {
        updatePosition(); // Aggiorna la posizione del robot
    }
}

// Inizializza la griglia e la posizione del robot all'avvio
document.addEventListener("DOMContentLoaded", () => {
    createGrid();
    updatePosition();
});
