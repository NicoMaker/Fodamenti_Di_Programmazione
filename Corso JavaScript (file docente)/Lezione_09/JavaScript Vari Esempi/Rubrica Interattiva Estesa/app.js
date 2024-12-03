const loadUsersBtn = document.getElementById('loadUsersBtn');
const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');
const userDetails = document.getElementById('userDetails');
const detailsContent = document.getElementById('detailsContent');
const editUserForm = document.getElementById('editUserForm');
const userEditForm = document.getElementById('userEditForm');
const backBtn = document.getElementById('backBtn');
const editUserBtn = document.getElementById('editUserBtn');
const deleteUserBtn = document.getElementById('deleteUserBtn');
const pagination = document.getElementById('pagination');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const cancelEditBtn = document.getElementById('cancelEditBtn');
let currentPage = 1;
const itemsPerPage = 3;

let users = [];
let currentUser = null;

function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json());
}

function displayUsers(userListToShow) {
    userList.innerHTML = '';
    userListToShow.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
        userDiv.addEventListener('click', () => showUserDetails(user));
        userList.appendChild(userDiv);
	});
}

function paginateUsers() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUsers = users.slice(start, end);
    displayUsers(paginatedUsers);
    updatePaginationControls();
}

function updatePaginationControls() {
    const totalPages = Math.ceil(users.length / itemsPerPage);
    pageInfo.textContent = `Pagina ${currentPage} di ${totalPages}`;
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
}

function showUserDetails(user) {
    currentUser = user;
    userDetails.classList.remove('hidden');
    detailsContent.innerHTML = `
	<h3>${user.name}</h3>
	<p>Email: ${user.email}</p>
	<p>Telefono: ${user.phone}</p>
    `;
}

function deleteUser() {
    users = users.filter(user => user.id !== currentUser.id);
    backToUserList();
    paginateUsers();
}

function editUser() {
    editUserForm.classList.remove('hidden');
    userDetails.classList.add('hidden');
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editPhone').value = currentUser.phone;
}

function saveUserEdit(event) {
    event.preventDefault();
    currentUser.name = document.getElementById('editName').value;
    currentUser.email = document.getElementById('editEmail').value;
    currentUser.phone = document.getElementById('editPhone').value;
    backToUserList();
    paginateUsers();
}

function backToUserList() {
    userDetails.classList.add('hidden');
    editUserForm.classList.add('hidden');
}

function loadUsers() {
    fetchUsers().then(fetchedUsers => {
        users = fetchedUsers;
        currentPage = 1;
        paginateUsers();
	});
}

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(term));
    displayUsers(filteredUsers);
});

userEditForm.addEventListener('submit', saveUserEdit);
cancelEditBtn.addEventListener('click', backToUserList);
deleteUserBtn.addEventListener('click', deleteUser);
editUserBtn.addEventListener('click', editUser);
prevPage.addEventListener('click', () => {
    currentPage--;
    paginateUsers();
});
nextPage.addEventListener('click', () => {
    currentPage++;
    paginateUsers();
});
loadUsersBtn.addEventListener('click', loadUsers);
