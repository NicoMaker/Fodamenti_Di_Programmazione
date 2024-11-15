let table = document.getElementById("Table"),
  stampa = document.getElementById("stampa"),
  sommaio = 0,
  sommagruppo = 0;

fetch("elementi.json")
  .then((response) => response.json())
  .then((elementi) => {
    table.innerHTML += `
      <tr>
        <th>Numero Elemento</th>
        <th>Elemento</th>
        <th>Posizione IO</th>
        <th>Differenza IO</th>
        <th>Posizione Gruppo</th>
        <th>Differenza Gruppo</th>
      </tr>
    `;

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

    if (sommaio > 39)
      stampa.innerHTML = `Da solo non sei sopravvissuto avendo il punteggio di ${sommaio}`;
    else
      stampa.innerHTML = `Da solo sei sopravvissuto avendo il punteggio di ${sommaio}`;

    if (sommagruppo > 39)
      stampa.innerHTML += `
        <br />
        In gruppo non sei sopravvissuto avendo il punteggio di ${sommagruppo}
      `;
    else
      stampa.innerHTML += `
        <br />
        In gruppo sei sopravvissuto avendo il punteggio di ${sommagruppo}
      `;
  })
  .catch((error) => console.error("Errore nel caricamento del JSON:", error));
