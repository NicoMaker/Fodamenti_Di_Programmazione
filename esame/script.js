document.addEventListener("DOMContentLoaded", () => {
  // Selezione degli elementi DOM
  const form = document.getElementById("clientForm"), // Il form per inserire i dati del cliente
    clientList = document.getElementById("clientList"), // La lista dove vengono visualizzati i clienti
    btnPulisci = document.getElementById("pulisci_archivio"), // Il bottone per pulire l'archivio (rimuovere tutti i clienti)
    clients = [], // Array per memorizzare i clienti
    itemsPerPage = 5; // Numero massimo di clienti da visualizzare per pagina, nella pagina succesiva ne vedo altri 5
  let currentPage = 1; // Pagina iniziale

  // Funzione per validare i campi del form
  const validateField = (field, message) => {
      const error = field.nextElementSibling; // Trova il messaggio di errore accanto al campo
      if (!field.validity.valid) {
        // Se il campo non è valido
        error.textContent = message; // Mostra il messaggio di errore
        return false;
      }
      error.textContent = ""; // Altrimenti, rimuove il messaggio di errore
      return true;
    },
    // Funzione per resettare il form
    resetForm = () => {
      form.reset(); // Resetta il form
      document
        .querySelectorAll(".error-message") // Trova tutti gli errori nel DOM
        .forEach((el) => (el.textContent = "")); // Rimuove i messaggi di errore
    },
    // Funzione per creare un nuovo elemento cliente nella lista
    createClientElement = (client) => {
      const li = document.createElement("li"); // Crea un nuovo elemento <li>
      li.innerHTML = `<strong> ${client.cognome} ${client.nome} </strong>`; // Aggiunge il nome e cognome
      const btnContainer = document.createElement("div"); // Crea un contenitore per i bottoni
      btnContainer.className = "bottons-container";

      const btnModifica = document.createElement("button"); // Crea il bottone "Modifica"
      btnModifica.textContent = "Modifica";
      btnModifica.className = "modifica";
      btnModifica.addEventListener("click", () => loadClientData(client, li)); // Aggiunge l'evento per modificare i dati del cliente

      const btnElimina = document.createElement("button"); // Crea il bottone "Elimina"
      btnElimina.textContent = "Elimina";
      btnElimina.className = "elimina";
      btnElimina.addEventListener("click", () => {
        const index = clients.indexOf(client); // Trova l'indice del cliente nell'array
        if (index > -1) clients.splice(index, 1); // Rimuove il cliente dall'array
        renderClients(); // Rende di nuovo la lista aggiornata
      });

      // Aggiunge i bottoni al contenitore e il contenitore all'elemento <li>
      btnContainer.appendChild(btnModifica);
      btnContainer.appendChild(btnElimina);
      li.appendChild(btnContainer);
      return li; // Restituisce l'elemento cliente
    },
    // Funzione per aggiungere un nuovo cliente
    addClient = (e) => {
      e.preventDefault(); // Previene il comportamento predefinito (inviare il form)

      const client = {
        nome: form.nome.value,
        cognome: form.cognome.value,
        email: form.email.value,
        saldo: parseFloat(form.saldo.value).toFixed(2), // Saldo formattato con 2 decimali
        dataAcquisizione: form.dataAcquisizione.value,
      };

      // Verifica che tutti i campi siano validi prima di aggiungere il cliente
      if (
        validateField(form.nome, "Nome obbligatorio") &&
        validateField(form.cognome, "Cognome obbligatorio") &&
        validateField(form.email, "Email valida obbligatoria") &&
        validateField(form.saldo, "Saldo massimo 50.000") &&
        validateField(form.dataAcquisizione, "Data obbligatoria")
      ) {
        clients.push(client); // Aggiunge il cliente all'array
        renderClients(); // Rende di nuovo la lista aggiornata
        resetForm(); // Resetta il form
      }
    },
    // Funzione per renderizzare la lista dei clienti con paginazione
    renderClients = () => {
      clientList.innerHTML = ""; // Svuota la lista dei clienti
      const start = (currentPage - 1) * itemsPerPage, // Indice di inizio per la pagina corrente
        end = start + itemsPerPage, // Indice di fine per la pagina corrente
        visibleClients = clients.slice(start, end); // Seleziona i clienti da visualizzare nella pagina corrente

      visibleClients.forEach((client) => {
        clientList.appendChild(createClientElement(client)); // Aggiunge ogni cliente come elemento nella lista
      });

      updatePagination(); // Aggiorna i controlli di paginazione
    },
    // Funzione per caricare i dati di un cliente nel form per la modifica
    loadClientData = (client, li) => {
      form.nome.value = client.nome;
      form.cognome.value = client.cognome;
      form.email.value = client.email;
      form.saldo.value = client.saldo;
      form.dataAcquisizione.value = client.dataAcquisizione;
      const index = clients.indexOf(client);
      if (index > -1) clients.splice(index, 1); // Rimuove il cliente dall'array per permettere la modifica
      renderClients(); // Rende di nuovo la lista aggiornata
    },
    // Funzione per aggiornare i controlli di paginazione
    updatePagination = () => {
      const totalPages = Math.ceil(clients.length / itemsPerPage); // Calcola il numero totale di pagine
      document.getElementById("pagination").innerHTML = `
        <button ${
          currentPage === 1 ? "disabled" : ""
        } id="prev"><span class="material-icons">arrow_back</span></button>
        <span>Pagina ${currentPage} di ${totalPages}</span>
        <button ${
          currentPage === totalPages ? "disabled" : ""
        } id="next"><span class="material-icons">arrow_forward</span></button>
      `;

      // Gestisce il click per andare alla pagina precedente
      document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          renderClients();
        }
      });
      // Gestisce il click per andare alla pagina successiva
      document.getElementById("next").addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderClients();
        }
      });
    };

  // Aggiunge l'evento di invio al form per aggiungere un cliente
  form.addEventListener("submit", addClient);

  // Aggiunge l'evento per pulire l'archivio (rimuovere tutti i clienti)
  btnPulisci.addEventListener("click", () => {
    clients.length = 0; // Pulisce l'array dei clienti
    renderClients(); // Rende di nuovo la lista vuota
  });

  // Aggiunge il contenitore per la paginazione alla lista dei clienti
  const paginationContainer = document.createElement("div");
  paginationContainer.id = "pagination";
  clientList.parentNode.appendChild(paginationContainer);
});
