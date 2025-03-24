/*Adicionando o evento por meio de EventListener*/
var botao = document.getElementById("btn");
var limpa = document.getElementById("limpa");

botao.addEventListener("click", verificarCPF);
limpa.addEventListener("click", limpaInput);
//Máscara para o CPF
var cpfInput = document.getElementById("cpf");
var cpfOptions = {
  mask: "000.000.000-00",
};
var marcaraCPF = IMask(cpfInput, cpfOptions);

function calcularDigito(cpf, pesoInicial) {
  let soma = 0;
  for (let i = 0; i < cpf.length; i++) {
    soma += parseInt(cpf[i]) * (pesoInicial - i);
  }
  let resto = soma % 11;
  if (resto < 2) {
    return 0;
  } else {
    return 11 - resto;
  }
}
function verificarCPF() {
  var cpf = cpfInput.value;
  cpf = cpf.replace(/\D/g, "");
  var res = document.getElementById("res");
  res.innerHTML = "";

  if (cpf === "" || cpf.length < 11) {
    alert("Digite um CPF com 11 caracteres!");
    return;
  }
  if (/^(\d)\1{10}$/.test(cpf)) {
    res.innerHTML = "CPF Inválido! 😕👎";
    return;
  }
  let primeiroDigito = calcularDigito(cpf.slice(0, 9), 10);

  let segundoDigito = calcularDigito(cpf.slice(0, 10), 11);

  if (primeiroDigito == cpf[9] && segundoDigito == cpf[10]) {
    res.innerHTML = "CPF Válido! 😁👍";
  } else {
    res.innerHTML = "CPF Inválido! 😕👎";
  }
  cpfInput.focus();
}
function limpaInput() {
  cpfInput.value = "";
  cpfInput.focus();
  res.innerHTML = "";
}
