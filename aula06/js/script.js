function validarCPF() {
  let cpf = document.getElementById("cpf").value;
  let digitoCPF = cpf.substring(0, 9);
  let verificadorCPF = cpf.substring(9, 11);
  //  console.log(digitos(digitoCPF), 12);
  //  console.log(digitos(digitoCPF), 17);
  //  console.log(digitos(digitoCPF), 14);

  if (verificadorCPF === digitoCPF.substring(9, 11)) {
    alert("CPF Válido");
  } else {
    alert("CPF Inválido");
  }
}
/*
function digitos(digitoCPF, termino) {
  if (digitoCPF.length < 15) {
    let n = digitos(digitoCPF + digitoVerificador(digitoCPF), termino);
    return n;
  }
  return digitoCPF;
}
*/
function digitoVerificador(digitoCPF) {
  let cont = 0;
  let soma = 0;
  console.log(digitoCPF.length);
  for (var i = digitoCPF.length + 1; i > 1; i--) {
    soma += digitoCPF[cont] * i;
    cont++;
  }
  let resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}
