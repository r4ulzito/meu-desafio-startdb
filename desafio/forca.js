//Váriaveis Globais
let letrasChutadas = [];
let vidasAtual = 6;
let palavraAtual = [];

class Forca {
  constructor(palavra) {
    this.palavra = palavra;
    this.palavra.split("").map(() => palavraAtual.push("_"));
  }

  chutar(letra) {
    const palavraArray = this.palavra.split("");

    if (letra.length > 1 || letrasChutadas.includes(letra)) {
      return null;
    } else if (palavraArray.includes(letra)) {
      palavraArray.map((item, index) => {
        if (letra === item) {
          palavraAtual[index] = letra;
        }
      });
    } else {
      vidasAtual -= 1;
    }

    letrasChutadas.push(letra);
  }

  buscarEstado() {
    return vidasAtual === 0
      ? "perdeu"
      : palavraAtual.includes("_")
      ? "aguardando chute"
      : "ganhou";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: letrasChutadas, // Deve conter todas as letras chutadas
      vidas: vidasAtual, // Quantidade de vidas restantes
      palavra: palavraAtual, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
