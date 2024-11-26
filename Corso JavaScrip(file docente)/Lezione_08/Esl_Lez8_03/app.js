// Riferimenti agli elementi del DOM
const loadUsersBtn = document.getElementById('loadUsersBtn');
const userList = document.getElementById('userList');

// Funzione per ottenere dati da un'API esterna
function fetchUsers() {
    // Utilizziamo Fetch API per recuperare i dati
    return fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		if (!response.ok) {
			throw new Error(`Errore: ${response.status} ${response.statusText}`);
		}
		return response.json(); // Restituisce una Promise che risolve i dati in formato JSON
	});
}

// Funzione per visualizzare gli utenti nella pagina
function displayUsers(users) {
    userList.innerHTML = ''; // Svuota la lista prima di aggiungere nuovi elementi
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
		<h3>${user.name}</h3>
		<p>Email: ${user.email}</p>
		<p>Telefono: ${user.phone}</p>
		<p>Azienda: ${user.company.name}</p>
        `;
        userList.appendChild(userDiv);
	});
}

// Funzione principale collegata al bottone
function loadUsers() {
    userList.innerHTML = '<p>Caricamento in corso...</p>';
    fetchUsers()
	.then(users => {
		displayUsers(users); // Mostra gli utenti recuperati
	})
	.catch(error => {
		userList.innerHTML = `<p style="color: red;">Errore durante il caricamento: ${error.message}</p>`;
	});
}

// Aggiungi il listener al bottone
loadUsersBtn.addEventListener('click', loadUsers);
