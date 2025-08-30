let visor = document.getElementById("display");

// O TEXT CONTENT É A MESMA COISA DO GET.ELEMENTBYID, POREM
// PRO CONTEXTO DA CALCULADORA É MELHOR E É MAIS PRATICO DE ESCREVER.

// USE SEMPRE O PRINCIO DE CLEAN CODE, OU SEJA, CRIE FUNCÇÕES QUE
// SEMPRE SE AUTO EXPLIQUEM, PARA NÃO HAVER NECESSIDADE DE COMENTARIOS;

function adicionarValor(valor) {
  // O && OBRIGA QUE O VISOR SE FOR IGUAL A 0 E DIFERENTE DE "."
  // EXECULTE A FUNÇÃO, OU SEJA, AMBAS TEM QUE SE SATISFAZEREM PRA FUNCIONAR
  // SE UMA NAO ATENDER, ELE NÃO ENTRA NA CONDIÇÃO E PASSA DIRETO.

  // JA O || SIGNIFICA QUE SOMENTE UMA DELA PRECISA SATISFAZER, SE UMA OU OUTRA
  // SATISFAZER, JA É SUFICIENTE PARA ENTRAR NA CONDIÇÃO

  // IF e ELSE é o SE e SENÃO, se atender o que ta dentro do ( ) execulta a função X
  // senão execulta função Y.
  if (visor.textContent === "0" && valor !== ".") {
    visor.textContent = valor;
  } else {
    visor.textContent += valor;
  }
}

function limparVisor() {
  visor.textContent = "0";
}

function deletarUltimoNumero() {
  // o SLICE APAGA ITENS DESTE OBJETO, O ZERO DETEMINA DA ONDE O QUE SERÁ
  // APAGADO VAI COMEÇAR, E -1, DETERMINA QUANTAS CASAS ELE VAI APAGAR DE UMA VEZ
  // POR EXEMPLO (2, -5), NESTE CASO ELE VAI COMEÇAR APAGAR A PARTIR DA SEGUNDA CASA
  // E 5 NUMEROS DE UMA SÓ VEZ.
  visor.textContent = visor.textContent.slice(0, -1) || 0;
}

function calcular() {
  // TRY e CATCH ele siginifica que vai tentar execultar o que voce pediu TRY = TENTAR
  // caso ele nao consiga ele retorna CATCH, que normalmente colocamos mensagem de erro.
  try {
    visor.textContent = eval(visor.textContent);
  } catch {
    visor.textContent = "Erro";
  }
}

// TESTE E VEJA TUDO QUE PODE DAR ERRADO E CONCERTE
