import React from 'react';
import Tarefa from './Tarefa';

const ListaTarefas = ({ tarefas, removerTarefa }) => {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} tarefa={tarefa} remove={() => removerTarefa(index)} />
      ))}
    </ul>
  );
};

export default ListaTarefas;
