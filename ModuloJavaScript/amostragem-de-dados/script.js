// esse cara vai alterar o texto que foi referido no id dele,
// neste caso é um <p id="amostra" />
function mudarTextoComElementById() {
  document.getElementById("amostra").innerHTML =
    "✅ Texto alterado com getElementById!";
}

// ele vai criar um novo elemento e apagar todo o restante,
// ele existe mas está em desuso (deprecated), depreciado
function mudarTextoComDocumentWrite() {
  document.write(
    "⚠️ Texto alterado com document.write() - a página foi substituída."
  );
}

// ele criar um modal de alerta e trará a resposta pra voce dar um ok
function mudarTextoComAlert() {
  alert("✅ Texto exibido com alert!");
}

// funcao que calcula dois numeros e retorna o resultado
function calculaDoisNumeros() {
  let a = 20;
  let b = 12;
  let c = b + a;

  return c;
}

// essa função vai executar o calculaDoisNumeros, reservar os dados em
// let resultado e vamos poder ver em inpecionar documento na aba console
// pois estamos printando essa informação la

// ESSE É O MAIS USADO ENTRE OS DEVs, pois nao prejuca o site e conseguimos
// ver tudo o que nossa função está fazendo.
function mudaTextoComConsoleLog() {
  let resultado = calculaDoisNumeros();

  console.log("✅ Este é o resultado da função calcula 2 numeros", resultado);
}

// essa função vai imprimir a página inteira, ou seja, o que está
// visível no navegador, e o que não está visível também, como o cabeçalho
function imprimirPagina() {
  window.print();
}
