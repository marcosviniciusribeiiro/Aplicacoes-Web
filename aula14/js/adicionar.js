function adicionar(nome, usuario, data, hora) {
  if (!nome || !data || !hora || !usuario) return;
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  let tarefa = {
    nome: nome,
    usuario: usuario,
    data: data,
    hora: hora,
  };
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  document.getElementById("tarefa").value = "";
  document.getElementById("usuario").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
}

function irParaVisualizar() {
  location.href = "visualizar.html";
}
