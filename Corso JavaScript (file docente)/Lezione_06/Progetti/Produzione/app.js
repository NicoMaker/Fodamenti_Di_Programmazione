// app.js
// Inizializzazione array per memorizzare produzione giornaliera
let productionData = [];

// Funzione per aggiungere la produzione del giorno
function addDailyProduction(event) {
    event.preventDefault();
	
    const dailyProduction = parseInt(document.getElementById("dailyProduction").value);
	
    // Aggiunge la produzione giornaliera all’array
    productionData.push(dailyProduction);
	
    document.getElementById("productionForm").reset();
	
    // Aggiorna il totale della produzione
    updateTotalProduction();
	
    // Rende visibile il grafico
    renderChart();
}

// Funzione per aggiornare la produzione totale
function updateTotalProduction() {
    const total = productionData.reduce((acc, val) => acc + val, 0);
    document.getElementById("totalProduction").textContent = `Produzione totale: ${total}`;
}

// Funzione per disegnare il grafico a barre
function renderChart() {
    const ctx = document.getElementById("productionChart").getContext("2d");
	
    // Se il grafico esiste già, lo distruggiamo per rimuoverlo e crearne uno nuovo
    if (window.chart) {
        window.chart.destroy();
	}
	
    // Crea un nuovo grafico a barre
    window.chart = new Chart(ctx, {
        type: 'bar', // Tipo di grafico
        data: {
            labels: productionData.map((_, index) => `Giorno ${index + 1}`), // Etichette per i giorni
            datasets: [{
                label: 'Produzione Giornaliera',
                data: productionData, // I dati della produzione
                backgroundColor: '#4CAF50', // Colore delle barre
                borderColor: '#388E3C', // Colore del bordo delle barre
                borderWidth: 1
			}]
		},
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true, // Assicura che l'asse Y inizi da 0
                    ticks: {
                        stepSize: 1 // Incremento dei valori sull'asse Y
					}
				}
			}
		}
	});
}

// Evento di submit per il form
document.getElementById("productionForm").addEventListener("submit", addDailyProduction);
