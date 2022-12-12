const btnAdd = document.querySelector("#botaoAdd");
let areaTexto = document.querySelector("#name");
let btnEditar = document.querySelectorAll(".editar");
let btnExcluir = document.querySelectorAll(".excluir");

function adicionaTarefa() {
  console.log(areaTexto.value);
  document.querySelector(".lista-tarefas").innerHTML += `<div class="tarefa">
  ${areaTexto.value}
  <div class="opcoes">
    <button class="editar">editar</button> 
    <button class="excluir">excluir</button>
  </div>
</div>`;
}

function excluirTarefa(e) {
  consoleg.log(e.currentTarget);
}

btnAdd.addEventListener("click", adicionaTarefa);
btnExcluir.addEventListener("click", excluirTarefa);
