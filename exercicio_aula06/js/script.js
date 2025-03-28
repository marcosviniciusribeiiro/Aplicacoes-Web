var inputHTML = document.getElementById("fnum");
var res = document.getElementById("res");

var botão = document.getElementById("btn");
botão.addEventListener("click", CalcularFibonacci);

function Fibonacci(n, cache = {}) { //guarda o valor de um Fibonacci assim que ele é calculado
  if (n in cache) return cache[n];
  if (n == 0) return 0;
  if (n == 1) return 1;
  cache[n] = Fibonacci(n - 1, cache) + Fibonacci(n - 2, cache);
  return cache[n];
}

function CalcularFibonacci() {
  let num = Number(inputHTML.value);
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    alert("Digite um Valor Positivo!");
    return;
  }
  let resultado = Fibonacci(num);
  res.innerHTML = `Fibonacci(${num}) = ${resultado}`;

  inputHTML.value = "";
  inputHTML.focus();
}
