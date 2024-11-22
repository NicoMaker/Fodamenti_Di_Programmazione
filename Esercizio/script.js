// Elementi DOM
const form = document.getElementById("inputForm"),
  nameInput = document.getElementById("name"),
  surnameInput = document.getElementById("surname"),
  emailInput = document.getElementById("email"),
  addButton = document.getElementById("addButton"),
  errorMessage = document.getElementById("errorMessage"),
  dynamicList = document.getElementById("dynamicList");

// Aggiungi elemento alla lista
addButton.addEventListener("click", () => {
  const name = nameInput.value.trim(),
    surname = surnameInput.value.trim(),
    email = emailInput.value.trim();

  if (!name || !surname || !email) {
    errorMessage.hidden = false;
    return;
  }

  errorMessage.hidden = true;

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} ${surname} - ${email}
    <button class="modify">Modifica</button>
    <button class="delete">Elimina</button>
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
