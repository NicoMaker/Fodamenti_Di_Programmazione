// script.js
document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('item-input');
	const addButton = document.getElementById('add-button');
	const shoppingList = document.getElementById('shopping-list');
	
	// Aggiunge un articolo alla lista
	addButton.addEventListener('click', () => {
		const itemText = input.value.trim();
		if (itemText !== '') {
			const listItem = createListItem(itemText);
			shoppingList.appendChild(listItem);
			input.value = ''; // Resetta il campo di input
			} else {
			alert('Per favore, inserisci un articolo!');
		}
	});
	
	// Crea un elemento della lista
	function createListItem(text) {
		const li = document.createElement('li');
		li.textContent = text;
		
		const removeButton = document.createElement('button');
		removeButton.textContent = 'Rimuovi';
		removeButton.className = 'remove-btn';
		removeButton.addEventListener('click', () => li.remove());
		
		li.appendChild(removeButton);
		return li;
	}
});
