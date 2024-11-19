function primoesercizio() {
  let x = 5;
  x += 2;
  console.log(x);
}

function secondoesercizio() {
  let numero = 10;

  if (numero > 5) console.log("il numero è maggiore di 5");
  else console.log("il numero è 5 o minore");
}

function terzoesercizio() {
  for (let i = 0; i < 5; i++) console.log(`Intestazione numero ${i}`);
}

function quartoesercizio() {
  let i = 0;
  while (i < 5) {
    console.log(`Intestazione numero ${i}`);
    i++;
  }
}

function quintoesercizio() {
  let somma = 0;

  while (true) {
    let numero = prompt("inserisci un numero valido 0 non valido");
    numero = parseFloat(numero);

    if (numero === 0) break;

    if (somma > numero) somma += numero;
  }
}

const primoesercizioarrow = () => {
    let x = 5;
    x += 2;
    console.log(x);
  },
  secondoesercizioarrow = () => {
    let numero = 10;

    if (numero > 5) console.log("il numero è maggiore di 5");
    else console.log("il numero è 5 o minore");
  },
  terzoesercizioarrow = () => {
    for (let i = 0; i < 5; i++) console.log(`Intestazione numero ${i}`);
  },
  quartoesercizioarrow = () => {
    let i = 0;
    while (i < 5) {
      console.log(`Intestazione numero ${i}`);
      i++;
    }
  },
  quintoesercizioarrow = () => {
    let somma = 0;

    while (true) {
      let numero = prompt("inserisci un numero valido 0 non valido");
      numero = parseFloat(numero);

      if (numero === 0) break;

      if (somma > numero) somma += numero;
    }
  };
