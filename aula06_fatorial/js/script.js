function fatorialFor(num) {
  var fatorial = 1;
  for (let i = 1; i <= num; i++) {
    fatorial = fatorial * i;
  }
}

function inicio(num) {
  alert(`O fatorial de ${num} é igual a ${fatorial(num)}`);
}

function fatorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * fatorial(num - 1); //Função Recursiva
}
