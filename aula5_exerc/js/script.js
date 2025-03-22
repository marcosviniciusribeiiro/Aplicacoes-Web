var botao = document.getElementById("btn");
botao.addEventListener("click", verificarCPF); 

//Máscara para o CPF
var cpfInput = document.getElementById("cpf");
var cpfOptions = {
  mask: "000.000.000-00",
};
var marcaraCPF = IMask(cpfInput, cpfOptions);

//Adicionando o evento por meio de EventListener

function verificarCPF() {
  var cpf = cpfInput.value;
  cpf = cpf.replace(/\D/g, "");

  alert("CPF sem máscara: " + cpf);
}
