// string com aspas duplas
let nome = "Yuri";

// string com aspas simples
let sobrenome = "Pinheiro";

// numerais (tipo Number)
let idade = 22;

// logicos (tipo booelan)
let temAcesso = true;
let eBonito = false;

// pra template string funcionar voce precisa necessariamente colocar crase ao inves de aspas
let templateStringErrado = "eu sou o ${nome} ${sobrenome} e tenho ${idade}";
let templateStringCerto = `eu sou o  ${nome} ${sobrenome} e tenho ${idade} anos de idade`;

// retorna undefined, pois ele nao sabe que valor tem essa variavel
// ou seja, se voce colcoar algum valor em algum lugar e o javascript nao encontrar ele irá retornar undefined
let naosei;

// aqui é o bigInt, numero muuuuito grandes, pra isso sempre no fim coloque n
let numeroGrande = 165156189619165189198491894919819n;

// aqui ele retorna null que equivale a um numero ou string vazia;
let numeroNulo = null;

// criamos um objeto chamado usuario que terá todas as informações da Maria Eduarda
let usuario = {
  nome: "Maria",
  sobrenome: "Eduarda Santos",
  telefone: "69 999528742",
  idade: 25,
  temFaculdade: false,
  temPosGraduacao: false,
  email: "mariadudasantos2025@hotmail.com",
};

// aqui vemos pra que serve o booelano
let faculdadeTexto;

// com o booleano podemos fazer uma condição (if, else) que neste caso
// valida que se a maria tiver faculdade (if) será mostrado o texto possuo faculdade
// porem se nao tiver (else) ele mostrará o texto Não possuo faculdade
if (usuario.temFaculdade === true) {
  faculdadeTexto = "possuo faculdade";
} else {
  faculdadeTexto = "não possuo faculdade";
}

// aqui criamos a variavel que resevará frase que vai ser mostrada, inclusive com a condição acima.
let apresentacaoUsuario = `Olá, eu sou a ${usuario.nome} ${usuario.sobrenome}, tenho ${usuario.idade} anos de idade e ${faculdadeTexto}`;

// aqui pegamos o telefone da duda dentro do objeto usuário.
// chamo o nome do objeto e com . (ponto) eu chamo o valor que quero ver
let tefoneDuda = usuario.telefone;

// aqui imprimimos as informaões na tela
document.getElementById("nome").innerHTML = "nome: " + nome;

document.getElementById("sobrenome").innerHTML = "sobrenome: " + sobrenome;

document.getElementById("idade").innerHTML = "idade: " + idade;

document.getElementById("temAcesso").innerHTML = "temAcesso: " + temAcesso;

document.getElementById("eBonito").innerHTML = "é Bonito: " + eBonito;

document.getElementById("naosei").innerHTML = "Não sei: " + naosei;

document.getElementById("eBonito").innerHTML = "é Bonito: " + eBonito;

document.getElementById("templateStringErrado").innerHTML =
  "Template String feito sem crase: " + templateStringErrado;

document.getElementById("templateStringCerto").innerHTML =
  "Template String feito com crase (forma correta): " + templateStringCerto;

document.getElementById("numeroGrande").innerHTML =
  "Numero Grande (bigInt): " + numeroGrande;

document.getElementById("numeroNulo").innerHTML =
  "Numero Nulo (vazio): " + numeroNulo;

document.getElementById("usuario").innerHTML = "Objeto Usuário: " + usuario;

document.getElementById("apresentacaoUsuario").innerHTML =
  "Acessando o objeto usuário e trazendo as informações: " + apresentacaoUsuario;

document.getElementById("tefoneDuda").innerHTML =
  "Trazendo o telefone de dentro do objeto usuario " + tefoneDuda;
