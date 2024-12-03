// Variabili per i selettori
const btnAggiungi = document.getElementById("aggiungi");
const listaArticoli = document.getElementById("articoli");
const titoloInput = document.getElementById("titolo");
const descrizioneInput = document.getElementById("descrizione");
// Funzione per aggiungere un articolo
function aggiungiArticolo() {
	const titolo = titoloInput.value.trim();
	const descrizione = descrizioneInput.value.trim();
	if (titolo === "" || descrizione === "") {
		alert("Titolo e descrizione non possono essere vuoti!");
		return;
	}
	const li = document.createElement("li");
	li.classList.add("articolo");
	li.innerHTML = `
	<div>
	<h3>${titolo}</h3>
	<p>${descrizione}</p>
	</div>
	<div>
	<button class="edit">Modifica</button>
	<button class="delete">Rimuovi</button>
	</div>
	`;
	// Aggiungi il nuovo articolo alla lista
	listaArticoli.appendChild(li);
	// Aggiungi gli event listener per modificare o rimuovere
	li.querySelector(".edit").addEventListener("click", function() {
		modificaArticolo(li, titolo, descrizione);
	});
	li.querySelector(".delete").addEventListener("click", function() {
		rimuoviArticolo(li);
	});
	// Pulisce i campi di input
	titoloInput.value = "";
	descrizioneInput.value = "";
}
// Funzione per modificare un articolo
function modificaArticolo(li, titolo, descrizione) {
	titoloInput.value = titolo;
	descrizioneInput.value = descrizione;
	// Rimuove l'articolo dalla lista e permette di modificare
	rimuoviArticolo(li);
}
// Funzione per rimuovere un articolo
function rimuoviArticolo(li) {
	listaArticoli.removeChild(li);
}
// Aggiungi un articolo quando il bottone viene cliccato
btnAggiungi.addEventListener("click", aggiungiArticolo);
// Aggiungi un articolo quando l'utente preme "Enter" dopo aver compilato i campi
titoloInput.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		aggiungiArticolo();
	}
});