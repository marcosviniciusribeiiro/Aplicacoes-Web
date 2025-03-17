alert("Bem Vindo!"); //pop-um da página
function responder() {
  var nome = document.getElementById("txtnome").value; // uma var está buscando o atributo com id txtnome e guardando o seu valor (com o .value)
  var sobrenome = document.getElementById("txtsobre").value; // uma var está buscando o atributo com id txtsobre e guardando o seu valor (com o .value)
  alert(`Olá 😁! Tudo Bem com você ${nome} ${sobrenome}?`); //alert respondendo o nome e sobrenome do usuário
}
