// Elementi DOM: collegamento degli elementi HTML con JavaScript
const form = document.getElementById("inputForm"), // Riferimento al modulo con ID 'inputForm'
  nameInput = document.getElementById("name"), // Riferimento al campo input del nome
  surnameInput = document.getElementById("surname"), // Riferimento al campo input del cognome
  emailInput = document.getElementById("email"), // Riferimento al campo input dell'email
  addButton = document.getElementById("addButton"), // Riferimento al pulsante 'Aggiungi'
  errorMessage = document.getElementById("errorMessage"), // Riferimento al messaggio di errore
  dynamicList = document.getElementById("dynamicList"); // Riferimento alla lista dinamica

// Funzione per validare l'email
function isValidEmail(email) {
  // RegEx per una email valida con dominio specifico (.com, .org, .net, .it)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|it)$/;
  return emailRegex.test(email); // Restituisce true se l'email è valida, false altrimenti
}

// Aggiungi elemento alla lista quando il pulsante viene cliccato
addButton.addEventListener("click", () => {
  // Ottieni i valori immessi dall'utente, rimuovendo gli spazi extra
  const name = nameInput.value.trim(), // Ottieni il nome e rimuovi gli spazi all'inizio e alla fine
    surname = surnameInput.value.trim(), // Ottieni il cognome e rimuovi gli spazi all'inizio e alla fine
    email = emailInput.value.trim(); // Ottieni l'email e rimuovi gli spazi all'inizio e alla fine

  // Verifica se tutti i campi sono compilati
  if (!name || !surname || !email) { // Se uno dei campi è vuoto
    errorMessage.textContent = "Tutti i campi sono obbligatori."; // Messaggio di errore
    errorMessage.hidden = false; // Mostra il messaggio di errore
    return; // Interrompe l'esecuzione del codice
  }

  // Verifica se l'email è valida
  if (!isValidEmail(email)) { // Se l'email non è valida
    errorMessage.textContent =
      "Inserisci una email valida (es. nome@dominio.com, .org, .net, .it)."; // Messaggio di errore per email non valida
    errorMessage.hidden = false; // Mostra il messaggio di errore
    return; // Interrompe l'esecuzione del codice
  }

  // Se non ci sono errori, nascondi il messaggio di errore
  errorMessage.hidden = true; // Nasconde il messaggio di errore

  // Crea un nuovo elemento della lista con i dati immessi
  const li = document.createElement("li"); // Crea un nuovo elemento 'li' per la lista
  li.innerHTML = `
    ${name} ${surname} - ${email} // Inserisce nome, cognome e email nell'elemento 'li'
    <div class="buttons"> // Aggiunge i pulsanti per modificare ed eliminare
      <button class="modify">Modifica</button> // Bottone per modificare
      <button class="delete">Elimina</button> // Bottone per eliminare
    </div>
  `;

  // Aggiungi funzionalità per il pulsante "Modifica"
  li.querySelector(".modify").addEventListener("click", () => {
    nameInput.value = name; // Imposta il valore del campo nome con il valore selezionato
    surnameInput.value = surname; // Imposta il valore del campo cognome con il valore selezionato
    emailInput.value = email; // Imposta il valore del campo email con il valore selezionato
    dynamicList.removeChild(li); // Rimuove l'elemento dalla lista
  });

  // Aggiungi funzionalità per il pulsante "Elimina"
  li.querySelector(".delete").addEventListener("click", () => {
    dynamicList.removeChild(li); // Rimuove l'elemento dalla lista
  });

  dynamicList.appendChild(li); // Aggiunge l'elemento 'li' alla lista dinamica
  form.reset(); // Resetta i campi del modulo
});

// Pulisci il messaggio di errore quando l'utente modifica i campi
form.addEventListener("input", () => {
  errorMessage.hidden = true; // Nasconde il messaggio di errore durante l'input dell'utente
});

// Pulsante "Rimuovi Lista" per cancellare tutti gli elementi della lista
const removeListButton = document.getElementById("removeListButton"); // Riferimento al pulsante 'Rimuovi Lista'

// Aggiungi l'evento per il pulsante "Rimuovi Lista"
removeListButton.addEventListener("click", () => {
  dynamicList.innerHTML = ""; // Rimuove tutto il contenuto della lista (cancella tutti gli elementi)
});
