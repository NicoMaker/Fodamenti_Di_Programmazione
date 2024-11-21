// Variabili globali per il calendario e appuntamenti
let currentMonth = new Date().getMonth(); // Mese corrente (0-11)
let currentYear = new Date().getFullYear(); // Anno corrente
let appointments = JSON.parse(localStorage.getItem("appointments")) || []; // Appuntamenti esistenti

const calendarDisplay = document.getElementById("calendarDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const appointmentsForDay = document.getElementById("appointmentsForDay");
const appointmentForm = document.getElementById("appointmentForm");
const appointmentTitleInput = document.getElementById("appointmentTitle");
const appointmentDateInput = document.getElementById("appointmentDate");

// Funzione per formattare il mese e l'anno
function formatMonthYear(month, year) {
  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  return `${months[month]} ${year}`;
}

// Funzione per renderizzare il calendario
function renderCalendar() {
  calendarDisplay.innerHTML = ""; // Resetta la visualizzazione
  monthDisplay.textContent = formatMonthYear(currentMonth, currentYear); // Mostra il mese e anno

  // Calcola il primo giorno del mese e il numero di giorni nel mese
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Crea gli spazi vuoti per i giorni prima dell'inizio del mese
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("empty-day");
    calendarDisplay.appendChild(emptyCell);
  }

  // Aggiunge i giorni del mese
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;

    // Aggiunge un evento per cliccare su un giorno
    dayCell.addEventListener("click", () => showAppointmentsForDay(day));

    calendarDisplay.appendChild(dayCell);
  }
}

// Funzione per mostrare gli appuntamenti di un giorno specifico
function showAppointmentsForDay(day) {
  appointmentsForDay.innerHTML = "";
  const selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(
    2,
    "0"
  )}-${String(day).padStart(2, "0")}`;
  const dailyAppointments = appointments.filter(
    (app) => app.date === selectedDate
  );

  if (dailyAppointments.length === 0) {
    appointmentsForDay.textContent = "Nessun appuntamento.";
  } else {
    dailyAppointments.forEach((app) => {
      const appointmentItem = document.createElement("div");
      appointmentItem.textContent = app.title;
      appointmentsForDay.appendChild(appointmentItem);
    });
  }
}

// Funzione per aggiungere un nuovo appuntamento
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newAppointment = {
    title: appointmentTitleInput.value,
    date: appointmentDateInput.value,
  };
  appointments.push(newAppointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  appointmentForm.reset();
  renderCalendar();
  alert("Appuntamento aggiunto con successo!");
});

// Event listeners per navigare tra i mesi
prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Inizializza il calendario
renderCalendar();
