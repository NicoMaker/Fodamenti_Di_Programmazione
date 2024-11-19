let table = document.getElementById("Table"),
  stampa = document.getElementById("stampa"),
  creaIntestazioneTabella = () =>
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

function creaRigheTabella(elementi) {
  let sommaio = 0,
    sommagruppo = 0;

  elementi.forEach((elemento, i) => {
    const diffIO = Math.abs(elemento.posizione_IO - i),
      diffGruppo = Math.abs(elemento.posizione_Gruppo - i);

    sommaio += diffIO;
    sommagruppo += diffGruppo;

    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${elemento.nome}</td>
        <td>${elemento.posizione_IO + 1}</td>
        <td>${diffIO}</td>
        <td>${elemento.posizione_Gruppo + 1}</td>
        <td>${diffGruppo}</td>
      </tr>
    `;
  });

  return { sommaio, sommagruppo };
}
enza;
function aggiornaMessaggioSopravvivenza(sommaio, sommagruppo) {
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
  fetch("elementi.json")
    .then((response) => response.json())
    .then((elementi) => {
      creaIntestazioneTabella();
      const { sommaio, sommagruppo } = creaRigheTabella(elementi);
      aggiornaMessaggioSopravvivenza(sommaio, sommagruppo);
    })
    .catch((error) => console.error("Errore nel caricamento del JSON:", error));
}

eseguiProgramma();