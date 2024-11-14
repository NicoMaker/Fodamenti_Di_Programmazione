# JS

esempio esercizio delle tabelline con le righe in questo modo stampa tutte le moltiplicazioni dei risultati

```JS
function es1() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) console.log(i * j);
  }
}

const es1arrow = () => {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) console.log(i * j);
  }
};

let segno = {
  nome: "Prova",
  Inizio: new Date.now(),
  fine: new Date.now() * Date.now(),
};

console.log(
  `il segno ${segno.nome} inizia nel secondo ${segno.Inizio} e finisce al secondo ${segno.fine} calcolo dal 1 gennaio del 1970`
);
```

Esempio classe bici con costruttore dove dichari i vari valori che devo assumere quando dicharo l'oggetto (istanza) della classe interessata

```JS
class Bicicletta {
  // Proprietà del telaio
  telaio;
  materialeTelaio;
  misuraTelaio;

  // Proprietà del manubrio
  manubrio;
  tipoManubrio;
  impugnature;

  // Proprietà delle ruote
  ruote;
  misuraRuote;
  tipoRuote;
  numeroRaggi;

  // Proprietà della trasmissione
  catena;
  cambio;
  deragliatore;
  pedivella;
  pedali;

  // Proprietà dei freni
  freni;
  tipoFreni;

  // Proprietà della sella
  sella;
  altezzaSella;
  materialeSella;

  // Costruttore per inizializzare le proprietà della bicicletta
  constructor(
    telaio,
    materialeTelaio,
    misuraTelaio,
    manubrio,
    tipoManubrio,
    impugnature,
    ruote,
    misuraRuote,
    tipoRuote,
    numeroRaggi,
    catena,
    cambio,
    deragliatore,
    pedivella,
    pedali,
    freni,
    tipoFreni,
    sella,
    altezzaSella,
    materialeSella
  ) {
    this.telaio = telaio;
    this.materialeTelaio = materialeTelaio;
    this.misuraTelaio = misuraTelaio;

    this.manubrio = manubrio;
    this.tipoManubrio = tipoManubrio;
    this.impugnature = impugnature;

    this.ruote = ruote;
    this.misuraRuote = misuraRuote;
    this.tipoRuote = tipoRuote;
    this.numeroRaggi = numeroRaggi;

    this.catena = catena;
    this.cambio = cambio;
    this.deragliatore = deragliatore;
    this.pedivella = pedivella;
    this.pedali = pedali;

    this.freni = freni;
    this.tipoFreni = tipoFreni;

    this.sella = sella;
    this.altezzaSella = altezzaSella;
    this.materialeSella = materialeSella;
  }
}

// Esempio di creazione di un'istanza di Bicicletta
const miaBicicletta = new Bicicletta(
  "Telaio in alluminio",
  "alluminio",
  "M",
  "Manubrio da corsa",
  "drop",
  "gomma",
  2,
  "700C",
  "strada",
  32,
  "catena Shimano",
  "cambio Shimano 2 velocità davanti e 10 dietro totale 20",
  "deragliatore Shimano",
  "pedivella",
  "pedali standard",
  "freni a disco",
  "idraulico",
  "sella imbottita",
  "regolabile",
  "pelle sintetica"
);

console.log(miaBicicletta);

```
