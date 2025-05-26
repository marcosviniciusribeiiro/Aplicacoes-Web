function adicionar(nome, data, hora) {
   if (!texto || !data || !hora) return;

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  let tarefa = {
    nome: nome,
    data: data,
    hora: hora
  };
   tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  document.getElementById("tarefa").value = "";
}

function irParaVisualizar() {
  location.href = "visualizar.html";
}
