function adicionar(tarefa) {
  const li = document.createElement("li");
  li.innerHTML = `${tarefa} <input onclick=remover(this) type="button" value="remover">`;
  document.getElementById("lista").appendChild(li);
  tarefa.value = "";
}
function remover(tarefa) {
  tarefa.parentNode.remove()
}
