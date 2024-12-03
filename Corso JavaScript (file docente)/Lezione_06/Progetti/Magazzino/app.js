// app.js
// Array per mantenere gli articoli in magazzino
let items = [];

// Funzione per aggiornare la lista HTML degli articoli
function updateItemList() {
    const itemList = document.getElementById("itemList");
    const totalQuantityElement = document.getElementById("totalQuantity");
	
    itemList.innerHTML = ''; // Svuota la lista
	
    let totalQuantity = 0;
	
    // Popola la lista e calcola la quantità totale
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Quantità: ${item.quantity}`;
        
        // Pulsante di rimozione
        const removeButton = document.createElement("button");
        removeButton.textContent = "Rimuovi";
        removeButton.addEventListener("click", () => removeItem(index));
        
        li.appendChild(removeButton);
        itemList.appendChild(li);
        
        totalQuantity += item.quantity;
	});
	
    // Aggiorna la quantità totale
    totalQuantityElement.textContent = `Quantità totale: ${totalQuantity}`;
}

// Funzione per aggiungere un nuovo articolo
function addItem(event) {
    event.preventDefault();
    
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);
	
    // Creazione di un oggetto per l'articolo
    const item = {
        name: itemName,
        quantity: itemQuantity
	};
	
    // Aggiunta dell'articolo all'array
    items.push(item);
	
    // Pulisce il form
    document.getElementById("itemForm").reset();
	
    // Aggiorna la lista visualizzata
    updateItemList();
}

// Funzione per rimuovere un articolo
function removeItem(index) {
    items.splice(index, 1); // Rimuove l'elemento dall'array
    updateItemList();       // Aggiorna la lista visualizzata
}

// Gestore di evento per il form di inserimento
document.getElementById("itemForm").addEventListener("submit", addItem);
