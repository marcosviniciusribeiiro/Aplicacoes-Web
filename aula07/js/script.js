function numero(num) {
  resultado = document.getElementById("resultado");
  let ultimoCaractere = resultado.value.slice(-1);
  let operacoes = ["+", "-", "*", "/", "^"];
  if (operacoes.includes(ultimoCaractere)) {
    let numAnterior = resultado.value.slice(0, -1);
    switch (ultimoCaractere) {
      case "+":
        resultado.value = +numAnterior + +num;
        break;
      case "-":
        resultado.value = +numAnterior - +num;
        break;
      case "*":
        resultado.value = +numAnterior * +num;
        break;
      case "/":
        resultado.value = +numAnterior / +num;
        break;
      case "^":
        resultado.value = Math.pow(numAnterior, num);
        break;
    }
  } else {
    resultado.value = num;
  }
}

function operacao(operacao) {
  let ultimoCaractere = resultado.value.slice(-1);
  let operacoes = ["+", "-", "*", "/", "^"];

  if (operacoes.includes(ultimoCaractere)) {
    return operacao;
  }
  resultado.value = resultado.value + operacao;
}
