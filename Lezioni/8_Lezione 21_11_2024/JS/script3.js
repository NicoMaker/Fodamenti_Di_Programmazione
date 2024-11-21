// Variabili globali per il calendario e appuntamenti
let currentMonth = new Date ().getMonth (); // Mese corrente (0-11)
let currentYear = new Date ().getFullYear (); //Anno corrente
let appointments = JSON.parse (localStorage.getItem ('appointments')) || [] Appuntamentiesistenti;

const calendarDisplay = document.getElementById ('calendarDisplay');
const monthDisplay = document.getElementById ('monthDisplay');
const prevMonthBtn = document.getElementById ('prevMonthBtn');
const nextMonthBtn = document.getElementById ('nextMonthBtn');
const appointmentsForDay = document.getElementById ('appointmentsForDay');
const appointmentForm = document.getElementById ('appointmentForm');
const appointmentTitleInput = document.getElementById ('appointmentTitle');
const appointmentDateInput = document.getElementById ('appointmentDate');

// Funzione per formattarwe il mese e l'anno
function formatMonthYear (month, year) {
    const months = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", 
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];
    return `${months[month]}$(year)`;
}

// Funzione per renderizzare il calendario
    functionrenderCalendar () {
        calendarDisplay.innerHTML =''; //Resetta la visualizzazione
        monthDisplay.textContent = formatMonthYear (currentMonth, currentYear); // Mostra il mese e anno
// Calcola il primo giorno del mese e i numeri di giorni del mese
const firstDay = NewDate (currentYear, currentMonth, 1);
const lastDay = newDate (currentYear, currentMonth +1.0);
const daysInMonth = lastDay.getDate ();
const startDay = firstDay.getDay (); // Giorno della settimana del primo giorno del mese

// Aggiungi giorni vuoti all'inizio del mese per allineare il primo giorno correttamente
for (let i =0; i< startDay; i++) {
    const emptyDay = document.createElement (div);
    calendarDisplay.appendChild (emptyDay);
    }
// Aggiungi i giorni del mese
for (let day = 1; day <=daysInMonth; day++) {
    const dayDiv = document.createElement (div);
    dayDiv.classList.add ('calendar-day');
    dayDiv.textContent = day;
    dayDiv.addEventListener ('click', () => showAppointmentsForDay(day));
    calendarDisplay.appendChild (dayDiv);
}
}

// Funzione per mostrare gli appuntamenti per un giorno selezionato
function showAppointmentsForDay (day) {
    const dayAppointments = appointments.filter (app => {
        const appointmentDate = new Date (app.date);
        return appointmentDate.getDate () === day &&
            appointmentDate.getMonth () === currentMonth &&
            appointmentDate.getFullYear () === currentYear;});4

            if (dayAppointments.lenght === 0) {
              appointmentsForDay.innerHTML += '<p>Non ci sono appuntamenti per questo giorno.</p>';
             else{
          
             }
}

appointmentsForDay.innerHTML = <h3>Appuntamenti per il $(day)</h3>;


appointmentsForDay.innerHTML = <h3>Appuntamenti per il $(day)</h3>;

if (dayAppointments.lenght === 0) {
    appointmentsForDay.innerHTML += '<p>Non ci sono appuntamenti per questo giorno.</p>';
            }else {
    const list = document.createElement ('ul'):
    dayAppointments.forEach (app, index) => {
        const listItem = document.createElement ('li');
        listItem.textContent =$(app.title)- ${new Date (app.date).toLocaleTimeString()};
    // Pulsante per modificare l'appuntamento
    const editBtn = document.createElement ('button');
    editBtn.textContent = 'Modifica';
    editBtn.classList.add ('edit');
    editBtn.addEventListener ('click', () => editAppointment(index));
    }
}
}