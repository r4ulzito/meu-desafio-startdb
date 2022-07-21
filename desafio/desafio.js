const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca("abacaxi");

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n");
  jogo.chutar(chute);
  console.clear(); // <-- Fiz essa alteração para melhorar a visualização durante o jogo
  console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado() + "!");
