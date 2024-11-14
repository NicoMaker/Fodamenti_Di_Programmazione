function nuovafunzione(parametro1, parametro2) {
  return risultato;
}
const nuovafunzionearrow = (parametro1, parametro2) => risultato,
  sommaarrow = (a, b) => a + b;
4;

function somma(a, b) {
  return a + b;
}

let risultato = somma(5, 3);
console.log(risultato);

let risultato2 = sommaarrow(10, 5);
console.log(risultato2);

console.log(sommaarrow(50, 40));
console.log(somma(500, 40));

const moltplica = function (x, y) {
    return x * y;
  },
  moltplica2 = (x, y) => x * y,
  sottrai = (a, b) => a - b;

let nome = "prova";

function saluta() {
  console.log(`Ciao ${nome}`);
}
const salutaarrow = () => console.log(`Ciao ${nome}`);

function mosramessaggio() {
  let messaggio = "Hello world";
  console.log(messaggio);
}

const mostramessaggioarrow = () => console.log(`Hello World`),
  mostramessaggioarrow2 = () => {
    let messaggio = "Hello world";
    console.log(messaggio);
  };
