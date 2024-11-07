// TempListaTarefas2.js
import React, { useContext } from 'react';
import { TodosContext } from './ContextoTarefa';

function ListaTarefas() {
  const { tarefasFiltradas, marcarConcluida, removerTarefa } = useContext(TodosContext);
  const tarefas = tarefasFiltradas();

  return (
    <ul>
      {tarefas.map((todo) => (
        <li key={todo.id}>
          <span
          >
            {todo.texto}
          </span>
          <button onClick={() => marcarConcluida(todo.id)}>
            {todo.concluida ? 'Desmarcar' : 'Concluir'}
          </button>
          <button onClick={() => removerTarefa(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
