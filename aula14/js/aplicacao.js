//Função para vizualizar as tarefas
function carregarTarefa() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.innerHTML = `
       <label class="list-group-item d-flex gap-3">
      <input
        class="form-check-input flex-shrink-0"
        type="checkbox"
        value=""
        checked
        style="font-size: 1.375em"
      />
      <span class="pt-1 form-checked-content">
        <h5>Tarefa: ${tarefa.nome}</h5>
        <strong>tarefa do(a): ${tarefa.usuario}</strong>
        <small class="d-block text-body-secondary">
          <svg
            class="bi me-1"
            width="1em"
            height="1em"
            role="img"
            aria-label="Schedule"
          >
            <use xlink:href="#calendar-event"></use>
          </svg>
          data: ${tarefa.data} / hora: ${tarefa.hora}
        </small>
      </span>
    </label>`; // Carrega cada Tarefa do localStorage
    lista.appendChild(li);
  });
}

//Função para criar as Tarefas Iniciais
function criarTarefas() {
  let tarefasIniciais = [
    {
      nome: "Estudar JavaScript",
      usuario: "Marcos",
      data: "26-05-2025",
      hora: "15:30",
    },
    {
      nome: "Fazer exercício",
      usuario: "João",
      data: "26-05-2025",
      hora: "17:00",
    },
    {
      nome: "Ler um livro",
      usuario: "Felipe",
      data: "26-05-2025",
      hora: "20:00",
    },
  ];

  localStorage.setItem("tarefas", JSON.stringify(tarefasIniciais)); //Salvar as tarefasIniciais no localStorage
}

//Função para adicionar uma nova tarefa

function adicionar(nome, usuario, data, hora) {
  //parâmetros que referenciam os inputs de tarefa, usuario, data e hora
  if (!nome || !usuario || !data || !hora) {
    alert("Digite todos os campos para adicionar uma tarefa");
    return;
  } // Impede adicionar a tarefa que tiver campos em branco

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  let tarefa = {
    nome: nome,
    usuario: usuario,
    data: data,
    hora: hora,
  };
  tarefas.push(tarefa); // salvando a tarefa no localStorage

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  document.getElementById("tarefa").value = "";
  document.getElementById("usuario").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
}

function irParaVisualizar() {
  location.href = "visualizar.html";
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
