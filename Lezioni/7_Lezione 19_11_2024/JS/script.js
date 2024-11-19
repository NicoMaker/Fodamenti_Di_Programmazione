const btnaggiungi = document.getElementById("aggiungi"),
  listaarticoli = document.getElementById("articoli"),
  titoloinput = document.getElementById("titolo"),
  descrizioneinput = document.getElementById("descrizione");

function aggiungiArticolo() {
  const titolo = titoloinput.value.trim(),
    descrizione = descrizioneinput.value.trim();

  if (titolo === "" || descrizione === "") {
    alert("Titolo e descrizione non possono essere vuoti");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("articoli");

  li.innerHTML = `
    <div>
        <h3>${titolo}</h3>
        <p>${descrizione}</p>
    </div>
    <div>
        <button class="edit">Modifica</button>
        <button class="delete">Rimuovi</button>
    </div>
  `;

  listaarticoli.appendChild(li);

  li.querySelector(".edit").addEventListener("click", () =>
    modificaArticolo(li, titolo, descrizione)
  );

  li.querySelector(".delete").addEventListener("click", () =>
    rimuoviArticolo(li)
  );

  titoloinput.value = "";
  descrizioneinput.value = "";
}

function modificaArticolo(li, titolo, descrizione) {
  titoloinput.value = titolo;
  descrizioneinput.value = descrizione;

  rimuoviArticolo(li);
}

const rimuoviArticolo = (li) => listaarticoli.removeChild(li);

btnaggiungi.addEventListener("click", aggiungiArticolo);

titoloinput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") aggiungiArticolo();
});
