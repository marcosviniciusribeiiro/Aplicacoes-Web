function carregarTarefa() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.textContent = `Tarefa: ${tarefa.nome} / Data: ${tarefa.data} ás ${tarefa.hora} horas`;
    lista.appendChild(li);
  });
}

function criarTarefas() {
  let tarefasIniciais = [
    { nome: "Estudar JavaScript", data: "26-05-2025", hora: "15:30" },
    { nome: "Fazer exercício", data: "26-05-2025", hora: "17:00" },
    { nome: "Ler um livro", data: "26-05-2025", hora: "20:00" },
  ];

  localStorage.setItem("tarefas", JSON.stringify(tarefasIniciais));
}

function novaTarefa() {
  location.href = "adicionar.html";
}

function iniciar() {
  if (!JSON.parse(localStorage.getItem("tarefas"))) {
    criarTarefas();
  }
  carregarTarefa();
}

iniciar();
