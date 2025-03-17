var nome = window.prompt("Entre com o seu nome:");
alert("Bem-vindo, " + nome);

function exibir() {
  var n1 = window.prompt("Informe o Número 1:");
  var n2 = window.prompt("Informe o Número 2:");
  alert('Resposta: ' + soma(n1, n2));
}
function soma(n1, n2) {
  return +n1 + +n2;
}
/*
  alert("Teste saida 1");
  document.write("Teste saida 2");
  document.getElementById("exemplo").innerHTML = "<br><h2>Teste<h2>";
*/