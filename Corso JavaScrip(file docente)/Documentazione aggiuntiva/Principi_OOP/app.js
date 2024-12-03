// Classe Persona
class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }

  descrizione() {
    return `${this.nome}, ${this.eta} anni`;
  }
}

// Classe GestorePersone
class GestorePersone {
  constructor() {
    this.persone = []; // Array per memorizzare le persone
  }

  aggiungiPersona(persona) {
    this.persone.push(persona);
  }

  rimuoviPersona(index) {
    this.persone.splice(index, 1);
  }

  getListaPersone() {
    return this.persone;
  }
}

// Gestore dell'applicazione
const gestore = new GestorePersone();

// Riferimenti agli elementi DOM
const personaForm = document.getElementById("personaForm");
const nomeInput = document.getElementById("nome");
const etaInput = document.getElementById("eta");
const listaPersone = document.getElementById("listaPersone");

// Funzione per aggiornare la lista delle persone
function aggiornaLista() {
  listaPersone.innerHTML = "";
  gestore.getListaPersone().forEach((persona, index) => {
    const li = document.createElement("li");
    li.textContent = persona.descrizione();

    const rimuoviBtn = document.createElement("button");
    rimuoviBtn.textContent = "Rimuovi";
    rimuoviBtn.onclick = () => {
      gestore.rimuoviPersona(index);
      aggiornaLista();
    };

    li.appendChild(rimuoviBtn);
    listaPersone.appendChild(li);
  });
}

// Gestione dell'evento submit del form
personaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = nomeInput.value.trim();
  const eta = parseInt(etaInput.value.trim());

  if (nome && !isNaN(eta)) {
    const nuovaPersona = new Persona(nome, eta);
    gestore.aggiungiPersona(nuovaPersona);
    aggiornaLista();

    // Resetta il form
    nomeInput.value = "";
    etaInput.value = "";
  }
});
