const inputArea = document.querySelector("#input");
const btnSubmit = document.querySelector("#botaoAdd");
const listaTarefas = document.querySelector(".lista-tarefas");
const btnLimpar = document.querySelector("#limpar");

btnSubmit.addEventListener("click", () => {
  //cria elementos div e button
  if (inputArea.value.length <= 0) {
    alert("Precisa d");
  } else {
    let elementoTarefa = document.createElement("div");
    let tarefaNome = document.createElement("p");
    tarefaNome.innerText = inputArea.value;
    inputArea.value = "";
    let btnApagar = document.createElement("button");
    btnApagar.innerText = "x";

    //adciona classes aos elementos
    elementoTarefa.classList.add("tarefa");
    btnApagar.classList.add("tarefa-botao");

    //funcao apagar
    btnApagar.addEventListener("click", () => {
      listaTarefas.removeChild(elementoTarefa);
    });

    //adciona os elementos a lista de tarefas
    elementoTarefa.appendChild(tarefaNome);
    elementoTarefa.appendChild(btnApagar);
    listaTarefas.appendChild(elementoTarefa);
  }
});

btnLimpar.addEventListener("click", () => {
  listaTarefas.innerHTML = "";
});
