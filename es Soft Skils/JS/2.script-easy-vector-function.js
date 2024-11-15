const elementi = [
    "Specchio",
    "1 Litro d’Acqua",
    "Soprabito",
    "Impermeabile",
    "Paracadute",
    "Occhiali da sole",
    "Torcia Elettrica",
    "Coltello",
    "Pistola",
    "Garze",
    "Mappa",
    "Bussola",
    "Libro di Animali",
    "2 Litri di Vodka",
    "Pastigle di sale",
  ],
  posizione_IO = [7, 0, 6, 10, 12, 3, 11, 13, 8, 5, 1, 2, 9, 14, 4],
  posizione_Gruppo = [3, 0, 5, 10, 11, 12, 9, 8, 13, 8, 2, 1, 4, 7, 14],
  creaIntestazioneTabella = (table) =>
    (table.innerHTML += `
    <tr>
      <th>Numero Elemento</th>
      <th>Elemento</th>
      <th>Posizione IO</th>
      <th>Differenza IO</th>
      <th>Posizione Gruppo</th>
      <th>Differenza Gruppo</th>
    </tr>
  `);

function creaRigheTabella(table) {
  let sommaio = 0,
    sommagruppo = 0;

  for (let i = 0; i < elementi.length; i++) {
    const diffIO = Math.abs(posizione_IO[i] - i),
      diffGruppo = Math.abs(posizione_Gruppo[i] - i);

    sommaio += diffIO;
    sommagruppo += diffGruppo;

    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${elementi[i]}</td>
        <td>${posizione_IO[i] + 1}</td> 
        <td>${diffIO}</td>
        <td>${posizione_Gruppo[i] + 1}</td>
        <td>${diffGruppo}</td>
      </tr>
    `;
  }

  return { sommaio, sommagruppo };
}

function aggiornaMessaggioSopravvivenza(stampa, sommaio, sommagruppo) {
  let messaggio = "";

  if (sommaio > 39)
    messaggio += `Da solo non sei sopravvissuto avendo il punteggio di ${sommaio}`;
  else
    messaggio += `Da solo sei sopravvissuto avendo il punteggio di ${sommaio}`;

  if (sommagruppo > 39)
    messaggio += `<br />In gruppo non sei sopravvissuto avendo il punteggio di ${sommagruppo}`;
  else
    messaggio += `<br />In gruppo sei sopravvissuto avendo il punteggio di ${sommagruppo}`;

  stampa.innerHTML = messaggio;
}

function eseguiProgramma() {
  const table = document.getElementById("Table"),
    stampa = document.getElementById("stampa");

  creaIntestazioneTabella(table);
  const { sommaio, sommagruppo } = creaRigheTabella(table);
  aggiornaMessaggioSopravvivenza(stampa, sommaio, sommagruppo);
}

eseguiProgramma();
