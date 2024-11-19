// Lista dei colori di sfondo const colors= ["#FF5733", "#33FF57" , "#3357FF" 
"#F333FF", "#FFFF33", "#FF5733", "#33FFF7"]; 
// Funzione per cambiare 1l colore di sfondo function changeBackgroundColor() ( // Seleziona un colore casuale dalla lista const randomColor colors[Math.floor(Math.random() * colors.length)]; // Cambia il colore di sfondo della pagina document.body.style.backgroundColor = randomColor; 
// Aggiungi un listener al bottone per cambiare il colore document.getElementById("colorButton").addEventListener("click", changeBackgroundColor); 
qGe