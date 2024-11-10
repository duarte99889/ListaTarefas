import React from 'react';
import Tarefa from './Tarefa';
import '../App.css'

const ListaTarefas = ({ tarefas, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {
  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            removerTarefa={() => removerTarefa(tarefa.id)}
            editarTarefa={(novoTexto) => editarTarefa(tarefa.id, novoTexto)}
            ativarEdicao={() => ativarEdicao(tarefa.id)}
            marcarConcluida={() => marcarConcluida(tarefa.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;

