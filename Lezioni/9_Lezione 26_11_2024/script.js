// Elementi DOM
const form = document.getElementById("inputForm"),
  nameInput = document.getElementById("name"),
  surnameInput = document.getElementById("surname"),
  emailInput = document.getElementById("email"),
  addButton = document.getElementById("addButton"),
  errorMessage = document.getElementById("errorMessage"),
  dynamicList = document.getElementById("dynamicList");

// Funzione per validare l'email
function isValidEmail(email) {
  // RegEx per una email valida con dominio specifico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|it)$/;
  return emailRegex.test(email);
}

// Aggiungi elemento alla lista
addButton.addEventListener("click", () => {
  const name = nameInput.value.trim(),
    surname = surnameInput.value.trim(),
    email = emailInput.value.trim();

  if (!name || !surname || !email) {
    errorMessage.textContent = "Tutti i campi sono obbligatori.";
    errorMessage.hidden = false;
    return;
  }

  if (!isValidEmail(email)) {
    errorMessage.textContent =
      "Inserisci una email valida (es. nome@dominio.com, .org, .net, .it).";
    errorMessage.hidden = false;
    return;
  }

  errorMessage.hidden = true;

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} ${surname} - ${email}
    <div class="buttons">
      <button class="modify">Modifica</button>
      <button class="delete">Elimina</button>
    </div>
  `;

  // Modifica elemento
  li.querySelector(".modify").addEventListener("click", () => {
    nameInput.value = name;
    surnameInput.value = surname;
    emailInput.value = email;
    dynamicList.removeChild(li);
  });

  // Elimina elemento
  li.querySelector(".delete").addEventListener("click", () => {
    dynamicList.removeChild(li);
  });

  dynamicList.appendChild(li);
  form.reset();
});

// Pulisci messaggio di errore quando l'utente modifica i campi
form.addEventListener("input", () => {
  errorMessage.hidden = true;
});

// Pulsante Rimuovi Lista
const removeListButton = document.getElementById("removeListButton");

// Rimuovi tutti gli elementi dalla lista
removeListButton.addEventListener("click", () => {
  dynamicList.innerHTML = ""; // Cancella tutto il contenuto della lista
});
