const form = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

// Memorizzazione su disco (simulata)
let contacts = []; // Array per i contatti

// Funzione per caricare i dati salvati
function loadContacts() {
    const storedData = localStorage.getItem("contacts"); // Carica da localStorage
    if (storedData) {
        contacts = JSON.parse(storedData);
        renderContacts();
	}
}

// Funzione per salvare i dati
function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts)); // Salva su localStorage
}

// Funzione per aggiungere un contatto
function addContact(name, surname, email) {
    contacts.push({ name, surname, email });
    saveContacts();
    renderContacts();
}

// Funzione per eliminare un contatto
function deleteContact(index) {
    contacts.splice(index, 1); // Rimuove l'elemento
    saveContacts();
    renderContacts();
}

// Funzione per visualizzare la lista
function renderContacts() {
    contactList.innerHTML = ""; // Resetta la lista
    contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
		${contact.name} ${contact.surname} (${contact.email})
		<button onclick="deleteContact(${index})">Elimina</button>
        `;
        contactList.appendChild(li);
	});
}

// Gestore per il form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene il refresh della pagina
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    addContact(name, surname, email);
    form.reset(); // Resetta i campi del form
});

// Carica i dati all'avvio
loadContacts();
