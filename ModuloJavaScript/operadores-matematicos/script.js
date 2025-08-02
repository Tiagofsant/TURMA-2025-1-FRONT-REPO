function execultarCalculosMatematicos() {
  // aqui eu adiciono o 2 numa variavel para eu nao ficar repetindo o numero 2 mais de uma vez
  let valor = 2;

  // essas variaveis vao guardar os resultados dos calculos
  let resultadoSoma = 50 + 70;
  let resultadoSubracao = 80 - 20;
  let resultadoMultiplicacao = 50 * 8;
  let resultadoDivisao = 120 / 10;
  let resultadoRestoDivisao = 120 % 11;

  let resultadoIncremento = ++valor;
  let resultadoDecremento = --valor;

  //   aqui eu estou pegando o resultado dessas variaveis que são (400 - 120) / 3 e fazendo o calculo
  //   e a resenvando o resultado na variavel resultadoCalculoVariaveis
  let resultadoCalculoVariaveis =
    (resultadoMultiplicacao - resultadoSoma) / resultadoIncremento;

  // e mostrarão aqui no nosso html
  // neste caso eu estou mapeando onde esses resultados devem ser mostrados a partir do seu
  // respectivo id, como soma, subtração e assim por diante.

  //PS:. os ids devem ser iguais estão escritos nas tags do html, se não eles não o acharão.
  document.getElementById("soma").innerHTML =
    "recebi o valor de soma: " + resultadoSoma;

  document.getElementById("subtracao").innerHTML =
    "recebi o valor de subtração: " + resultadoSubracao;

  document.getElementById("mutiplicacao").innerHTML =
    "recebi o valor de mutiplicação: " + resultadoMultiplicacao;

  document.getElementById("divisao").innerHTML =
    "recebi o valor de divisão: " + resultadoDivisao;

  document.getElementById("modulo").innerHTML =
    "recebi o valor de resto da divisão: " + resultadoRestoDivisao;

  document.getElementById("incremento").innerHTML =
    "recebi o valor de incremento: " + resultadoIncremento;

  document.getElementById("decremento").innerHTML =
    "recebi o valor de decremento: " + resultadoDecremento;

  document.getElementById("calculoDeVariaveis").innerHTML =
    "recebi o valor dos calculos das variáveis: " + resultadoCalculoVariaveis;
}
