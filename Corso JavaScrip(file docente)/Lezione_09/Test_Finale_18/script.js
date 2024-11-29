const form = document.getElementById("cliente-form");
const listaContainer = document.getElementById("lista-container");

const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");

let clienti = JSON.parse(localStorage.getItem("clienti")) || []; // Modello dati centralizzato
let editingIndex = null;

// Funzione per validare i campi del modulo
function validateForm() {
    const nome = document.getElementById("nome").value.trim();
    const cognome = document.getElementById("cognome").value.trim();
    const email = document.getElementById("email").value.trim();
    const saldo = parseFloat(document.getElementById("saldo").value.trim());
    const data = document.getElementById("data").value;
	
    let valid = true;
	
    // Validazione Nome
    if (!nome) {
        document.getElementById("error-nome").textContent = "Il nome è obbligatorio.";
        valid = false;
		} else {
        document.getElementById("error-nome").textContent = "";
	}
	
    // Validazione Cognome
    if (!cognome) {
        document.getElementById("error-cognome").textContent = "Il cognome è obbligatorio.";
        valid = false;
		} else {
        document.getElementById("error-cognome").textContent = "";
	}
	
    // Validazione Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById("error-email").textContent = "Inserisci un'email valida.";
        valid = false;
		} else {
        document.getElementById("error-email").textContent = "";
	}
	
    // Validazione Saldo
    if (!saldo || saldo <= 0 || saldo > 50000) {
        document.getElementById("error-saldo").textContent = "Il saldo deve essere compreso tra 0 e 50.000.";
        valid = false;
		} else {
        document.getElementById("error-saldo").textContent = "";
	}
	
    // Validazione Data
    if (!data || new Date(data) < new Date("1970-01-01") || new Date(data) > new Date()) {
        document.getElementById("error-data").textContent = "Inserisci una data valida.";
        valid = false;
		} else {
        document.getElementById("error-data").textContent = "";
	}
	
    return valid;
}

// Funzione per aggiornare la visualizzazione della lista clienti
function renderClientList() {
    listaContainer.innerHTML = "";
    clienti.forEach((cliente, index) => {
        const clientDiv = document.createElement("div");
        clientDiv.className = "cliente-row";
        clientDiv.innerHTML = `
		<span class="cliente-name" style="font-weight: bold;">${cliente.cognome} ${cliente.nome}</span>
		<div class="actions">
		<button class="edit" onclick="editClient(${index})">Modifica</button>
		<button class="delete" onclick="deleteClient(${index})">Elimina</button>
		</div>
        `;
        listaContainer.appendChild(clientDiv);
	});
}

// Funzione per aggiungere o modificare un cliente
addButton.addEventListener("click", () => {
    if (!validateForm()) return;
	
    const cliente = {
        nome: document.getElementById("nome").value.trim(),
        cognome: document.getElementById("cognome").value.trim(),
        email: document.getElementById("email").value.trim(),
        saldo: parseFloat(document.getElementById("saldo").value.trim()),
        data: document.getElementById("data").value,
	};
	
    if (editingIndex !== null) {
        clienti[editingIndex] = cliente;
        editingIndex = null;
        addButton.textContent = "Aggiungi";
        addButton.style.backgroundColor = "#007bff";
		} else {
        clienti.push(cliente);
	}
	
    localStorage.setItem("clienti", JSON.stringify(clienti));
    form.reset();
    renderClientList();
});

// Funzione per eliminare un cliente
function deleteClient(index) {
    clienti.splice(index, 1);
    localStorage.setItem("clienti", JSON.stringify(clienti));
    renderClientList();
}

// Funzione per modificare un cliente
function editClient(index) {
    const cliente = clienti[index];
    document.getElementById("nome").value = cliente.nome;
    document.getElementById("cognome").value = cliente.cognome;
    document.getElementById("email").value = cliente.email;
    document.getElementById("saldo").value = cliente.saldo;
    document.getElementById("data").value = cliente.data;
	
    editingIndex = index;
    addButton.textContent = "Applica";
    addButton.style.backgroundColor = "green";
}

// Funzione per svuotare l'archivio
clearButton.addEventListener("click", () => {
    clienti = [];
    localStorage.removeItem("clienti");
    renderClientList();
});

// Carica la lista clienti iniziale
renderClientList();
