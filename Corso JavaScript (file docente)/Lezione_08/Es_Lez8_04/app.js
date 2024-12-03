// Variabili globali per il calendario e appuntamenti
let currentMonth = new Date().getMonth(); // Mese corrente (0-11)
let currentYear = new Date().getFullYear(); // Anno corrente
let appointments = JSON.parse(localStorage.getItem('appointments')) || []; // Appuntamenti esistenti

const calendarDisplay = document.getElementById('calendarDisplay');
const monthDisplay = document.getElementById('monthDisplay');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const appointmentsForDay = document.getElementById('appointmentsForDay');
const appointmentForm = document.getElementById('appointmentForm');
const appointmentTitleInput = document.getElementById('appointmentTitle');
const appointmentDateInput = document.getElementById('appointmentDate');

// Funzione per formattare il mese e l'anno
function formatMonthYear(month, year) {
    const months = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
	];
    return `${months[month]} ${year}`;
}

// Funzione per renderizzare il calendario
function renderCalendar() {
    calendarDisplay.innerHTML = ''; // Resetta la visualizzazione
    monthDisplay.textContent = formatMonthYear(currentMonth, currentYear); // Mostra il mese e anno
	
    // Calcola il primo giorno del mese e il numero di giorni del mese
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay(); // Giorno della settimana del primo giorno del mese
	
    // Aggiungi giorni vuoti all'inizio del mese per allineare il primo giorno correttamente
    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        calendarDisplay.appendChild(emptyDay);
	}
	
    // Aggiungi i giorni del mese
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.textContent = day;
        dayDiv.addEventListener('click', () => showAppointmentsForDay(day));
        calendarDisplay.appendChild(dayDiv);
	}
}

// Funzione per mostrare gli appuntamenti per un giorno selezionato
function showAppointmentsForDay(day) {
    const dayAppointments = appointments.filter(app => {
        const appointmentDate = new Date(app.date);
        return appointmentDate.getDate() === day &&
		appointmentDate.getMonth() === currentMonth &&
		appointmentDate.getFullYear() === currentYear;
	});
	
    appointmentsForDay.innerHTML = `<h3>Appuntamenti per il ${day}</h3>`;
	
    if (dayAppointments.length === 0) {
        appointmentsForDay.innerHTML += '<p>Non ci sono appuntamenti per questo giorno.</p>';
		} else {
        const list = document.createElement('ul');
        dayAppointments.forEach((app, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${app.title} - ${new Date(app.date).toLocaleTimeString()}`;
            
            // Pulsante per modificare l'appuntamento
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Modifica';
            editBtn.classList.add('edit');
            editBtn.addEventListener('click', () => editAppointment(index));
			
            // Pulsante per eliminare l'appuntamento
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Elimina';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => deleteAppointment(index));
			
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
            list.appendChild(listItem);
		});
        appointmentsForDay.appendChild(list);
	}
}

// Funzione per aggiungere un appuntamento
function addAppointment(title, date) {
    appointments.push({ title, date });
    localStorage.setItem('appointments', JSON.stringify(appointments));
    renderCalendar(); // Rende di nuovo il calendario
}

// Funzione per modificare un appuntamento
function editAppointment(index) {
    const appointment = appointments[index];
    const newTitle = prompt('Modifica il titolo dell\'appuntamento', appointment.title);
    const newTime = prompt('Modifica l\'orario dell\'appuntamento (HH:mm)', new Date(appointment.date).toLocaleTimeString().slice(0, 5));
	
    if (newTitle && newTime) {
        appointment.title = newTitle;
        const [hours, minutes] = newTime.split(':').map(num => parseInt(num, 10));
        appointment.date.setHours(hours, minutes);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        renderCalendar(); // Rende di nuovo il calendario
	}
}

// Funzione per cancellare un appuntamento
function deleteAppointment(index) {
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    renderCalendar(); // Rende di nuovo il calendario
}

// Funzione per inviare notifiche per eventi imminenti
function checkUpcomingAppointments() {
    const now = new Date();
    appointments.forEach(app => {
        const appointmentTime = new Date(app.date);
        const timeDifference = appointmentTime - now;
        if (timeDifference <= 5 * 60 * 1000) { // 5 minuti prima
            sendNotification(`Appuntamento in arrivo: ${app.title}`, `L'appuntamento si terrà alle ${appointmentTime.toLocaleTimeString()}`);
		}
	});
}

// Funzione per inviare una notifica
function sendNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body });
	}
}

// Aggiungere un appuntamento tramite il modulo
appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = appointmentTitleInput.value;
    const date = new Date(appointmentDateInput.value);
    
    if (title && date) {
        addAppointment(title, date);
	}
    
    // Pulisci il modulo
    appointmentTitleInput.value = '';
    appointmentDateInput.value = '';
});

// Aggiungi eventi ai bottoni per la navigazione tra i mesi
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
	}
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
	}
    renderCalendar();
});

// Inizializza il calendario
renderCalendar();

// Controllo delle notifiche ogni minuto
setInterval(checkUpcomingAppointments, 60 * 1000);
