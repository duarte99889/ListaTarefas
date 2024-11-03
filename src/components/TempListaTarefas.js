import React from 'react';
import Tarefa from './Tarefa';

const ListaTarefas = ({ tarefas, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          tarefa={{ ...tarefa, index }} // Adicionando o índice à tarefa
          remove={() => removerTarefa(index)}
          editar={editarTarefa}
          ativarEdicao={() => ativarEdicao(index)}
          marcarConcluida={() => marcarConcluida(index)}
        />
      ))}
    </ul>
  );
};

export default ListaTarefas;
