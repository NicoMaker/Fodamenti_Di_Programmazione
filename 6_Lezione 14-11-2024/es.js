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