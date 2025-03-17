function exibir() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = document.getElementById("num2").value;
  document.getElementById("resultado1").innerHTML += num1 + +num2;
}
function somarInputHTML(input1, input2) {
  let soma = +input1.value + +input2.value;
  document.getElementById("resultado2").value = soma;
}
function somar(num1, num2) {
  let soma = +num1 + +num2;
  //let soma2 = parseInt(num1, 10) + parseInt(num2, 10);
  alert("Soma: " + soma);
}
/* 
let = declaração de variavel local
var = declaração de variavel global
*/
