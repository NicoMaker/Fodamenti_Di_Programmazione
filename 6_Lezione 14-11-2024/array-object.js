let frutti = ["mela", "banana", "pera"];

frutti.push("anguria"); // aggiunge elemento
frutti.pop(); // rimuovi ultimo

console.log(frutti[1]); // leggi 2 elemento array
console.log(frutti.length); // elementi array

frutti.splice(2, 1); // elimina il 3 elemento con uno altreimenti se fosse 2 dopo eliminerebbe il 3 e il 4

// oggetto
let persona = {
  nome: "Luca",
  età: 30,
  saluta: function () {
    console.log(`Ciao , sono ${this.name}`);
  },
  salutaarrow: () => console.log(`Ciao , sono ${persona.nome}`),
};

// stampa righe oggetto
console.log(persona.nome);
console.log(persona.età);
persona.saluta();
persona.salutaarrow();

let personaoggetti = [
  {
    nome: "io",
    età: 20,
  },
  {
    nome: "io2",
    età: 17,
  },
  {
    nome: "io3",
    età: 19,
  },
];

personaoggetti.forEach((persona) => {
  if (persona.età >= 18) console.log(`${persona.nome} è maggiorenne`);
});

personaoggetti.forEach((persona) => console.log(`${persona.nome}`));
